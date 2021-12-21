import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "about",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#about",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" About")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, 'InPageEdit is a MediaWiki plugin made by \u673A\u667A\u7684\u5C0F\u9C7C\u541B (DragonFish) in JavaScript which has good mobile optimization and useless colorful design. The main purpose is allowing users to use many MediaWiki functions without opening a new tab (including but not only "editing"), which speeds up the wiki maintaining process. The plugin is also modular designed, and providing many SDKs.', -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("How to install \u2192");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/en/guide/install/quick-start.html" }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      })
    ])
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
