import m from "mithril";
import { GTag } from "../vendors/gtag";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from 'uuid';

import { FeedbackComponent } from "../components/feedbackComponent";
import { ExpanderComponent } from "../components/expanderComponent";
import {ImageWrapperComponent} from "../components/imageWrapperComponent";

let thumbModel = [];
let shouldScrollDown = true;
const enlargedImage = { show: false, id : "", src: "", alt: "" };

const closeImageWrapper = () => {
  enlargedImage.show = false;
  m.redraw();
};

const disableScrollDown = () => {
  shouldScrollDown = false;
};

async function getImageDataFromUrl(url) {
  return m.request({
    url: "/api/getImage",
    method: "POST",
    body: {url},
  }).catch(error  => console.log(`Error while getting image from ${url}:  ${error}`));
}

function buildImageElement(match) {
  const idImage = `azure-image-${uuidv4()}`;
  return m("img.message-image", {
    onclick: () => {
      disableScrollDown();
      enlargedImage.show = true;
      enlargedImage.id = idImage;
      enlargedImage.src = match[2];
      enlargedImage.alt = match[1];
    },
    ondragstart: () => {
      return false;
    },
    oncontextmenu: (event) => {
      event.preventDefault()
    },
    id: idImage,
    src: match[2],
    alt: match[1],
  });
}

const parseMessage = function(text) {
  const linkSplitter = /([(][^)]+[)]\[[^\]]+\])/gm;
  const linkExtractor = /[(]([^)]+)[)]\[((http[s]?:\/\/|mailto:|tel:|file:|\/\/|\\\\)[^\]]+)\]/;
  const listSplitter = /([{][^}]+[}])/gm;
  const lineBreakSplitter = /(\\n)/gm;
  return text.split(listSplitter).map((firstSplitString) => {
    if (listSplitter.test(firstSplitString)) {
      const list = firstSplitString
        .replace("{", "")
        .replace("}", "")
        .slice(2)
        .split("**");
      return m(
        "ul.expander-main__list",
        list.map((item) => {
          return m(
            "li",
            item.split(linkSplitter).map((str) => {
              if (linkSplitter.test(str)) {
                const matches = linkExtractor.exec(str);
                if (matches) {
                  // Index 0: Full string
                  // Index 1: Link label
                  // Index 2: Link URL
                  return m(
                    "a[target=_blank]",
                    {
                      href: matches[2],
                      onclick: () =>
                        GTag("event", "outbound link", {
                          event_label: matches[1],
                          event_value: matches[2],
                        }),
                    },
                    matches[1]
                  );
                }
              }
              if (imageSplitter.test(str)) {
                const matches = [...str.matchAll(imageExtractor)];
                for (const match of matches) {
                  return buildImageElement(match);
                }
              }
              return str;
            })
          );
        })
      );
    }
    return firstSplitString.split(linkSplitter).map((secondSplitString) => {
      return secondSplitString
          .split(lineBreakSplitter)
          .map((thirdSplitString) => {
            return thirdSplitString
                .split(imageSplitter)
                .map((fourthSplitString) => {
                  if (linkSplitter.test(secondSplitString)) {
                    const matches = linkExtractor.exec(secondSplitString);
                    if (matches) {
                      return m(
                          "a[target=_blank]",
                          {
                            href: matches[2],
                            onclick: () =>
                                GTag("event", "outbound link", {
                                  event_label: matches[1],
                                  event_value: matches[2],
                                }),
                          },
                          matches[1]
                      );
                    }
                  }
                  if (lineBreakSplitter.test(thirdSplitString)) {
                    thirdSplitString.replace("\n", "");
                    return m("br");
                  }
                  if (imageSplitter.test(fourthSplitString)) {
                    const matches = [...fourthSplitString.matchAll(imageExtractor)];
                    for (const match of matches) {
                      return  buildImageElement(match);
                    }
                  }
                  return fourthSplitString;
                });
          });
    });
  });
};

