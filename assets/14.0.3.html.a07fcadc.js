import { r as resolveComponent, o as openBlock, a as createElementBlock, b as createBaseVNode, d as createVNode, F as Fragment, e as createTextVNode, c as createStaticVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_14-0-3-shiro",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_14-0-3-shiro",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" 14.0.3 "),
  /* @__PURE__ */ createBaseVNode("code", null, "Shiro")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 9 \u6708 1 \u65E5 15:39:39", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u672C\u6B21\u66F4\u65B0\u65E5\u5FD7\u6DB5\u76D6 _14.0.1_ ~ _14.0.3_ \u7684\u591A\u4E2A\u8865\u4E01 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u4FEE\u590D\u4E86\u65E7\u5165\u53E3\u6587\u4EF6\uFF08script.js\uFF09\u7684~~\u9634\u95F4 BUG~~\uFF0C\u73B0\u5728\u8C03\u7528\u65E7\u5730\u5740\u7684\u7528\u6237\u4E5F\u80FD\u6B63\u5E38\u52A0\u8F7D InPageEdit\uFF0C\u4F46\u63A8\u8350\u5C3D\u5FEB\u4FEE\u6539\u5F15\u7528\u5730\u5740\u4E3A\u65B0\u5730\u5740 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u4FEE\u590D\u4E86\u5927\u91CF\u7531`_msg`\u6A21\u5757\u5BFC\u81F4\u7684~~\u9634\u95F4 BUG~~ - \u4F8B\u5982\uFF1A\u53F0\u6E7E\u6B63\u4F53`zh-tw`\u7684\u4F7F\u7528\u8005\u53EF\u4EE5\u6B63\u5E38\u52A0\u8F7D\u7E41\u4F53\u4E2D\u6587\u8BED\u8A00\u5305\u4E86 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u65B0\u529F\u80FD**\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305** - \u81EA\u5B9A\u4E49\u8BED\u8A00\u5305\u5206\u4E3A**\u5168\u5C40\u8BED\u8A00\u5305**\u548C**\u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305**\uFF0C\u4E24\u79CD\u5305\u53EF\u4EE5\u540C\u65F6\u5B9A\u4E49\uFF0C\u5176\u4E2D\u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305\u7684\u4F18\u5148\u7EA7\u6BD4\u5168\u5C40\u8BED\u8A00\u5305\u66F4\u9AD8 - **\u63D0\u793A**\uFF1A\u8BE5\u529F\u80FD\u4EC5\u4E3A\u81EA\u5B9A\u4E49\u6587\u672C\u663E\u793A\u63D0\u4F9B\u65B9\u4FBF\uFF0C\u8BF7\u4E0D\u8981\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u4FEE\u6B63\u7FFB\u8BD1\u6587\u672C\uFF0C\u6539\u8FDB\u7FFB\u8BD1\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u94FE\u63A5\u524D\u5F80 GitHub - \u793A\u4F8B\uFF1A ");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u8981\u7701\u7565\u8FD9\u4E00\u884C</span>\nwindow<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> window<span class="token punctuation">.</span>InPageEdit <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/** \u5168\u5C40\u8BED\u8A00\u5305 **/</span>\nInPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u270F\uFE0F\u5FEB\u7F16&#39;</span><span class="token punctuation">,</span> <span class="token comment">// =&gt; \u5DE5\u5177\u76D2\u4EE5\u53CA\u6BB5\u843D\u7F16\u8F91\u4E2D\u7684\u5FEB\u901F\u7F16\u8F91\u4F1A\u53D8\u6210\u201C\u270F\uFE0F\u5FEB\u7F16\u201D</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * \u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305\n * \u7ED3\u6784\u4E3A InPageEdit.i18n.&lt;lang&gt;.&lt;msgKey&gt;\n * \u5176\u4E2D\u8BED\u8A00\u4EE3\u7801\u89C4\u8303\u4E0EMediaWiki\u7CFB\u7EDF\u4FDD\u6301\u4E00\u81F4\n */</span>\nInPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>\n  en<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Fast edit&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  ja<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;quick-delete&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u{1F4A3}\u30DA\u30FC\u30B8\u524A\u9664&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/** \u4E24\u79CD\u540C\u65F6\u4F7F\u7528\uFF1F\u6211\u5168\u90FD\u8981\u3002 **/</span>\nInPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// \u5BF9\u7B80\u4F53\u4E2D\u6587\u4F7F\u7528\u8005\u751F\u6548</span>\n  <span class="token string">&#39;zh-hans&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE\u5FEB\u7F16&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5BF9\u65E5\u6587\u4F7F\u7528\u8005\u751F\u6548</span>\n  ja<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE\u30A8\u30C7\u30A3\u30C3\u30C8&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// \u5BF9\u5176\u4ED6\u8BED\u8A00\u7684\u4F7F\u7528\u8005\u751F\u6548</span>\n  <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE Edit&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "info" }),
        _hoisted_3
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "fixed" }),
        _hoisted_4
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "fixed" }),
        _hoisted_5
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_status, { status: "new" }),
        _hoisted_6
      ])
    ]),
    _hoisted_7
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
