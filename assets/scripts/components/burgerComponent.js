import m from "mithril";

import { TooltipComponent } from "./tooltipComponent";

const BurgerComponent = () => {
  let showMenu = false;

  return {
    view({ attrs }) {
      return m("burgerMenu", [
        m("span.burgerMenu-text", "MENU"),
        m("img.burgerMenu-img", {
          src: "../images/burger-menu.svg",
          onclick() {
            showMenu = true;
          },
        }),
        showMenu
          ? m(
              "div.burgerMenu-container",
              m("img.burgerMenu-container__close", {
                src: "../images/close.svg",
                onclick() {
                  showMenu = false;
                },
              }),
              m(
                "nav.burgerMenu-container-nav",
                m(
                  "ul.burgerMenu-container-nav-list",
                  m(
                    "li.burgerMenu-container-nav-list-item",
                    m(
                      "svg.svg-inline--fa fa-comment-dots fa-w-16",
                      {
                        width: "25",
                        height: "25",
                        viewBox: "0 0 512 512",
                      },
                      m("path", {
                        fill: "#40146F",
                        d:
                          "M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z",
                      })
                    ),
                    m(
                      "a.burgerMenu-container-nav-list-item__link",
                      {
                        onclick() {
                          m.request({
                            url: "/api/dialog",
                            method: "POST",
                            withCredentials: true,
                            headers: {
                              "x-dialog-session": this.dialogSession,
                            },
                            body: {
                              question: "Ton avis",
                            },
                          }).then((message) => {
                            const from = message.simpleResponses[0].from;
                            const text = message.simpleResponses[0].text;

                            attrs.actions.addMessage({
                              from,
                              text,
                              isMultiple: true,
                              isNegative: false,
                              isPositive: false,
                              suggest: message.suggestions,
                            });
                            showMenu = false;
                          });
                        },
                      },
                      "Ton avis !"
                    )
                  ),
                  m(
                    "li.burgerMenu-container-nav-list-item",
                    m(
                      "svg",
                      {
                        width: "25",
                        height: "25",
                        viewBox: "0 0 480 480",
                      },
                      m("path", {
                        fill: "#40146F",
                        d:
                          "M433.231,0H108.308C83.876,0,64,19.876,64,44.308v423.385C64,492.124,83.876,512,108.308,512h324.923c8.157,0,14.769-6.613,14.769-14.769V14.769C448,6.613,441.387,0,433.231,0z M137.846,64h236.308c8.157,0,14.769,6.613,14.769,14.769s-6.613,14.769-14.769,14.769H137.846c-8.157,0-14.769-6.613-14.769-14.769S129.69,64,137.846,64z M137.846,142.769h118.646c8.157,0,14.769,6.613,14.769,14.769s-6.613,14.769-14.769,14.769H137.846c-8.157,0-14.769-6.613-14.769-14.769S129.69,142.769,137.846,142.769z M418.462,482.462H108.308c-8.144,0-14.769-6.625-14.769-14.769V448h324.923V482.462z",
                      })
                    ),
                    m(
                      "span.burgerMenu-container-nav-list-item__link",
                      {
                        onclick() {
                          m.request({
                            url: "/api/dialog",
                            method: "POST",
                            withCredentials: true,
                            headers: {
                              "x-dialog-session": this.dialogSession,
                            },
                            body: {
                              question: "Découvrir Dimoitou",
                            },
                          }).then((message) => {
                            const from = message.simpleResponses[0].from;
                            const text = message.simpleResponses[0].text;

                            attrs.actions.addMessage({
                              from,
                              text,
                              isMultiple: true,
                              isNegative: false,
                              isPositive: false,
                              suggest: message.suggestions,
                            });
                            showMenu = false;
                          });
                        },
                      },
                      "Mode d'emploi"
                    )
                  ),
                  m(
                    TooltipComponent,
                    {
                      value:
                        "Inscris-toi pour participer à un atelier de découverte du Bot",
                      isThumb: false,
                    },
                    m(
                      "li.burgerMenu-container-nav-list-item",
                      m(
                        "svg",
                        {
                          width: "25",
                          height: "25",
                          viewBox: "0 0 373.12 373.12",
                        },
                        m("path", {
                          fill: "#40146F",
                          d:
                            "M266.667,234.667h-16.96l-5.867-5.867c20.907-24.213,33.493-55.68,33.493-90.133C277.333,62.08,215.253,0,138.667,0S0,62.08,0,138.667s62.08,138.667,138.667,138.667c34.453,0,65.92-12.587,90.133-33.387l5.867,5.867v16.853L341.333,373.12l31.787-31.787L266.667,234.667z M138.667,234.667c-53.013,0-96-42.987-96-96c0-53.013,42.987-96,96-96c53.013,0,96,42.987,96,96C234.667,191.68,191.68,234.667,138.667,234.667z",
                        })
                      ),
                      m(
                        "span.burgerMenu-container-nav-list-item__link",
                        {
                          onclick() {
                            m.request({
                              url: "/api/dialog",
                              method: "POST",
                              withCredentials: true,
                              headers: {
                                "x-dialog-session": this.dialogSession,
                              },
                              body: {
                                question: "Atelier Flash",
                              },
                            }).then((message) => {
                              const from = message.simpleResponses[0].from;
                              const text = message.simpleResponses[0].text;

                              attrs.actions.addMessage({
                                from,
                                text,
                                isMultiple: true,
                                isNegative: false,
                                isPositive: false,
                                suggest: message.suggestions,
                              });
                              showMenu = false;
                            });
                          },
                        },
                        "Atelier Flash"
                      )
                    )
                  ),
                  m(
                    "li.burgerMenu-container-nav-list-item",
                    m(
                      "svg",
                      {
                        width: "25",
                        height: "25",
                        viewBox: "0 0 24.303 24.303",
                      },
                      m("path", {
                        fill: "#40146F",
                        d:
                          "M10.269,11.298V1.883C10.269,0.844,11.113,0,12.152,0s1.883,0.844,1.883,1.883v9.415c0,1.039-0.844,1.883-1.883,1.883S10.269,12.337,10.269,11.298z M19.616,2.761c-0.61-0.483-1.5-0.377-1.983,0.234c-0.483,0.612-0.378,1.5,0.234,1.984c2.24,1.767,3.524,4.413,3.524,7.261c0,5.094-4.145,9.239-9.238,9.239c-5.094,0-9.239-4.145-9.239-9.239c0-2.847,1.283-5.492,3.521-7.258c0.612-0.483,0.717-1.371,0.234-1.984c-0.483-0.612-1.37-0.716-1.984-0.234C1.764,5.069,0.089,8.523,0.089,12.24c0,6.652,5.412,12.063,12.063,12.063s12.063-5.412,12.063-12.063C24.215,8.521,22.538,5.067,19.616,2.761z",
                      })
                    ),
                    m(
                      "a.burgerMenu-container-nav-list-item__link",
                      {
                        href: "/logout",
                      },
                      "Se déconnecter"
                    )
                  )
                )
              )
            )
          : null,
      ]);
    },
  };
};

export { BurgerComponent };
