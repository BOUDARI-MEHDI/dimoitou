import m from "mithril";

/**
 * Import firebase modules.
 */
import * as firebase from "firebase/app";
import "firebase/auth";

/**
 * Import firebaseui module.
 */
import * as firebaseui from "firebaseui";

/** QuiPeutMaider Firebase Config */
const firebaseConfig = {
  ...(process.env.FIREBASE_ENVIRONMENT === "dev" && {
    apiKey: "AIzaSyChFpJuzf8aEXF91kUkTxJrSIW2Mk2ld_E",
    authDomain: "qpmretraite-dev.firebaseapp.com",
    databaseURL: "https://qpmretraite-dev-default-rtdb.firebaseio.com",
    projectId: "qpmretraite-dev",
    storageBucket: "qpmretraite-dev.appspot.com",
    messagingSenderId: "603750895330",
    appId: "1:603750895330:web:4ab638d5fed1a6a6b8d8bb"
  }),
  ...(process.env.FIREBASE_ENVIRONMENT === "uat" && {
    apiKey: "AIzaSyDXdHFCbfvICZEJC6RhaOWmnKgFYjKcBEU",
    authDomain: "qpmretraite-uat.firebaseapp.com",
    databaseURL: "https://qpmretraite-uat-default-rtdb.firebaseio.com",
    projectId: "qpmretraite-uat",
    storageBucket: "qpmretraite-uat.appspot.com",
    messagingSenderId: "742520137773",
    appId: "1:742520137773:web:17adbe2e699672d90af0a4"
  }),
  ...(process.env.FIREBASE_ENVIRONMENT === "prod" && {
    apiKey: "AIzaSyDZAH5fok3owkNF74ie9o9KAPNg6H5YIcg",
    authDomain: "qpmretraite-prod.firebaseapp.com",
    databaseURL: "https://qpmretraite-prod-default-rtdb.firebaseio.com",
    projectId: "qpmretraite-prod",
    storageBucket: "qpmretraite-prod.appspot.com",
    messagingSenderId: "1016715814930",
    appId: "1:1016715814930:web:72792e258ab70dc25750cb"
  }),
};

const firebaseUiDefaultConfig = {
  signInOptions: [
    {
      provider: "microsoft.com",
      providerName: " Malakoff Humanis",
      buttonColor: "#f6f6f6",
      loginHintKey: "login_hint",
      scopes: [],
      customParameters: {
        prompt: "consent",
        tenant: process.env.TENANT_ID,
      },
    },
  ],
  signInFlow: "redirect",
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

class FirebaseService {
  constructor() {
    this._showRealInitials = true;
    this._showRealName = true;

    this.currentUser = null;
    this._app = firebase.initializeApp(firebaseConfig);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    this.initiliazed = new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        this.currentUser = user;
        resolve(!!user);
        m.redraw();
      });
    });
  }

  firebaseApp() {
    return this._app;
  }

  initUi(domElement, config) {
    this._ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth(this._app));
    this._ui.start(domElement, {
      ...firebaseUiDefaultConfig,
      ...config,
    });
  }

  deleteUi() {
    this._ui.delete();
  }

  signOut() {
    this._app.auth().signOut();
    m.route.set("/login");
  }
}

const FirebaseServiceInstance = new FirebaseService();

export { FirebaseServiceInstance };
