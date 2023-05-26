import m from "mithril";
import { BurgerComponent } from "./burgerComponent";

const HeaderComponent = () => {
  return {
    view({ attrs }) {
      const state = attrs.state;
      const actions = attrs.actions;
      return m("header.container-fluid", [
        m(
          "nav.navbar fixed-top navbar-light justify-content-between",
          m(
            "a.navbar-brand",
            { href: "#" },
            m("img.img-fluid", { src: "../images/mh-logo-white.png" })
          ),
            m(
                "a.navbar-brand",
                m("span.bot-text", "DIMOITOU"),
                m("img.img-logo", { src: "../images/logo-dimoitou.png" }),
            ),
          attrs.displayMenu ? m(BurgerComponent, { state, actions }) : null
        ),
      ]);
    },
  };
};

export { HeaderComponent };
