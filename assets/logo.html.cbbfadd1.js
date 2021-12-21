import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
var _imports_0 = "/images/logo/InPageEdit.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "\u5173\u4E8E-logo",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u5173\u4E8E-logo",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u5173\u4E8E Logo")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: ""
  })
], -1);
const _hoisted_3 = {
  href: "https://github.com/dianliang233/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Dianliang233");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u4F7F\u7528 ");
const _hoisted_6 = {
  href: "https://www.sketch.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Sketch");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u5236\u4F5C");
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u8BBE\u8BA1-\u5B57\u4F53",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u8BBE\u8BA1-\u5B57\u4F53",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u8BBE\u8BA1&\u5B57\u4F53")
], -1);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u8272\u5361\uFF1A");
const _hoisted_11 = {
  href: "https://atlassian.design/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Atlassian Design");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("In: Pacific Bridge B400 (");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(")");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Page: Sodium Explosion B300 (");
const _hoisted_16 = /* @__PURE__ */ createTextVNode(")");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Edit: Coogee B200 (");
const _hoisted_18 = /* @__PURE__ */ createTextVNode(")");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Edit \u4E2D\u7684\u5B57\u6BCD i\uFF1A");
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("svg", {
  style: { "width": "1em" },
  class: "MuiSvgIcon-root jss67",
  focusable: "false",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  tabindex: "-1",
  title: "Edit",
  "data-ga-event-category": "material-icons",
  "data-ga-event-action": "click",
  "data-ga-event-label": "Edit"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
], -1);
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" \u6765\u81EA ");
const _hoisted_22 = {
  href: "https://material.io/resources/icons/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Material Design Icon");
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("li", null, '\u5B57\u4F53\uFF1AGoogle "Product" Sans', -1);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_ColorPreview = resolveComponent("ColorPreview");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_8
    ]),
    _hoisted_9,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_10,
        createBaseVNode("a", _hoisted_11, [
          _hoisted_12,
          createVNode(_component_OutboundLink)
        ]),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _hoisted_13,
            createVNode(_component_ColorPreview, { color: "#0052CC" }),
            _hoisted_14
          ]),
          createBaseVNode("li", null, [
            _hoisted_15,
            createVNode(_component_ColorPreview, { color: "#0065FF" }),
            _hoisted_16
          ]),
          createBaseVNode("li", null, [
            _hoisted_17,
            createVNode(_component_ColorPreview, { color: "#2684FF" }),
            _hoisted_18
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _hoisted_19,
        _hoisted_20,
        _hoisted_21,
        createBaseVNode("a", _hoisted_22, [
          _hoisted_23,
          createVNode(_component_OutboundLink)
        ])
      ]),
      _hoisted_24
    ])
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
