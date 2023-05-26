import m from "mithril";
import { TooltipComponent } from "./tooltipComponent";
import { ModalComponent } from "./modalComponent";

let feedbackMessage = "";
let feedbackType = "Incorrecte";
let actualIndexMessage = null;

const sendFeedback = (feedbackInfos, dialogSession) => {
  return m
    .request({
      url: "/api/feedback",
      method: "POST",
      headers: {
        "x-dialog-session": dialogSession,
      },
      body: feedbackInfos,
    })
    .then(({ publishedMessageId }) => {
      return publishedMessageId;
    });
};

const PositiveThumb = {
  view() {
    return m(
      TooltipComponent,
      {
        value:
          "Merci pour votre retour ! Je suis ravi que ma réponse vous convienne.",
      },
      m(".feedback positive-feedback", m("span.positive-thumb"))
    );
  },
};

const NegativeThumb = {
  view() {
    return m(
      TooltipComponent,
      {
        value: "Merci pour votre retour !",
      },
      m(".feedback negative-feedback", m("span.negative-thumb"))
    );
  },
};

const FeedbackForm = () => {
  return {
    view({ attrs }) {
      return m(
        "form.feedback-form",
        {
          onsubmit: (e) => {
            e.preventDefault();
            document.getElementById("feedbackForm").style.display = "none";
            sendFeedback(
              {
                botAnswer: attrs.botAnswer,
                feedbackSentiment: attrs.feedbackSentiment,
                feedbackType,
                feedbackMessage,
                intent: attrs.intent,
                parameters: attrs.parameters,
                userQuestion: attrs.userQuestion,
              },
              attrs.dialogSession
            )
              .then((publishedMessageId) => {
                document.getElementById(
                  "feedback-return-container"
                ).innerHTML = `<span class="feedback-return__text"> Identifiant de votre retour : ${publishedMessageId} </span>`;
              })
              .then(
                () =>
                  (document.getElementById("feedbackReturn").style.display =
                    "block")
              );

            feedbackType = "Incorrecte";
            feedbackMessage = "";
          },
        },
        m("span.feedback-form__text", "La réponse est:"),
        attrs.items.map((item) => {
          return m(
            "label",
            m(
              `input.feedback-form__input[type=radio][name=feedbackType][value=${item}]`,
              {
                checked: feedbackType === item,
                onchange(event) {
                  feedbackType = event.target.value;
                },
              }
            ),
            m("span.feedback-form__label", item)
          );
        }),
        m("span.feedback-form__text", "Suggestions:"),
        m("textarea.feedback-form__suggestions", {
          value: feedbackMessage,
          placeholder:
            "Indiquez les mots que vous avez saisis et spécifiez le type de réponse que vous attendiez, ce qu'il vous manque.",
          oninput(event) {
            feedbackMessage = event.target.value;
          },
        }),
        m("button.feedback-form__button[type=submit]", "Envoyer ma réponse")
      );
    },
  };
};

const FeedbackComponent = () => {
  return {
    view(vnode) {
      return [
        m(`div.${vnode.attrs.indexOfMessage}`, [
          vnode.attrs.thumbModel[vnode.attrs.indexOfMessage].isMultiple
            ? m(
                ".feedback",
                m("span.thumb-up", {
                  onclick() {
                    vnode.attrs.onChangeThumb(vnode.dom.className, {
                      isMultiple: false,
                      isPositive: true,
                      isNegative: false,
                    });
                    sendFeedback(
                      {
                        botAnswer: vnode.attrs.message,
                        feedbackSentiment: true,
                        feedbackType: "Complet",
                        intent: vnode.attrs.intent,
                        parameters: vnode.attrs.parameters,
                        userQuestion: vnode.attrs.userQuestion,
                      },
                      vnode.attrs.dialogSession
                    );
                  },
                }),
                m("span.thumb-down", {
                  onclick() {
                    actualIndexMessage = vnode.dom.className;
                    vnode.attrs.onChangeThumb(vnode.dom.className, {
                      isMultiple: false,
                      isPositive: false,
                      isNegative: true,
                    });
                    document.getElementById("feedbackForm").style.display =
                      "block";
                  },
                })
              )
            : vnode.attrs.thumbModel[vnode.attrs.indexOfMessage].isPositive
            ? m(PositiveThumb)
            : vnode.attrs.thumbModel[vnode.attrs.indexOfMessage].isNegative
            ? m(NegativeThumb)
            : null,
        ]),
        m(
          "div#feedbackForm",
          m(
            ModalComponent,
            m(
              "div",
              m("img.feedback-modal__cross", {
                src: "../images/close.svg",
                onclick() {
                  vnode.attrs.onChangeThumb(actualIndexMessage, {
                    isMultiple: true,
                    isPositive: false,
                    isNegative: false,
                  });
                  document.getElementById("feedbackForm").style.display =
                    "none";
                  feedbackType = "Incorrecte";
                  feedbackMessage = "";
                },
              }),
              m(
                "h1.feedback-modal__title",
                "Pourquoi n’êtes-vous pas satisfait ?"
              ),
              m(FeedbackForm, {
                items: ["Incorrecte", "Incomplète", "Hors contexte"],
                dialogSession: vnode.attrs.dialogSession,
                botAnswer: vnode.attrs.message,
                userQuestion: vnode.attrs.userQuestion,
                intent: vnode.attrs.intent,
                parameters: vnode.attrs.parameters,
                feedbackSentiment: false,
              })
            )
          )
        ),
        m(
          "div#feedbackReturn",
          m(
            ModalComponent,
            m(
              "div",
              m(
                "h1.feedback-modal__title",
                "Votre retour a été pris en compte"
              ),
              m("div#feedback-return-container"),
              m(
                "button.feedback-form__button",
                {
                  onclick() {
                    document.getElementById("feedbackReturn").style.display =
                      "none";
                  },
                },
                "Retour"
              )
            )
          )
        ),
      ];
    },
  };
};

export { FeedbackComponent };