const preParseMessage = function(text) {
  const accordionSplitter = /(\{{[\s\S]*?\}})/g;
  const titleSplitter = /(\#(.*?)\#)/gm;
  const subTitleSplitter = /(\##(.*?)\##)/gm;
  return text.split(accordionSplitter).map((str) => {
    if (accordionSplitter.test(str)) {
      shouldScrollDown = false;
      const matchTitle = titleSplitter.exec(str);
      const matchSubTitle = subTitleSplitter.exec(str);
      if (matchTitle && matchSubTitle) {
        return m(ExpanderComponent, {
          disableScrollDown,
          title: matchTitle[2],
          subTitle: matchSubTitle[2],
          text: parseMessage(
            str
              .slice(2, -2)
              .replace(subTitleSplitter, "")
              .replace(titleSplitter, "")
          ),
        });
      } else if (matchTitle && !matchSubTitle) {
        return m(ExpanderComponent, {
          disableScrollDown,
          title: matchTitle[2],
          subTitle: "",
          text: parseMessage(
            str
              .slice(2, -2)
              .replace(subTitleSplitter, "")
              .replace(titleSplitter, "")
          ),
        });
      }
    } else {
      return parseMessage(str);
    }
  });
};

const MessageComponent = {
  _content: "",
  oninit: function(vnode) {
    const { text, from } = vnode.attrs.message;

    thumbModel = vnode.attrs.messages;
    thumbModel.map((message) => {
      if (!message.hasOwnProperty("isMultiple")) {
        const newObj = {
          isMultiple: true,
          isPositive: false,
          isNegative: false,
        };

        return Object.assign(message, newObj);
      }
    });
    if (from !== "loader") {
      this._content = preParseMessage(text);
    } else {
      this._content = [m("div"), m("div"), m("div")];
    }
  },
  view: function(vnode) {
    const {
      dialogSession,
      message,
      messages,
      indexOfMessage,
      userQuestion,
      intent,
      parameters,
      onSendSuggestion,
      thumbModel,
    } = vnode.attrs;
    return m("div",[
    m(".message-item", { class: message.from }, [
      m(".inner", [
        this._content,
        m("div"),
        ...(message.suggest || []).map((s) =>
          m(
            "button[type=button].btn-suggest",
            {
              onclick: () => {
                GTag("event", "suggestions", {
                  event_label: s.reply,
                });
                onSendSuggestion(s.reply);
                return true;
              },
            },
            s.reply
          )
        ),
      ]),
      message.from === "server" &&
        m(FeedbackComponent, {
          onChangeThumb: (indexInDom, values) => {
            thumbModel[indexInDom] = {
              ...thumbModel[indexInDom],
              isMultiple: values.isMultiple,
              isPositive: values.isPositive,
              isNegative: values.isNegative,
            };
          },
          dialogSession,
          indexOfMessage,
          message: messages[messages.length - 1].text,
          userQuestion,
          intent,
          parameters,
          thumbModel,
        }),
    ])],
    (message.from === "server" || message.from === "loader") && m("img.head-Dimoitou", { src: "../images/DimoitouSpeaking.png"}),);
  },
};

const imageSplitter = /([!]\[[^\]]+\][(][^)]+[)])/gm;
const imageExtractor = /!\[(.*?)\]\((.*?)\)/g;

