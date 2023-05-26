import m from "mithril";

const TooltipComponent = {
  view({ attrs, children }) {
    return m(".tooltip", children, m(".tooltip-item", attrs.value));
  },
};

export { TooltipComponent };
