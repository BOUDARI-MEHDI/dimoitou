import m from "mithril";

const ModalComponent = {
  view({ children }) {
    return m(".overlay-modal", m(".modal", children));
  },
};

export { ModalComponent };
