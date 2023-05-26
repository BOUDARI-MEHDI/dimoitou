import "babel-polyfill";
import "core-js/stable";
import "cross-fetch/polyfill";

import "../styles/mh-covid.scss";

import m from "mithril";
import { FirebaseServiceInstance } from "./services/firebaseService";

import { DialogComponent } from "./views/dialogComponent";
import { LoginComponent } from "./views/loginComponent";
import { HeaderComponent } from "./components/headerComponent";
import { FooterComponent } from "./components/footerComponent";

const State = () => ({ messages: [] });
const state = State();

const Actions = (state) => ({
  addMessage: (message) => state.messages.push(message),
});
const actions = Actions(state);

const root = document.getElementById("root");
FirebaseServiceInstance.initiliazed.then((hasUser) =>
  m.route(root, hasUser ? "/" : "/login", {
    "/login": {
      render: () => [
        m(HeaderComponent, { displayMenu: false, state, actions }),
        m("main#main", { class: "container" }, m(LoginComponent)),
        m(FooterComponent),
      ],
    },
    "/": {
      onmatch: async () => {
        if (!FirebaseServiceInstance.currentUser) throw "User not logged";
      },
      render: () => [
        m(HeaderComponent, { displayMenu: true, state, actions }),
        m("main#main", { class: "container" }, m(DialogComponent, { state, actions })),
        m(FooterComponent),
      ],
    },
  })
);
