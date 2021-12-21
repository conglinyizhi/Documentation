import { o as openBlock, a as createElementBlock, f as renderSlot, g as normalizeClass } from "./app.95e2640d.js";
var infobox_vue_vue_type_style_index_0_lang = '.infobox{color:rgba(0,0,0,.7);margin:1.5625em 0;padding:.6rem;overflow:hidden;font-size:1em;page-break-inside:avoid;border-left:.3rem solid #00b8d4;border-radius:.3rem;box-shadow:0 .1rem .4rem rgba(0,0,0,.05),0 0 .05rem rgba(0,0,0,.1);background-color:#fafafa}.dark-theme .infobox{background:#151515;color:#dfdfdf}.infobox .title{position:relative;margin:-.6rem -.6rem .8em!important;padding:.4rem .6rem .4rem 2.5rem;font-weight:700;background-color:rgba(66,185,131,.1)}.infobox .title::before{position:absolute;top:.9rem;left:1rem;width:12px;height:12px;background-color:#42b983;border-radius:50%;content:" "}.infobox.todo>.title,.infobox>.title{background-color:rgba(0,184,212,.1)}.infobox.attention>.title,.infobox.caution>.title,.infobox.warning>.title{background-color:rgba(255,145,0,.1)}.infobox.error>.title,.infobox.fail>.title,.infobox.failure>.title,.infobox.missing>.title{background-color:rgba(255,82,82,.1)}.infobox.info,.infobox.todo{border-color:#00b8d4}.infobox.done,.infobox.success{border-color:#05ad38}.infobox.attention,.infobox.caution,.infobox.warning{border-color:#ff9100}.infobox.error,.infobox.fail,.infobox.failure,.infobox.missing{border-color:#ff5252}.infobox.infobox>.title::before,.infobox.todo>.title::before{background-color:#00b8d4;border-radius:50%}.infobox.done>.title::before,.infobox.success>.title::before{background-color:#05ad38;border-radius:50%}.infobox.attention>.title::before,.infobox.caution>.title::before,.infobox.warning>.title::before{background-color:#ff9100;border-radius:50%}.infobox.error>.title::before,.infobox.fail>.title::before,.infobox.failure>.title::before,.infobox.missing>.title::before{background-color:#ff5252;border-radius:50%}.infobox>:last-child{margin-bottom:0!important}';
const _sfc_main = {
  name: "infobox",
  props: {
    type: {
      type: String,
      default: "info"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["infobox", $props.type])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
