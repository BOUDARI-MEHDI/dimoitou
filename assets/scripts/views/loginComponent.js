import m from "mithril";
import { FirebaseServiceInstance } from "../services/firebaseService";
import Cookies from "js-cookie";

let login = "";

const signInSuccess = ({ user }) => {
  if (!user) return;
  user
    .getIdToken()
    .then((idToken) => {
      Object.keys(Cookies.get()).forEach((cookieName) => {
        if (cookieName === "auth_token") {
          Cookies.remove(cookieName, { path: "/", sameSite: true, domain: `.${process.env.DOMAIN_NAME}` })
          Cookies.remove(cookieName, { path: "/", sameSite: true, domain: `${process.env.DOMAIN_NAME}` })
        }
      });
      return idToken;
    })
    .then((idToken) =>
      m.request({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          idToken,
        },
      })
    )
    .then((res) => {
      Cookies.set("auth_token", res.sessionCookie, res.cookieOptions);
      login = res.login;
      res.login === "updated" ? m.route.set("/login") : m.route.set("/");
    });

  return false;
};

const initInterface = () => {
  FirebaseServiceInstance.initUi("#firebase-ui", {
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        signInSuccess(authResult, redirectUrl);
      },
    },
  });
};

const FirstStepAuth = {
  oncreate() {
    initInterface();
  },
  view() {
    return [
      m(
        "p",
        "Votre chatbot utilise que des cookies nécessaires à son fonctionnement ne pouvant être désactivés dans la mesure où ils permettent d’accéder à des fonctions essentielles telles que l’authentification ou pour le suivi global anonyme de ses performances. Pour plus d’informations, veuillez consulter la politique interne de protection des données personnelles."
      ),
      m("#firebase-ui"),
    ];
  },
};

const SecondStepAuth = {
  oncreate() {
    initInterface();
  },
  view() {
    return [
      m(
        "p",
        "Afin de protéger vos données et d'assurer votre anonymat, nous vous demandons de renouveler cette étape de connexion. Cette double authentification ne vous sera demandée qu'une seule fois."
      ),
      m("#firebase-ui"),
    ];
  },
};

const LoginComponent = {
  oninit: function() {
    if (FirebaseServiceInstance.currentUser) {
      return m.route.set("/");
    }
  },

  view: function() {
    return m(".row.login-panel.align-items-center", [
      m(".login-message.col.align-self-center.col-sm-12.col-md-4.offset-md-4", [
        login === "updated" ? m(SecondStepAuth) : m(FirstStepAuth),
      ]),
    ]);
  },
  onremove: () => FirebaseServiceInstance.deleteUi(),
};

export { LoginComponent };
