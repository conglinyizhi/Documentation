import { o as openBlock, a as createElementBlock, b as createBaseVNode, n as normalizeStyle, e as createTextVNode, t as toDisplayString } from "./app.95e2640d.js";
var ColorPreview_vue_vue_type_style_index_0_lang = ".color-preview{margin:0 2px}.color-preview .color-block{display:inline-block;width:12px;height:12px;box-shadow:0 0 0 1px #aaa;margin-right:4px}";
const _sfc_main = {
  name: "ColorPreview",
  props: {
    color: {
      type: String,
      default: "#000000"
    }
  }
};
const _hoisted_1 = { class: "color-preview" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1, [
    createBaseVNode("span", {
      class: "color-block",
      style: normalizeStyle({ backgroundColor: $props.color })
    }, null, 4),
    createTextVNode(toDisplayString($props.color), 1)
  ]);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
