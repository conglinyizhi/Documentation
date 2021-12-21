import { o as openBlock, a as createElementBlock, f as renderSlot, e as createTextVNode, t as toDisplayString, g as normalizeClass, n as normalizeStyle } from "./app.95e2640d.js";
var status_vue_vue_type_style_index_0_lang = ".status-tag{padding:2px 6px;margin:auto 2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;text-transform:uppercase;border-radius:2px;background:#888;color:#fff}.status-tag.done,.status-tag.new,.status-tag.ok,.status-tag.stable,.status-tag.success{background:#6cc569}.status-tag.dev,.status-tag.test,.status-tag.updated{background:#6bbfe9}.status-tag.fixed{background:#cc69e0}.status-tag.deleted,.status-tag.error,.status-tag.fail{background:#c22525}.status-tag.progress,.status-tag.warning{background:#ff9100}.status-tag.level-1{background:red}.status-tag.level-2{background:#ff9040}.status-tag.level-3{background:#6eba03}.status-tag.level-4{background:#dff49a;color:#252525}.status-tag.review{background:#d4c5f9;color:#252525}";
const _sfc_main = {
  name: "status-tag",
  props: {
    status: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: null
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["status-tag", $props.status]),
    style: normalizeStyle({ backgroundColor: $props.color })
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(toDisplayString($props.status), 1)
    ])
  ], 6);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
