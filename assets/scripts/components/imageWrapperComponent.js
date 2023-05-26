import m from "mithril";

const EXIT_KEYS = [
    "Escape",
    "Esc",
    27
];

const ImageWrapperComponent = () => {
    return {
        view({ attrs }) {
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener('dragstart', function(event) { event.preventDefault(); });
            document.addEventListener("keyup", (event) => {
                if (event.defaultPrevented) {
                    return;
                }
                if (EXIT_KEYS.includes(event.key)) {
                    attrs.closeImageWrapper();
                    attrs.disableScrollDown();
                }
            });
            return m(
                "div.image-wrapper",
                {
                    onclick: () => {
                        attrs.closeImageWrapper();
                        attrs.disableScrollDown();
                    },
                },
                m("img.image-wrapper__image", {
                    id:  attrs.id,
                    src: attrs.src,
                    alt: attrs.alt,
                })
            );
        },
    };
};

export { ImageWrapperComponent };
