import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, c as createStaticVNode, e as createTextVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><p>Installing InPageEdit is very simple, and take a few seconds in most cases.</p><h2 id="via-personal-js" tabindex="-1"><a class="header-anchor" href="#via-personal-js" aria-hidden="true">#</a> Via personal JS</h2><p>Most MediaWiki sites allow user add customized JavaScript and you can install InPageEdit via editing your personal JS page.</p><ol><li>Go to your personal JS page, the page is usually <code>User:&lt;username&gt;/common.js</code></li><li>Click the &quot;Edit&quot; button</li><li>Add the following content in the text field:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Click the &quot;Publish changes...&quot; buttion</li><li>Done, and enjoy~</li></ol><h2 id="via-gadget" tabindex="-1"><a class="header-anchor" href="#via-gadget" aria-hidden="true">#</a> Via Gadget</h2>', 8);
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Some wiki sites (e.g. ");
const _hoisted_10 = {
  href: "https://zh.moegirl.org.cn/Special:%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE#mw-prefsection-gadgets",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Moegirlpedia");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(") have already installed this plugin via Gadget. On these sites, we recommend that enable it in the preferences.");
const _hoisted_13 = /* @__PURE__ */ createStaticVNode('<ol><li>Visit <code>http://&lt;wiki path&gt;/Special:Preferences</code> or via the <code>Preferences</code> link in the pages to go to the &quot;Preferences&quot; page</li><li>Select &quot;Gadgets&quot; in the tabs</li><li>Find &quot;InPageEdit&quot; and enable it</li><li>Go to the bottom of the page and click the &quot;Save&quot; button</li><li>Done, and enjoy~</li></ol><h2 id="via-browser-extensions" tabindex="-1"><a class="header-anchor" href="#via-browser-extensions" aria-hidden="true">#</a> Via browser extensions</h2><p>Some MediaWiki sites disabled personal JS due to security concerns, and don&#39;t have a Gadget to install it either (e.g. Huijiwiki). In these cases, you need a browser entension to install it.</p><p>There&#39;s a ton of userscript extensions around the market and detailed solution is not shown. However, if you are willing to, it is welcomed to click the link below to improve it!</p>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_9,
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_OutboundLink)
      ]),
      _hoisted_12
    ]),
    _hoisted_13
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
