import { r as resolveComponent, o as openBlock, a as createElementBlock, d as createVNode, w as withCtx, F as Fragment, c as createStaticVNode, e as createTextVNode, b as createBaseVNode } from "./app.95e2640d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a> API \u6587\u6863</h1><div class="custom-container tip"><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u672C\u9875\u9762\u7684\u5185\u5BB9\u6B63\u5728\u65BD\u5DE5\u4E2D\uFF0C\u8BF7\u4EE5\u6700\u7EC8\u7248\u4E3A\u51C6\uFF01</p></div><p>\u8FD9\u91CC\u4ECB\u7ECD\u7684\u662F\u7531 InPageEdit \u63D0\u4F9B\u7684\u51FD\u6570\u6216\u53D8\u91CF\u3002</p><p>\u5F53\u4ECB\u7ECD\u51FD\u6570\u65F6\uFF0C<code>&lt;param&gt;</code>\u4EE3\u8868\u5FC5\u9009\uFF0C<code>[param]</code>\u4EE3\u8868\u53EF\u9009\uFF0C<code>|</code>\u4EE3\u8868\u6216\u8005\u3002</p><h2 id="window-inpageedit" tabindex="-1"><a class="header-anchor" href="#window-inpageedit" aria-hidden="true">#</a> <code>window.InPageEdit</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> InPageEdit<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="inpageedit-about" tabindex="-1"><a class="header-anchor" href="#inpageedit-about" aria-hidden="true">#</a> <code>InPageEdit.about()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-api" tabindex="-1"><a class="header-anchor" href="#inpageedit-api" aria-hidden="true">#</a> <code>InPageEdit.api</code></h2>', 9);
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u9501\u5B9A");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p>\u4FDD\u7559\u4E86\u6709\u5173 InPageEdit \u7684\u4E00\u4E9B\u63A5\u53E3\uFF0C\u4F8B\u5982</p><ul><li>Type: {Object}</li><li>Return: <ul><li><code>aboutUrl</code> \u5173\u4E8E&amp;\u5E2E\u52A9\u7684 URL</li><li><code>analysis</code> \u7EDF\u8BA1\u4FE1\u606F\u7684\u6570\u636E\u4E0A\u62A5\u63A5\u53E3</li><li><code>analysisUrl</code> \u7EDF\u8BA1\u4FE1\u606F\u5C55\u793A\u9875\u9762\u7684 URL</li><li><code>updatelogsUrl</code> \u66F4\u65B0\u65E5\u5FD7\u7684 URL</li></ul></li></ul><h2 id="inpageedit-articlelink-element" tabindex="-1"><a class="header-anchor" href="#inpageedit-articlelink-element" aria-hidden="true">#</a> <code>InPageEdit.articleLink([element])</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-findandreplace-element" tabindex="-1"><a class="header-anchor" href="#inpageedit-findandreplace-element" aria-hidden="true">#</a> <code>InPageEdit.findAndReplace(&lt;element&gt;)</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-preference" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference" aria-hidden="true">#</a> <code>InPageEdit.preference</code></h2><h3 id="inpageedit-preference-default" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-default" aria-hidden="true">#</a> <code>InPageEdit.preference.default</code></h3><p>\u4FDD\u5B58\u9884\u8BBE\u7684\u53C2\u6570\u8BBE\u7F6E</p><ul><li>Type: [Array]</li><li>Return:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;doNotCollectMyInfo&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;doNotShowLocalWarn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;editMinor&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;editSummary&quot;</span><span class="token operator">:</span> <span class="token function">_msg</span><span class="token punctuation">(</span><span class="token string">&quot;preference-summary-default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;lockToolBox&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;redLinkQuickEdit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;outSideClose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">&quot;watchList&quot;</span><span class="token operator">:</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>user<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;watchdefault&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="inpageedit-preference-get-setting" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-get-setting" aria-hidden="true">#</a> <code>InPageEdit.preference.get([setting])</code></h3><p>\u83B7\u53D6\u53C2\u6570\u8BBE\u7F6E\u7684\u503C</p><ul><li><code>setting</code>{String} <ul><li>\u9700\u8981\u83B7\u53D6\u7684\u53C2\u6570\u8BBE\u7F6E\u7684\u952E\uFF0C\u4E0D\u6307\u5B9A\u5219\u4EE5 Object \u8FD4\u56DE\u5168\u90E8\u8BBE\u5B9A</li></ul></li></ul><h3 id="inpageedit-preference-set-settingkey-settingvalue" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-set-settingkey-settingvalue" aria-hidden="true">#</a> <code>InPageEdit.preference.set(&lt;settingKey&gt;[, settingValue])</code></h3>', 15);
const _hoisted_26 = /* @__PURE__ */ createTextVNode("\u4E0D\u63A8\u8350\u4F7F\u7528\u6B64\u51FD\u6570\u4FDD\u5B58\u4E2A\u4EBA\u8BBE\u7F6E");
const _hoisted_27 = /* @__PURE__ */ createStaticVNode('<p>\u4FDD\u5B58\u53C2\u6570\u8BBE\u7F6E\u7684\u503C</p><ul><li><code>settingKey</code> {Object|String} <ul><li>\u8981\u4FDD\u5B58\u7684\u53C2\u6570\u8BBE\u7F6E\u952E\u503C\u5BF9\u6216\u952E</li></ul></li><li><code>settingValue</code> {Any} <ul><li>\u8981\u4FDD\u5B58\u7684\u53C2\u6570\u7684\u503C</li><li>\u5F53<code>settingKey</code>\u4E3A String \u65F6\u5FC5\u586B</li></ul></li></ul><h2 id="inpageedit-progress-text" tabindex="-1"><a class="header-anchor" href="#inpageedit-progress-text" aria-hidden="true">#</a> <code>InPageEdit.progress(&lt;text&gt;)</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickdelete-page" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickdelete-page" aria-hidden="true">#</a> <code>InPageEdit.quickDelete([page])</code></h2><p>\u6253\u5F00\u5FEB\u901F\u5220\u9664\u7684\u5BF9\u8BDD\u6846</p><ul><li><code>page</code> {String} <ul><li>Default: <code>mw.config.get(&#39;wgPageName&#39;)</code></li><li>\u8981\u5220\u9664\u7684\u9875\u9762\u540D</li></ul></li></ul><h2 id="inpageedit-quickdiff-param" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickdiff-param" aria-hidden="true">#</a> <code>InPageEdit.quickDiff(&lt;param&gt;)</code></h2><p>\u901A\u8FC7\u53C2\u6570\u5C55\u793A\u5FEB\u901F\u5DEE\u5F02\u6A21\u6001\u6846</p><ul><li><code>param</code> {Object} <ul><li>MediaWiki diff API \u6807\u51C6\u53C2\u6570</li></ul></li></ul><h2 id="inpageedit-quickedit-options" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickedit-options" aria-hidden="true">#</a> <code>InPageEdit.quickEdit([options])</code></h2><p>\u6309\u7167\u8BBE\u5B9A\u53C2\u6570\u6253\u5F00\u5FEB\u901F\u7F16\u8F91\u7684\u6A21\u6001\u6846</p><ul><li><p><code>options</code> {Object|String}</p><ul><li>\u4E0D\u914D\u7F6E\u6216\u8005\u4F20\u5165\u7A7A\u503C\uFF0C\u4EE5\u5F53\u524D\u6D4F\u89C8\u7684\u9875\u9762\u4E3A\u76EE\u6807\u9875\u9762</li><li>\u4F20\u5165\u5B57\u7B26\u4E32\u65F6\uFF0C\u5C06\u5B57\u7B26\u4E32\u89C6\u4E3A\u76EE\u6807\u9875\u9762\u540D</li><li>\u4F20\u5165 JSON \u5BF9\u8C61\u65F6\uFF0C\u5C06\u4F1A\u5C1D\u8BD5\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u9879\u8FDB\u884C\u5408\u5E76\u540E\u6267\u884C\u540E\u7EED\u64CD\u4F5C</li></ul></li><li><p>\u53EF\u4F9B\u914D\u7F6E\u7684 JSON \u53C2\u6570\uFF1A</p><ul><li><code>options.page</code> {String} \u9875\u9762\u540D\u79F0\uFF0C\u4E0D\u80FD\u4E0E<code>pageId</code>\u540C\u65F6\u4F7F\u7528\uFF08\u9884\u8BBE\u4E3A\u5F53\u524D\u9875\u9762\u540D\uFF09</li><li><code>options.pageId</code> {Number} \u9875\u9762 ID\uFF0C\u4E0D\u80FD\u4E0E<code>page</code>\u540C\u65F6\u4F7F\u7528</li><li><code>options.revision</code> {Number} \u82E5\u914D\u7F6E\uFF0C\u5C06\u4EE5\u63D0\u4F9B\u7684 revision \u7F16\u53F7\u67E5\u627E\u9875\u9762\u4FE1\u606F\uFF0C\u53EF\u80FD\u5FFD\u7565\u9875\u9762\u914D\u7F6E\uFF08\u9884\u8BBE\u4E3A\u5F53\u524D\u9875\u9762\u7684\u7248\u672C ID\uFF09</li><li><code>options.section</code> {Number|&quot;new&quot;} \u82E5\u914D\u7F6E\uFF0C\u7F16\u8F91\u6BB5\u843D\uFF0C\u6BB5\u843D\u4E3A\u5927\u4E8E 0 \u4E14\u5C0F\u4E8E\u9875\u9762\u6BB5\u843D\u6570\u7684\u6570\u5B57\u6216\u8005&quot;new&quot;\uFF08\u9884\u8BBE\u4E3A null\uFF0C\u7F16\u8F91\u5168\u6587\uFF09</li><li><code>options.editMinor</code> {Boolean} \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u5C0F\u7F16\u8F91\u7684\u52FE\u9009\u72B6\u6001</li><li><code>options.editSummary</code> \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u7F16\u8F91\u6458\u8981\u7684\u5185\u5BB9</li><li><code>options.reload</code> {Boolean} \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u4FDD\u5B58\u540E\u5237\u65B0\u9875\u9762\u7684\u52FE\u9009\u72B6\u6001</li><li>\u5176\u4F59\u53C2\u6570\u5747\u4E0D\u5EFA\u8BAE\u4FEE\u6539\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u6545\u969C</li></ul></li></ul><h2 id="inpageedit-quickpreview" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickpreview" aria-hidden="true">#</a> <code>InPageEdit.quickPreview()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickredirect" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickredirect" aria-hidden="true">#</a> <code>InPageEdit.quickRedirect()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickrename" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickrename" aria-hidden="true">#</a> <code>InPageEdit.quickRename()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-specialnotice" tabindex="-1"><a class="header-anchor" href="#inpageedit-specialnotice" aria-hidden="true">#</a> <code>InPageEdit.specialNotice()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-version" tabindex="-1"><a class="header-anchor" href="#inpageedit-version" aria-hidden="true">#</a> <code>InPageEdit.version</code></h2>', 22);
const _hoisted_49 = /* @__PURE__ */ createTextVNode("\u9501\u5B9A");
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, 'Type: "String"'),
  /* @__PURE__ */ createBaseVNode("li", null, "Return: \u5F53\u524D\u4F7F\u7528\u7684 InPageEdit \u7248\u672C\u53F7")
], -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "inpageedit-versioninfo",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#inpageedit-versioninfo",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("code", null, "InPageEdit.versionInfo()")
], -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", null, "\u2026\u2026", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "msg-msgkey-args",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#msg-msgkey-args",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("code", null, "_msg(<msgKey>[, ...args])")
], -1);
const _hoisted_54 = /* @__PURE__ */ createTextVNode("\u5185\u90E8");
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, "\u901A\u8FC7\u952E\u83B7\u53D6 i18n \u5B57\u7B26\u4E32", -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "msgKey"),
    /* @__PURE__ */ createTextVNode(" {String}")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "args"),
    /* @__PURE__ */ createTextVNode(" {String} "),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createTextVNode("\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684\u5360\u4F4D\u7B26\uFF08\u4F8B\u5982"),
        /* @__PURE__ */ createBaseVNode("code", null, "$1"),
        /* @__PURE__ */ createTextVNode("\uFF09")
      ])
    ])
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_status = resolveComponent("status");
  const _component_infobox = resolveComponent("infobox");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createVNode(_component_status, { status: "error" }, {
      default: withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    }),
    _hoisted_11,
    createVNode(_component_infobox, { type: "info" }, {
      default: withCtx(() => [
        _hoisted_26
      ]),
      _: 1
    }),
    _hoisted_27,
    createVNode(_component_status, { status: "error" }, {
      default: withCtx(() => [
        _hoisted_49
      ]),
      _: 1
    }),
    _hoisted_50,
    _hoisted_51,
    _hoisted_52,
    _hoisted_53,
    createVNode(_component_status, { status: "warning" }, {
      default: withCtx(() => [
        _hoisted_54
      ]),
      _: 1
    }),
    _hoisted_55,
    _hoisted_56
  ], 64);
}
_sfc_main.render = _sfc_render;
export { _sfc_main as default };
