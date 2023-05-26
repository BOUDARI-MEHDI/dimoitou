import m from "mithril";

const FooterComponent = () => {
  return {
    view() {
      return m("footer.container-fluid", [
        m(
          "a.footer-brand",
          {
            href: "https://www.malakoffhumanis.com/politique-protection-des-donnees/",
            target: "_blank"
          }, "Protection des données"
        ),
        m(
          "a.footer-brand",
           " - "
        ),    
        m(
          "a.footer-brand",
          {href: "javascript:tC.privacyCenter.showPrivacyCenter();"}, "Cookies"
        )        
      ]
      );
    },
  };
};

export { FooterComponent };
