"use strict";

const { v4: uuid } = require("uuid");
const { struct } = require("pb-util");
const { PubSub } = require("@google-cloud/pubsub");
const axios = require("axios");
const {stringify} = require('flatted');
var concat = require('concat-stream');

const dialogflow = require("dialogflow");
const {
  DIALOGFLOW_ENVIRONNEMENT,
  PROJECT_ID,
  FEEDBACK_TOPIC_NAME,
  BOT_NAME,
  USER_INFO_ENV,
  USER_INFO_URL_DOMAIN,
  USER_INFO_URL_PATH,
  FETCHER_IMAGE_FUNCTION_URL,
} = process.env;

const { cookieOptions } = require("../utils/constants");

const dialogSchema = {
  body: {
    type: "object",
    required: ["question"],
    properties: {
      question: {
        type: "string",
      },
    },
  },
};

const feedbackSchema = {
  body: {
    type: "object",
    required: [
      "intent",
      "feedbackType",
      "feedbackSentiment",
      "userQuestion",
      "botAnswer",
    ],
    optional: ["parameters", "feedbackMessage", "richResponses"],
    properties: {
      intent: { type: "string" },
      feedbackType: { type: "string" },
      feedbackSentiment: { type: "boolean" },
      userQuestion: { type: "string" },
      botAnswer: { type: "string" },
      parameters: { type: "object" },
      feedbackMessage: { type: "string" },
      richResponses: { type: "object" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        publishedMessageId: { type: "number" },
      },
    },
  },
};

const pubSubClient = new PubSub();

async function publishMessage(data) {
  const dataBuffer = Buffer.from(data);

  return pubSubClient.topic(FEEDBACK_TOPIC_NAME).publish(dataBuffer);
}

async function routes(fastify) {
  const firebase = fastify.firebase;
  const auth = fastify.googleAuth.client;

  fastify.post("/api/getImage", async (request, reply) => {
    const authGoogleClient = await auth.getIdTokenClient(FETCHER_IMAGE_FUNCTION_URL)
    const config = {
      method: 'post',
      url: FETCHER_IMAGE_FUNCTION_URL,
      responseType: 'stream',
      data: {"url": JSON.parse(request.body.url)},
    }
    return new Promise(function (resolve, reject) {
      authGoogleClient.request(config).then(
          (response) => {
            console.log(`Processing getting image from url : ${request.body.url}`);
            response.data.pipe(concat({ encoding: 'buffer' }, function (buf) {
              const ext = "png" // assuming you have the file name
              const src = `data:image/${ext};base64,${buf.toString('base64')}`;
              resolve(stringify(src));
            }))
          },
          (error) => {
            console.log(`Error while processing image from ${request.body.url}:  ${error}`);
            reject(error);
          }
      )
    });
  });

  fastify.addHook("onRequest", async (request, reply) => {
    try {
      if (request.headers["x-dialog-session"]) {
        request.dialogSession = request.headers["x-dialog-session"];
      }

      if (!request.cookies) throw "no cookie, no logged in";

      const sessionCookie = request.cookies.auth_token || "";

      request.user = await firebase
        .auth()
        .verifySessionCookie(sessionCookie, true);
      return;
    } catch (e) {
      request.log.error(e);
      reply.status(401).send();
    }
  });

  fastify.get("/logout", async (request, reply) => {
    const decodedClaims = request.user;

    firebase.auth().revokeRefreshTokens(decodedClaims.sub);
    reply.clearCookie("session", { path: "/" });
    reply.redirect("/");
  });

  // Temp init route to set up JWT
  fastify.post("/api/init", async (request, reply) => {
    const diagSession = uuid();
    let userInfos = {};
    try {
      const res = await axios.post(
        `https://${USER_INFO_URL_DOMAIN}/${USER_INFO_URL_PATH}`,
        {
          botName: BOT_NAME,
          environnement: USER_INFO_ENV,
          userAzureId: request.body.azureId,
        }
      );
      userInfos = res.data;
    } catch (err) {
      userInfos = {
        azureId: request.body.azureId,
        isManager: false,
        site: "Aucun",
        organisation: "Aucune",
      };
      console.error(err);
    }
    reply.send({ dialogSession: diagSession, userInfos, cookieOptions });
  });

  fastify.post("/api/dialog", { schema: dialogSchema }, async (request) => {
    const dialogSession = request.dialogSession;

    request.log.info({
      dialogSession,
      DIALOGFLOW_ENVIRONNEMENT,
      PROJECT_ID,
    });

    const sessionClient = new dialogflow.v2beta1.SessionsClient();
    const firebaseProviderId =
      request.user.firebase.identities["microsoft.com"][0];
    const session = sessionClient.environmentSessionPath(
      PROJECT_ID,
      DIALOGFLOW_ENVIRONNEMENT,
      firebaseProviderId,
      dialogSession
    );
    const queryInput = {
      text: {
        text: request.body.question,
        languageCode: "fr",
      },
    };

    const [response] = await sessionClient.detectIntent({
      session,
      queryInput,
      queryParams: {
        payload: {
          fields: {
            source: {
              stringValue: "WEB",
              kind: "stringValue",
            },
          },
        },
      },
    });

    let decodedRichResponses = {};

    // Reponse from webhook or from Dialogflow?
    if (response.queryResult.webhookPayload) {
      const decodedPayload =
        struct.decode(response.queryResult.webhookPayload) || {};
      decodedRichResponses = decodedPayload.google.richResponse.items[0];
    } else {
      decodedRichResponses.simpleResponses = response.queryResult.fulfillmentMessages
        .filter((res) => res.message === "text")
        .reduce((acc, cur) => {
          return acc.concat(cur.text.text);
        }, [])
        .map((text) => {
          return { text };
        });
    }
    decodedRichResponses.intent = response.queryResult.intent.displayName;
    decodedRichResponses.parameters = struct.decode(
      response.queryResult.parameters
    );
    return decodedRichResponses;
  });

  fastify.post(
    "/api/feedback",
    { schema: feedbackSchema },
    async (request, reply) => {
      const message = (({
        intent,
        feedbackType,
        feedbackSentiment,
        userQuestion,
        botAnswer,
        parameters,
        feedbackMessage,
        richResponses,
      }) => ({
        intent,
        feedbackType,
        feedbackSentiment,
        userQuestion,
        botAnswer,
        parameters,
        feedbackMessage,
        richResponses,
      }))(request.body);
      const azureId = request.user.firebase.identities["microsoft.com"][0];
      message.date = new Date();
      message.user = azureId;
      message.botName = BOT_NAME || "QPM";

      const data = JSON.stringify(message);
      try {
        const publishedMessageId = await publishMessage(data);
        return { publishedMessageId };
      } catch (e) {
        request.log.error(e);
        reply.status(500).send();
      }
    }
  );
}

module.exports = routes;
