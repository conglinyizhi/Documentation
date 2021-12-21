import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_14-1-2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_14-1-2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 14.1.2")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6280\u672F\u66F4\u65B0\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6539\u52A8\u3002 ");
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "fixed" }),
        _hoisted_2
      ])
    ])
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
