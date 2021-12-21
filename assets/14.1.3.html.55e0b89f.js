import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_14-1-3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_14-1-3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 14.1.3")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u66F4\u65B0\u65F6\u95F4\uFF1A2020 \u5E74 10 \u6708 4 \u65E5 19:15:36", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u672C\u6B21\u66F4\u65B0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u672C\u6B21\u66F4\u65B0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u672C\u6B21\u66F4\u65B0")
], -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u4FEE\u590D\u4E86\u5728\u65B0\u7248\u672C MediaWiki (`1.35.0`) \u4E0A\u7684\u4E00\u4E9B\u95EE\u9898 ");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "new-supported-languages",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#new-supported-languages",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" New supported languages")
], -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Hind\u012B (hi) - ");
const _hoisted_7 = {
  href: "https://github.com/ThisIsACreeper0101",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode("ThisIsACreeper0101");
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  const _component_OutboundLink = resolveComponent("OutboundLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "fixed" }),
        _hoisted_4
      ])
    ]),
    _hoisted_5,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_6,
        createBaseVNode("a", _hoisted_7, [
          _hoisted_8,
          createVNode(_component_OutboundLink)
        ])
      ])
    ])
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
