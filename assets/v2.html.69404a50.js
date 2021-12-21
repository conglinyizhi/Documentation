import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode, c as createStaticVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "analysis-v2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#analysis-v2",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Analysis V2")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7B80\u4ECB",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7B80\u4ECB",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7B80\u4ECB")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("API \u63A5\u5165\u70B9\uFF1A");
const _hoisted_4 = {
  href: "https://doc.wjghj.cn/inpageedit-v2/analysis/api/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("https://doc.wjghj.cn/inpageedit-v2/analysis/api/");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>V2 \u662F\u9996\u4E2A\u4F7F\u7528 mongoDB \u6570\u636E\u5E93\u7684\u7248\u672C\uFF0C\u4F46\u662F API \u6CA1\u6709\u592A\u5927\u53D8\u5316\uFF0C\u672C\u6B21\u66F4\u65B0\u7531\u4E8E\u6570\u636E\u7ED3\u6784\u8C03\u6574\u5BFC\u81F4\u4E86 V1 \u7684\u6570\u636E\u65E0\u6CD5\u7EE7\u627F\u3002</p><h2 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=&lt;action&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=&lt;type&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki" aria-hidden="true">#</a> <code>type=wiki</code></h3><p>\u83B7\u53D6 wiki \u7AD9\u70B9\u6570\u636E</p><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=wiki&amp;sitename=[sitename]&amp;url=[url]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Params</strong></p><p>\u6309\u4F18\u5148\u7EA7\u6392\u5E8F</p><ul><li>sitename {String} <ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 sitename \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D\uFF0C\u82E5\u6709\u91CD\u540D wiki \u5C06\u8FD4\u56DE\u591A\u4E2A\u6570\u636E</li></ul></li><li>url {String} <ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 url \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>\n    <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// wikis...</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    errors<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// if error</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// Server informations...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u63D0\u4EA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6570\u636E" aria-hidden="true">#</a> \u63D0\u4EA4\u6570\u636E</h2><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>POST /inpageedit-v2/analysis/api/?action=submit\n\n<span class="token header-name keyword">Content-Type:</span> application/json\n{\n  &quot;url&quot;: &quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;,\n  &quot;sitename&quot;: &quot;&lt;wgSiteName&gt;&quot;,\n  &quot;username&quot;: &quot;&lt;wgUserName&gt;&quot;,\n  &quot;functionID&quot;: &quot;&lt;inpageedit_function_name&gt;&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Response</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>\n  <span class="token string">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// submitted data..</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  errors<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// if error</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Server informations...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>', 22);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      _hoisted_3,
      createBaseVNode("a", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_OutboundLink)
      ])
    ]),
    _hoisted_6
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