const DialogComponent = {
  messages: [],
  newMessage: null,
  _suggestions: [],
  userQuestion: "",
  intent: "",
  parameters: {},
  currentMessage: "",
  oninit: async function({ attrs }) {
    this.messages = attrs.state.messages;
    this.newMessage = attrs.actions.addMessage;
    const { dialogSession, userInfos, cookieOptions } = await m.request({
      url: "/api/init",
      method: "POST",
      body: {
        azureId: jwt_decode(Cookies.get("auth_token")).firebase.identities[
          "microsoft.com"
        ][0],
      },
    });
    Cookies.set("dialogflow", dialogSession, cookieOptions);
    this.dialogSession = dialogSession;
    await localStorage.setItem("userInfos", JSON.stringify(userInfos));
    this._googleAnalyticsInit();
    this._sendMessage("Bonjour", true);
  },
  _googleAnalyticsInit: async function() {
    GTag("js", new Date());
    GTag("config", process.env.ANALYTICS_ID, {
      custom_map: { dimension1: "site", dimension2: "organisation" },
    });
    GTag("event", "site_organisation_dimensions", {
      site: JSON.parse(localStorage.getItem("userInfos"))["site"],
      organisation: JSON.parse(localStorage.getItem("userInfos"))[
        "organisation"
      ],
    });
    const userInfos = Object.keys(sessionStorage).map(( key)  =>{
      return  sessionStorage.getItem(key)
    }, {});

    const {uid, email, createdAt } = JSON.parse(userInfos)

    GTag("event", "login", {
      event_label: `[${uid}]- [${email}]- [${new Date(Number(createdAt)).toLocaleString()}]`,
    });
  },
  _sendMessage: async function(msg, skipDisplay) {
    if (!skipDisplay) {
      this.newMessage({
        from: "user",
        text: msg,
      });
      this.userQuestion = msg;
    }

    this.currentMessage = "";
    document.getElementById("inputMessage").value = "";

    this._suggestions = [];

    const loader = { from: "loader" };
    this.newMessage(loader);

    const {
      simpleResponses,
      intent,
      parameters,
      suggestions,
    } = await m.request({
      url: "/api/dialog",
      method: "POST",
      headers: {
        "x-dialog-session": this.dialogSession,
      },
      body: {
        question: msg,
      },
    });

    const { site, organisation } = JSON.parse(
      localStorage.getItem("userInfos")
    );

    GTag("event", "intentions", {
      event_label: `[${intent}] - [${site}] - [${organisation}]`,
    });

    if (parameters.compagny && parameters.compagny.length !== 0) {
      GTag("event", "requested_company", {
        event_label: `${parameters.compagny} (${intent})`,
      });
    }

    if (parameters.company && parameters.company.length !== 0) {
      GTag("event", "requested_company", {
        event_label: `${parameters.company} (${intent})`,
      });
    }

    let finalResponse;
    if( simpleResponses) {
      finalResponse = await Promise.all(simpleResponses.map(async (response) => {
        response =  response.text;
        if(imageSplitter.test(response)) {
          // simple response contient url d'image

          const  matches = [...response.matchAll(imageExtractor)];
          const  images = matches.map( match => {
            return getImageDataFromUrl(match[2]);
          })
          await Promise.all(images).then( async datas => {
            datas.forEach(function (value, i) {
              response =  response.replaceAll(matches[i][2], value)
            });
          });
        }
        return response;
      }));
      const text = finalResponse.join();
      if(!text){
        text = "Oups, j'ai un petit souci technique. Peux-tu réactualiser la page ? A tout de suite !";
      }
      this.newMessage({from: "server", text, suggest: suggestions});
    }
    this.intent = intent;
    this.parameters = parameters;

    loader.hide = true;
  },
  view: function() {
    return m(".dialog-component", [
      m("#messages-frame.messages-frame.align-items-start", [
        this.messages.map((message, index) =>
          m(
            ".message-row",
            { ...(message.hide === true && { class: "hidden" }) },
            [
              m(MessageComponent, {
                dialogSession: this.dialogSession,
                message,
                messages: this.messages,
                indexOfMessage: index,
                userQuestion: this.userQuestion,
                intent: this.intent,
                parameters: this.parameters,
                thumbModel,
                onSendSuggestion: (t) => this._sendMessage(t),
              }),
            ]
          )
        ),
      ]),
      m(
        ".row.msg-sender",
        m(".col-md-12.offset-md-0.col-sm-12.offset-sm-0", [
          m(
            "form.form-inline.row",
            {
              onsubmit: (e) => {
                e.preventDefault();
                if (!this.currentMessage) return;

                GTag("event", "text_input", {
                  event_label: "message_text",
                });

                this._sendMessage(this.currentMessage);
              },
            },
            [
              m(".form-group.form-inline.form-align-right", [
                m("label[for=inputMessage].sr-only", "Question"),
                m(
                  "input#inputMessage.form-control[type=text][placeholder=Pose ta question ici][required]",
                  {
                    value: this.currentMessage,
                    onchange: (e) => (this.currentMessage = e.target.value),
                  }
                ),
                m("button.btn-send[type=submit]"),
              ]),
            ]
          ),
        ])
      ),
      enlargedImage.show
          ? m(ImageWrapperComponent, {
            disableScrollDown,
            closeImageWrapper,
            id: enlargedImage.id,
            src: enlargedImage.src,
            alt: enlargedImage.alt,
          })
          : null,
    ]);
  },
  onbeforeupdate: function() {
    this.currentMessage = document.getElementById("inputMessage").value;
  },
  onupdate: function() {
    const element = document.getElementById("messages-frame");
    if (!element) return;
    const last_message =  document.querySelectorAll(".message-row:last-child")[0];
    if (!last_message) return;
    const last_message_height =  last_message.clientHeight + 60;

    if(shouldScrollDown) {
      element.scrollTop = element.scrollHeight - last_message_height
    } else {
      shouldScrollDown = true;
    }
  },
};

export { DialogComponent };
