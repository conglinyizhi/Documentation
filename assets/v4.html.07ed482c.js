import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode, c as createStaticVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "analysis-v4",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#analysis-v4",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Analysis V4")
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
  href: "https://analysis.ipe.wjghj.cn/api",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("https://analysis.ipe.wjghj.cn/api");
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p>V4 \u662F\u9996\u4E2A\u4F7F\u7528 serverless \u6280\u672F\u7684\u7248\u672C\uFF0CAPI \u7ED3\u6784\u6709\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u6570\u636E\u7ED3\u6784\u65E0\u53D8\u5316\u3002</p><h2 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api/auery/:type\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki" aria-hidden="true">#</a> <code>type=wiki</code></h3><p>\u83B7\u53D6 wiki \u7AD9\u70B9\u6570\u636E</p><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api/query/wiki?sitename=[sitename]&amp;siteurl=[siteurl]&amp;prop=[prop]&amp;sortby=[sortby]&amp;sortorder=[sortorder]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Params</strong></p><p>\u4EE5\u4E0B\u4E24\u4E2A\u4E3A wiki \u7B5B\u9009\uFF0C\u4EC5\u751F\u6548\u4E00\u6761\uFF0C\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F\u3002\u53EF\u9009\uFF0C\u82E5\u672A\u6307\u5B9A\u5219\u641C\u7D22\u5168\u90E8 wiki\u3002</p><ul><li>siteurl <code>{String&lt;URL&gt;}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 url \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D</li></ul></li><li>sitename <code>{String}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 sitename \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u6A21\u7CCA\u5339\u914D\uFF0C\u63A5\u53D7\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u82E5\u6709\u91CD\u540D wiki \u5C06\u8FD4\u56DE\u591A\u4E2A\u6570\u636E</li></ul></li></ul><p>\u4EE5\u4E0B\u4E3A\u9879\u76EE\u7B5B\u9009\uFF0C\u53EF\u9009\u3002</p><ul><li>prop <code>{String}</code><ul><li>@default <code>&quot;url|sitename|_total&quot;</code></li><li>\u82E5\u6307\u5B9A\uFF0C\u4EC5\u663E\u793A\u6307\u5B9A\u6570\u636E\uFF0C\u591A\u4E2A\u4EE5<code>|</code>\u9694\u5F00</li><li>url, sitename, _total, date, functions, users</li></ul></li><li>sortby <code>{String}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u6309\u952E\u6392\u5E8F wiki array</li></ul></li><li>sortorder <code>{Number}</code><ul><li>\u6392\u5E8F\u89C4\u5219\uFF0C\u9884\u8BBE\u987A\u5E8F</li><li>&gt;= 0 \u987A\u5E8F</li><li>&lt; 0 \u5012\u5E8F</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>\n    <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// wikis...</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    errors<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// if error</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token comment">// Server informations...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="type-date" tabindex="-1"><a class="header-anchor" href="#type-date" aria-hidden="true">#</a> <code>type=date</code></h3><p>\u6682\u672A\u5B9E\u88C5\u3002</p><h2 id="\u63D0\u4EA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6570\u636E" aria-hidden="true">#</a> \u63D0\u4EA4\u6570\u636E</h2><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>POST /api/submit\n\napplication/json\n{\n  &quot;url&quot;: &quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;,\n  &quot;sitename&quot;: &quot;&lt;wgSiteName&gt;&quot;,\n  &quot;username&quot;: &quot;&lt;wgUserName&gt;&quot;,\n  &quot;functionID&quot;: &quot;&lt;inpageedit_function_name&gt;&quot;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6240\u6709\u6570\u636E\u5C06\u4F1A\u88AB\u9A8C\u8BC1\uFF1A</p>', 23);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("li", null, "url \u5FC5\u987B\u4E3A\u5408\u6CD5\u7684 URL", -1);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("sitename, username ");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("\u5C06\u5904\u7406\u6F5C\u5728\u7684 xss \u98CE\u9669\uFF0C"),
  /* @__PURE__ */ createBaseVNode("code", null, "<(.+?)>"),
  /* @__PURE__ */ createTextVNode(" \u2192 "),
  /* @__PURE__ */ createBaseVNode("code", null, "&lt;$1&gt;")
], -1);
const _hoisted_32 = /* @__PURE__ */ createTextVNode(" \u5173\u952E\u8BCD\u5C4F\u853D\uFF0C\u9632\u6B62\u5192\u72AF\u6027\u8BCD\u6C47 ");
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("username \u4E0D\u5141\u8BB8\u4E0D\u5408\u6CD5\u7684\u7528\u6237\u540D\uFF0C\u4E0D\u53EF\u51FA\u73B0\u4EE5\u4E0B\u7B26\u53F7\uFF1A"),
  /* @__PURE__ */ createBaseVNode("code", null, "#&?=[]{}")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("li", null, "functionID \u6709\u767D\u540D\u5355\u673A\u5236", -1);
const _hoisted_35 = /* @__PURE__ */ createStaticVNode('<p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>\n  <span class="token string">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// submitted data..</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  errors<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// if error</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token comment">// Server informations...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p>\u26A0\uFE0F\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C<code>sitename</code>\u4E0E<code>username</code>\u4E2D\u7684\u82F1\u6587\u53E5\u53F7<code>.</code>\u5C06\u88AB\u8F6C\u4E49\u4E3A<code>{dot}</code>\u50A8\u5B58</p><p><code>application/BSON</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n          <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>', 7);
function _sfc_render(_ctx, _cache) {
  const _component_OutboundLink = resolveComponent("OutboundLink");
  const _component_status = resolveComponent("status");
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
    _hoisted_6,
    createBaseVNode("ul", null, [
      _hoisted_29,
      createBaseVNode("li", null, [
        _hoisted_30,
        createBaseVNode("ul", null, [
          _hoisted_31,
          createBaseVNode("li", null, [
            createVNode(_component_status, { status: "dev" }),
            _hoisted_32
          ])
        ])
      ]),
      _hoisted_33,
      _hoisted_34
    ]),
    _hoisted_35
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
