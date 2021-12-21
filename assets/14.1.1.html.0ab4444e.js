import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_14-1-1",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_14-1-1",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 14.1.1")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 9 \u6708 17 \u65E5 2:35:00", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6280\u672F\u66F4\u65B0\uFF0C\u4FEE\u590D\u4E86\u4E00\u4E9B\u7F13\u5B58\u5BFC\u81F4\u7684\u95EE\u9898 ");
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "fixed" }),
        _hoisted_3
      ])
    ])
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
