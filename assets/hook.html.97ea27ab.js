import { r as resolveComponent, o as openBlock, a as createElementBlock, d as createVNode, w as withCtx, F as Fragment, b as createBaseVNode, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "hook-\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#hook-\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Hook \u6587\u6863")
], -1);
const _hoisted_2 = /* @__PURE__ */ createTextVNode("in progress");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "\u8FD9\u662F\u672A\u6765\u7248\u672C\u5C06\u5305\u542B\u7684\u7279\u6027\u3002", -1);
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_status, { status: "dev" }, {
      default: withCtx(() => [
        _hoisted_2
      ]),
      _: 1
    }),
    _hoisted_3
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
