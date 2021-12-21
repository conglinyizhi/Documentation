import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_14-1-5",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_14-1-5",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 14.1.5")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u66F4\u65B0\u65F6\u95F4\uFF1A2020 \u5E74 10 \u6708 10 \u65E5 15:39:00", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u4FEE\u590D\u4E86\u4E0A\u4E00\u7248\u672C\u4E2D\u6240\u505A\u53D8\u66F4\u5BFC\u81F4\u7684\u4E00\u4E2A\u81F4\u547D\u9519\u8BEF - `$wgArticleaPath`\u8BBE\u5B9A\u4E3A`/$1`\u7684 wiki \u7684\u7F16\u8F91\u94FE\u63A5\u80FD\u591F\u88AB\u6B63\u5E38\u8BC6\u522B\u4E86 ");
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
