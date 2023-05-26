import m from "mithril";

const ExpanderComponent = () => {
  let isActive = false;

  return {
    view(vnode) {
      return m("div.expander", [
        m(
          "div.expander-header",
          m(
            "div.expander-header-intro",
            m("h1.expander-header-intro__title", vnode.attrs.title),
            m("h2.expander-header-intro__subtitle", vnode.attrs.subTitle)
          ),
          m("img.expander-header__arrow", {
            src: "../images/down-arrow.svg",
            onclick: () => {
              vnode.attrs.disableScrollDown();
              const element = vnode.dom.lastChild;
              const arrow = vnode.dom.firstChild.querySelector(
                ".expander-header__arrow"
              );
              if (isActive) {
                element.classList.add("inactive");
                element.classList.remove("active");
                isActive = false;
                arrow.style.transform = "rotate(0deg)";
              } else {
                element.classList.add("active");
                element.classList.remove("inactive");
                isActive = true;
                arrow.style.transform = "rotate(180deg)";
              }
            },
          })
        ),
        m("div.expander-main inactive", m("div", [vnode.attrs.text])),
      ]);
    },
  };
};

export { ExpanderComponent };
