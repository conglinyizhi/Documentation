"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var vueRouter = require("vue-router");
var shared = require("@vuepress/shared");
var core = require("@vueuse/core");
var serverRenderer = require("@vue/server-renderer");
const ClientOnly = vue.defineComponent({
  setup(_2, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-74bc627b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$i;
  })),
  "v-74cce7b9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return doYouKnow_html$1;
  })),
  "v-008c1322": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return donate_html$3;
  })),
  "v-3ba185f3": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return logo_html$3;
  })),
  "v-1891b76b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-1277236a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return api_html$1;
  })),
  "v-f69d0aea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return hook_html$3;
  })),
  "v-4bb7f28b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return nouns_html$1;
  })),
  "v-0be73d8a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return plugin_html$1;
  })),
  "v-2d0a870d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$g;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-77a9ffd9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return intro_html$3;
  })),
  "v-14239e2b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _1_x_html$1;
  })),
  "v-52296ff6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_0_0_html$1;
  })),
  "v-47ec5c3c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_0_3_html$1;
  })),
  "v-3ecc74e4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_0_html$1;
  })),
  "v-40814d83": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_1_html$1;
  })),
  "v-42362622": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_2_html$1;
  })),
  "v-43eafec1": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_3_html$1;
  })),
  "v-459fd760": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_4_html$1;
  })),
  "v-4754afff": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_5_html$1;
  })),
  "v-4abe613d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_7_html$1;
  })),
  "v-4c7339dc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_8_html$1;
  })),
  "v-4e28127b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_1_9_html$1;
  })),
  "v-b2a4bc7a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_2_0_html$1;
  })),
  "v-af3b0b3c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_2_1_html$1;
  })),
  "v-a867a8c0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_2_3_html$1;
  })),
  "v-9e2a9506": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_2_6_html$1;
  })),
  "v-9757328a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _14_2_8_html$1;
  })),
  "v-7c04cb0a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2_x_html$1;
  })),
  "v-5c0c536d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$e;
  })),
  "v-eb88660e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return next_html$1;
  })),
  "v-5326f9d8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$d;
  })),
  "v-69cc7e49": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return v2_html$1;
  })),
  "v-6b8156e8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return v3_html$1;
  })),
  "v-6d362f87": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return v4_html$1;
  })),
  "v-6eeb0826": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return v5_html$1;
  })),
  "v-fcccd0e2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$c;
  })),
  "v-d04ae64a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return donate_html$2;
  })),
  "v-bce67142": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return logo_html$2;
  })),
  "v-075401e2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$b;
  })),
  "v-4df3f418": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return hook_html$2;
  })),
  "v-61b22826": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return intro_html$2;
  })),
  "v-2a547e4e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$a;
  })),
  "v-d5db55a6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return gadget_html$3;
  })),
  "v-982af712": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickStart_html$3;
  })),
  "v-2608ff04": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return preference_html$3;
  })),
  "v-7c1102d4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickDelete_html$3;
  })),
  "v-72c2de3a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickDiff_html$3;
  })),
  "v-93901156": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickEdit_html$3;
  })),
  "v-1f379e0b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickPreview_html$1;
  })),
  "v-6675a47a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickRedirect_html$3;
  })),
  "v-916955be": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickRename_html$3;
  })),
  "v-7a1c19c0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return toolbox_html$3;
  })),
  "v-99c880ce": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return gadget_html$2;
  })),
  "v-e50284ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickStart_html$2;
  })),
  "v-313d0320": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return preference_html$2;
  })),
  "v-49475740": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickDelete_html$2;
  })),
  "v-341b5da6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickDiff_html$2;
  })),
  "v-779076c1": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickEdit_html$2;
  })),
  "v-25b8172f": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickRedirect_html$2;
  })),
  "v-f6fcace6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return quickRename_html$2;
  })),
  "v-ebc8e998": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return toolbox_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$1;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$9;
  }).then(({ data: data2 }) => data2),
  "v-74bc627b": () => Promise.resolve().then(function() {
    return index_html$8;
  }).then(({ data: data2 }) => data2),
  "v-74cce7b9": () => Promise.resolve().then(function() {
    return doYouKnow_html;
  }).then(({ data: data2 }) => data2),
  "v-008c1322": () => Promise.resolve().then(function() {
    return donate_html$1;
  }).then(({ data: data2 }) => data2),
  "v-3ba185f3": () => Promise.resolve().then(function() {
    return logo_html$1;
  }).then(({ data: data2 }) => data2),
  "v-1891b76b": () => Promise.resolve().then(function() {
    return index_html$7;
  }).then(({ data: data2 }) => data2),
  "v-1277236a": () => Promise.resolve().then(function() {
    return api_html;
  }).then(({ data: data2 }) => data2),
  "v-f69d0aea": () => Promise.resolve().then(function() {
    return hook_html$1;
  }).then(({ data: data2 }) => data2),
  "v-4bb7f28b": () => Promise.resolve().then(function() {
    return nouns_html;
  }).then(({ data: data2 }) => data2),
  "v-0be73d8a": () => Promise.resolve().then(function() {
    return plugin_html;
  }).then(({ data: data2 }) => data2),
  "v-2d0a870d": () => Promise.resolve().then(function() {
    return index_html$6;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$5;
  }).then(({ data: data2 }) => data2),
  "v-77a9ffd9": () => Promise.resolve().then(function() {
    return intro_html$1;
  }).then(({ data: data2 }) => data2),
  "v-14239e2b": () => Promise.resolve().then(function() {
    return _1_x_html;
  }).then(({ data: data2 }) => data2),
  "v-52296ff6": () => Promise.resolve().then(function() {
    return _14_0_0_html;
  }).then(({ data: data2 }) => data2),
  "v-47ec5c3c": () => Promise.resolve().then(function() {
    return _14_0_3_html;
  }).then(({ data: data2 }) => data2),
  "v-3ecc74e4": () => Promise.resolve().then(function() {
    return _14_1_0_html;
  }).then(({ data: data2 }) => data2),
  "v-40814d83": () => Promise.resolve().then(function() {
    return _14_1_1_html;
  }).then(({ data: data2 }) => data2),
  "v-42362622": () => Promise.resolve().then(function() {
    return _14_1_2_html;
  }).then(({ data: data2 }) => data2),
  "v-43eafec1": () => Promise.resolve().then(function() {
    return _14_1_3_html;
  }).then(({ data: data2 }) => data2),
  "v-459fd760": () => Promise.resolve().then(function() {
    return _14_1_4_html;
  }).then(({ data: data2 }) => data2),
  "v-4754afff": () => Promise.resolve().then(function() {
    return _14_1_5_html;
  }).then(({ data: data2 }) => data2),
  "v-4abe613d": () => Promise.resolve().then(function() {
    return _14_1_7_html;
  }).then(({ data: data2 }) => data2),
  "v-4c7339dc": () => Promise.resolve().then(function() {
    return _14_1_8_html;
  }).then(({ data: data2 }) => data2),
  "v-4e28127b": () => Promise.resolve().then(function() {
    return _14_1_9_html;
  }).then(({ data: data2 }) => data2),
  "v-b2a4bc7a": () => Promise.resolve().then(function() {
    return _14_2_0_html;
  }).then(({ data: data2 }) => data2),
  "v-af3b0b3c": () => Promise.resolve().then(function() {
    return _14_2_1_html;
  }).then(({ data: data2 }) => data2),
  "v-a867a8c0": () => Promise.resolve().then(function() {
    return _14_2_3_html;
  }).then(({ data: data2 }) => data2),
  "v-9e2a9506": () => Promise.resolve().then(function() {
    return _14_2_6_html;
  }).then(({ data: data2 }) => data2),
  "v-9757328a": () => Promise.resolve().then(function() {
    return _14_2_8_html;
  }).then(({ data: data2 }) => data2),
  "v-7c04cb0a": () => Promise.resolve().then(function() {
    return _2_x_html;
  }).then(({ data: data2 }) => data2),
  "v-5c0c536d": () => Promise.resolve().then(function() {
    return index_html$4;
  }).then(({ data: data2 }) => data2),
  "v-eb88660e": () => Promise.resolve().then(function() {
    return next_html;
  }).then(({ data: data2 }) => data2),
  "v-5326f9d8": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-69cc7e49": () => Promise.resolve().then(function() {
    return v2_html;
  }).then(({ data: data2 }) => data2),
  "v-6b8156e8": () => Promise.resolve().then(function() {
    return v3_html;
  }).then(({ data: data2 }) => data2),
  "v-6d362f87": () => Promise.resolve().then(function() {
    return v4_html;
  }).then(({ data: data2 }) => data2),
  "v-6eeb0826": () => Promise.resolve().then(function() {
    return v5_html;
  }).then(({ data: data2 }) => data2),
  "v-fcccd0e2": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-d04ae64a": () => Promise.resolve().then(function() {
    return donate_html;
  }).then(({ data: data2 }) => data2),
  "v-bce67142": () => Promise.resolve().then(function() {
    return logo_html;
  }).then(({ data: data2 }) => data2),
  "v-075401e2": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-4df3f418": () => Promise.resolve().then(function() {
    return hook_html;
  }).then(({ data: data2 }) => data2),
  "v-61b22826": () => Promise.resolve().then(function() {
    return intro_html;
  }).then(({ data: data2 }) => data2),
  "v-2a547e4e": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-d5db55a6": () => Promise.resolve().then(function() {
    return gadget_html$1;
  }).then(({ data: data2 }) => data2),
  "v-982af712": () => Promise.resolve().then(function() {
    return quickStart_html$1;
  }).then(({ data: data2 }) => data2),
  "v-2608ff04": () => Promise.resolve().then(function() {
    return preference_html$1;
  }).then(({ data: data2 }) => data2),
  "v-7c1102d4": () => Promise.resolve().then(function() {
    return quickDelete_html$1;
  }).then(({ data: data2 }) => data2),
  "v-72c2de3a": () => Promise.resolve().then(function() {
    return quickDiff_html$1;
  }).then(({ data: data2 }) => data2),
  "v-93901156": () => Promise.resolve().then(function() {
    return quickEdit_html$1;
  }).then(({ data: data2 }) => data2),
  "v-1f379e0b": () => Promise.resolve().then(function() {
    return quickPreview_html;
  }).then(({ data: data2 }) => data2),
  "v-6675a47a": () => Promise.resolve().then(function() {
    return quickRedirect_html$1;
  }).then(({ data: data2 }) => data2),
  "v-916955be": () => Promise.resolve().then(function() {
    return quickRename_html$1;
  }).then(({ data: data2 }) => data2),
  "v-7a1c19c0": () => Promise.resolve().then(function() {
    return toolbox_html$1;
  }).then(({ data: data2 }) => data2),
  "v-99c880ce": () => Promise.resolve().then(function() {
    return gadget_html;
  }).then(({ data: data2 }) => data2),
  "v-e50284ea": () => Promise.resolve().then(function() {
    return quickStart_html;
  }).then(({ data: data2 }) => data2),
  "v-313d0320": () => Promise.resolve().then(function() {
    return preference_html;
  }).then(({ data: data2 }) => data2),
  "v-49475740": () => Promise.resolve().then(function() {
    return quickDelete_html;
  }).then(({ data: data2 }) => data2),
  "v-341b5da6": () => Promise.resolve().then(function() {
    return quickDiff_html;
  }).then(({ data: data2 }) => data2),
  "v-779076c1": () => Promise.resolve().then(function() {
    return quickEdit_html;
  }).then(({ data: data2 }) => data2),
  "v-25b8172f": () => Promise.resolve().then(function() {
    return quickRedirect_html;
  }).then(({ data: data2 }) => data2),
  "v-f6fcace6": () => Promise.resolve().then(function() {
    return quickRename_html;
  }).then(({ data: data2 }) => data2),
  "v-ebc8e998": () => Promise.resolve().then(function() {
    return toolbox_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => {
  return pageData;
};
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = shared.isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...shared.isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return shared.dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales, routePath) => shared.resolveLocalePath(locales, routePath);
const siteData$1 = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/logo/IPE.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.json"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#2684FF"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/logo/IPE.png"
      }
    ],
    [
      "link",
      {
        "rel": "mask-icon",
        "href": "/images/logo/IPE.png",
        "color": "#2684FF"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileImage",
        "content": "/images/logo/IPE.png"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#000000"
      }
    ],
    [
      "meta",
      {
        "name": "google-site-verification",
        "content": "Q1_PKtYLVLIMle_pJuNSTfXa8qIs0w9b_YTKHEPjCU4"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "\u6587\u6863\u4E2D\u5FC3",
      "description": "InPageEdit \u6587\u6863\u4E2D\u5FC3"
    },
    "/en/": {
      "lang": "en-US",
      "title": "Documentation",
      "description": "InPageEdit Documentation Center"
    }
  }
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const useUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
var OutboundLink$1 = ".icon.outbound {\n  position: relative;\n  display: inline-block;\n  color: #aaa;\n  vertical-align: middle;\n  top: -1px;\n}\n";
const svg = vue.h("svg", {
  class: "icon outbound",
  xmlns: "http://www.w3.org/2000/svg",
  ariaHidden: "true",
  focusable: "false",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  width: "15",
  height: "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const OutboundLink = (_2, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
OutboundLink.displayName = "OutboundLink";
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (shared.isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (shared.isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${shared.removeLeadingSlash(url)}`;
};
var _sfc_main$1l = vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_2, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i2 = activeIndex.value) => {
      if (i2 < tabRefs.value.length - 1) {
        activeIndex.value = i2 + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i2 = activeIndex.value) => {
      if (i2 > 0) {
        activeIndex.value = i2 - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i2) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i2;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i2);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i2);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i2) => {
          vnode.props.active = i2 === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i2) => {
          const isActive = i2 === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i2] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i2,
            onKeydown: (e2) => keyboardHandler(e2, i2)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
var _sfc_main$1k = vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = shared.isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = shared.isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (shared.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (shared.isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (shared.isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = shared.resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const themeData$1 = {
  "logo": "/images/logo/IPE-v2.png",
  "docsRepo": "https://github.com/inpageedit/Documentation",
  "docsBranch": "master",
  "docsDir": "src",
  "editLinks": true,
  "locales": {
    "ariaLabel": "Languages",
    "selectText": "Languages",
    "/": {
      "selectLanguageName": "\u7B80\u4F53\u4E2D\u6587",
      "lastUpdatedText": "\u4E0A\u6B21\u66F4\u65B0",
      "editLinkText": "\u5E2E\u52A9\u6211\u4EEC\u6539\u5584\u6B64\u9875\u9762",
      "contributorsText": "\u7F16\u8F91\u8005",
      "navbar": [
        {
          "text": "\u4E3B\u9875",
          "link": "/"
        },
        {
          "text": "\u6587\u6863",
          "children": [
            {
              "text": "\u7B80\u4ECB",
              "link": "/guide/intro"
            },
            {
              "text": "\u5FEB\u901F\u4E0A\u624B",
              "link": "/guide/install/quick-start"
            },
            {
              "text": "\u529F\u80FD\u8BF4\u660E",
              "link": "/guide/usage/quick-delete"
            }
          ]
        },
        {
          "text": "\u5F00\u53D1",
          "link": "/develop/"
        },
        {
          "text": "\u66F4\u65B0",
          "link": "/update/"
        },
        {
          "text": "\u5173\u4E8E",
          "link": "/about/"
        },
        {
          "text": "GitHub",
          "link": "https://github.com/inpageedit/inpageedit-v2"
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "\u5FEB\u901F\u4E0A\u624B",
            "collapsable": false,
            "children": [
              "/guide/intro",
              "/guide/install/quick-start",
              "/guide/install/gadget"
            ]
          },
          {
            "text": "\u529F\u80FD\u8BF4\u660E",
            "collapsable": false,
            "children": [
              "/guide/usage/quick-delete",
              "/guide/usage/quick-diff",
              "/guide/usage/quick-preview",
              "/guide/usage/quick-edit",
              "/guide/usage/quick-redirect",
              "/guide/usage/quick-rename",
              "/guide/usage/toolbox"
            ]
          }
        ],
        "/develop/": [
          {
            "text": "InPageEdit \u5F00\u53D1\u624B\u518C",
            "collapsable": false,
            "children": [
              "/develop/",
              "/develop/api",
              "/develop/hook",
              "/develop/nouns",
              "/develop/plugin"
            ]
          },
          {
            "text": "Analytics API \u6587\u6863",
            "collapsable": false,
            "children": [
              "/develop/analytics/",
              "/develop/analytics/v5",
              "/develop/analytics/v4",
              "/develop/analytics/v3",
              "/develop/analytics/v2"
            ]
          }
        ],
        "/update/": [
          {
            "text": "\u66F4\u65B0\u65E5\u5FD7",
            "collapsable": false,
            "children": [
              "/update/",
              "/update/next",
              "/update/14.2.8",
              "/update/14.2.6",
              "/update/14.2.3",
              "/update/14.2.1",
              "/update/14.2.0",
              "/update/14.1.9",
              "/update/14.1.8",
              "/update/14.1.7",
              "/update/14.1.5",
              "/update/14.1.4",
              "/update/14.1.3",
              "/update/14.1.2",
              "/update/14.1.1",
              "/update/14.1.0",
              "/update/14.0.3",
              "/update/14.0.0",
              "/update/2.x",
              "/update/1.x"
            ]
          }
        ],
        "/about/": [
          {
            "text": "\u5173\u4E8E\u63D2\u4EF6",
            "collapsable": false,
            "children": [
              "/about/",
              "/about/logo",
              "/about/do-you-know",
              "/about/donate"
            ]
          }
        ]
      },
      "tip": "\u63D0\u793A",
      "warning": "\u6CE8\u610F",
      "danger": "\u8B66\u544A",
      "backToHome": "\u56DE\u5230\u9996\u9875"
    },
    "/en/": {
      "selectLanguageName": "English",
      "lastUpdatedText": "Last Updated",
      "editLinkText": "Help us improve this page",
      "contributorsText": "Contributors",
      "navbar": [
        {
          "text": "Home",
          "link": "/en/"
        },
        {
          "text": "Documents",
          "children": [
            {
              "text": "Intro",
              "link": "/en/guide/intro"
            },
            {
              "text": "Quick Start",
              "link": "/en/guide/install/quick-start"
            },
            {
              "text": "Function Info",
              "link": "/en/guide/usage/quick-delete"
            }
          ]
        },
        {
          "text": "API",
          "link": "/en/api/"
        },
        {
          "text": "Updates",
          "link": "/en/update/"
        },
        {
          "text": "About",
          "link": "/en/about/"
        },
        {
          "text": "GitHub",
          "link": "https://github.com/inpageedit/inpageedit-v2"
        }
      ],
      "sidebar": {
        "/en/guide/": [
          {
            "text": "Get Started",
            "collapsable": false,
            "children": [
              "/en/guide/intro",
              "/en/guide/install/quick-start",
              "/en/guide/install/gadget"
            ]
          },
          {
            "text": "Features",
            "collapsable": false,
            "children": [
              "/en/guide/usage/quick-delete",
              "/en/guide/usage/quick-diff",
              "/en/guide/usage/quick-edit",
              "/en/guide/usage/quick-redirect",
              "/en/guide/usage/quick-rename",
              "/en/guide/usage/toolbox"
            ]
          }
        ],
        "/en/api/": [
          {
            "text": "InPageEdit API",
            "collapsable": false,
            "children": [
              "/en/api/",
              "/en/api/hook"
            ]
          }
        ],
        "/en/about/": [
          {
            "text": "About",
            "collapsable": false,
            "children": [
              "/en/about/",
              "/en/about/logo",
              "/en/about/donate"
            ]
          }
        ]
      }
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var _sfc_main$1j = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(OutboundLink), _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/OutboundLink.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
var index = ':root {\n  --c-brand: #3eaf7c;\n  --c-brand-light: #4abf8a;\n  --c-bg: #ffffff;\n  --c-bg-light: #f3f4f5;\n  --c-bg-lighter: #eeeeee;\n  --c-bg-navbar: var(--c-bg);\n  --c-bg-sidebar: var(--c-bg);\n  --c-bg-arrow: #cccccc;\n  --c-text: #2c3e50;\n  --c-text-accent: var(--c-brand);\n  --c-text-light: #3a5169;\n  --c-text-lighter: #4e6e8e;\n  --c-text-lightest: #6a8bad;\n  --c-text-quote: #999999;\n  --c-border: #eaecef;\n  --c-border-dark: #dfe2e5;\n  --c-tip: #42b983;\n  --c-tip-bg: var(--c-bg-light);\n  --c-tip-title: var(--c-text);\n  --c-tip-text: var(--c-text);\n  --c-tip-text-accent: var(--c-text-accent);\n  --c-warning: #e7c000;\n  --c-warning-bg: #fffae3;\n  --c-warning-title: #ad9000;\n  --c-warning-text: #746000;\n  --c-warning-text-accent: var(--c-text);\n  --c-danger: #cc0000;\n  --c-danger-bg: #ffe0e0;\n  --c-danger-title: #990000;\n  --c-danger-text: #660000;\n  --c-danger-text-accent: var(--c-text);\n  --c-details-bg: #eeeeee;\n  --c-badge-tip: var(--c-tip);\n  --c-badge-warning: var(--c-warning);\n  --c-badge-danger: var(--c-danger);\n  --t-color: 0.3s ease;\n  --t-transform: 0.3s ease;\n  --code-bg-color: #282c34;\n  --code-hl-bg-color: rgba(0, 0, 0, 0.66);\n  --code-ln-color: #9e9e9e;\n  --code-ln-wrapper-width: 3.5rem;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n  --navbar-height: 3.6rem;\n  --navbar-padding-v: 0.7rem;\n  --navbar-padding-h: 1.5rem;\n  --sidebar-width: 20rem;\n  --sidebar-width-mobile: calc(var(--sidebar-width) * 0.82);\n  --content-width: 740px;\n  --homepage-width: 960px;\n}\n\n.back-to-top {\n  --back-to-top-color: var(--c-brand);\n  --back-to-top-color-hover: var(--c-brand-light);\n}\n\n.DocSearch {\n  --docsearch-primary-color: var(--c-brand);\n  --docsearch-text-color: var(--c-text);\n  --docsearch-highlight-color: var(--c-brand);\n  --docsearch-muted-color: var(--c-text-quote);\n  --docsearch-container-background: rgba(9, 10, 17, 0.8);\n  --docsearch-modal-background: var(--c-bg-light);\n  --docsearch-searchbox-background: var(--c-bg-lighter);\n  --docsearch-searchbox-focus-background: var(--c-bg);\n  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);\n  --docsearch-hit-color: var(--c-text-light);\n  --docsearch-hit-active-color: var(--c-bg);\n  --docsearch-hit-background: var(--c-bg);\n  --docsearch-hit-shadow: 0 1px 3px 0 var(--c-border-dark);\n  --docsearch-footer-background: var(--c-bg);\n}\n\n.medium-zoom-overlay {\n  --medium-zoom-bg-color: var(--c-bg);\n}\n\n#nprogress {\n  --nprogress-color: var(--c-brand);\n}\n\n.pwa-popup {\n  --pwa-popup-text-color: var(--c-text);\n  --pwa-popup-bg-color: var(--c-bg);\n  --pwa-popup-border-color: var(--c-brand);\n  --pwa-popup-shadow: 0 4px 16px var(--c-brand);\n  --pwa-popup-btn-text-color: var(--c-bg);\n  --pwa-popup-btn-bg-color: var(--c-brand);\n  --pwa-popup-btn-hover-bg-color: var(--c-brand-light);\n}\n\n.search-box {\n  --search-bg-color: var(--c-bg);\n  --search-accent-color: var(--c-brand);\n  --search-text-color: var(--c-text);\n  --search-border-color: var(--c-border);\n  --search-item-text-color: var(--c-text-lighter);\n  --search-item-focus-bg-color: var(--c-bg-light);\n}\n\nhtml.dark {\n  --c-brand: #3aa675;\n  --c-brand-light: #349469;\n  --c-bg: #22272e;\n  --c-bg-light: #2b313a;\n  --c-bg-lighter: #262c34;\n  --c-text: #adbac7;\n  --c-text-light: #96a7b7;\n  --c-text-lighter: #8b9eb0;\n  --c-text-lightest: #8094a8;\n  --c-border: #3e4c5a;\n  --c-border-dark: #34404c;\n  --c-tip: #318a62;\n  --c-warning: #ceab00;\n  --c-warning-bg: #7e755b;\n  --c-warning-title: #ceac03;\n  --c-warning-text: #362e00;\n  --c-danger: #940000;\n  --c-danger-bg: #806161;\n  --c-danger-title: #610000;\n  --c-danger-text: #3a0000;\n  --c-details-bg: #323843;\n  --code-hl-bg-color: #363b46;\n}\n\nhtml.dark .DocSearch {\n  --docsearch-logo-color: var(--c-text);\n  --docsearch-modal-shadow: inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309;\n  --docsearch-key-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d,\n    0 2px 2px 0 rgba(3, 4, 9, 0.3);\n  --docsearch-key-gradient: linear-gradient(-225deg, #444950, #1c1e21);\n  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),\n    0 -4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  background-color: var(--c-bg);\n  transition: background-color var(--t-color);\n}\n\nhtml.dark {\n  color-scheme: dark;\n}\n\nbody {\n  font-family: var(--font-family);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 16px;\n  color: var(--c-text);\n}\n\na {\n  font-weight: 500;\n  color: var(--c-text-accent);\n  text-decoration: none;\n  overflow-wrap: break-word;\n}\n\np a code {\n  font-weight: 400;\n  color: var(--c-text-accent);\n}\n\nkbd {\n  font-family: var(--font-family-code);\n  background: var(--c-bg-lighter);\n  border: solid 0.15rem var(--c-border-dark);\n  border-bottom: solid 0.25rem var(--c-border-dark);\n  border-radius: 0.15rem;\n  padding: 0 0.15em;\n}\n\ncode {\n  font-family: var(--font-family-code);\n  color: var(--c-text-lighter);\n  padding: 0.25rem 0.5rem;\n  margin: 0;\n  font-size: 0.85em;\n  background-color: var(--c-bg-light);\n  border-radius: 3px;\n  overflow-wrap: break-word;\n  transition: background-color var(--t-color), color var(--t-color);\n}\n\nblockquote {\n  font-size: 1rem;\n  color: var(--c-text-quote);\n  border-left: 0.2rem solid var(--c-border-dark);\n  margin: 1rem 0;\n  padding: 0.25rem 0 0.25rem 1rem;\n}\nblockquote > p {\n  margin: 0;\n}\n\nul,\nol {\n  padding-left: 1.2em;\n}\n\nstrong {\n  font-weight: 600;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  line-height: 1.25;\n}\nh1:hover .header-anchor,\nh2:hover .header-anchor,\nh3:hover .header-anchor,\nh4:hover .header-anchor,\nh5:hover .header-anchor,\nh6:hover .header-anchor {\n  opacity: 1;\n}\n\nh1 {\n  font-size: 2.2rem;\n}\n\nh2 {\n  font-size: 1.65rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n}\n\nh3 {\n  font-size: 1.35rem;\n}\n\nh4 {\n  font-size: 1.15rem;\n}\n\nh5 {\n  font-size: 1.05rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\na.header-anchor {\n  font-size: 0.85em;\n  float: left;\n  margin-left: -0.87em;\n  padding-right: 0.23em;\n  margin-top: 0.125em;\n  opacity: 0;\n}\na.header-anchor:hover {\n  text-decoration: none;\n}\na.header-anchor:focus-visible {\n  opacity: 1;\n}\n\np,\nul,\nol {\n  line-height: 1.7;\n}\n\nhr {\n  border: 0;\n  border-top: 1px solid var(--c-border);\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 1rem 0;\n  display: block;\n  overflow-x: auto;\n}\n\ntr {\n  border-top: 1px solid var(--c-border-dark);\n}\ntr:nth-child(2n) {\n  background-color: var(--c-bg-light);\n}\n\nth,\ntd {\n  border: 1px solid var(--c-border-dark);\n  padding: 0.6em 1em;\n}\n\n.arrow {\n  display: inline-block;\n  width: 0;\n  height: 0;\n}\n.arrow.up {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 6px solid var(--c-bg-arrow);\n}\n.arrow.down {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 6px solid var(--c-bg-arrow);\n}\n.arrow.right {\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-left: 6px solid var(--c-bg-arrow);\n}\n.arrow.left {\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-right: 6px solid var(--c-bg-arrow);\n}\n\n.badge {\n  display: inline-block;\n  font-size: 14px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 3px;\n  padding: 0 6px;\n  color: var(--c-bg);\n  vertical-align: top;\n  transition: color var(--t-color), background-color var(--t-color);\n}\n.badge.tip {\n  background-color: var(--c-badge-tip);\n}\n.badge.warning {\n  background-color: var(--c-badge-warning);\n}\n.badge.danger {\n  background-color: var(--c-badge-danger);\n}\n.table-of-contents .badge {\n  vertical-align: middle;\n}\n.badge + .badge {\n  margin-left: 5px;\n}\n\ncode[class*=language-],\npre[class*=language-] {\n  color: #ccc;\n  background: none;\n  font-family: var(--font-family-code);\n  font-size: 1em;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n\n/* Code blocks */\npre[class*=language-] {\n  padding: 1em;\n  margin: 0.5em 0;\n  overflow: auto;\n}\n\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #2d2d2d;\n}\n\n/* Inline code */\n:not(pre) > code[class*=language-] {\n  padding: 0.1em;\n  border-radius: 0.3em;\n  white-space: normal;\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999;\n}\n\n.token.punctuation {\n  color: #ccc;\n}\n\n.token.tag,\n.token.attr-name,\n.token.namespace,\n.token.deleted {\n  color: #ec5975;\n}\n\n.token.function-name {\n  color: #6196cc;\n}\n\n.token.boolean,\n.token.number,\n.token.function {\n  color: #f08d49;\n}\n\n.token.property,\n.token.class-name,\n.token.constant,\n.token.symbol {\n  color: #f8c555;\n}\n\n.token.selector,\n.token.important,\n.token.atrule,\n.token.keyword,\n.token.builtin {\n  color: #cc99cd;\n}\n\n.token.string,\n.token.char,\n.token.attr-value,\n.token.regex,\n.token.variable {\n  color: #7ec699;\n}\n\n.token.operator,\n.token.entity,\n.token.url {\n  color: #67cdcc;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.inserted {\n  color: #3eaf7c;\n}\n\n.theme-default-content pre,\n.theme-default-content pre[class*=language-] {\n  line-height: 1.4;\n  padding: 1.25rem 1.5rem;\n  margin: 0.85rem 0;\n  border-radius: 6px;\n  overflow: auto;\n}\n.theme-default-content pre code,\n.theme-default-content pre[class*=language-] code {\n  color: #fff;\n  padding: 0;\n  background-color: transparent;\n  border-radius: 0;\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n.theme-default-content .line-number {\n  font-family: var(--font-family-code);\n}\n\ndiv[class*=language-] {\n  position: relative;\n  background-color: var(--code-bg-color);\n  border-radius: 6px;\n}\ndiv[class*=language-]::before {\n  position: absolute;\n  z-index: 3;\n  top: 0.8em;\n  right: 1em;\n  font-size: 0.75rem;\n  color: var(--code-ln-color);\n}\ndiv[class*=language-] pre,\ndiv[class*=language-] pre[class*=language-] {\n  background: transparent !important;\n  position: relative;\n  z-index: 1;\n}\ndiv[class*=language-] .highlight-lines {\n  user-select: none;\n  padding-top: 1.3rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  line-height: 1.4;\n}\ndiv[class*=language-] .highlight-lines .highlight-line {\n  background-color: var(--code-hl-bg-color);\n}\ndiv[class*=language-]:not(.line-numbers-mode) .line-numbers {\n  display: none;\n}\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlight-line {\n  position: relative;\n}\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlight-line::before {\n  content: " ";\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  display: block;\n  width: var(--code-ln-wrapper-width);\n  height: 100%;\n}\ndiv[class*=language-].line-numbers-mode pre {\n  margin-left: var(--code-ln-wrapper-width);\n  padding-left: 1rem;\n  vertical-align: middle;\n}\ndiv[class*=language-].line-numbers-mode .line-numbers {\n  position: absolute;\n  top: 0;\n  width: var(--code-ln-wrapper-width);\n  text-align: center;\n  color: var(--code-ln-color);\n  padding-top: 1.25rem;\n  line-height: 1.4;\n}\ndiv[class*=language-].line-numbers-mode .line-numbers br {\n  user-select: none;\n}\ndiv[class*=language-].line-numbers-mode .line-numbers .line-number {\n  position: relative;\n  z-index: 3;\n  user-select: none;\n  font-size: 0.85em;\n}\ndiv[class*=language-].line-numbers-mode::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: var(--code-ln-wrapper-width);\n  height: 100%;\n  border-radius: 6px 0 0 6px;\n  border-right: 1px solid var(--code-hl-bg-color);\n}\n\ndiv[class*=language-].ext-c:before {\n  content: "c";\n}\n\ndiv[class*=language-].ext-cpp:before {\n  content: "cpp";\n}\n\ndiv[class*=language-].ext-cs:before {\n  content: "cs";\n}\n\ndiv[class*=language-].ext-css:before {\n  content: "css";\n}\n\ndiv[class*=language-].ext-dart:before {\n  content: "dart";\n}\n\ndiv[class*=language-].ext-docker:before {\n  content: "docker";\n}\n\ndiv[class*=language-].ext-fs:before {\n  content: "fs";\n}\n\ndiv[class*=language-].ext-go:before {\n  content: "go";\n}\n\ndiv[class*=language-].ext-html:before {\n  content: "html";\n}\n\ndiv[class*=language-].ext-java:before {\n  content: "java";\n}\n\ndiv[class*=language-].ext-js:before {\n  content: "js";\n}\n\ndiv[class*=language-].ext-json:before {\n  content: "json";\n}\n\ndiv[class*=language-].ext-kt:before {\n  content: "kt";\n}\n\ndiv[class*=language-].ext-less:before {\n  content: "less";\n}\n\ndiv[class*=language-].ext-makefile:before {\n  content: "makefile";\n}\n\ndiv[class*=language-].ext-md:before {\n  content: "md";\n}\n\ndiv[class*=language-].ext-php:before {\n  content: "php";\n}\n\ndiv[class*=language-].ext-py:before {\n  content: "py";\n}\n\ndiv[class*=language-].ext-rb:before {\n  content: "rb";\n}\n\ndiv[class*=language-].ext-rs:before {\n  content: "rs";\n}\n\ndiv[class*=language-].ext-sass:before {\n  content: "sass";\n}\n\ndiv[class*=language-].ext-scss:before {\n  content: "scss";\n}\n\ndiv[class*=language-].ext-sh:before {\n  content: "sh";\n}\n\ndiv[class*=language-].ext-styl:before {\n  content: "styl";\n}\n\ndiv[class*=language-].ext-ts:before {\n  content: "ts";\n}\n\ndiv[class*=language-].ext-toml:before {\n  content: "toml";\n}\n\ndiv[class*=language-].ext-vue:before {\n  content: "vue";\n}\n\ndiv[class*=language-].ext-yml:before {\n  content: "yml";\n}\n\n@media (max-width: 419px) {\n  .theme-default-content div[class*=language-] {\n    margin: 0.85rem -1.5rem;\n    border-radius: 0;\n  }\n}\n/**\n * code-group\n */\n.code-group__nav {\n  margin-top: 0.85rem;\n  margin-bottom: calc(-1.7rem - 6px);\n  padding-bottom: calc(1.7rem - 6px);\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  background-color: var(--code-bg-color);\n}\n\n.code-group__ul {\n  margin: auto 0;\n  padding-left: 0;\n  display: inline-flex;\n  list-style: none;\n}\n\n.code-group__nav-tab {\n  border: 0;\n  padding: 5px;\n  cursor: pointer;\n  background-color: transparent;\n  font-size: 0.85em;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n}\n\n.code-group__nav-tab:focus {\n  outline: none;\n}\n\n.code-group__nav-tab:focus-visible {\n  outline: 1px solid rgba(255, 255, 255, 0.9);\n}\n\n.code-group__nav-tab-active {\n  border-bottom: var(--c-brand) 1px solid;\n}\n\n@media (max-width: 419px) {\n  .code-group__nav {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    border-radius: 0;\n  }\n}\n/**\n * code-group-item\n */\n.code-group-item {\n  display: none;\n}\n\n.code-group-item__active {\n  display: block;\n}\n\n.code-group-item > pre {\n  background-color: orange;\n}\n\n.custom-container {\n  transition: color var(--t-color), border-color var(--t-color), background-color var(--t-color);\n}\n.custom-container .custom-container-title {\n  font-weight: 600;\n  margin-bottom: -0.4rem;\n}\n.custom-container.tip, .custom-container.warning, .custom-container.danger {\n  padding: 0.1rem 1.5rem;\n  border-left-width: 0.5rem;\n  border-left-style: solid;\n  margin: 1rem 0;\n}\n.custom-container.tip {\n  border-color: var(--c-tip);\n  background-color: var(--c-tip-bg);\n  color: var(--c-tip-text);\n}\n.custom-container.tip .custom-container-title {\n  color: var(--c-tip-title);\n}\n.custom-container.tip a {\n  color: var(--c-tip-text-accent);\n}\n.custom-container.warning {\n  border-color: var(--c-warning);\n  background-color: var(--c-warning-bg);\n  color: var(--c-warning-text);\n}\n.custom-container.warning .custom-container-title {\n  color: var(--c-warning-title);\n}\n.custom-container.warning a {\n  color: var(--c-warning-text-accent);\n}\n.custom-container.danger {\n  border-color: var(--c-danger);\n  background-color: var(--c-danger-bg);\n  color: var(--c-danger-text);\n}\n.custom-container.danger .custom-container-title {\n  color: var(--c-danger-title);\n}\n.custom-container.danger a {\n  color: var(--c-danger-text-accent);\n}\n.custom-container.details {\n  display: block;\n  position: relative;\n  border-radius: 2px;\n  margin: 1.6em 0;\n  padding: 1.6em;\n  background-color: var(--c-details-bg);\n}\n.custom-container.details h4 {\n  margin-top: 0;\n}\n.custom-container.details figure:last-child,\n.custom-container.details p:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.custom-container.details summary {\n  outline: none;\n  cursor: pointer;\n}\n\n.dropdown-wrapper {\n  cursor: pointer;\n}\n.dropdown-wrapper .dropdown-title, .dropdown-wrapper .mobile-dropdown-title {\n  display: block;\n  font-size: 0.9rem;\n  font-family: inherit;\n  cursor: inherit;\n  padding: inherit;\n  line-height: 1.4rem;\n  background: transparent;\n  border: none;\n  font-weight: 500;\n  color: var(--c-text);\n}\n.dropdown-wrapper .dropdown-title:hover, .dropdown-wrapper .mobile-dropdown-title:hover {\n  border-color: transparent;\n}\n.dropdown-wrapper .dropdown-title .arrow, .dropdown-wrapper .mobile-dropdown-title .arrow {\n  vertical-align: middle;\n  margin-top: -1px;\n  margin-left: 0.4rem;\n}\n.dropdown-wrapper .mobile-dropdown-title {\n  display: none;\n  font-weight: 600;\n  font-size: inherit;\n}\n.dropdown-wrapper .mobile-dropdown-title:hover {\n  color: var(--c-text-accent);\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item {\n  color: inherit;\n  line-height: 1.7rem;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle {\n  margin: 0.45rem 0 0;\n  border-top: 1px solid var(--c-border);\n  padding: 1rem 0 0.45rem 0;\n  font-size: 0.9rem;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle > span {\n  padding: 0 1.5rem 0 1.25rem;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle > a {\n  font-weight: inherit;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle > a.router-link-active::after {\n  display: none;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper {\n  padding: 0;\n  list-style: none;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper .dropdown-subitem {\n  font-size: 0.9em;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a {\n  display: block;\n  line-height: 1.7rem;\n  position: relative;\n  border-bottom: none;\n  font-weight: 400;\n  margin-bottom: 0;\n  padding: 0 1.5rem 0 1.25rem;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a:hover {\n  color: var(--c-text-accent);\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active {\n  color: var(--c-text-accent);\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-left: 5px solid var(--c-text-accent);\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  position: absolute;\n  top: calc(50% - 2px);\n  left: 9px;\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item:first-child .dropdown-subtitle {\n  margin-top: 0;\n  padding-top: 0;\n  border-top: 0;\n}\n\n@media (max-width: 719px) {\n  .dropdown-wrapper.open .dropdown-title, .dropdown-wrapper.open .mobile-dropdown-title {\n    margin-bottom: 0.5rem;\n  }\n  .dropdown-wrapper .dropdown-title, .dropdown-wrapper .mobile-dropdown-title {\n    display: none;\n  }\n  .dropdown-wrapper .mobile-dropdown-title {\n    display: block;\n  }\n  .dropdown-wrapper .nav-dropdown {\n    transition: height 0.1s ease-out;\n    overflow: hidden;\n  }\n  .dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle {\n    border-top: 0;\n    margin-top: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subtitle, .dropdown-wrapper .nav-dropdown .dropdown-item > a {\n    font-size: 15px;\n    line-height: 2rem;\n  }\n  .dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem {\n    font-size: 14px;\n    padding-left: 1rem;\n  }\n}\n@media (min-width: 720px) {\n  .dropdown-wrapper {\n    height: 1.8rem;\n  }\n  .dropdown-wrapper:hover .nav-dropdown, .dropdown-wrapper.open .nav-dropdown {\n    display: block !important;\n  }\n  .dropdown-wrapper.open:blur {\n    display: none;\n  }\n  .dropdown-wrapper .nav-dropdown {\n    display: none;\n    height: auto !important;\n    box-sizing: border-box;\n    max-height: calc(100vh - 2.7rem);\n    overflow-y: auto;\n    position: absolute;\n    top: 100%;\n    right: 0;\n    background-color: var(--c-bg-navbar);\n    padding: 0.6rem 0;\n    border: 1px solid var(--c-border);\n    border-bottom-color: var(--c-border-dark);\n    text-align: left;\n    border-radius: 0.25rem;\n    white-space: nowrap;\n    margin: 0;\n  }\n}\n/**\n * transition\n */\n.dropdown-enter-from,\n.dropdown-leave-to {\n  height: 0 !important;\n}\n\n.home {\n  padding: var(--navbar-height) 2rem 0;\n  max-width: var(--homepage-width);\n  margin: 0px auto;\n  display: block;\n}\n.home .hero {\n  text-align: center;\n}\n.home .hero img {\n  max-width: 100%;\n  max-height: 280px;\n  display: block;\n  margin: 3rem auto 1.5rem;\n}\n.home .hero h1 {\n  font-size: 3rem;\n}\n.home .hero h1,\n.home .hero .description,\n.home .hero .actions {\n  margin: 1.8rem auto;\n}\n.home .hero .description {\n  max-width: 35rem;\n  font-size: 1.6rem;\n  line-height: 1.3;\n  color: var(--c-text-lightest);\n}\n.home .hero .action-button {\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0.8rem 1.6rem;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 4px;\n  transition: background-color var(--t-color);\n  box-sizing: border-box;\n}\n.home .hero .action-button:not(:first-child) {\n  margin-left: 1.5rem;\n}\n.home .hero .action-button.primary {\n  color: var(--c-bg);\n  background-color: var(--c-brand);\n  border-color: var(--c-brand);\n}\n.home .hero .action-button.primary:hover {\n  background-color: var(--c-brand-light);\n}\n.home .hero .action-button.secondary {\n  color: var(--c-brand);\n  background-color: var(--c-bg);\n  border-color: var(--c-brand);\n}\n.home .hero .action-button.secondary:hover {\n  color: var(--c-bg);\n  background-color: var(--c-brand-light);\n}\n.home .features {\n  border-top: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding: 1.2rem 0;\n  margin-top: 2.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  align-content: stretch;\n  justify-content: space-between;\n}\n.home .feature {\n  flex-grow: 1;\n  flex-basis: 30%;\n  max-width: 30%;\n}\n.home .feature h2 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  border-bottom: none;\n  padding-bottom: 0;\n  color: var(--c-text-light);\n}\n.home .feature p {\n  color: var(--c-text-lighter);\n}\n.home .footer {\n  padding: 2.5rem;\n  border-top: 1px solid var(--c-border);\n  text-align: center;\n  color: var(--c-text-lighter);\n  transition: border-color var(--t-color);\n}\n\n@media (max-width: 719px) {\n  .home .features {\n    flex-direction: column;\n  }\n  .home .feature {\n    max-width: 100%;\n    padding: 0 2.5rem;\n  }\n}\n@media (max-width: 419px) {\n  .home {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .home .hero img {\n    max-height: 210px;\n    margin: 2rem auto 1.2rem;\n  }\n  .home .hero h1 {\n    font-size: 2rem;\n  }\n  .home .hero h1,\n.home .hero .description,\n.home .hero .actions {\n    margin: 1.2rem auto;\n  }\n  .home .hero .description {\n    font-size: 1.2rem;\n  }\n  .home .hero .action-button {\n    font-size: 1rem;\n    padding: 0.6rem 1.2rem;\n  }\n  .home .feature h2 {\n    font-size: 1.25rem;\n  }\n}\n.theme-default-content:not(.custom) {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n}\n@media (max-width: 959px) {\n  .theme-default-content:not(.custom) {\n    padding: 2rem;\n  }\n}\n@media (max-width: 419px) {\n  .theme-default-content:not(.custom) {\n    padding: 1.5rem;\n  }\n}\n\n.page {\n  padding-top: var(--navbar-height);\n  padding-left: var(--sidebar-width);\n}\n\n.navbar {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  box-sizing: border-box;\n  border-bottom: 1px solid var(--c-border);\n  background-color: var(--c-bg-navbar);\n  transition: background-color var(--t-color), border-color var(--t-color);\n}\n\n.sidebar {\n  font-size: 16px;\n  width: var(--sidebar-width);\n  position: fixed;\n  z-index: 10;\n  margin: 0;\n  top: var(--navbar-height);\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  border-right: 1px solid var(--c-border);\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--c-brand) var(--c-border);\n  background-color: var(--c-bg-sidebar);\n  transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);\n}\n.sidebar::-webkit-scrollbar {\n  width: 7px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background-color: var(--c-border);\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background-color: var(--c-brand);\n}\n\n.sidebar-mask {\n  position: fixed;\n  z-index: 9;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n}\n\n.theme-container.sidebar-open .sidebar-mask {\n  display: block;\n}\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1) {\n  transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);\n}\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(2) {\n  transform: scale3d(0, 1, 1);\n}\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {\n  transform: rotate(-45deg) translate3d(6px, -6px, 0);\n}\n.theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(1), .theme-container.sidebar-open .navbar > .toggle-sidebar-button .icon span:nth-child(3) {\n  transform-origin: center;\n}\n.theme-container.no-navbar .theme-default-content:not(.custom) > h1,\n.theme-container.no-navbar h2,\n.theme-container.no-navbar h3,\n.theme-container.no-navbar h4,\n.theme-container.no-navbar h5,\n.theme-container.no-navbar h6 {\n  margin-top: 1.5rem;\n  padding-top: 0;\n}\n.theme-container.no-navbar .page {\n  padding-top: 0;\n}\n.theme-container.no-navbar .sidebar {\n  top: 0;\n}\n\n@media (min-width: 720px) {\n  .theme-container.no-sidebar .sidebar {\n    display: none;\n  }\n  .theme-container.no-sidebar .page {\n    padding-left: 0;\n  }\n}\n.theme-default-content:not(.custom) > h1,\n.theme-default-content:not(.custom) > h2,\n.theme-default-content:not(.custom) > h3,\n.theme-default-content:not(.custom) > h4,\n.theme-default-content:not(.custom) > h5,\n.theme-default-content:not(.custom) > h6 {\n  margin-top: calc(0.5rem - var(--navbar-height));\n  padding-top: calc(1rem + var(--navbar-height));\n  margin-bottom: 0;\n}\n.theme-default-content:not(.custom) > h1:first-child,\n.theme-default-content:not(.custom) > h2:first-child,\n.theme-default-content:not(.custom) > h3:first-child,\n.theme-default-content:not(.custom) > h4:first-child,\n.theme-default-content:not(.custom) > h5:first-child,\n.theme-default-content:not(.custom) > h6:first-child {\n  margin-bottom: 1rem;\n}\n.theme-default-content:not(.custom) > h1:first-child + p,\n.theme-default-content:not(.custom) > h1:first-child + pre,\n.theme-default-content:not(.custom) > h1:first-child + .custom-container,\n.theme-default-content:not(.custom) > h2:first-child + p,\n.theme-default-content:not(.custom) > h2:first-child + pre,\n.theme-default-content:not(.custom) > h2:first-child + .custom-container,\n.theme-default-content:not(.custom) > h3:first-child + p,\n.theme-default-content:not(.custom) > h3:first-child + pre,\n.theme-default-content:not(.custom) > h3:first-child + .custom-container,\n.theme-default-content:not(.custom) > h4:first-child + p,\n.theme-default-content:not(.custom) > h4:first-child + pre,\n.theme-default-content:not(.custom) > h4:first-child + .custom-container,\n.theme-default-content:not(.custom) > h5:first-child + p,\n.theme-default-content:not(.custom) > h5:first-child + pre,\n.theme-default-content:not(.custom) > h5:first-child + .custom-container,\n.theme-default-content:not(.custom) > h6:first-child + p,\n.theme-default-content:not(.custom) > h6:first-child + pre,\n.theme-default-content:not(.custom) > h6:first-child + .custom-container {\n  margin-top: 2rem;\n}\n\n.theme-default-content:not(.custom) {\n  padding-top: 0;\n}\n.theme-default-content:not(.custom) a:hover {\n  text-decoration: underline;\n}\n.theme-default-content:not(.custom) img {\n  max-width: 100%;\n}\n\n.theme-default-content.custom {\n  padding: 0;\n  margin: 0;\n}\n.theme-default-content.custom img {\n  max-width: 100%;\n}\n\n@media (max-width: 959px) {\n  .sidebar {\n    font-size: 15px;\n    width: var(--sidebar-width-mobile);\n  }\n\n  .page {\n    padding-left: var(--sidebar-width-mobile);\n  }\n}\n@media (max-width: 719px) {\n  .sidebar {\n    top: 0;\n    padding-top: var(--navbar-height);\n    transform: translateX(-100%);\n  }\n\n  .page {\n    padding-left: 0;\n  }\n\n  .theme-container.sidebar-open .sidebar {\n    transform: translateX(0);\n  }\n  .theme-container.no-navbar .sidebar {\n    padding-top: 0;\n  }\n}\n@media (max-width: 419px) {\n  h1 {\n    font-size: 1.9rem;\n  }\n}\n.navbar {\n  --navbar-line-height: calc(\n    var(--navbar-height) - 2 * var(--navbar-padding-v)\n  );\n  padding: var(--navbar-padding-v) var(--navbar-padding-h);\n  line-height: var(--navbar-line-height);\n}\n.navbar .logo {\n  height: var(--navbar-line-height);\n  min-width: var(--navbar-line-height);\n  margin-right: var(--navbar-padding-v);\n  vertical-align: top;\n}\n.navbar .site-name {\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: var(--c-text);\n  position: relative;\n}\n.navbar .navbar-links-wrapper {\n  display: flex;\n  position: absolute;\n  box-sizing: border-box;\n  top: var(--navbar-padding-v);\n  right: var(--navbar-padding-h);\n  height: var(--navbar-line-height);\n  padding-left: var(--navbar-padding-h);\n  white-space: nowrap;\n  font-size: 0.9rem;\n}\n.navbar .navbar-links-wrapper .search-box {\n  flex: 0 0 auto;\n  vertical-align: top;\n}\n\n@media (max-width: 719px) {\n  .navbar {\n    padding-left: 4rem;\n  }\n  .navbar .can-hide {\n    display: none;\n  }\n  .navbar .site-name {\n    width: calc(100vw - 9.4rem);\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n}\n/**\n * navbar-links\n */\n.navbar-links {\n  display: inline-block;\n}\n.navbar-links a {\n  display: inline-block;\n  line-height: 1.4rem;\n  color: inherit;\n}\n.navbar-links a:hover, .navbar-links a.router-link-active {\n  color: var(--c-text-accent);\n}\n.navbar-links .navbar-links-item {\n  position: relative;\n  display: inline-block;\n  margin-left: 1.5rem;\n  line-height: var(--navbar-line-height);\n}\n.navbar-links .navbar-links-item:first-child {\n  margin-left: 0;\n}\n\n@media (max-width: 719px) {\n  .navbar-links .navbar-links-item {\n    margin-left: 0;\n  }\n}\n@media (min-width: 719px) {\n  .navbar-links a:hover, .navbar-links a.router-link-active {\n    color: var(--c-text);\n  }\n\n  .navbar-links-item > a:not(.external):hover, .navbar-links-item > a:not(.external).router-link-active {\n    margin-bottom: -2px;\n    border-bottom: 2px solid var(--c-text-accent);\n  }\n}\n/**\n * toggle sidebar button\n */\n.toggle-sidebar-button {\n  position: absolute;\n  top: 0.6rem;\n  left: 1rem;\n  display: none;\n  padding: 0.6rem;\n  cursor: pointer;\n}\n\n.toggle-sidebar-button .icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  cursor: inherit;\n}\n.toggle-sidebar-button .icon span {\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  border-radius: 2px;\n  background-color: var(--c-text);\n  transition: transform ease 0.3s;\n}\n.toggle-sidebar-button .icon span:nth-child(2) {\n  margin: 6px 0;\n}\n\n@media screen and (max-width: 719px) {\n  .toggle-sidebar-button {\n    display: block;\n  }\n}\n/**\n * toggle dark button\n */\n.toggle-dark-button {\n  display: flex;\n  margin: auto;\n  margin-left: 1rem;\n  border: 0;\n  background: none;\n  color: var(--c-text);\n  opacity: 0.8;\n  cursor: pointer;\n}\n.toggle-dark-button:hover {\n  opacity: 1;\n}\n.toggle-dark-button .icon {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.page-nav, .page-meta {\n  max-width: var(--content-width);\n  margin: 0 auto;\n  padding: 2rem 2.5rem;\n}\n@media (max-width: 959px) {\n  .page-nav, .page-meta {\n    padding: 2rem;\n  }\n}\n@media (max-width: 419px) {\n  .page-nav, .page-meta {\n    padding: 1.5rem;\n  }\n}\n\n.page {\n  padding-bottom: 2rem;\n  display: block;\n}\n\n.page-meta {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow: auto;\n}\n.page-meta .meta-item {\n  cursor: default;\n  margin-top: 0.8rem;\n}\n.page-meta .meta-item .meta-item-label {\n  font-weight: 500;\n  color: var(--c-text-lighter);\n}\n.page-meta .meta-item .meta-item-info {\n  font-weight: 400;\n  color: var(--c-text-quote);\n}\n.page-meta .edit-link {\n  display: inline-block;\n  margin-right: 0.25rem;\n}\n.page-meta .last-updated {\n  float: right;\n}\n\n@media (max-width: 719px) {\n  .page-meta .last-updated {\n    font-size: 0.8em;\n    float: none;\n  }\n  .page-meta .contributors {\n    font-size: 0.8em;\n  }\n}\n.page-nav {\n  padding-top: 1rem;\n  padding-bottom: 0;\n}\n.page-nav .inner {\n  min-height: 2rem;\n  margin-top: 0;\n  border-top: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding-top: 1rem;\n  overflow: auto;\n}\n.page-nav .next {\n  float: right;\n}\n\n.sidebar ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.sidebar a {\n  display: inline-block;\n}\n.sidebar .navbar-links {\n  display: none;\n  border-bottom: 1px solid var(--c-border);\n  transition: border-color var(--t-color);\n  padding: 0.5rem 0 0.75rem 0;\n}\n.sidebar .navbar-links a {\n  font-weight: 600;\n}\n.sidebar .navbar-links .navbar-links-item {\n  display: block;\n  line-height: 1.25rem;\n  font-size: 1.1em;\n  padding: 0.5rem 0 0.5rem 1.5rem;\n}\n.sidebar .sidebar-links {\n  padding: 1.5rem 0;\n}\n.sidebar .sidebar-links > li:not(:first-child) {\n  margin-top: 0.75rem;\n}\n.sidebar .sidebar-links .sidebar-sub-items {\n  padding-left: 1rem;\n  font-size: 0.95em;\n}\n\n@media (max-width: 719px) {\n  .sidebar .navbar-links {\n    display: block;\n  }\n  .sidebar .navbar-links .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {\n    top: calc(1rem - 2px);\n  }\n  .sidebar .sidebar-links {\n    padding: 1rem 0;\n  }\n}\n.sidebar-heading {\n  color: var(--c-text);\n  transition: color 0.15s ease;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 0.35rem 1.5rem 0.35rem 1.25rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border-left: 0.25rem solid transparent;\n}\n.sidebar-heading .arrow {\n  position: relative;\n  top: -0.12em;\n  left: 0.5em;\n}\n\n.sidebar-item:not(.sidebar-heading) {\n  font-size: 1em;\n  font-weight: 400;\n  display: inline-block;\n  color: var(--c-text);\n  border-left: 0.25rem solid transparent;\n  margin: 0;\n  padding: 0.35rem 1rem 0.35rem 2rem;\n  line-height: 1.4;\n  width: 100%;\n  box-sizing: border-box;\n}\n.sidebar-links > .sidebar-item:not(.sidebar-heading):not(:first-child) {\n  margin-top: 0.75rem;\n}\n.sidebar-sub-items .sidebar-item:not(.sidebar-heading) {\n  padding: 0.25rem 1rem 0.25rem 1.75rem;\n}\n\n.sidebar-item {\n  cursor: default;\n}\n\na.sidebar-item {\n  cursor: pointer;\n}\na.sidebar-item:hover {\n  color: var(--c-text-accent);\n}\na.sidebar-item.active {\n  font-weight: 600;\n  color: var(--c-text-accent);\n  border-left-color: var(--c-text-accent);\n}\na.sidebar-item.sidebar-heading.active {\n  font-weight: bold;\n  border-left-color: transparent;\n}\n.sidebar-sub-items a.sidebar-item.active {\n  font-weight: 500;\n  border-left-color: transparent;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n  user-select: none;\n}\n\n.table-of-contents .badge {\n  vertical-align: middle;\n}\n\n.fade-slide-y-enter-active {\n  transition: all 0.3s ease;\n}\n\n.fade-slide-y-leave-active {\n  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);\n}\n\n.fade-slide-y-enter-from,\n.fade-slide-y-leave-to {\n  transform: translateY(10px);\n  opacity: 0;\n}\n\ntable.browsersupport {\n  width: 100%;\n  margin-top: 15px;\n  border-collapse: collapse;\n}\ntable.browsersupport th {\n  color: #333333;\n  font-weight: 400;\n  width: 20%;\n  padding: 0;\n  height: 36px;\n  vertical-align: middle;\n  text-align: center;\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n}\ntable.browsersupport td {\n  text-align: center;\n  height: 86px;\n  width: 86px;\n  vertical-align: middle;\n  background: no-repeat center;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\ntable.browsersupport.bsProperty {\n  font-family: courier new;\n  white-space: nowrap;\n  width: 20%;\n}\ntable.browsersupport .bsIE {\n  background-image: url("/images/browser/compatible_ie.png");\n}\ntable.browsersupport .bsFirefox {\n  background-image: url("/images/browser/compatible_firefox.png");\n}\ntable.browsersupport .bsChrome {\n  background-image: url("/images/browser/compatible_chrome.png");\n}\ntable.browsersupport .bsSafari {\n  background-image: url("/images/browser/compatible_safari.png");\n}\ntable.browsersupport .bsOpera {\n  background-image: url("/images/browser/compatible_opera.png");\n}\ntable.browsersupport .bsNoIE {\n  background-image: url("/images/browser/incompatible_ie.png");\n}\ntable.browsersupport .bsNoFirefox {\n  background-image: url("/images/browser/incompatible_firefox.png");\n}\ntable.browsersupport .bsNoChrome {\n  background-image: url("/images/browser/incompatible_chrome.png");\n}\ntable.browsersupport .bsNoSafari {\n  background-image: url("/images/browser/incompatible_safari.png");\n}\ntable.browsersupport .bsNoOpera {\n  background-image: url("/images/browser/incompatible_opera.png");\n}\ntable.browsersupport .browser_version td {\n  padding: 0;\n  height: 36px;\n  vertical-align: middle;\n  text-align: center;\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n}\ntable.browsersupport .browsericons {\n  color: #000;\n  text-shadow: 1px 1px 0px white;\n  font-weight: bold;\n}';
var clientAppEnhance0 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$1l);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$1k);
  delete app._context.components.OutboundLink;
  app.component("OutboundLink", _sfc_main$1j);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var vars$2 = ":root {\n  --medium-zoom-z-index: 100;\n  --medium-zoom-bg-color: #ffffff;\n  --medium-zoom-opacity: 1;\n}\n";
var mediumZoom = ".medium-zoom-overlay {\n  /* override element style set by medium-zoom script */\n  background-color: var(--medium-zoom-bg-color) !important;\n  z-index: var(--medium-zoom-z-index);\n}\n\n.medium-zoom-overlay ~ img {\n  z-index: calc(var(--medium-zoom-z-index) + 1);\n}\n\n.medium-zoom--opened .medium-zoom-overlay {\n  opacity: var(--medium-zoom-opacity);\n}\n";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
/*! @docsearch/js 3.0.0-alpha.34 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(t2) {
  return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
    return typeof e2;
  } : function(e2) {
    return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
  })(t2);
}
function t(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function n$1() {
  return (n$1 = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r$1(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function o(e2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var o2 = arguments[n2] != null ? arguments[n2] : {};
    n2 % 2 ? r$1(Object(o2), true).forEach(function(n3) {
      t(e2, n3, o2[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(o2)) : r$1(Object(o2)).forEach(function(t2) {
      Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(o2, t2));
    });
  }
  return e2;
}
function c$1(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function i(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
      return;
    var n2 = [], r2 = true, o2 = false, c2 = void 0;
    try {
      for (var i2, a2 = e3[Symbol.iterator](); !(r2 = (i2 = a2.next()).done) && (n2.push(i2.value), !t3 || n2.length !== t3); r2 = true)
        ;
    } catch (e4) {
      o2 = true, c2 = e4;
    } finally {
      try {
        r2 || a2.return == null || a2.return();
      } finally {
        if (o2)
          throw c2;
      }
    }
    return n2;
  }(e2, t2) || u$1(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return l$1(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || u$1(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function u$1(e2, t2) {
  if (e2) {
    if (typeof e2 == "string")
      return l$1(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l$1(e2, t2) : void 0;
  }
}
function l$1(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
var s, f, p, m, h, d = {}, v$1 = [], _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function y$1(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function b(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function g(e2, t2, n2) {
  var r2, o2, c2, i2 = arguments, a2 = {};
  for (c2 in t2)
    c2 == "key" ? r2 = t2[c2] : c2 == "ref" ? o2 = t2[c2] : a2[c2] = t2[c2];
  if (arguments.length > 3)
    for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
      n2.push(i2[c2]);
  if (n2 != null && (a2.children = n2), typeof e2 == "function" && e2.defaultProps != null)
    for (c2 in e2.defaultProps)
      a2[c2] === void 0 && (a2[c2] = e2.defaultProps[c2]);
  return O(e2, a2, r2, o2, null);
}
function O(e2, t2, n2, r2, o2) {
  var c2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++s.__v : o2 };
  return s.vnode != null && s.vnode(c2), c2;
}
function S(e2) {
  return e2.children;
}
function E(e2, t2) {
  this.props = e2, this.context = t2;
}
function w(e2, t2) {
  if (t2 == null)
    return e2.__ ? w(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
  for (var n2; t2 < e2.__k.length; t2++)
    if ((n2 = e2.__k[t2]) != null && n2.__e != null)
      return n2.__e;
  return typeof e2.type == "function" ? w(e2) : null;
}
function j(e2) {
  var t2, n2;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
      if ((n2 = e2.__k[t2]) != null && n2.__e != null) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
    return j(e2);
  }
}
function P(e2) {
  (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
}
function I() {
  for (var e2; I.__r = f.length; )
    e2 = f.sort(function(e3, t2) {
      return e3.__v.__b - t2.__v.__b;
    }), f = [], e2.some(function(e3) {
      var t2, n2, r2, o2, c2, i2;
      e3.__d && (c2 = (o2 = (t2 = e3).__v).__e, (i2 = t2.__P) && (n2 = [], (r2 = y$1({}, o2)).__v = o2.__v + 1, H(i2, o2, r2, t2.__n, i2.ownerSVGElement !== void 0, o2.__h != null ? [c2] : null, n2, c2 == null ? w(o2) : c2, o2.__h), M(n2, o2), o2.__e != c2 && j(o2)));
    });
}
function D(e2, t2, n2, r2, o2, c2, i2, a2, u2, l2) {
  var s2, f2, p2, m2, h2, _2, y2, b2 = r2 && r2.__k || v$1, g2 = b2.length;
  for (n2.__k = [], s2 = 0; s2 < t2.length; s2++)
    if ((m2 = n2.__k[s2] = (m2 = t2[s2]) == null || typeof m2 == "boolean" ? null : typeof m2 == "string" || typeof m2 == "number" ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2) != null) {
      if (m2.__ = n2, m2.__b = n2.__b + 1, (p2 = b2[s2]) === null || p2 && m2.key == p2.key && m2.type === p2.type)
        b2[s2] = void 0;
      else
        for (f2 = 0; f2 < g2; f2++) {
          if ((p2 = b2[f2]) && m2.key == p2.key && m2.type === p2.type) {
            b2[f2] = void 0;
            break;
          }
          p2 = null;
        }
      H(e2, m2, p2 = p2 || d, o2, c2, i2, a2, u2, l2), h2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (y2 || (y2 = []), p2.ref && y2.push(p2.ref, null, m2), y2.push(f2, m2.__c || h2, m2)), h2 != null ? (_2 == null && (_2 = h2), typeof m2.type == "function" && m2.__k != null && m2.__k === p2.__k ? m2.__d = u2 = k(m2, u2, e2) : u2 = A(e2, m2, p2, b2, h2, u2), l2 || n2.type !== "option" ? typeof n2.type == "function" && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = w(p2));
    }
  for (n2.__e = _2, s2 = g2; s2--; )
    b2[s2] != null && (typeof n2.type == "function" && b2[s2].__e != null && b2[s2].__e == n2.__d && (n2.__d = w(r2, s2 + 1)), U(b2[s2], b2[s2]));
  if (y2)
    for (s2 = 0; s2 < y2.length; s2++)
      q(y2[s2], y2[++s2], y2[++s2]);
}
function k(e2, t2, n2) {
  var r2, o2;
  for (r2 = 0; r2 < e2.__k.length; r2++)
    (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = typeof o2.type == "function" ? k(o2, t2, n2) : A(n2, o2, o2, e2.__k, o2.__e, t2));
  return t2;
}
function C(e2, t2) {
  return t2 = t2 || [], e2 == null || typeof e2 == "boolean" || (Array.isArray(e2) ? e2.some(function(e3) {
    C(e3, t2);
  }) : t2.push(e2)), t2;
}
function A(e2, t2, n2, r2, o2, c2) {
  var i2, a2, u2;
  if (t2.__d !== void 0)
    i2 = t2.__d, t2.__d = void 0;
  else if (n2 == null || o2 != c2 || o2.parentNode == null)
    e:
      if (c2 == null || c2.parentNode !== e2)
        e2.appendChild(o2), i2 = null;
      else {
        for (a2 = c2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
          if (a2 == o2)
            break e;
        e2.insertBefore(o2, c2), i2 = c2;
      }
  return i2 !== void 0 ? i2 : o2.nextSibling;
}
function N(e2, t2, n2) {
  t2[0] === "-" ? e2.setProperty(t2, n2) : e2[t2] = n2 == null ? "" : typeof n2 != "number" || _.test(t2) ? n2 : n2 + "px";
}
function x(e2, t2, n2, r2, o2) {
  var c2;
  e:
    if (t2 === "style")
      if (typeof n2 == "string")
        e2.style.cssText = n2;
      else {
        if (typeof r2 == "string" && (e2.style.cssText = r2 = ""), r2)
          for (t2 in r2)
            n2 && t2 in n2 || N(e2.style, t2, "");
        if (n2)
          for (t2 in n2)
            r2 && n2[t2] === r2[t2] || N(e2.style, t2, n2[t2]);
      }
    else if (t2[0] === "o" && t2[1] === "n")
      c2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + c2] = n2, n2 ? r2 || e2.addEventListener(t2, c2 ? R : T, c2) : e2.removeEventListener(t2, c2 ? R : T, c2);
    else if (t2 !== "dangerouslySetInnerHTML") {
      if (o2)
        t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (t2 !== "href" && t2 !== "list" && t2 !== "form" && t2 !== "download" && t2 in e2)
        try {
          e2[t2] = n2 == null ? "" : n2;
          break e;
        } catch (e3) {
        }
      typeof n2 == "function" || (n2 != null && (n2 !== false || t2[0] === "a" && t2[1] === "r") ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
    }
}
function T(e2) {
  this.l[e2.type + false](s.event ? s.event(e2) : e2);
}
function R(e2) {
  this.l[e2.type + true](s.event ? s.event(e2) : e2);
}
function H(e2, t2, n2, r2, o2, c2, i2, a2, u2) {
  var l2, f2, p2, m2, h2, d2, v2, _2, b2, g2, O2, w2 = t2.type;
  if (t2.constructor !== void 0)
    return null;
  n2.__h != null && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, c2 = [a2]), (l2 = s.__b) && l2(t2);
  try {
    e:
      if (typeof w2 == "function") {
        if (_2 = t2.props, b2 = (l2 = w2.contextType) && r2[l2.__c], g2 = l2 ? b2 ? b2.props.value : l2.__ : r2, n2.__c ? v2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in w2 && w2.prototype.render ? t2.__c = f2 = new w2(_2, g2) : (t2.__c = f2 = new E(_2, g2), f2.constructor = w2, f2.render = F), b2 && b2.sub(f2), f2.props = _2, f2.state || (f2.state = {}), f2.context = g2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), f2.__s == null && (f2.__s = f2.state), w2.getDerivedStateFromProps != null && (f2.__s == f2.state && (f2.__s = y$1({}, f2.__s)), y$1(f2.__s, w2.getDerivedStateFromProps(_2, f2.__s))), m2 = f2.props, h2 = f2.state, p2)
          w2.getDerivedStateFromProps == null && f2.componentWillMount != null && f2.componentWillMount(), f2.componentDidMount != null && f2.__h.push(f2.componentDidMount);
        else {
          if (w2.getDerivedStateFromProps == null && _2 !== m2 && f2.componentWillReceiveProps != null && f2.componentWillReceiveProps(_2, g2), !f2.__e && f2.shouldComponentUpdate != null && f2.shouldComponentUpdate(_2, f2.__s, g2) === false || t2.__v === n2.__v) {
            f2.props = _2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && i2.push(f2);
            break e;
          }
          f2.componentWillUpdate != null && f2.componentWillUpdate(_2, f2.__s, g2), f2.componentDidUpdate != null && f2.__h.push(function() {
            f2.componentDidUpdate(m2, h2, d2);
          });
        }
        f2.context = g2, f2.props = _2, f2.state = f2.__s, (l2 = s.__r) && l2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, f2.getChildContext != null && (r2 = y$1(y$1({}, r2), f2.getChildContext())), p2 || f2.getSnapshotBeforeUpdate == null || (d2 = f2.getSnapshotBeforeUpdate(m2, h2)), O2 = l2 != null && l2.type === S && l2.key == null ? l2.props.children : l2, D(e2, Array.isArray(O2) ? O2 : [O2], t2, n2, r2, o2, c2, i2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && i2.push(f2), v2 && (f2.__E = f2.__ = null), f2.__e = false;
      } else
        c2 == null && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = L(n2.__e, t2, n2, r2, o2, c2, i2, u2);
    (l2 = s.diffed) && l2(t2);
  } catch (e3) {
    t2.__v = null, (u2 || c2 != null) && (t2.__e = a2, t2.__h = !!u2, c2[c2.indexOf(a2)] = null), s.__e(e3, t2, n2);
  }
}
function M(e2, t2) {
  s.__c && s.__c(t2, e2), e2.some(function(t3) {
    try {
      e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
        e3.call(t3);
      });
    } catch (e3) {
      s.__e(e3, t3.__v);
    }
  });
}
function L(e2, t2, n2, r2, o2, c2, i2, a2) {
  var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, h2 = t2.type, _2 = 0;
  if (h2 === "svg" && (o2 = true), c2 != null) {
    for (; _2 < c2.length; _2++)
      if ((u2 = c2[_2]) && (u2 === e2 || (h2 ? u2.localName == h2 : u2.nodeType == 3))) {
        e2 = u2, c2[_2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (h2 === null)
      return document.createTextNode(m2);
    e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", h2) : document.createElement(h2, m2.is && m2), c2 = null, a2 = false;
  }
  if (h2 === null)
    p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
  else {
    if (c2 = c2 && v$1.slice.call(e2.childNodes), l2 = (p2 = n2.props || d).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
      if (c2 != null)
        for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
          p2[e2.attributes[f2].name] = e2.attributes[f2].value;
      (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
    }
    if (function(e3, t3, n3, r3, o3) {
      var c3;
      for (c3 in n3)
        c3 === "children" || c3 === "key" || c3 in t3 || x(e3, c3, null, n3[c3], r3);
      for (c3 in t3)
        o3 && typeof t3[c3] != "function" || c3 === "children" || c3 === "key" || c3 === "value" || c3 === "checked" || n3[c3] === t3[c3] || x(e3, c3, t3[c3], n3[c3], r3);
    }(e2, m2, p2, o2, a2), s2)
      t2.__k = [];
    else if (_2 = t2.props.children, D(e2, Array.isArray(_2) ? _2 : [_2], t2, n2, r2, o2 && h2 !== "foreignObject", c2, i2, e2.firstChild, a2), c2 != null)
      for (_2 = c2.length; _2--; )
        c2[_2] != null && b(c2[_2]);
    a2 || ("value" in m2 && (_2 = m2.value) !== void 0 && (_2 !== e2.value || h2 === "progress" && !_2) && x(e2, "value", _2, p2.value, false), "checked" in m2 && (_2 = m2.checked) !== void 0 && _2 !== e2.checked && x(e2, "checked", _2, p2.checked, false));
  }
  return e2;
}
function q(e2, t2, n2) {
  try {
    typeof e2 == "function" ? e2(t2) : e2.current = t2;
  } catch (e3) {
    s.__e(e3, n2);
  }
}
function U(e2, t2, n2) {
  var r2, o2, c2;
  if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || q(r2, null, t2)), n2 || typeof e2.type == "function" || (n2 = (o2 = e2.__e) != null), e2.__e = e2.__d = void 0, (r2 = e2.__c) != null) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (e3) {
        s.__e(e3, t2);
      }
    r2.base = r2.__P = null;
  }
  if (r2 = e2.__k)
    for (c2 = 0; c2 < r2.length; c2++)
      r2[c2] && U(r2[c2], t2, n2);
  o2 != null && b(o2);
}
function F(e2, t2, n2) {
  return this.constructor(e2, n2);
}
function V(e2, t2, n2) {
  var r2, o2, c2;
  s.__ && s.__(e2, t2), o2 = (r2 = typeof n2 == "function") ? null : n2 && n2.__k || t2.__k, c2 = [], H(t2, e2 = (!r2 && n2 || t2).__k = g(S, null, [e2]), o2 || d, d, t2.ownerSVGElement !== void 0, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? v$1.slice.call(t2.childNodes) : null, c2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), M(c2, e2);
}
function z(e2, t2) {
  V(e2, t2, z);
}
function B(e2, t2, n2) {
  var r2, o2, c2, i2 = arguments, a2 = y$1({}, e2.props);
  for (c2 in t2)
    c2 == "key" ? r2 = t2[c2] : c2 == "ref" ? o2 = t2[c2] : a2[c2] = t2[c2];
  if (arguments.length > 3)
    for (n2 = [n2], c2 = 3; c2 < arguments.length; c2++)
      n2.push(i2[c2]);
  return n2 != null && (a2.children = n2), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
}
s = { __e: function(e2, t2) {
  for (var n2, r2, o2; t2 = t2.__; )
    if ((n2 = t2.__c) && !n2.__)
      try {
        if ((r2 = n2.constructor) && r2.getDerivedStateFromError != null && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), n2.componentDidCatch != null && (n2.componentDidCatch(e2), o2 = n2.__d), o2)
          return n2.__E = n2;
      } catch (t3) {
        e2 = t3;
      }
  throw e2;
}, __v: 0 }, E.prototype.setState = function(e2, t2) {
  var n2;
  n2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = y$1({}, this.state), typeof e2 == "function" && (e2 = e2(y$1({}, n2), this.props)), e2 && y$1(n2, e2), e2 != null && this.__v && (t2 && this.__h.push(t2), P(this));
}, E.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
}, E.prototype.render = S, f = [], p = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, h = 0;
var W, K, J, $ = 0, Q = [], Y = s.__b, G = s.__r, Z = s.diffed, X = s.__c, ee = s.unmount;
function te(e2, t2) {
  s.__h && s.__h(K, e2, $ || t2), $ = 0;
  var n2 = K.__H || (K.__H = { __: [], __h: [] });
  return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
}
function ne(e2) {
  return $ = 1, re(pe, e2);
}
function re(e2, t2, n2) {
  var r2 = te(W++, 2);
  return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : pe(void 0, t2), function(e3) {
    var t3 = r2.t(r2.__[0], e3);
    r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = K), r2.__;
}
function oe(e2, t2) {
  var n2 = te(W++, 3);
  !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, K.__H.__h.push(n2));
}
function ce(e2, t2) {
  var n2 = te(W++, 4);
  !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, K.__h.push(n2));
}
function ie(e2, t2) {
  var n2 = te(W++, 7);
  return fe(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
}
function ae() {
  Q.forEach(function(e2) {
    if (e2.__P)
      try {
        e2.__H.__h.forEach(le), e2.__H.__h.forEach(se), e2.__H.__h = [];
      } catch (t2) {
        e2.__H.__h = [], s.__e(t2, e2.__v);
      }
  }), Q = [];
}
s.__b = function(e2) {
  K = null, Y && Y(e2);
}, s.__r = function(e2) {
  G && G(e2), W = 0;
  var t2 = (K = e2.__c).__H;
  t2 && (t2.__h.forEach(le), t2.__h.forEach(se), t2.__h = []);
}, s.diffed = function(e2) {
  Z && Z(e2);
  var t2 = e2.__c;
  t2 && t2.__H && t2.__H.__h.length && (Q.push(t2) !== 1 && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
    var t3, n2 = function() {
      clearTimeout(r2), ue && cancelAnimationFrame(t3), setTimeout(e3);
    }, r2 = setTimeout(n2, 100);
    ue && (t3 = requestAnimationFrame(n2));
  })(ae)), K = void 0;
}, s.__c = function(e2, t2) {
  t2.some(function(e3) {
    try {
      e3.__h.forEach(le), e3.__h = e3.__h.filter(function(e4) {
        return !e4.__ || se(e4);
      });
    } catch (n2) {
      t2.some(function(e4) {
        e4.__h && (e4.__h = []);
      }), t2 = [], s.__e(n2, e3.__v);
    }
  }), X && X(e2, t2);
}, s.unmount = function(e2) {
  ee && ee(e2);
  var t2 = e2.__c;
  if (t2 && t2.__H)
    try {
      t2.__H.__.forEach(le);
    } catch (e3) {
      s.__e(e3, t2.__v);
    }
};
var ue = typeof requestAnimationFrame == "function";
function le(e2) {
  var t2 = K;
  typeof e2.__c == "function" && e2.__c(), K = t2;
}
function se(e2) {
  var t2 = K;
  e2.__c = e2.__(), K = t2;
}
function fe(e2, t2) {
  return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
    return t3 !== e2[n2];
  });
}
function pe(e2, t2) {
  return typeof t2 == "function" ? t2(e2) : t2;
}
function me(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function he(e2, t2) {
  for (var n2 in e2)
    if (n2 !== "__source" && !(n2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && e2[r2] !== t2[r2])
      return true;
  return false;
}
function de(e2) {
  this.props = e2;
}
(de.prototype = new E()).isPureReactComponent = true, de.prototype.shouldComponentUpdate = function(e2, t2) {
  return he(this.props, e2) || he(this.state, t2);
};
var ve = s.__b;
s.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), ve && ve(e2);
};
var _e = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var ye = function(e2, t2) {
  return e2 == null ? null : C(C(e2).map(t2));
}, be = { map: ye, forEach: ye, count: function(e2) {
  return e2 ? C(e2).length : 0;
}, only: function(e2) {
  var t2 = C(e2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: C }, ge = s.__e;
function Oe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Se(e2) {
  var t2 = e2.__.__c;
  return t2 && t2.__e && t2.__e(e2);
}
function Ee() {
  this.u = null, this.o = null;
}
s.__e = function(e2, t2, n2) {
  if (e2.then) {
    for (var r2, o2 = t2; o2 = o2.__; )
      if ((r2 = o2.__c) && r2.__c)
        return t2.__e == null && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
  }
  ge(e2, t2, n2);
}, (Oe.prototype = new E()).__c = function(e2, t2) {
  var n2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(n2);
  var o2 = Se(r2.__v), c2 = false, i2 = function() {
    c2 || (c2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
  };
  n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
    i2(), n2.__c && n2.__c();
  };
  var a2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var e3 = r2.state.__e;
        r2.__v.__k[0] = function e4(t4, n3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return e4(t5, n3, r3);
          }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(e3, e3.__c.__P, e3.__c.__O);
      }
      var t3;
      for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, u2 = t2.__h === true;
  r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(i2, i2);
}, Oe.prototype.componentWillUnmount = function() {
  this.t = [];
}, Oe.prototype.render = function(e2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function e3(t3, n3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
          typeof e4.__c == "function" && e4.__c();
        }), t3.__c.__H = null), (t3 = me({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return e3(t4, n3, r3);
        })), t3;
      }(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o2 = t2.__e && g(S, null, e2.fallback);
  return o2 && (o2.__h = null), [g(S, null, t2.__e ? null : e2.children), o2];
};
var we = function(e2, t2, n2) {
  if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && (e2.props.revealOrder[0] !== "t" || !e2.o.size))
    for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e2.u = n2 = n2[2];
    }
};
function je(e2) {
  return this.getChildContext = function() {
    return e2.context;
  }, e2.children;
}
function Pe(e2) {
  var t2 = this, n2 = e2.i;
  t2.componentWillUnmount = function() {
    V(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, insertBefore: function(e3, n3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, removeChild: function(e3) {
    this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
  } }), V(g(je, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function Ie(e2, t2) {
  return g(Pe, { __v: e2, i: t2 });
}
(Ee.prototype = new E()).__e = function(e2) {
  var t2 = this, n2 = Se(t2.__v), r2 = t2.o.get(e2);
  return r2[0]++, function(o2) {
    var c2 = function() {
      t2.props.revealOrder ? (r2.push(o2), we(t2, e2, r2)) : o2();
    };
    n2 ? n2(c2) : c2();
  };
}, Ee.prototype.render = function(e2) {
  this.u = null, this.o = new Map();
  var t2 = C(e2.children);
  e2.revealOrder && e2.revealOrder[0] === "b" && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e2.children;
}, Ee.prototype.componentDidUpdate = Ee.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t2, n2) {
    we(e2, n2, t2);
  });
};
var De = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, ke = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ce = function(t2) {
  return (typeof Symbol != "undefined" && e(Symbol()) == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t2);
};
function Ae(e2, t2, n2) {
  return t2.__k == null && (t2.textContent = ""), V(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
}
E.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(E.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t2) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
  } });
});
var Ne = s.event;
function xe() {
}
function Te() {
  return this.cancelBubble;
}
function Re() {
  return this.defaultPrevented;
}
s.event = function(e2) {
  return Ne && (e2 = Ne(e2)), e2.persist = xe, e2.isPropagationStopped = Te, e2.isDefaultPrevented = Re, e2.nativeEvent = e2;
};
var He, Me = { configurable: true, get: function() {
  return this.class;
} }, Le = s.vnode;
s.vnode = function(e2) {
  var t2 = e2.type, n2 = e2.props, r2 = n2;
  if (typeof t2 == "string") {
    for (var o2 in r2 = {}, n2) {
      var c2 = n2[o2];
      o2 === "value" && "defaultValue" in n2 && c2 == null || (o2 === "defaultValue" && "value" in n2 && n2.value == null ? o2 = "value" : o2 === "download" && c2 === true ? c2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !Ce(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : ke.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : c2 === null && (c2 = void 0), r2[o2] = c2);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = C(n2.children).forEach(function(e3) {
      e3.props.selected = r2.value.indexOf(e3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = C(n2.children).forEach(function(e3) {
      e3.props.selected = r2.multiple ? r2.defaultValue.indexOf(e3.props.value) != -1 : r2.defaultValue == e3.props.value;
    })), e2.props = r2;
  }
  t2 && n2.class != n2.className && (Me.enumerable = "className" in n2, n2.className != null && (r2.class = n2.className), Object.defineProperty(r2, "className", Me)), e2.$$typeof = De, Le && Le(e2);
};
var qe = s.__r;
s.__r = function(e2) {
  qe && qe(e2), He = e2.__c;
};
var Ue = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
  return He.__n[e2.__c].props.value;
} } } };
(typeof performance == "undefined" ? "undefined" : e(performance)) == "object" && typeof performance.now == "function" && performance.now.bind(performance);
function Fe(e2) {
  return !!e2 && e2.$$typeof === De;
}
var Ve = { useState: ne, useReducer: re, useEffect: oe, useLayoutEffect: ce, useRef: function(e2) {
  return $ = 5, ie(function() {
    return { current: e2 };
  }, []);
}, useImperativeHandle: function(e2, t2, n2) {
  $ = 6, ce(function() {
    typeof e2 == "function" ? e2(t2()) : e2 && (e2.current = t2());
  }, n2 == null ? n2 : n2.concat(e2));
}, useMemo: ie, useCallback: function(e2, t2) {
  return $ = 8, ie(function() {
    return e2;
  }, t2);
}, useContext: function(e2) {
  var t2 = K.context[e2.__c], n2 = te(W++, 9);
  return n2.__c = e2, t2 ? (n2.__ == null && (n2.__ = true, t2.sub(K)), t2.props.value) : e2.__;
}, useDebugValue: function(e2, t2) {
  s.useDebugValue && s.useDebugValue(t2 ? t2(e2) : e2);
}, version: "16.8.0", Children: be, render: Ae, hydrate: function(e2, t2, n2) {
  return z(e2, t2), typeof n2 == "function" && n2(), e2 ? e2.__c : null;
}, unmountComponentAtNode: function(e2) {
  return !!e2.__k && (V(null, e2), true);
}, createPortal: Ie, createElement: g, createContext: function(e2, t2) {
  var n2 = { __c: t2 = "__cC" + h++, __: e2, Consumer: function(e3, t3) {
    return e3.children(t3);
  }, Provider: function(e3) {
    var n3, r2;
    return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
      return r2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && n3.some(P);
    }, this.sub = function(e4) {
      n3.push(e4);
      var t3 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
      };
    }), e3.children;
  } };
  return n2.Provider.__ = n2.Consumer.contextType = n2;
}, createFactory: function(e2) {
  return g.bind(null, e2);
}, cloneElement: function(e2) {
  return Fe(e2) ? B.apply(null, arguments) : e2;
}, createRef: function() {
  return { current: null };
}, Fragment: S, isValidElement: Fe, findDOMNode: function(e2) {
  return e2 && (e2.base || e2.nodeType === 1 && e2) || null;
}, Component: E, PureComponent: de, memo: function(e2, t2) {
  function n2(e3) {
    var n3 = this.props.ref, r3 = n3 == e3.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : he(this.props, e3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = n2, g(e2, t3);
  }
  return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}, forwardRef: function(t2) {
  function n2(n3, r2) {
    var o2 = me({}, n3);
    return delete o2.ref, t2(o2, (r2 = n3.ref || r2) && (e(r2) != "object" || "current" in r2) ? r2 : null);
  }
  return n2.$$typeof = _e, n2.render = n2, n2.prototype.isReactComponent = n2.__f = true, n2.displayName = "ForwardRef(" + (t2.displayName || t2.name) + ")", n2;
}, unstable_batchedUpdates: function(e2, t2) {
  return e2(t2);
}, StrictMode: S, Suspense: Oe, SuspenseList: Ee, lazy: function(e2) {
  var t2, n2, r2;
  function o2(o3) {
    if (t2 || (t2 = e2()).then(function(e3) {
      n2 = e3.default || e3;
    }, function(e3) {
      r2 = e3;
    }), r2)
      throw r2;
    if (!n2)
      throw t2;
    return g(n2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue };
function ze() {
  return Ve.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Ve.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function Be() {
  return Ve.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function We() {
  return (We = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Ke(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
      return;
    var n2 = [], r2 = true, o2 = false, c2 = void 0;
    try {
      for (var i2, a2 = e3[Symbol.iterator](); !(r2 = (i2 = a2.next()).done) && (n2.push(i2.value), !t3 || n2.length !== t3); r2 = true)
        ;
    } catch (e4) {
      o2 = true, c2 = e4;
    } finally {
      try {
        r2 || a2.return == null || a2.return();
      } finally {
        if (o2)
          throw c2;
      }
    }
    return n2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Je(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Je(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Je(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function $e(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Qe = Ve.forwardRef(function(e2, t2) {
  var n2 = e2.translations, r2 = n2 === void 0 ? {} : n2, o2 = $e(e2, ["translations"]), c2 = r2.buttonText, i2 = c2 === void 0 ? "Search" : c2, a2 = r2.buttonAriaLabel, u2 = a2 === void 0 ? "Search" : a2, l2 = Ke(ne(null), 2), s2 = l2[0], f2 = l2[1];
  return oe(function() {
    typeof navigator != "undefined" && f2(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "\u2318" : "Ctrl");
  }, []), Ve.createElement("button", We({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Ve.createElement("span", { className: "DocSearch-Button-Container" }, Ve.createElement(Be, null), Ve.createElement("span", { className: "DocSearch-Button-Placeholder" }, i2)), s2 !== null && Ve.createElement("span", { className: "DocSearch-Button-Keys" }, Ve.createElement("span", { className: "DocSearch-Button-Key" }, s2 === "Ctrl" ? Ve.createElement(ze, null) : s2), Ve.createElement("span", { className: "DocSearch-Button-Key" }, "K")));
});
function Ye(e2) {
  return e2.collections.length === 0 ? 0 : e2.collections.reduce(function(e3, t2) {
    return e3 + t2.items.length;
  }, 0);
}
function Ge(e2, t2) {
}
function et(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function tt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function nt(e2, t2, n2) {
  var r2 = t2.initialState;
  return { getState: function() {
    return r2;
  }, dispatch: function(o2, c2) {
    var i2 = function(e3) {
      for (var t3 = 1; t3 < arguments.length; t3++) {
        var n3 = arguments[t3] != null ? arguments[t3] : {};
        t3 % 2 ? et(Object(n3), true).forEach(function(t4) {
          tt(e3, t4, n3[t4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : et(Object(n3)).forEach(function(t4) {
          Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
        });
      }
      return e3;
    }({}, r2);
    r2 = e2(r2, { type: o2, props: t2, payload: c2 }), n2({ state: r2, prevState: i2 });
  } };
}
function rt(e2) {
  return e2.reduce(function(e3, t2) {
    return e3.concat(t2);
  }, []);
}
var ot = 0;
function ct(e2, t2, n2, r2) {
  if (e2 < 0 && (t2 === null || r2 !== null && t2 === 0))
    return n2 + e2;
  var o2 = (t2 === null ? -1 : t2) + e2;
  return o2 <= -1 || o2 >= n2 ? r2 === null ? null : 0 : o2;
}
var it = function() {
};
function at(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function ut(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function lt(e2) {
  return (lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function st(e2, t2) {
  return Promise.resolve(e2(t2)).then(function(e3) {
    return Ge(Array.isArray(e3), "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(lt(e3)), ":\n\n").concat(JSON.stringify(e3, null, 2))), Promise.all(e3.filter(function(e4) {
      return Boolean(e4);
    }).map(function(e4) {
      Ge(typeof e4.sourceId == "string");
      var t3 = function(e5) {
        for (var t4 = 1; t4 < arguments.length; t4++) {
          var n2 = arguments[t4] != null ? arguments[t4] : {};
          t4 % 2 ? at(Object(n2), true).forEach(function(t5) {
            ut(e5, t5, n2[t5]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : at(Object(n2)).forEach(function(t5) {
            Object.defineProperty(e5, t5, Object.getOwnPropertyDescriptor(n2, t5));
          });
        }
        return e5;
      }({ getItemInputValue: function(e5) {
        return e5.state.query;
      }, getItemUrl: function() {
      }, onSelect: function(e5) {
        (0, e5.setIsOpen)(false);
      }, onActive: it }, e4);
      return Promise.resolve(t3);
    }));
  });
}
function ft(e2) {
  var t2 = function(e3) {
    var t3 = e3.collections.map(function(e4) {
      return e4.items.length;
    }).reduce(function(e4, t4, n3) {
      var r3 = (e4[n3 - 1] || 0) + t4;
      return e4.push(r3), e4;
    }, []).reduce(function(t4, n3) {
      return n3 <= e3.activeItemId ? t4 + 1 : t4;
    }, 0);
    return e3.collections[t3];
  }(e2);
  if (!t2)
    return null;
  var n2 = t2.items[function(e3) {
    for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, c2 = 0; r3 === false; ) {
      var i2 = t3.collections[o2];
      if (i2 === n3) {
        r3 = true;
        break;
      }
      c2 += i2.items.length, o2++;
    }
    return t3.activeItemId - c2;
  }({ state: e2, collection: t2 })], r2 = t2.source;
  return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
}
function pt(e2, t2) {
  return e2 === t2 || e2.contains(t2);
}
function mt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function ht(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? mt(Object(n2), true).forEach(function(t3) {
      dt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : mt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function dt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function vt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return _t(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return _t(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _t(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _t(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function yt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function bt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? yt(Object(n2), true).forEach(function(t3) {
      gt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : yt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function gt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Ot(e2) {
  return (Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  })(e2);
}
function St(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Et(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? St(Object(n2), true).forEach(function(t3) {
      wt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : St(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function wt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function jt(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Pt = null;
function It(e2) {
  var t2 = e2.event, n2 = e2.nextState, r2 = n2 === void 0 ? {} : n2, o2 = e2.props, c2 = e2.query, i2 = e2.refresh, a2 = e2.store, u2 = jt(e2, ["event", "nextState", "props", "query", "refresh", "store"]);
  Pt && o2.environment.clearTimeout(Pt);
  var l2, s2 = u2.setCollections, f2 = u2.setIsOpen, p2 = u2.setQuery, m2 = u2.setActiveItemId, h2 = u2.setStatus;
  return p2(c2), m2(o2.defaultActiveItemId), c2 || o2.openOnFocus !== false ? (h2("loading"), Pt = o2.environment.setTimeout(function() {
    h2("stalled");
  }, o2.stallThreshold), o2.getSources(Et({ query: c2, refresh: i2, state: a2.getState() }, u2)).then(function(e3) {
    return h2("loading"), Promise.all(e3.map(function(e4) {
      return Promise.resolve(e4.getItems(Et({ query: c2, refresh: i2, state: a2.getState() }, u2))).then(function(t3) {
        return Ge(Array.isArray(t3), "The `getItems` function must return an array of items but returned type ".concat(JSON.stringify(Ot(t3)), ":\n\n").concat(JSON.stringify(t3, null, 2))), { source: e4, items: t3 };
      });
    })).then(function(e4) {
      var n3;
      h2("idle"), s2(e4);
      var l3 = o2.shouldPanelOpen({ state: a2.getState() });
      f2((n3 = r2.isOpen) !== null && n3 !== void 0 ? n3 : o2.openOnFocus && !c2 && l3 || l3);
      var p3 = ft(a2.getState());
      if (a2.getState().activeItemId !== null && p3) {
        var m3 = p3.item, d2 = p3.itemInputValue, v2 = p3.itemUrl, _2 = p3.source;
        _2.onActive(Et({ event: t2, item: m3, itemInputValue: d2, itemUrl: v2, refresh: i2, source: _2, state: a2.getState() }, u2));
      }
    }).finally(function() {
      Pt && o2.environment.clearTimeout(Pt);
    });
  })) : (h2("idle"), s2(a2.getState().collections.map(function(e3) {
    return Et(Et({}, e3), {}, { items: [] });
  })), f2((l2 = r2.isOpen) !== null && l2 !== void 0 ? l2 : o2.shouldPanelOpen({ state: a2.getState() })), Promise.resolve());
}
function Dt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function kt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Dt(Object(n2), true).forEach(function(t3) {
      Ct(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Dt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Ct(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function At(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Nt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function xt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Nt(Object(n2), true).forEach(function(t3) {
      Tt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Nt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Tt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Rt(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Ht(e2) {
  var t2 = e2.props, n2 = e2.refresh, r2 = e2.store, o2 = Rt(e2, ["props", "refresh", "store"]);
  return { getEnvironmentProps: function(e3) {
    var n3 = e3.inputElement, o3 = e3.formElement, c2 = e3.panelElement;
    return xt({ onTouchStart: function(e4) {
      r2.getState().isOpen !== false && e4.target !== n3 && ([o3, c2].some(function(n4) {
        return pt(n4, e4.target) || pt(n4, t2.environment.document.activeElement);
      }) === false && r2.dispatch("blur", null));
    }, onTouchMove: function(e4) {
      r2.getState().isOpen !== false && n3 === t2.environment.document.activeElement && e4.target !== n3 && n3.blur();
    } }, Rt(e3, ["inputElement", "formElement", "panelElement"]));
  }, getRootProps: function(e3) {
    return xt({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
  }, getFormProps: function(e3) {
    e3.inputElement;
    return xt({ action: "", noValidate: true, role: "search", onSubmit: function(c2) {
      var i2;
      c2.preventDefault(), t2.onSubmit(xt({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("submit", null), (i2 = e3.inputElement) === null || i2 === void 0 || i2.blur();
    }, onReset: function(c2) {
      var i2;
      c2.preventDefault(), t2.onReset(xt({ event: c2, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("reset", null), (i2 = e3.inputElement) === null || i2 === void 0 || i2.focus();
    } }, Rt(e3, ["inputElement"]));
  }, getLabelProps: function(e3) {
    return xt({ htmlFor: "".concat(t2.id, "-input"), id: "".concat(t2.id, "-label") }, e3);
  }, getInputProps: function(e3) {
    function c2(e4) {
      (t2.openOnFocus || Boolean(r2.getState().query)) && It(xt({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, o2)), r2.dispatch("focus", null);
    }
    var i2 = "ontouchstart" in t2.environment, a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l2 = u2 === void 0 ? 512 : u2, s2 = Rt(a2, ["inputElement", "maxLength"]), f2 = ft(r2.getState());
    return xt({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && r2.getState().activeItemId !== null ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: f2 != null && f2.itemUrl ? "go" : "search", spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: l2, type: "search", onChange: function(e4) {
      It(xt({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, l2), refresh: n2, store: r2 }, o2));
    }, onKeyDown: function(e4) {
      !function(e5) {
        var t3 = e5.event, n3 = e5.props, r3 = e5.refresh, o3 = e5.store, c3 = At(e5, ["event", "props", "refresh", "store"]);
        if (t3.key === "ArrowUp" || t3.key === "ArrowDown") {
          t3.preventDefault(), o3.dispatch(t3.key, null);
          var i3 = n3.environment.document.getElementById("".concat(n3.id, "-item-").concat(o3.getState().activeItemId));
          i3 && (i3.scrollIntoViewIfNeeded ? i3.scrollIntoViewIfNeeded(false) : i3.scrollIntoView(false));
          var a3 = ft(o3.getState());
          if (o3.getState().activeItemId !== null && a3) {
            var u3 = a3.item, l3 = a3.itemInputValue, s3 = a3.itemUrl, f3 = a3.source;
            f3.onActive(kt({ event: t3, item: u3, itemInputValue: l3, itemUrl: s3, refresh: r3, source: f3, state: o3.getState() }, c3));
          }
        } else if (t3.key === "Escape")
          t3.preventDefault(), o3.dispatch(t3.key, null);
        else if (t3.key === "Enter") {
          if (o3.getState().activeItemId === null || o3.getState().collections.every(function(e6) {
            return e6.items.length === 0;
          }))
            return;
          t3.preventDefault();
          var p2 = ft(o3.getState()), m2 = p2.item, h2 = p2.itemInputValue, d2 = p2.itemUrl, v2 = p2.source;
          if (t3.metaKey || t3.ctrlKey)
            d2 !== void 0 && (v2.onSelect(kt({ event: t3, item: m2, itemInputValue: h2, itemUrl: d2, refresh: r3, source: v2, state: o3.getState() }, c3)), n3.navigator.navigateNewTab({ itemUrl: d2, item: m2, state: o3.getState() }));
          else if (t3.shiftKey)
            d2 !== void 0 && (v2.onSelect(kt({ event: t3, item: m2, itemInputValue: h2, itemUrl: d2, refresh: r3, source: v2, state: o3.getState() }, c3)), n3.navigator.navigateNewWindow({ itemUrl: d2, item: m2, state: o3.getState() }));
          else if (t3.altKey)
            ;
          else {
            if (d2 !== void 0)
              return v2.onSelect(kt({ event: t3, item: m2, itemInputValue: h2, itemUrl: d2, refresh: r3, source: v2, state: o3.getState() }, c3)), void n3.navigator.navigate({ itemUrl: d2, item: m2, state: o3.getState() });
            It(kt({ event: t3, nextState: { isOpen: false }, props: n3, query: h2, refresh: r3, store: o3 }, c3)).then(function() {
              v2.onSelect(kt({ event: t3, item: m2, itemInputValue: h2, itemUrl: d2, refresh: r3, source: v2, state: o3.getState() }, c3));
            });
          }
        }
      }(xt({ event: e4, props: t2, refresh: n2, store: r2 }, o2));
    }, onFocus: c2, onBlur: function() {
      i2 || r2.dispatch("blur", null);
    }, onClick: function(n3) {
      e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || c2(n3);
    } }, s2);
  }, getPanelProps: function(e3) {
    return xt({ onMouseDown: function(e4) {
      e4.preventDefault();
    }, onMouseLeave: function() {
      r2.dispatch("mouseleave", null);
    } }, e3);
  }, getListProps: function(e3) {
    return xt({ role: "listbox", "aria-labelledby": "".concat(t2.id, "-label"), id: "".concat(t2.id, "-list") }, e3);
  }, getItemProps: function(e3) {
    var c2 = e3.item, i2 = e3.source, a2 = Rt(e3, ["item", "source"]);
    return xt({ id: "".concat(t2.id, "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
      if (c2.__autocomplete_id !== r2.getState().activeItemId) {
        r2.dispatch("mousemove", c2.__autocomplete_id);
        var t3 = ft(r2.getState());
        if (r2.getState().activeItemId !== null && t3) {
          var i3 = t3.item, a3 = t3.itemInputValue, u2 = t3.itemUrl, l2 = t3.source;
          l2.onActive(xt({ event: e4, item: i3, itemInputValue: a3, itemUrl: u2, refresh: n2, source: l2, state: r2.getState() }, o2));
        }
      }
    }, onMouseDown: function(e4) {
      e4.preventDefault();
    }, onClick: function(e4) {
      var a3 = i2.getItemInputValue({ item: c2, state: r2.getState() }), u2 = i2.getItemUrl({ item: c2, state: r2.getState() });
      (u2 ? Promise.resolve() : It(xt({ event: e4, nextState: { isOpen: false }, props: t2, query: a3, refresh: n2, store: r2 }, o2))).then(function() {
        i2.onSelect(xt({ event: e4, item: c2, itemInputValue: a3, itemUrl: u2, refresh: n2, source: i2, state: r2.getState() }, o2));
      });
    } }, a2);
  } };
}
function Mt(e2) {
  var t2 = e2.state;
  return t2.isOpen === false || t2.activeItemId === null ? null : ft(t2).itemInputValue || null;
}
function Lt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function qt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Lt(Object(n2), true).forEach(function(t3) {
      Ut(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Lt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Ut(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var Ft = function(e2, t2) {
  switch (t2.type) {
    case "setActiveItemId":
      return qt(qt({}, e2), {}, { activeItemId: t2.payload });
    case "setQuery":
      return qt(qt({}, e2), {}, { query: t2.payload, completion: null });
    case "setCollections":
      return qt(qt({}, e2), {}, { collections: t2.payload });
    case "setIsOpen":
      return qt(qt({}, e2), {}, { isOpen: t2.payload });
    case "setStatus":
      return qt(qt({}, e2), {}, { status: t2.payload });
    case "setContext":
      return qt(qt({}, e2), {}, { context: qt(qt({}, e2.context), t2.payload) });
    case "ArrowDown":
      var n2 = qt(qt({}, e2), {}, { activeItemId: ct(1, e2.activeItemId, Ye(e2), t2.props.defaultActiveItemId) });
      return qt(qt({}, n2), {}, { completion: Mt({ state: n2 }) });
    case "ArrowUp":
      var r2 = qt(qt({}, e2), {}, { activeItemId: ct(-1, e2.activeItemId, Ye(e2), t2.props.defaultActiveItemId) });
      return qt(qt({}, r2), {}, { completion: Mt({ state: r2 }) });
    case "Escape":
      return e2.isOpen ? qt(qt({}, e2), {}, { isOpen: false, completion: null }) : qt(qt({}, e2), {}, { query: "", status: "idle", collections: [] });
    case "submit":
      return qt(qt({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
    case "reset":
      return qt(qt({}, e2), {}, { activeItemId: t2.props.openOnFocus === true ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return qt(qt({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
    case "blur":
      return t2.props.debug ? e2 : qt(qt({}, e2), {}, { isOpen: false, activeItemId: null });
    case "mousemove":
      return qt(qt({}, e2), {}, { activeItemId: t2.payload });
    case "mouseleave":
      return qt(qt({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
    default:
      return Ge(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
  }
};
function Vt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function zt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Vt(Object(n2), true).forEach(function(t3) {
      Bt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Vt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Bt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Wt(e2) {
  var t2 = [], n2 = function(e3, t3) {
    var n3, r3 = typeof window != "undefined" ? window : {}, o3 = e3.plugins || [];
    return bt(bt({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, environment: r3, shouldPanelOpen: function(e4) {
      return Ye(e4.state) > 0;
    } }, e3), {}, { id: (n3 = e3.id) !== null && n3 !== void 0 ? n3 : "autocomplete-".concat(ot++), plugins: o3, initialState: bt({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
      var n4;
      (n4 = e3.onStateChange) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onStateChange) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, onSubmit: function(t4) {
      var n4;
      (n4 = e3.onSubmit) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onSubmit) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, onReset: function(t4) {
      var n4;
      (n4 = e3.onReset) === null || n4 === void 0 || n4.call(e3, t4), o3.forEach(function(e4) {
        var n5;
        return (n5 = e4.onReset) === null || n5 === void 0 ? void 0 : n5.call(e4, t4);
      });
    }, getSources: function(n4) {
      return Promise.all([].concat(vt(o3.map(function(e4) {
        return e4.getSources;
      })), [e3.getSources]).filter(Boolean).map(function(e4) {
        return st(e4, n4);
      })).then(function(e4) {
        return rt(e4);
      }).then(function(e4) {
        return e4.map(function(e5) {
          return bt(bt({}, e5), {}, { onSelect: function(n5) {
            e5.onSelect(n5), t3.forEach(function(e6) {
              var t4;
              return (t4 = e6.onSelect) === null || t4 === void 0 ? void 0 : t4.call(e6, n5);
            });
          }, onActive: function(n5) {
            e5.onActive(n5), t3.forEach(function(e6) {
              var t4;
              return (t4 = e6.onActive) === null || t4 === void 0 ? void 0 : t4.call(e6, n5);
            });
          } });
        });
      });
    }, navigator: bt({ navigate: function(e4) {
      var t4 = e4.itemUrl;
      r3.location.assign(t4);
    }, navigateNewTab: function(e4) {
      var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
      n4 == null || n4.focus();
    }, navigateNewWindow: function(e4) {
      var t4 = e4.itemUrl;
      r3.open(t4, "_blank", "noopener");
    } }, e3.navigator) });
  }(e2, t2), r2 = nt(Ft, n2, function(e3) {
    var t3 = e3.prevState, r3 = e3.state;
    n2.onStateChange(zt({ prevState: t3, state: r3, refresh: i2 }, o2));
  }), o2 = function(e3) {
    var t3 = e3.store;
    return { setActiveItemId: function(e4) {
      t3.dispatch("setActiveItemId", e4);
    }, setQuery: function(e4) {
      t3.dispatch("setQuery", e4);
    }, setCollections: function(e4) {
      var n3 = 0, r3 = e4.map(function(e5) {
        return ht(ht({}, e5), {}, { items: rt(e5.items).map(function(e6) {
          return ht(ht({}, e6), {}, { __autocomplete_id: n3++ });
        }) });
      });
      t3.dispatch("setCollections", r3);
    }, setIsOpen: function(e4) {
      t3.dispatch("setIsOpen", e4);
    }, setStatus: function(e4) {
      t3.dispatch("setStatus", e4);
    }, setContext: function(e4) {
      t3.dispatch("setContext", e4);
    } };
  }({ store: r2 }), c2 = Ht(zt({ props: n2, refresh: i2, store: r2 }, o2));
  function i2() {
    return It(zt({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, query: r2.getState().query, refresh: i2, store: r2 }, o2));
  }
  return n2.plugins.forEach(function(e3) {
    var n3;
    return (n3 = e3.subscribe) === null || n3 === void 0 ? void 0 : n3.call(e3, zt(zt({}, o2), {}, { refresh: i2, onSelect: function(e4) {
      t2.push({ onSelect: e4 });
    }, onActive: function(e4) {
      t2.push({ onActive: e4 });
    } }));
  }), zt(zt({ refresh: i2 }, c2), o2);
}
var Kt = "1.0.0-alpha.44";
function Jt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function $t(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? Jt(Object(n2), true).forEach(function(t3) {
      Qt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Jt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Qt(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Yt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Gt(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Gt(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Gt(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Gt(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Zt(e2) {
  return function(e3) {
    var t2 = e3.searchClient, n2 = e3.queries, r2 = e3.userAgents, o2 = r2 === void 0 ? [] : r2;
    return typeof t2.addAlgoliaAgent == "function" && [{ segment: "autocomplete-core", version: Kt }].concat(Yt(o2)).forEach(function(e4) {
      var n3 = e4.segment, r3 = e4.version;
      t2.addAlgoliaAgent(n3, r3);
    }), t2.search(n2.map(function(e4) {
      return { indexName: e4.indexName, query: e4.query, params: $t({ hitsPerPage: 5, highlightPreTag: "__aa-highlight__", highlightPostTag: "__/aa-highlight__" }, e4.params) };
    }));
  }({ searchClient: e2.searchClient, queries: e2.queries, userAgents: e2.userAgents }).then(function(e3) {
    return e3.results;
  });
}
function Xt() {
  return Ve.createElement("a", { href: "https://www.algolia.com/docsearch", target: "_blank", rel: "noopener noreferrer" }, Ve.createElement("span", { className: "DocSearch-Label" }, "Search by"), Ve.createElement("svg", { width: "77", height: "19" }, Ve.createElement("path", { d: "M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z", fill: "currentColor", fillRule: "evenodd" })));
}
function en() {
  return Ve.createElement(Ve.Fragment, null, Ve.createElement("div", { className: "DocSearch-Logo" }, Ve.createElement(Xt, null)), Ve.createElement("ul", { className: "DocSearch-Commands" }, Ve.createElement("li", null, Ve.createElement("span", { className: "DocSearch-Commands-Key" }, Ve.createElement(tn, null, Ve.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Ve.createElement("span", { className: "DocSearch-Label" }, "to select")), Ve.createElement("li", null, Ve.createElement("span", { className: "DocSearch-Commands-Key" }, Ve.createElement(tn, null, Ve.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Ve.createElement("span", { className: "DocSearch-Commands-Key" }, Ve.createElement(tn, null, Ve.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Ve.createElement("span", { className: "DocSearch-Label" }, "to navigate")), Ve.createElement("li", null, Ve.createElement("span", { className: "DocSearch-Commands-Key" }, Ve.createElement(tn, null, Ve.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Ve.createElement("span", { className: "DocSearch-Label" }, "to close"))));
}
function tn(e2) {
  return Ve.createElement("svg", { width: "15", height: "15" }, Ve.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
}
function nn(e2) {
  var t2 = e2.hit, n2 = e2.children;
  return Ve.createElement("a", { href: t2.url }, n2);
}
function rn() {
  return Ve.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Ve.createElement("g", { fill: "none", fillRule: "evenodd" }, Ve.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Ve.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Ve.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Ve.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function on() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ve.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Ve.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function cn() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function an() {
  return Ve.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Ve.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Ve.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
function un(e2) {
  switch (e2.type) {
    case "lvl1":
      return Ve.createElement(ln, null);
    case "content":
      return Ve.createElement(fn, null);
    default:
      return Ve.createElement(sn, null);
  }
}
function ln() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function sn() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function fn() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function pn() {
  return Ve.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Ve.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function mn() {
  return Ve.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ve.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function hn() {
  return Ve.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Ve.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function dn() {
  return Ve.createElement("div", { className: "DocSearch-ErrorScreen" }, Ve.createElement("div", { className: "DocSearch-Screen-Icon" }, Ve.createElement(mn, null)), Ve.createElement("p", { className: "DocSearch-Title" }, "Unable to fetch results"), Ve.createElement("p", { className: "DocSearch-Help" }, "You might want to check your network connection."));
}
function vn(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return _n(e3);
  }(e2) || function(e3) {
    if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return _n(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _n(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _n(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function yn(e2) {
  var t2 = e2.state.context.searchSuggestions;
  return Ve.createElement("div", { className: "DocSearch-NoResults" }, Ve.createElement("div", { className: "DocSearch-Screen-Icon" }, Ve.createElement(hn, null)), Ve.createElement("p", { className: "DocSearch-Title" }, 'No results for "', Ve.createElement("strong", null, e2.state.query), '"'), t2 && t2.length > 0 && Ve.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Ve.createElement("p", { className: "DocSearch-Help" }, "Try searching for:"), Ve.createElement("ul", null, t2.slice(0, 3).reduce(function(t3, n2) {
    return [].concat(vn(t3), [Ve.createElement("li", { key: n2 }, Ve.createElement("button", { className: "DocSearch-Prefill", key: n2, onClick: function() {
      e2.setQuery(n2.toLowerCase() + " "), e2.refresh(), e2.inputRef.current.focus();
    } }, n2))]);
  }, []))), Ve.createElement("p", { className: "DocSearch-Help" }, "Believe this query should return results?", " ", Ve.createElement("a", { href: "https://github.com/algolia/docsearch-configs/issues/new?template=Missing_results.md&title=[".concat(e2.indexName, ']+Missing+results+for+query+"').concat(e2.state.query, '"'), target: "_blank", rel: "noopener noreferrer" }, "Let us know"), "."));
}
function bn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function gn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? bn(Object(n2), true).forEach(function(t3) {
      On(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : bn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function On(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Sn(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function En(e2, t2) {
  return t2.split(".").reduce(function(e3, t3) {
    return e3 && e3[t3];
  }, e2);
}
function wn(e2) {
  var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
  return g(r2 === void 0 ? "span" : r2, gn(gn({}, Sn(e2, ["hit", "attribute", "tagName"])), {}, { dangerouslySetInnerHTML: { __html: En(t2, "_snippetResult.".concat(n2, ".value")) || En(t2, n2) } }));
}
function jn(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
      return;
    var n2 = [], r2 = true, o2 = false, c2 = void 0;
    try {
      for (var i2, a2 = e3[Symbol.iterator](); !(r2 = (i2 = a2.next()).done) && (n2.push(i2.value), !t3 || n2.length !== t3); r2 = true)
        ;
    } catch (e4) {
      o2 = true, c2 = e4;
    } finally {
      try {
        r2 || a2.return == null || a2.return();
      } finally {
        if (o2)
          throw c2;
      }
    }
    return n2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return Pn(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Pn(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Pn(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function In() {
  return (In = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Dn(e2) {
  return e2.collection && e2.collection.items.length !== 0 ? Ve.createElement("section", { className: "DocSearch-Hits" }, Ve.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Ve.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
    return Ve.createElement(kn, In({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
  }))) : null;
}
function kn(e2) {
  var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, c2 = e2.getItemProps, i2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = jn(Ve.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = jn(Ve.useState(false), 2), m2 = p2[0], h2 = p2[1], d2 = Ve.useRef(null), v2 = u2;
  return Ve.createElement("li", In({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    d2.current && d2.current();
  } }, c2({ item: t2, source: a2.source, onClick: function() {
    i2(t2);
  } })), Ve.createElement(v2, { hit: t2 }, Ve.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && t2.type === "lvl1" && Ve.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ve.createElement(wn, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Ve.createElement(wn, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && (t2.type === "lvl2" || t2.type === "lvl3" || t2.type === "lvl4" || t2.type === "lvl5" || t2.type === "lvl6") && Ve.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ve.createElement(wn, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Ve.createElement(wn, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), t2.type === "content" && Ve.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Ve.createElement(wn, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Ve.createElement(wn, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
    f2(true), d2.current = e3;
  }, runFavoriteTransition: function(e3) {
    h2(true), d2.current = e3;
  } }))));
}
function Cn() {
  return (Cn = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function An(e2) {
  return Ve.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2, n2) {
    if (t2.items.length === 0)
      return null;
    var r2 = t2.items[0].hierarchy.lvl0;
    return Ve.createElement(Dn, Cn({}, e2, { key: n2, title: r2, collection: t2, renderIcon: function(e3) {
      var n3, r3 = e3.item, o2 = e3.index;
      return Ve.createElement(Ve.Fragment, null, r3.__docsearch_parent && Ve.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Ve.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r3.__docsearch_parent !== ((n3 = t2.items[o2 + 1]) === null || n3 === void 0 ? void 0 : n3.__docsearch_parent) ? Ve.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Ve.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Ve.createElement("div", { className: "DocSearch-Hit-icon" }, Ve.createElement(un, { type: r3.type })));
    }, renderAction: function() {
      return Ve.createElement("div", { className: "DocSearch-Hit-action" }, Ve.createElement(an, null));
    } }));
  }), e2.resultsFooterComponent && Ve.createElement("section", { className: "DocSearch-HitsFooter" }, Ve.createElement(e2.resultsFooterComponent, { state: e2.state })));
}
function Nn() {
  return (Nn = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function xn(e2) {
  return e2.state.status === "idle" && e2.hasCollections === false ? e2.disableUserPersonalization ? null : Ve.createElement("div", { className: "DocSearch-StartScreen" }, Ve.createElement("p", { className: "DocSearch-Help" }, "No recent searches")) : e2.hasCollections === false ? null : Ve.createElement("div", { className: "DocSearch-Dropdown-Container" }, Ve.createElement(Dn, Nn({}, e2, { title: "Recent", collection: e2.state.collections[0], renderIcon: function() {
    return Ve.createElement("div", { className: "DocSearch-Hit-icon" }, Ve.createElement(on, null));
  }, renderAction: function(t2) {
    var n2 = t2.item, r2 = t2.runFavoriteTransition, o2 = t2.runDeleteTransition;
    return Ve.createElement(Ve.Fragment, null, Ve.createElement("div", { className: "DocSearch-Hit-action" }, Ve.createElement("button", { className: "DocSearch-Hit-action-button", title: "Save this search", onClick: function(t3) {
      t3.preventDefault(), t3.stopPropagation(), r2(function() {
        e2.favoriteSearches.add(n2), e2.recentSearches.remove(n2), e2.refresh();
      });
    } }, Ve.createElement(pn, null))), Ve.createElement("div", { className: "DocSearch-Hit-action" }, Ve.createElement("button", { className: "DocSearch-Hit-action-button", title: "Remove this search from history", onClick: function(t3) {
      t3.preventDefault(), t3.stopPropagation(), o2(function() {
        e2.recentSearches.remove(n2), e2.refresh();
      });
    } }, Ve.createElement(cn, null))));
  } })), Ve.createElement(Dn, Nn({}, e2, { title: "Favorites", collection: e2.state.collections[1], renderIcon: function() {
    return Ve.createElement("div", { className: "DocSearch-Hit-icon" }, Ve.createElement(pn, null));
  }, renderAction: function(t2) {
    var n2 = t2.item, r2 = t2.runDeleteTransition;
    return Ve.createElement("div", { className: "DocSearch-Hit-action" }, Ve.createElement("button", { className: "DocSearch-Hit-action-button", title: "Remove this search from favorites", onClick: function(t3) {
      t3.preventDefault(), t3.stopPropagation(), r2(function() {
        e2.favoriteSearches.remove(n2), e2.refresh();
      });
    } }, Ve.createElement(cn, null)));
  } })));
}
function Tn() {
  return (Tn = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var Rn = Ve.memo(function(e2) {
  if (e2.state.status === "error")
    return Ve.createElement(dn, null);
  var t2 = e2.state.collections.some(function(e3) {
    return e3.items.length > 0;
  });
  return e2.state.query ? t2 === false ? Ve.createElement(yn, e2) : Ve.createElement(An, e2) : Ve.createElement(xn, Tn({}, e2, { hasCollections: t2 }));
}, function(e2, t2) {
  return t2.state.status === "loading" || t2.state.status === "stalled";
});
function Hn() {
  return (Hn = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Mn(e2) {
  var t2 = e2.getFormProps({ inputElement: e2.inputRef.current }).onReset;
  return Ve.useEffect(function() {
    e2.autoFocus && e2.inputRef.current && e2.inputRef.current.focus();
  }, [e2.autoFocus, e2.inputRef]), Ve.useEffect(function() {
    e2.isFromSelection && e2.inputRef.current && e2.inputRef.current.select();
  }, [e2.isFromSelection, e2.inputRef]), Ve.createElement(Ve.Fragment, null, Ve.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
    e3.preventDefault();
  }, onReset: t2 }, Ve.createElement("label", Hn({ className: "DocSearch-MagnifierLabel" }, e2.getLabelProps()), Ve.createElement(Be, null)), Ve.createElement("div", { className: "DocSearch-LoadingIndicator" }, Ve.createElement(rn, null)), Ve.createElement("input", Hn({ className: "DocSearch-Input", ref: e2.inputRef }, e2.getInputProps({ inputElement: e2.inputRef.current, autoFocus: e2.autoFocus, maxLength: 64 }))), Ve.createElement("button", { type: "reset", title: "Clear the query", className: "DocSearch-Reset", hidden: !e2.state.query }, Ve.createElement(cn, null))), Ve.createElement("button", { className: "DocSearch-Cancel", onClick: e2.onClose }, "Cancel"));
}
function Ln(e2, t2) {
  if (e2 == null)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (e3 == null)
      return {};
    var n3, r3, o3 = {}, c3 = Object.keys(e3);
    for (r3 = 0; r3 < c3.length; r3++)
      n3 = c3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var c2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < c2.length; r2++)
      n2 = c2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function qn(e2) {
  return function() {
    var e3 = "__TEST_KEY__";
    try {
      return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
    } catch (e4) {
      return false;
    }
  }() === false ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t2) {
    return window.localStorage.setItem(e2, JSON.stringify(t2));
  }, getItem: function() {
    var t2 = window.localStorage.getItem(e2);
    return t2 ? JSON.parse(t2) : [];
  } };
}
function Un(e2) {
  var t2 = e2.key, n2 = e2.limit, r2 = n2 === void 0 ? 5 : n2, o2 = qn(t2), c2 = o2.getItem().slice(0, r2);
  return { add: function(e3) {
    var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, Ln(t3, ["_highlightResult", "_snippetResult"])), i2 = c2.findIndex(function(e4) {
      return e4.objectID === n3.objectID;
    });
    i2 > -1 && c2.splice(i2, 1), c2.unshift(n3), c2 = c2.slice(0, r2), o2.setItem(c2);
  }, remove: function(e3) {
    c2 = c2.filter(function(t3) {
      return t3.objectID !== e3.objectID;
    }), o2.setItem(c2);
  }, getAll: function() {
    return c2;
  } };
}
function Fn(e2) {
  var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
    return t2 === void 0 && (t2 = e2.localStorage || window.localStorage), t2;
  }, o2 = function() {
    return JSON.parse(r2().getItem(n2) || "{}");
  };
  return { get: function(e3, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      var n4 = JSON.stringify(e3), r3 = o2()[n4];
      return Promise.all([r3 || t3(), r3 !== void 0]);
    }).then(function(e4) {
      var t4 = i(e4, 2), r3 = t4[0], o3 = t4[1];
      return Promise.all([r3, o3 || n3.miss(r3)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve().then(function() {
      var c2 = o2();
      return c2[JSON.stringify(e3)] = t3, r2().setItem(n2, JSON.stringify(c2)), t3;
    });
  }, delete: function(e3) {
    return Promise.resolve().then(function() {
      var t3 = o2();
      delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r2().removeItem(n2);
    });
  } };
}
function Vn(e2) {
  var t2 = a(e2.caches), n2 = t2.shift();
  return n2 === void 0 ? { get: function(e3, t3) {
    var n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, r2 = t3();
    return r2.then(function(e4) {
      return Promise.all([e4, n3.miss(e4)]);
    }).then(function(e4) {
      return i(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve(t3);
  }, delete: function(e3) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(e3, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n2.get(e3, r2, o2).catch(function() {
      return Vn({ caches: t2 }).get(e3, r2, o2);
    });
  }, set: function(e3, r2) {
    return n2.set(e3, r2).catch(function() {
      return Vn({ caches: t2 }).set(e3, r2);
    });
  }, delete: function(e3) {
    return n2.delete(e3).catch(function() {
      return Vn({ caches: t2 }).delete(e3);
    });
  }, clear: function() {
    return n2.clear().catch(function() {
      return Vn({ caches: t2 }).clear();
    });
  } };
}
function zn() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { serializable: true }, t2 = {};
  return { get: function(n2, r2) {
    var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, c2 = JSON.stringify(n2);
    if (c2 in t2)
      return Promise.resolve(e2.serializable ? JSON.parse(t2[c2]) : t2[c2]);
    var i2 = r2(), a2 = o2 && o2.miss || function() {
      return Promise.resolve();
    };
    return i2.then(function(e3) {
      return a2(e3);
    }).then(function() {
      return i2;
    });
  }, set: function(n2, r2) {
    return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
  }, delete: function(e3) {
    return delete t2[JSON.stringify(e3)], Promise.resolve();
  }, clear: function() {
    return t2 = {}, Promise.resolve();
  } };
}
function Bn(e2) {
  for (var t2 = e2.length - 1; t2 > 0; t2--) {
    var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
    e2[t2] = e2[n2], e2[n2] = r2;
  }
  return e2;
}
function Wn(e2, t2) {
  return t2 ? (Object.keys(t2).forEach(function(n2) {
    e2[n2] = t2[n2](e2);
  }), e2) : e2;
}
function Kn(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = 0;
  return e2.replace(/%s/g, function() {
    return encodeURIComponent(n2[o2++]);
  });
}
var Jn = { WithinQueryParameters: 0, WithinHeaders: 1 };
function $n(e2, t2) {
  var n2 = e2 || {}, r2 = n2.data || {};
  return Object.keys(n2).forEach(function(e3) {
    ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) === -1 && (r2[e3] = n2[e3]);
  }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
}
var Qn = { Read: 1, Write: 2, Any: 3 }, Yn = 1, Gn = 2, Zn = 3;
function Xn(e2) {
  var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yn;
  return o(o({}, e2), {}, { status: t2, lastUpdate: Date.now() });
}
function er(e2) {
  return typeof e2 == "string" ? { protocol: "https", url: e2, accept: Qn.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || Qn.Any };
}
var tr = "GET", nr = "POST";
function rr(e2, t2) {
  return Promise.all(t2.map(function(t3) {
    return e2.get(t3, function() {
      return Promise.resolve(Xn(t3));
    });
  })).then(function(e3) {
    var n2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === Yn || Date.now() - e5.lastUpdate > 12e4;
      }(e4);
    }), r2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === Zn && Date.now() - e5.lastUpdate <= 12e4;
      }(e4);
    }), o2 = [].concat(a(n2), a(r2));
    return { getTimeout: function(e4, t3) {
      return (r2.length === 0 && e4 === 0 ? 1 : r2.length + 3 + e4) * t3;
    }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
      return er(e4);
    }) : t2 };
  });
}
function or(e2, t2, n2, r2) {
  var c2 = [], i2 = function(e3, t3) {
    if (e3.method === tr || e3.data === void 0 && t3.data === void 0)
      return;
    var n3 = Array.isArray(e3.data) ? e3.data : o(o({}, e3.data), t3.data);
    return JSON.stringify(n3);
  }(n2, r2), u2 = function(e3, t3) {
    var n3 = o(o({}, e3.headers), t3.headers), r3 = {};
    return Object.keys(n3).forEach(function(e4) {
      var t4 = n3[e4];
      r3[e4.toLowerCase()] = t4;
    }), r3;
  }(e2, r2), l2 = n2.method, s2 = n2.method !== tr ? {} : o(o({}, n2.data), r2.data), f2 = o(o(o({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), r2.queryParameters), p2 = 0, m2 = function t3(o2, a2) {
    var s3 = o2.pop();
    if (s3 === void 0)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: ur(c2) };
    var m3 = { data: i2, headers: u2, method: l2, url: ir(s3, n2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, r2.timeout) }, h2 = function(e3) {
      var t4 = { request: m3, response: e3, host: s3, triesLeft: o2.length };
      return c2.push(t4), t4;
    }, d2 = { onSucess: function(e3) {
      return function(e4) {
        try {
          return JSON.parse(e4.content);
        } catch (t4) {
          throw function(e5, t5) {
            return { name: "DeserializationError", message: e5, response: t5 };
          }(t4.message, e4);
        }
      }(e3);
    }, onRetry: function(n3) {
      var r3 = h2(n3);
      return n3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", lr(r3)), e2.hostsCache.set(s3, Xn(s3, n3.isTimedOut ? Zn : Gn))]).then(function() {
        return t3(o2, a2);
      });
    }, onFail: function(e3) {
      throw h2(e3), function(e4, t4) {
        var n3 = e4.content, r3 = e4.status, o3 = n3;
        try {
          o3 = JSON.parse(n3).message;
        } catch (e5) {
        }
        return function(e5, t5, n4) {
          return { name: "ApiError", message: e5, status: t5, transporterStackTrace: n4 };
        }(o3, r3, t4);
      }(e3, ur(c2));
    } };
    return e2.requester.send(m3).then(function(e3) {
      return function(e4, t4) {
        return function(e5) {
          var t5 = e5.status;
          return e5.isTimedOut || function(e6) {
            var t6 = e6.isTimedOut, n3 = e6.status;
            return !t6 && ~~n3 == 0;
          }(e5) || ~~(t5 / 100) != 2 && ~~(t5 / 100) != 4;
        }(e4) ? t4.onRetry(e4) : ~~(e4.status / 100) == 2 ? t4.onSucess(e4) : t4.onFail(e4);
      }(e3, d2);
    });
  };
  return rr(e2.hostsCache, t2).then(function(e3) {
    return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
  });
}
function cr(e2) {
  var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
    var n2 = "; ".concat(e3.segment).concat(e3.version !== void 0 ? " (".concat(e3.version, ")") : "");
    return t2.value.indexOf(n2) === -1 && (t2.value = "".concat(t2.value).concat(n2)), t2;
  } };
  return t2;
}
function ir(e2, t2, n2) {
  var r2 = ar(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat(t2.charAt(0) === "/" ? t2.substr(1) : t2);
  return r2.length && (o2 += "?".concat(r2)), o2;
}
function ar(e2) {
  return Object.keys(e2).map(function(t2) {
    return Kn("%s=%s", t2, (n2 = e2[t2], Object.prototype.toString.call(n2) === "[object Object]" || Object.prototype.toString.call(n2) === "[object Array]" ? JSON.stringify(e2[t2]) : e2[t2]));
    var n2;
  }).join("&");
}
function ur(e2) {
  return e2.map(function(e3) {
    return lr(e3);
  });
}
function lr(e2) {
  var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return o(o({}, e2), {}, { request: o(o({}, e2.request), {}, { headers: o(o({}, e2.request.headers), t2) }) });
}
var sr = function(e2) {
  var t2 = e2.appId, n2 = function(e3, t3, n3) {
    var r3 = { "x-algolia-api-key": n3, "x-algolia-application-id": t3 };
    return { headers: function() {
      return e3 === Jn.WithinHeaders ? r3 : {};
    }, queryParameters: function() {
      return e3 === Jn.WithinQueryParameters ? r3 : {};
    } };
  }(e2.authMode !== void 0 ? e2.authMode : Jn.WithinHeaders, t2, e2.apiKey), r2 = function(e3) {
    var t3 = e3.hostsCache, n3 = e3.logger, r3 = e3.requester, o2 = e3.requestsCache, c2 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t3, logger: n3, requester: r3, requestsCache: o2, responsesCache: c2, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
      return er(e4);
    }), read: function(e4, t4) {
      var n4 = $n(t4, f2.timeouts.read), r4 = function() {
        return or(f2, f2.hosts.filter(function(e5) {
          return (e5.accept & Qn.Read) != 0;
        }), e4, n4);
      };
      if ((n4.cacheable !== void 0 ? n4.cacheable : e4.cacheable) !== true)
        return r4();
      var o3 = { request: e4, mappedRequestOptions: n4, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
      return f2.responsesCache.get(o3, function() {
        return f2.requestsCache.get(o3, function() {
          return f2.requestsCache.set(o3, r4()).then(function(e5) {
            return Promise.all([f2.requestsCache.delete(o3), e5]);
          }, function(e5) {
            return Promise.all([f2.requestsCache.delete(o3), Promise.reject(e5)]);
          }).then(function(e5) {
            var t5 = i(e5, 2);
            t5[0];
            return t5[1];
          });
        });
      }, { miss: function(e5) {
        return f2.responsesCache.set(o3, e5);
      } });
    }, write: function(e4, t4) {
      return or(f2, f2.hosts.filter(function(e5) {
        return (e5.accept & Qn.Write) != 0;
      }), e4, $n(t4, f2.timeouts.write));
    } };
    return f2;
  }(o(o({ hosts: [{ url: "".concat(t2, "-dsn.algolia.net"), accept: Qn.Read }, { url: "".concat(t2, ".algolia.net"), accept: Qn.Write }].concat(Bn([{ url: "".concat(t2, "-1.algolianet.com") }, { url: "".concat(t2, "-2.algolianet.com") }, { url: "".concat(t2, "-3.algolianet.com") }])) }, e2), {}, { headers: o(o(o({}, n2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: o(o({}, n2.queryParameters()), e2.queryParameters) }));
  return Wn({ transporter: r2, appId: t2, addAlgoliaAgent: function(e3, t3) {
    r2.userAgent.add({ segment: e3, version: t3 });
  }, clearCache: function() {
    return Promise.all([r2.requestsCache.clear(), r2.responsesCache.clear()]).then(function() {
    });
  } }, e2.methods);
}, fr = function(e2) {
  return function(t2) {
    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
    return Wn(r2, n2.methods);
  };
}, pr = function(e2) {
  return function(t2, n2) {
    var r2 = t2.map(function(e3) {
      return o(o({}, e3), {}, { params: ar(e3.params || {}) });
    });
    return e2.transporter.read({ method: nr, path: "1/indexes/*/queries", data: { requests: r2 }, cacheable: true }, n2);
  };
}, mr = function(e2) {
  return function(t2, n2) {
    return Promise.all(t2.map(function(t3) {
      var r2 = t3.params, i2 = r2.facetName, a2 = r2.facetQuery, u2 = c$1(r2, ["facetName", "facetQuery"]);
      return fr(e2)(t3.indexName, { methods: { searchForFacetValues: vr } }).searchForFacetValues(i2, a2, o(o({}, n2), u2));
    }));
  };
}, hr = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: nr, path: Kn("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
  };
}, dr = function(e2) {
  return function(t2, n2) {
    return e2.transporter.read({ method: nr, path: Kn("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
  };
}, vr = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: nr, path: Kn("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
  };
}, _r = 1, yr = 2, br = 3;
function gr(e2, t2, n2) {
  var r2, c2 = { appId: e2, apiKey: t2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
    return new Promise(function(t3) {
      var n3 = new XMLHttpRequest();
      n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t4) {
        return n3.setRequestHeader(t4, e3.headers[t4]);
      });
      var r3, o2 = function(e4, r4) {
        return setTimeout(function() {
          n3.abort(), t3({ status: 0, content: r4, isTimedOut: true });
        }, 1e3 * e4);
      }, c3 = o2(e3.connectTimeout, "Connection timeout");
      n3.onreadystatechange = function() {
        n3.readyState > n3.OPENED && r3 === void 0 && (clearTimeout(c3), r3 = o2(e3.responseTimeout, "Socket timeout"));
      }, n3.onerror = function() {
        n3.status === 0 && (clearTimeout(c3), clearTimeout(r3), t3({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
      }, n3.onload = function() {
        clearTimeout(c3), clearTimeout(r3), t3({ content: n3.responseText, status: n3.status, isTimedOut: false });
      }, n3.send(e3.data);
    });
  } }, logger: (r2 = br, { debug: function(e3, t3) {
    return _r >= r2 && console.debug(e3, t3), Promise.resolve();
  }, info: function(e3, t3) {
    return yr >= r2 && console.info(e3, t3), Promise.resolve();
  }, error: function(e3, t3) {
    return console.error(e3, t3), Promise.resolve();
  } }), responsesCache: zn(), requestsCache: zn({ serializable: false }), hostsCache: Vn({ caches: [Fn({ key: "".concat("4.8.5", "-").concat(e2) }), zn()] }), userAgent: cr("4.8.5").add({ segment: "Browser", version: "lite" }), authMode: Jn.WithinQueryParameters };
  return sr(o(o(o({}, c2), n2), {}, { methods: { search: pr, searchForFacetValues: mr, multipleQueries: pr, multipleSearchForFacetValues: mr, initIndex: function(e3) {
    return function(t3) {
      return fr(e3)(t3, { methods: { search: dr, searchForFacetValues: vr, findAnswers: hr } });
    };
  } } }));
}
gr.version = "4.8.5";
function Or(e2, t2) {
  return e2.reduce(function(e3, n2) {
    var r2 = t2(n2);
    return e3.hasOwnProperty(r2) || (e3[r2] = []), e3[r2].length < 5 && e3[r2].push(n2), e3;
  }, {});
}
function Sr(e2) {
  return e2;
}
function Er() {
}
function wr() {
  return (wr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function jr(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Pr(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? jr(Object(n2), true).forEach(function(t3) {
      Ir(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : jr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Ir(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Dr(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
      return;
    var n2 = [], r2 = true, o2 = false, c2 = void 0;
    try {
      for (var i2, a2 = e3[Symbol.iterator](); !(r2 = (i2 = a2.next()).done) && (n2.push(i2.value), !t3 || n2.length !== t3); r2 = true)
        ;
    } catch (e4) {
      o2 = true, c2 = e4;
    } finally {
      try {
        r2 || a2.return == null || a2.return();
      } finally {
        if (o2)
          throw c2;
      }
    }
    return n2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return kr(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return kr(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function kr(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Cr(e2) {
  var t2 = e2.appId, n2 = t2 === void 0 ? "BH4D9OD16A" : t2, r2 = e2.apiKey, o2 = e2.indexName, c2 = e2.placeholder, i2 = c2 === void 0 ? "Search docs" : c2, a2 = e2.searchParameters, u2 = e2.onClose, l2 = u2 === void 0 ? Er : u2, s2 = e2.transformItems, f2 = s2 === void 0 ? Sr : s2, p2 = e2.hitComponent, m2 = p2 === void 0 ? nn : p2, h2 = e2.resultsFooterComponent, d2 = h2 === void 0 ? function() {
    return null;
  } : h2, v2 = e2.navigator, _2 = e2.initialScrollY, y2 = _2 === void 0 ? 0 : _2, b2 = e2.transformSearchClient, g2 = b2 === void 0 ? Sr : b2, O2 = e2.disableUserPersonalization, S2 = O2 !== void 0 && O2, E2 = e2.initialQuery, w2 = E2 === void 0 ? "" : E2, j2 = Dr(Ve.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), P2 = j2[0], I2 = j2[1], D2 = Ve.useRef(null), k2 = Ve.useRef(null), C2 = Ve.useRef(null), A2 = Ve.useRef(null), N2 = Ve.useRef(null), x2 = Ve.useRef(10), T2 = Ve.useRef(typeof window != "undefined" ? window.getSelection().toString().slice(0, 64) : "").current, R2 = Ve.useRef(w2 || T2).current, H2 = function(e3, t3, n3) {
    return Ve.useMemo(function() {
      var r3 = gr(e3, t3);
      return r3.addAlgoliaAgent("docsearch", "3.0.0-alpha.34"), /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) === false && r3.addAlgoliaAgent("docsearch-react", "3.0.0-alpha.34"), n3(r3);
    }, [e3, t3, n3]);
  }(n2, r2, g2), M2 = Ve.useRef(Un({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(o2), limit: 10 })).current, L2 = Ve.useRef(Un({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(o2), limit: M2.getAll().length === 0 ? 7 : 4 })).current, q2 = Ve.useCallback(function(e3) {
    if (!S2) {
      var t3 = e3.type === "content" ? e3.__docsearch_parent : e3;
      t3 && M2.getAll().findIndex(function(e4) {
        return e4.objectID === t3.objectID;
      }) === -1 && L2.add(t3);
    }
  }, [M2, L2, S2]), U2 = Ve.useMemo(function() {
    return Wt({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: R2, context: { searchSuggestions: [] } }, navigator: v2, onStateChange: function(e3) {
      var t3 = e3.state;
      I2(t3);
    }, getSources: function(e3) {
      var t3 = e3.query, n3 = e3.state, r3 = e3.setContext, c3 = e3.setStatus;
      return t3 ? Zt({ searchClient: H2, queries: [{ indexName: o2, query: t3, params: Pr({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(x2.current), "hierarchy.lvl2:".concat(x2.current), "hierarchy.lvl3:".concat(x2.current), "hierarchy.lvl4:".concat(x2.current), "hierarchy.lvl5:".concat(x2.current), "hierarchy.lvl6:".concat(x2.current), "content:".concat(x2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20 }, a2) }] }).catch(function(e4) {
        throw e4.name === "RetryError" && c3("error"), e4;
      }).then(function(e4) {
        var t4 = e4[0].hits, o3 = e4[0].nbHits, c4 = Or(t4, function(e5) {
          return e5.hierarchy.lvl0;
        });
        return n3.context.searchSuggestions.length < Object.keys(c4).length && r3({ searchSuggestions: Object.keys(c4) }), r3({ nbHits: o3 }), Object.values(c4).map(function(e5, t5) {
          return { sourceId: "hits".concat(t5), onSelect: function(e6) {
            var t6 = e6.item, n4 = e6.event;
            q2(t6), n4.shiftKey || n4.ctrlKey || n4.metaKey || l2();
          }, getItemUrl: function(e6) {
            return e6.item.url;
          }, getItems: function() {
            return Object.values(Or(e5, function(e6) {
              return e6.hierarchy.lvl1;
            })).map(f2).map(function(e6) {
              return e6.map(function(t6) {
                return Pr(Pr({}, t6), {}, { __docsearch_parent: t6.type !== "lvl1" && e6.find(function(e7) {
                  return e7.type === "lvl1" && e7.hierarchy.lvl1 === t6.hierarchy.lvl1;
                }) });
              });
            }).flat();
          } };
        });
      }) : S2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
        var t4 = e4.item, n4 = e4.event;
        q2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || l2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return L2.getAll();
      } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
        var t4 = e4.item, n4 = e4.event;
        q2(t4), n4.shiftKey || n4.ctrlKey || n4.metaKey || l2();
      }, getItemUrl: function(e4) {
        return e4.item.url;
      }, getItems: function() {
        return M2.getAll();
      } }];
    } });
  }, [o2, a2, H2, l2, L2, M2, q2, R2, i2, v2, f2, S2]), F2 = U2.getEnvironmentProps, V2 = U2.getRootProps, z2 = U2.refresh;
  return function(e3) {
    var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
    Ve.useEffect(function() {
      if (n3 && r3 && o3) {
        var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), c3 = e4.onTouchStart, i3 = e4.onTouchMove;
        return window.addEventListener("touchstart", c3), window.addEventListener("touchmove", i3), function() {
          window.removeEventListener("touchstart", c3), window.removeEventListener("touchmove", i3);
        };
      }
    }, [t3, n3, r3, o3]);
  }({ getEnvironmentProps: F2, panelElement: A2.current, formElement: C2.current, inputElement: N2.current }), function(e3) {
    var t3 = e3.container;
    Ve.useEffect(function() {
      if (t3) {
        var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
        return t3.addEventListener("keydown", o3), function() {
          t3.removeEventListener("keydown", o3);
        };
      }
      function o3(e5) {
        e5.key === "Tab" && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
      }
    }, [t3]);
  }({ container: D2.current }), Ve.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var e3, t3;
      document.body.classList.remove("DocSearch--active"), (e3 = (t3 = window).scrollTo) === null || e3 === void 0 || e3.call(t3, 0, y2);
    };
  }, []), Ve.useEffect(function() {
    window.matchMedia("(max-width: 750px)").matches && (x2.current = 5);
  }, []), Ve.useEffect(function() {
    A2.current && (A2.current.scrollTop = 0);
  }, [P2.query]), Ve.useEffect(function() {
    R2.length > 0 && (z2(), N2.current && N2.current.focus());
  }, [R2, z2]), Ve.useEffect(function() {
    function e3() {
      if (k2.current) {
        var e4 = 0.01 * window.innerHeight;
        k2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
      }
    }
    return e3(), window.addEventListener("resize", e3), function() {
      window.removeEventListener("resize", e3);
    };
  }, []), Ve.createElement("div", wr({ ref: D2 }, V2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", P2.status === "stalled" && "DocSearch-Container--Stalled", P2.status === "error" && "DocSearch-Container--Errored"].filter(Boolean).join(" "), onMouseDown: function(e3) {
    e3.target === e3.currentTarget && l2();
  } }), Ve.createElement("div", { className: "DocSearch-Modal", ref: k2 }, Ve.createElement("header", { className: "DocSearch-SearchBar", ref: C2 }, Ve.createElement(Mn, wr({}, U2, { state: P2, autoFocus: R2.length === 0, onClose: l2, inputRef: N2, isFromSelection: Boolean(R2) && R2 === T2 }))), Ve.createElement("div", { className: "DocSearch-Dropdown", ref: A2 }, Ve.createElement(Rn, wr({}, U2, { indexName: o2, state: P2, hitComponent: m2, resultsFooterComponent: d2, disableUserPersonalization: S2, recentSearches: L2, favoriteSearches: M2, onItemClick: function(e3) {
    q2(e3), l2();
  }, inputRef: N2 }))), Ve.createElement("footer", { className: "DocSearch-Footer" }, Ve.createElement(en, null))));
}
function Ar() {
  return (Ar = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function Nr(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
      return;
    var n2 = [], r2 = true, o2 = false, c2 = void 0;
    try {
      for (var i2, a2 = e3[Symbol.iterator](); !(r2 = (i2 = a2.next()).done) && (n2.push(i2.value), !t3 || n2.length !== t3); r2 = true)
        ;
    } catch (e4) {
      o2 = true, c2 = e4;
    } finally {
      try {
        r2 || a2.return == null || a2.return();
      } finally {
        if (o2)
          throw c2;
      }
    }
    return n2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if (typeof e3 == "string")
      return xr(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
    if (n2 === "Map" || n2 === "Set")
      return Array.from(e3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return xr(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function xr(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Tr(e2) {
  var t2 = Ve.useRef(null), n2 = Nr(Ve.useState(false), 2), r2 = n2[0], o2 = n2[1], c2 = Nr(Ve.useState(void 0), 2), i2 = c2[0], a2 = c2[1], u2 = Ve.useCallback(function() {
    o2(true);
  }, [o2]), l2 = Ve.useCallback(function() {
    o2(false);
  }, [o2]);
  return function(e3) {
    var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, c3 = e3.searchButtonRef;
    Ve.useEffect(function() {
      function e4(e5) {
        (e5.keyCode === 27 && t3 || e5.key === "k" && (e5.metaKey || e5.ctrlKey) || !function(e6) {
          var t4 = e6.target, n4 = t4.tagName;
          return t4.isContentEditable || n4 === "INPUT" || n4 === "SELECT" || n4 === "TEXTAREA";
        }(e5) && e5.key === "/" && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), c3 && c3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
      }
      return window.addEventListener("keydown", e4), function() {
        window.removeEventListener("keydown", e4);
      };
    }, [t3, n3, r3, o3, c3]);
  }({ isOpen: r2, onOpen: u2, onClose: l2, onInput: Ve.useCallback(function(e3) {
    o2(true), a2(e3.key);
  }, [o2, a2]), searchButtonRef: t2 }), Ve.createElement(Ve.Fragment, null, Ve.createElement(Qe, { onClick: u2, ref: t2 }), r2 && Ie(Ve.createElement(Cr, Ar({}, e2, { initialScrollY: window.scrollY, initialQuery: i2, onClose: l2 })), document.body));
}
function docsearch(e2) {
  Ae(Ve.createElement(Tr, n$1({}, e2, { transformSearchClient: function(t2) {
    return t2.addAlgoliaAgent("docsearch.js", "3.0.0-alpha.34"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
  } })), function(e3) {
    var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
    return typeof e3 == "string" ? t2.document.querySelector(e3) : e3;
  }(e2.container, e2.environment));
}
var n, l, u, c = [];
function v(l2, u2, i2) {
  var t2, o2, r2, f2 = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f2[r2] = u2[r2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f2[r2] === void 0 && (f2[r2] = l2.defaultProps[r2]);
  return y(l2, f2, t2, o2, null);
}
function y(n2, i2, t2, o2, r2) {
  var f2 = { type: n2, props: i2, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u : r2 };
  return l.vnode != null && l.vnode(f2), f2;
}
n = c.slice, l = { __e: function(n2, l2) {
  for (var u2, i2, t2; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
          return u2.__E = u2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
const isSpecialClick = (event) => event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
const useDocsearchShim = () => {
  const router = vueRouter.useRouter();
  const site = useSiteData();
  return {
    transformItems: (items) => items.map((item) => __spreadProps(__spreadValues({}, item), {
      url: shared.resolveRoutePathFromUrl(item.url, site.value.base)
    })),
    hitComponent: ({ hit, children }) => v("a", {
      href: hit.url,
      onClick: (event) => {
        if (isSpecialClick(event)) {
          return;
        }
        event.preventDefault();
        router.push(hit.url);
      }
    }, children),
    navigator: {
      navigate: ({ itemUrl }) => {
        router.push(itemUrl);
      }
    }
  };
};
var style = '/*! @docsearch/css 3.0.0-alpha.34 | MIT License | \xA9 Algolia, Inc. and contributors | https://docsearch.algolia.com */\n:root{--docsearch-primary-color:#5468ff;--docsearch-text-color:#1c1e21;--docsearch-spacing:12px;--docsearch-icon-stroke-width:1.4;--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-muted-color:#969faf;--docsearch-container-background:rgba(101,108,133,0.8);--docsearch-logo-color:#5468ff;--docsearch-modal-width:560px;--docsearch-modal-height:600px;--docsearch-modal-background:#f5f6f7;--docsearch-modal-shadow:inset 1px 1px 0 0 hsla(0,0%,100%,0.5),0 3px 8px 0 #555a64;--docsearch-searchbox-height:56px;--docsearch-searchbox-background:#ebedf0;--docsearch-searchbox-focus-background:#fff;--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-hit-height:56px;--docsearch-hit-color:#444950;--docsearch-hit-active-color:#fff;--docsearch-hit-background:#fff;--docsearch-hit-shadow:0 1px 3px 0 #d4d9e1;--docsearch-key-gradient:linear-gradient(-225deg,#d5dbe4,#f8f8f8);--docsearch-key-shadow:inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,0.4);--docsearch-footer-height:44px;--docsearch-footer-background:#fff;--docsearch-footer-shadow:0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,0.12)}html[data-theme=dark]{--docsearch-text-color:#f5f6f7;--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:#15172a;--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:#090a11;--docsearch-searchbox-focus-background:#000;--docsearch-hit-color:#bec3c9;--docsearch-hit-shadow:none;--docsearch-hit-background:#090a11;--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:#1e2136;--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:#7f8497}.DocSearch-Button{align-items:center;background:var(--docsearch-searchbox-background);border:0;border-radius:40px;color:var(--docsearch-muted-color);cursor:pointer;display:flex;font-weight:500;height:36px;justify-content:space-between;margin:0 0 0 16px;padding:0 8px;user-select:none}.DocSearch-Button:active,.DocSearch-Button:focus,.DocSearch-Button:hover{background:var(--docsearch-searchbox-focus-background);box-shadow:var(--docsearch-searchbox-shadow);color:var(--docsearch-text-color);outline:none}.DocSearch-Button-Container{align-items:center;display:flex}.DocSearch-Search-Icon{stroke-width:1.6}.DocSearch-Button .DocSearch-Search-Icon{color:var(--docsearch-text-color)}.DocSearch-Button-Placeholder{font-size:1rem;padding:0 12px 0 6px}.DocSearch-Button-Keys{display:flex}.DocSearch-Button-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:3px;box-shadow:var(--docsearch-key-shadow);color:var(--docsearch-muted-color);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:2px;position:relative;top:-1px;width:20px}@media (max-width:750px){.DocSearch-Button-Key,.DocSearch-Button-KeySeparator,.DocSearch-Button-Placeholder{display:none}}.DocSearch--active{overflow:hidden!important}.DocSearch-Container,.DocSearch-Container *{box-sizing:border-box}.DocSearch-Container{background-color:var(--docsearch-container-background);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:200}.DocSearch-Container a{text-decoration:none}.DocSearch-Link{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;font:inherit;margin:0;padding:0}.DocSearch-Modal{background:var(--docsearch-modal-background);border-radius:6px;box-shadow:var(--docsearch-modal-shadow);flex-direction:column;margin:60px auto auto;max-width:var(--docsearch-modal-width);position:relative}.DocSearch-SearchBar{display:flex;padding:var(--docsearch-spacing) var(--docsearch-spacing) 0}.DocSearch-Form{align-items:center;background:var(--docsearch-searchbox-focus-background);border-radius:4px;box-shadow:var(--docsearch-searchbox-shadow);display:flex;height:var(--docsearch-searchbox-height);margin:0;padding:0 var(--docsearch-spacing);position:relative;width:100%}.DocSearch-Input{appearance:none;background:transparent;border:0;color:var(--docsearch-text-color);flex:1;font:inherit;font-size:1.2em;height:100%;outline:none;padding:0 0 0 8px;width:80%}.DocSearch-Input::placeholder{color:var(--docsearch-muted-color);opacity:1}.DocSearch-Input::-webkit-search-cancel-button,.DocSearch-Input::-webkit-search-decoration,.DocSearch-Input::-webkit-search-results-button,.DocSearch-Input::-webkit-search-results-decoration{display:none}.DocSearch-LoadingIndicator,.DocSearch-MagnifierLabel,.DocSearch-Reset{margin:0;padding:0}.DocSearch-MagnifierLabel,.DocSearch-Reset{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}.DocSearch-Container--Stalled .DocSearch-MagnifierLabel,.DocSearch-LoadingIndicator{display:none}.DocSearch-Container--Stalled .DocSearch-LoadingIndicator{align-items:center;color:var(--docsearch-highlight-color);display:flex;justify-content:center}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Reset{animation:none;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;right:0;stroke-width:var(--docsearch-icon-stroke-width)}}.DocSearch-Reset{animation:fade-in .1s ease-in forwards;appearance:none;background:none;border:0;border-radius:50%;color:var(--docsearch-icon-color);cursor:pointer;padding:2px;right:0;stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Reset[hidden]{display:none}.DocSearch-Reset:focus{outline:none}.DocSearch-Reset:hover{color:var(--docsearch-highlight-color)}.DocSearch-LoadingIndicator svg,.DocSearch-MagnifierLabel svg{height:24px;width:24px}.DocSearch-Cancel{display:none}.DocSearch-Dropdown{max-height:calc(var(--docsearch-modal-height) - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height));min-height:var(--docsearch-spacing);overflow-y:auto;overflow-y:overlay;padding:0 var(--docsearch-spacing);scrollbar-color:var(--docsearch-muted-color) var(--docsearch-modal-background);scrollbar-width:thin}.DocSearch-Dropdown::-webkit-scrollbar{width:12px}.DocSearch-Dropdown::-webkit-scrollbar-track{background:transparent}.DocSearch-Dropdown::-webkit-scrollbar-thumb{background-color:var(--docsearch-muted-color);border:3px solid var(--docsearch-modal-background);border-radius:20px}.DocSearch-Dropdown ul{list-style:none;margin:0;padding:0}.DocSearch-Label{font-size:.75em;line-height:1.6em}.DocSearch-Help,.DocSearch-Label{color:var(--docsearch-muted-color)}.DocSearch-Help{font-size:.9em;margin:0;user-select:none}.DocSearch-Title{font-size:1.2em}.DocSearch-Logo a{display:flex}.DocSearch-Logo svg{color:var(--docsearch-logo-color);margin-left:8px}.DocSearch-Hits:last-of-type{margin-bottom:24px}.DocSearch-Hits mark{background:none;color:var(--docsearch-highlight-color)}.DocSearch-HitsFooter{color:var(--docsearch-muted-color);display:flex;font-size:.85em;justify-content:center;margin-bottom:var(--docsearch-spacing);padding:var(--docsearch-spacing)}.DocSearch-HitsFooter a{border-bottom:1px solid;color:inherit}.DocSearch-Hit{border-radius:4px;display:flex;padding-bottom:4px;position:relative}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--deleting{transition:none}}.DocSearch-Hit--deleting{opacity:0;transition:all .25s linear}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit--favoriting{transition:none}}.DocSearch-Hit--favoriting{transform:scale(0);transform-origin:top center;transition:all .25s linear;transition-delay:.25s}.DocSearch-Hit a{background:var(--docsearch-hit-background);border-radius:4px;box-shadow:var(--docsearch-hit-shadow);display:block;padding-left:var(--docsearch-spacing);width:100%}.DocSearch-Hit-source{background:var(--docsearch-modal-background);color:var(--docsearch-highlight-color);font-size:.85em;font-weight:600;line-height:32px;margin:0 -4px;padding:8px 4px 0;position:sticky;top:0;z-index:10}.DocSearch-Hit-Tree{color:var(--docsearch-muted-color);height:var(--docsearch-hit-height);opacity:.5;stroke-width:var(--docsearch-icon-stroke-width);width:24px}.DocSearch-Hit[aria-selected=true] a{background-color:var(--docsearch-highlight-color)}.DocSearch-Hit[aria-selected=true] mark{text-decoration:underline}.DocSearch-Hit-Container{align-items:center;color:var(--docsearch-hit-color);display:flex;flex-direction:row;height:var(--docsearch-hit-height);padding:0 var(--docsearch-spacing) 0 0}.DocSearch-Hit-icon{height:20px;width:20px}.DocSearch-Hit-action,.DocSearch-Hit-icon{color:var(--docsearch-muted-color);stroke-width:var(--docsearch-icon-stroke-width)}.DocSearch-Hit-action{align-items:center;display:flex;height:22px;width:22px}.DocSearch-Hit-action svg{display:block;height:18px;width:18px}.DocSearch-Hit-action+.DocSearch-Hit-action{margin-left:6px}.DocSearch-Hit-action-button{appearance:none;background:none;border:0;border-radius:50%;color:inherit;cursor:pointer;padding:2px}svg.DocSearch-Hit-Select-Icon{display:none}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Select-Icon{display:block}.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:background-color .1s ease-in}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{transition:none}}.DocSearch-Hit-action-button:focus path,.DocSearch-Hit-action-button:hover path{fill:#fff}.DocSearch-Hit-content-wrapper{display:flex;flex:1 1 auto;flex-direction:column;font-weight:500;justify-content:center;line-height:1.2em;margin:0 8px;overflow-x:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:80%}.DocSearch-Hit-title{font-size:.9em}.DocSearch-Hit-path{color:var(--docsearch-muted-color);font-size:.75em}.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-action,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-icon,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-path,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-text,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-title,.DocSearch-Hit[aria-selected=true] .DocSearch-Hit-Tree,.DocSearch-Hit[aria-selected=true] mark{color:var(--docsearch-hit-active-color)!important}@media screen and (prefers-reduced-motion:reduce){.DocSearch-Hit-action-button:focus,.DocSearch-Hit-action-button:hover{background:rgba(0,0,0,.2);transition:none}}.DocSearch-ErrorScreen,.DocSearch-NoResults,.DocSearch-StartScreen{font-size:.9em;margin:0 auto;padding:36px 0;text-align:center;width:80%}.DocSearch-Screen-Icon{color:var(--docsearch-muted-color);padding-bottom:12px}.DocSearch-NoResults-Prefill-List{display:inline-block;padding-bottom:24px;text-align:left}.DocSearch-NoResults-Prefill-List ul{display:inline-block;padding:8px 0 0}.DocSearch-NoResults-Prefill-List li{list-style-position:inside;list-style-type:"\xBB "}.DocSearch-Prefill{appearance:none;background:none;border:0;border-radius:1em;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;font-size:1em;font-weight:700;padding:0}.DocSearch-Prefill:focus,.DocSearch-Prefill:hover{outline:none;text-decoration:underline}.DocSearch-Footer{align-items:center;background:var(--docsearch-footer-background);border-radius:0 0 8px 8px;box-shadow:var(--docsearch-footer-shadow);display:flex;flex-direction:row-reverse;flex-shrink:0;height:var(--docsearch-footer-height);justify-content:space-between;padding:0 var(--docsearch-spacing);position:relative;user-select:none;width:100%;z-index:300}.DocSearch-Commands{color:var(--docsearch-muted-color);display:flex;list-style:none;margin:0;padding:0}.DocSearch-Commands li{align-items:center;display:flex}.DocSearch-Commands li:not(:last-of-type){margin-right:.8em}.DocSearch-Commands-Key{align-items:center;background:var(--docsearch-key-gradient);border-radius:2px;box-shadow:var(--docsearch-key-shadow);display:flex;height:18px;justify-content:center;margin-right:.4em;padding-bottom:1px;width:20px}@media (max-width:750px){:root{--docsearch-spacing:10px;--docsearch-footer-height:40px}.DocSearch-Dropdown{height:100%}.DocSearch-Container{height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);position:absolute}.DocSearch-Footer{border-radius:0;bottom:0;position:absolute}.DocSearch-Hit-content-wrapper{display:flex;position:relative;width:80%}.DocSearch-Modal{border-radius:0;box-shadow:none;height:100vh;height:-webkit-fill-available;height:calc(var(--docsearch-vh, 1vh)*100);margin:0;max-width:100%;width:100%}.DocSearch-Dropdown{max-height:calc(var(--docsearch-vh, 1vh)*100 - var(--docsearch-searchbox-height) - var(--docsearch-spacing) - var(--docsearch-footer-height))}.DocSearch-Cancel{appearance:none;background:none;border:0;color:var(--docsearch-highlight-color);cursor:pointer;display:inline-block;flex:none;font:inherit;font-size:1em;font-weight:500;margin-left:var(--docsearch-spacing);outline:none;overflow:hidden;padding:0;user-select:none;white-space:nowrap}.DocSearch-Commands,.DocSearch-Hit-Tree{display:none}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}';
const Docsearch = vue.defineComponent({
  name: "Docsearch",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const lang = usePageLang();
    const docsearchShim = useDocsearchShim();
    const propsLocale = vue.computed(() => {
      var _a;
      return __spreadValues(__spreadValues({}, props.options), (_a = props.options.locales) === null || _a === void 0 ? void 0 : _a[routeLocale.value]);
    });
    const facetFilters = [];
    const initialize = () => {
      var _a, _b;
      facetFilters.splice(0, facetFilters.length, `lang:${lang.value}`, ...(_b = (_a = propsLocale.value.searchParameters) === null || _a === void 0 ? void 0 : _a.facetFilters) !== null && _b !== void 0 ? _b : []);
      docsearch(__spreadProps(__spreadValues(__spreadValues({}, docsearchShim), propsLocale.value), {
        container: "#docsearch-container",
        searchParameters: __spreadProps(__spreadValues({}, propsLocale.value.searchParameters), {
          facetFilters
        })
      }));
    };
    vue.onMounted(() => {
      initialize();
      vue.watch([routeLocale, propsLocale], ([curRouteLocale, curPropsLocale], [prevRouteLocale, prevPropsLocale]) => {
        if (curRouteLocale === prevRouteLocale)
          return;
        if (JSON.stringify(curPropsLocale) !== JSON.stringify(prevPropsLocale)) {
          initialize();
        }
      });
      vue.watch(lang, (curLang, prevLang) => {
        if (curLang !== prevLang) {
          const prevIndex = facetFilters.findIndex((item) => item === `lang:${prevLang}`);
          if (prevIndex > -1) {
            facetFilters.splice(prevIndex, 1, `lang:${curLang}`);
          }
        }
      });
    });
    return () => vue.h("div", { id: "docsearch-container" });
  }
});
const options = { "apiKey": "59c89e1e2464da17d2b76e6f7757ec2c", "indexName": "ipe-js", "locales": { "/": { "placeholder": "\u641C\u7D22" }, "/en/": { "placeholder": "Search" } } };
var clientAppEnhance3 = defineClientAppEnhance(({ app }) => {
  app.component("Docsearch", () => vue.h(Docsearch, { options }));
});
var clientAppEnhance4 = ({ app }) => {
  app.component("ColorPreview", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ColorPreview;
  }))), app.component("infobox", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return infobox;
  }))), app.component("issues", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return issues;
  }))), app.component("status", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return status;
  })));
};
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
function r(r2, e2, n2) {
  var i2, t2, o2;
  e2 === void 0 && (e2 = 50), n2 === void 0 && (n2 = {});
  var a2 = (i2 = n2.isImmediate) != null && i2, u2 = (t2 = n2.callback) != null && t2, c2 = n2.maxWait, v2 = Date.now(), l2 = [];
  function f2() {
    if (c2 !== void 0) {
      var r3 = Date.now() - v2;
      if (r3 + e2 >= c2)
        return c2 - r3;
    }
    return e2;
  }
  var d2 = function() {
    var e3 = [].slice.call(arguments), n3 = this;
    return new Promise(function(i3, t3) {
      var c3 = a2 && o2 === void 0;
      if (o2 !== void 0 && clearTimeout(o2), o2 = setTimeout(function() {
        if (o2 = void 0, v2 = Date.now(), !a2) {
          var i4 = r2.apply(n3, e3);
          u2 && u2(i4), l2.forEach(function(r3) {
            return (0, r3.resolve)(i4);
          }), l2 = [];
        }
      }, f2()), c3) {
        var d3 = r2.apply(n3, e3);
        return u2 && u2(d3), i3(d3);
      }
      l2.push({ resolve: i3, reject: t3 });
    });
  };
  return d2.cancel = function(r3) {
    o2 !== void 0 && clearTimeout(o2), l2.forEach(function(e3) {
      return (0, e3.reject)(r3);
    }), l2 = [];
  }, d2;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = ":root {\n  --back-to-top-z-index: 5;\n\n  --back-to-top-color: #3eaf7c;\n  --back-to-top-color-hover: #71cda3;\n}\n";
var backToTop = ".back-to-top {\n  cursor: pointer;\n  position: fixed;\n  bottom: 2rem;\n  right: 2.5rem;\n  width: 2rem;\n  height: 1.2rem;\n  background-color: var(--back-to-top-color);\n  mask: url('__VITE_ASSET__8efcbe56__') no-repeat;\n  z-index: var(--back-to-top-z-index);\n}\n\n.back-to-top:hover {\n  background-color: var(--back-to-top-color-hover);\n}\n\n@media (max-width: 959px) {\n  .back-to-top {\n    display: none;\n  }\n}\n\n.back-to-top-enter-active,\n.back-to-top-leave-active {\n  transition: opacity 0.3s;\n}\n\n.back-to-top-enter-from,\n.back-to-top-leave-to {\n  opacity: 0;\n}\n";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", r(() => {
        scrollTop.value = getScrollTop();
      }, 100));
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
var clientAppSetup1 = defineClientAppSetup(() => {
  return;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options2) {
      var key, value;
      for (key in options2) {
        value = options2[key];
        if (value !== void 0 && options2.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n2) {
      var started = NProgress.isStarted();
      n2 = clamp(n2, Settings.minimum, 1);
      NProgress.status = n2 === 1 ? null : n2;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n2, speed, ease));
        if (n2 === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n2 = NProgress.status;
      if (!n2) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
        }
        n2 = clamp(n2 + amount, 0, 0.994);
        return NProgress.set(n2);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n2, min, max) {
      if (n2 < min)
        return min;
      if (n2 > max)
        return max;
      return n2;
    }
    function toBarPerc(n2) {
      return (-1 + n2) * 100;
    }
    function barPositionCSS(n2, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n2) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n2) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n2) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn2 = pending.shift();
        if (fn2) {
          fn2(next);
        }
      }
      return function(fn2) {
        pending.push(fn2);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style2 = document.body.style;
        if (name in style2)
          return name;
        var i2 = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i2--) {
          vendorName = cssPrefixes[i2] + capName;
          if (vendorName in style2)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars = ":root {\n  --nprogress-color: #29d;\n  --nprogress-z-index: 1031;\n}\n";
var nprogress = "#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: var(--nprogress-color);\n  position: fixed;\n  z-index: var(--nprogress-z-index);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color);\n  opacity: 1;\n  transform: rotate(3deg) translate(0px, -4px);\n}\n";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup2 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup3 = defineClientAppSetup(() => {
  return;
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2,
  clientAppSetup3
];
const routeItems = [
  ["v-8daa1a0e", "/", "", ["/index.html", "/README.md"]],
  ["v-74bc627b", "/about/", "\u5173\u4E8E InPageEdit", ["/about/index.html", "/about/README.md"]],
  ["v-74cce7b9", "/about/do-you-know.html", "InPageEdit \u8DA3\u95FB\u5F55", ["/about/do-you-know", "/about/do-you-know.md"]],
  ["v-008c1322", "/about/donate.html", "\u652F\u6301\u4F5C\u8005", ["/about/donate", "/about/donate.md"]],
  ["v-3ba185f3", "/about/logo.html", "\u5173\u4E8E Logo", ["/about/logo", "/about/logo.md"]],
  ["v-1891b76b", "/develop/", "InPageEdit \u5F00\u53D1\u6307\u5357", ["/develop/index.html", "/develop/README.md"]],
  ["v-1277236a", "/develop/api.html", "API \u6587\u6863", ["/develop/api", "/develop/api.md"]],
  ["v-f69d0aea", "/develop/hook.html", "Hook \u6587\u6863", ["/develop/hook", "/develop/hook.md"]],
  ["v-4bb7f28b", "/develop/nouns.html", "InPageEdit \u540D\u8BCD\u8868", ["/develop/nouns", "/develop/nouns.md"]],
  ["v-0be73d8a", "/develop/plugin.html", "Plugin \u5F00\u53D1\u6307\u5357", ["/develop/plugin", "/develop/plugin.md"]],
  ["v-2d0a870d", "/en/", "", ["/en/index.html", "/en/README.md"]],
  ["v-fffb8e28", "/guide/", "\u6587\u6863", ["/guide/index.html", "/guide/README.md"]],
  ["v-77a9ffd9", "/guide/intro.html", "\u63D2\u4EF6\u7B80\u4ECB", ["/guide/intro", "/guide/intro.md"]],
  ["v-14239e2b", "/update/1.x.html", "Earlier version (1.x)", ["/update/1.x", "/update/1.x.md"]],
  ["v-52296ff6", "/update/14.0.0.html", "14.0.0 Sora", ["/update/14.0.0", "/update/14.0.0.md"]],
  ["v-47ec5c3c", "/update/14.0.3.html", "14.0.3 Shiro", ["/update/14.0.3", "/update/14.0.3.md"]],
  ["v-3ecc74e4", "/update/14.1.0.html", "14.1.0 Stephanie_Dola", ["/update/14.1.0", "/update/14.1.0.md"]],
  ["v-40814d83", "/update/14.1.1.html", "14.1.1", ["/update/14.1.1", "/update/14.1.1.md"]],
  ["v-42362622", "/update/14.1.2.html", "14.1.2", ["/update/14.1.2", "/update/14.1.2.md"]],
  ["v-43eafec1", "/update/14.1.3.html", "14.1.3", ["/update/14.1.3", "/update/14.1.3.md"]],
  ["v-459fd760", "/update/14.1.4.html", "14.1.4", ["/update/14.1.4", "/update/14.1.4.md"]],
  ["v-4754afff", "/update/14.1.5.html", "14.1.5", ["/update/14.1.5", "/update/14.1.5.md"]],
  ["v-4abe613d", "/update/14.1.7.html", "14.1.7", ["/update/14.1.7", "/update/14.1.7.md"]],
  ["v-4c7339dc", "/update/14.1.8.html", "14.1.8", ["/update/14.1.8", "/update/14.1.8.md"]],
  ["v-4e28127b", "/update/14.1.9.html", "14.1.9", ["/update/14.1.9", "/update/14.1.9.md"]],
  ["v-b2a4bc7a", "/update/14.2.0.html", "14.2.0", ["/update/14.2.0", "/update/14.2.0.md"]],
  ["v-af3b0b3c", "/update/14.2.1.html", "14.2.1", ["/update/14.2.1", "/update/14.2.1.md"]],
  ["v-a867a8c0", "/update/14.2.3.html", "14.2.3", ["/update/14.2.3", "/update/14.2.3.md"]],
  ["v-9e2a9506", "/update/14.2.6.html", "14.2.6", ["/update/14.2.6", "/update/14.2.6.md"]],
  ["v-9757328a", "/update/14.2.8.html", "14.2.7 - 14.2.8", ["/update/14.2.8", "/update/14.2.8.md"]],
  ["v-7c04cb0a", "/update/2.x.html", "2.x Update logs", ["/update/2.x", "/update/2.x.md"]],
  ["v-5c0c536d", "/update/", "\u66F4\u65B0\u65E5\u5FD7", ["/update/index.html", "/update/README.md"]],
  ["v-eb88660e", "/update/next.html", "\u4E0B\u4E00\u4EE3 InPageEdit", ["/update/next", "/update/next.md"]],
  ["v-5326f9d8", "/develop/analytics/", "InPageEdit Analytics \u4ECB\u7ECD", ["/develop/analytics/index.html", "/develop/analytics/index.md"]],
  ["v-69cc7e49", "/develop/analytics/v2.html", "Analysis V2", ["/develop/analytics/v2", "/develop/analytics/v2.md"]],
  ["v-6b8156e8", "/develop/analytics/v3.html", "Analysis V3", ["/develop/analytics/v3", "/develop/analytics/v3.md"]],
  ["v-6d362f87", "/develop/analytics/v4.html", "Analysis V4", ["/develop/analytics/v4", "/develop/analytics/v4.md"]],
  ["v-6eeb0826", "/develop/analytics/v5.html", "Analytics V5", ["/develop/analytics/v5", "/develop/analytics/v5.md"]],
  ["v-fcccd0e2", "/en/about/", "About InPageEdit", ["/en/about/index.html", "/en/about/README.md"]],
  ["v-d04ae64a", "/en/about/donate.html", "Support the author", ["/en/about/donate", "/en/about/donate.md"]],
  ["v-bce67142", "/en/about/logo.html", "InPageEdit Logo", ["/en/about/logo", "/en/about/logo.md"]],
  ["v-075401e2", "/en/api/", "API Documention", ["/en/api/index.html", "/en/api/README.md"]],
  ["v-4df3f418", "/en/api/hook.html", "Hook", ["/en/api/hook", "/en/api/hook.md"]],
  ["v-61b22826", "/en/guide/intro.html", "About", ["/en/guide/intro", "/en/guide/intro.md"]],
  ["v-2a547e4e", "/en/update/", "CHANGE LOGS", ["/en/update/index.html", "/en/update/index.md"]],
  ["v-d5db55a6", "/guide/install/gadget.html", "\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5", ["/guide/install/gadget", "/guide/install/gadget.md"]],
  ["v-982af712", "/guide/install/quick-start.html", "\u5FEB\u901F\u4E0A\u624B", ["/guide/install/quick-start", "/guide/install/quick-start.md"]],
  ["v-2608ff04", "/guide/usage/preference.html", "\u504F\u597D\u8BBE\u7F6E preference", ["/guide/usage/preference", "/guide/usage/preference.md"]],
  ["v-7c1102d4", "/guide/usage/quick-delete.html", "\u5FEB\u901F\u5220\u9664 quick-delete", ["/guide/usage/quick-delete", "/guide/usage/quick-delete.md"]],
  ["v-72c2de3a", "/guide/usage/quick-diff.html", "\u5FEB\u901F\u5DEE\u5F02 quick-diff", ["/guide/usage/quick-diff", "/guide/usage/quick-diff.md"]],
  ["v-93901156", "/guide/usage/quick-edit.html", "\u5FEB\u901F\u7F16\u8F91 quick-edit", ["/guide/usage/quick-edit", "/guide/usage/quick-edit.md"]],
  ["v-1f379e0b", "/guide/usage/quick-preview.html", "\u5FEB\u901F\u9884\u89C8 quick-preview", ["/guide/usage/quick-preview", "/guide/usage/quick-preview.md"]],
  ["v-6675a47a", "/guide/usage/quick-redirect.html", "\u5FEB\u901F\u91CD\u5B9A\u5411 quick-redirect", ["/guide/usage/quick-redirect", "/guide/usage/quick-redirect.md"]],
  ["v-916955be", "/guide/usage/quick-rename.html", "\u5FEB\u901F\u91CD\u547D\u540D quick-rename", ["/guide/usage/quick-rename", "/guide/usage/quick-rename.md"]],
  ["v-7a1c19c0", "/guide/usage/toolbox.html", "\u5DE5\u5177\u76D2 toolbox", ["/guide/usage/toolbox", "/guide/usage/toolbox.md"]],
  ["v-99c880ce", "/en/guide/install/gadget.html", "Install the plugin as a Gadget", ["/en/guide/install/gadget", "/en/guide/install/gadget.md"]],
  ["v-e50284ea", "/en/guide/install/quick-start.html", "Quick Start", ["/en/guide/install/quick-start", "/en/guide/install/quick-start.md"]],
  ["v-313d0320", "/en/guide/usage/preference.html", "Preferences", ["/en/guide/usage/preference", "/en/guide/usage/preference.md"]],
  ["v-49475740", "/en/guide/usage/quick-delete.html", "Quick-delete", ["/en/guide/usage/quick-delete", "/en/guide/usage/quick-delete.md"]],
  ["v-341b5da6", "/en/guide/usage/quick-diff.html", "Quick-diff", ["/en/guide/usage/quick-diff", "/en/guide/usage/quick-diff.md"]],
  ["v-779076c1", "/en/guide/usage/quick-edit.html", "Quick-edit", ["/en/guide/usage/quick-edit", "/en/guide/usage/quick-edit.md"]],
  ["v-25b8172f", "/en/guide/usage/quick-redirect.html", "Quick-redirect", ["/en/guide/usage/quick-redirect", "/en/guide/usage/quick-redirect.md"]],
  ["v-f6fcace6", "/en/guide/usage/quick-rename.html", "Quick-rename", ["/en/guide/usage/quick-rename", "/en/guide/usage/quick-rename.md"]],
  ["v-ebc8e998", "/en/guide/usage/toolbox.html", "Toolbox", ["/en/guide/usage/toolbox", "/en/guide/usage/toolbox.md"]],
  ["v-3706649a", "/404.html", "", ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, title, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta: { title }
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      useUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(shared.removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $page: { get: () => pageData.value },
    $frontmatter: { get: () => pageFrontmatter.value },
    $lang: { get: () => pageLang.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $withBase: { get: () => withBase }
  });
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("OutboundLink", OutboundLink);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$1i = {};
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>\u5728\u4F60\u7684\u4E2A\u4EBA js \u9875\u9762\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u7ACB\u523B\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><!--]-->`);
}
_sfc_main$1i.ssrRender = _sfc_ssrRender$14;
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
var index_html$j = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1i
});
const _sfc_main$1h = {};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="\u5173\u4E8E-inpageedit" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-inpageedit" aria-hidden="true">#</a> \u5173\u4E8E InPageEdit</h1><h2 id="inpageedit" tabindex="-1"><a class="header-anchor" href="#inpageedit" aria-hidden="true">#</a> InPageEdit</h2><h3 id="\u4F5C\u8005\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u4FE1\u606F" aria-hidden="true">#</a> \u4F5C\u8005\u4FE1\u606F</h3><ul><li>\u539F\u4F5C\u8005\uFF1A\u673A\u667A\u7684\u5C0F\u9C7C\u541B <em>Dragon Fish</em> <a href="mailto:dragon-fish@qq.com">dragon-fish@qq.com</a></li><li>\u5408\u4F5C\uFF1A <ul><li>\u591A\u8BED\u8A00\uFF1A<a href="https://dev.fandom.com/" target="_blank" rel="noopener noreferrer">Fandom Developers Wiki`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> \u7528\u6237\u4EE5\u53CA\u6765\u81EA GitHub \u7684\u7528\u6237</li></ul></li></ul><h3 id="\u5F00\u6E90\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h3><p><a href="http://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer">GNU \u901A\u7528\u516C\u5171\u8BB8\u53EF\u8BC1\uFF08\u7B2C\u4E09\u7248\uFF09`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><h3 id="\u6280\u672F\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u4FE1\u606F" aria-hidden="true">#</a> \u6280\u672F\u4FE1\u606F</h3><ul><li><a href="http://www.commonjs.org/" target="_blank" rel="noopener noreferrer">CommonJS`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li>ECMAScript 2020 (JavaScript ES2020)</li><li><a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> 1.9.0+</li><li><a href="https://mediawiki.org/w/api.php" target="_blank" rel="noopener noreferrer">MediaWiki API`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> (mw 1.20.0+)</li><li><a href="http://ssbeefeater.github.io/" target="_blank" rel="noopener noreferrer">ssi-modal`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> v1.0.28</li><li><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li></ul><h2 id="inpageedit-analysis" tabindex="-1"><a class="header-anchor" href="#inpageedit-analysis" aria-hidden="true">#</a> InPageEdit Analysis</h2><h3 id="\u4F5C\u8005\u4FE1\u606F-1" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u4FE1\u606F-1" aria-hidden="true">#</a> \u4F5C\u8005\u4FE1\u606F</h3><ul><li>\u4F5C\u8005\uFF1A\u673A\u667A\u7684\u5C0F\u9C7C\u541B <em>Dragon Fish</em> <a href="mailto:dragon-fish@qq.com">dragon-fish@qq.com</a></li></ul><h3 id="\u5F00\u6E90\u534F\u8BAE-1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE-1" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h3><p><a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache License 2.0`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><h3 id="\u6280\u672F\u4FE1\u606F-1" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u4FE1\u606F-1" aria-hidden="true">#</a> \u6280\u672F\u4FE1\u606F</h3><ul><li><a href="http://expressjs.com/" target="_blank" rel="noopener noreferrer">Express`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> 4.17.1</li><li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">mongoDB`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> 4.0.10</li><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js\xAE`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> 14.7.0</li></ul><h2 id="inpageedit-documentation-center" tabindex="-1"><a class="header-anchor" href="#inpageedit-documentation-center" aria-hidden="true">#</a> InPageEdit Documentation Center</h2><h3 id="\u4F5C\u8005\u4FE1\u606F-2" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u4FE1\u606F-2" aria-hidden="true">#</a> \u4F5C\u8005\u4FE1\u606F</h3><p><a href="https://github.com/Wjghj-Project/InPageEdit-Document/graphs/contributors" target="_blank" rel="noopener noreferrer">https://github.com/Wjghj-Project/InPageEdit-Document/graphs/contributors`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><h3 id="\u5F00\u6E90\u534F\u8BAE-2" tabindex="-1"><a class="header-anchor" href="#\u5F00\u6E90\u534F\u8BAE-2" aria-hidden="true">#</a> \u5F00\u6E90\u534F\u8BAE</h3><p><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><h3 id="\u6280\u672F\u4FE1\u606F-2" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u4FE1\u606F-2" aria-hidden="true">#</a> \u6280\u672F\u4FE1\u606F</h3><ul><li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li><a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">VuePress`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li></ul><!--]-->`);
}
_sfc_main$1h.ssrRender = _sfc_ssrRender$13;
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/about/index.html.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1h
});
const _sfc_main$1g = {};
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="inpageedit-\u8DA3\u95FB\u5F55" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u8DA3\u95FB\u5F55" aria-hidden="true">#</a> InPageEdit \u8DA3\u95FB\u5F55</h1><h2 id="\u673A\u667A\u7684\u5C0F\u9C7C\u541B-\u2014\u2014-\u5173\u4E8E\u4F5C\u8005-\u8FD9\u4E00\u5207\u7684\u5143\u51F6" tabindex="-1"><a class="header-anchor" href="#\u673A\u667A\u7684\u5C0F\u9C7C\u541B-\u2014\u2014-\u5173\u4E8E\u4F5C\u8005-\u8FD9\u4E00\u5207\u7684\u5143\u51F6" aria-hidden="true">#</a> \u673A\u667A\u7684\u5C0F\u9C7C\u541B \u2014\u2014 \u5173\u4E8E\u4F5C\u8005\uFF0C\u8FD9\u4E00\u5207\u7684\u5143\u51F6</h2><p>InPageEdit \u6700\u521D\u662F\u7531\u4E00\u540D\u81EA\u79F0<strong>\u673A\u667A\u7684\u5C0F\u9C7C\u541B</strong>\u7684\u7F51\u53CB\u5F00\u53D1\u7684\uFF0C\u8FD9\u662F\u4ED6\u5728\u5404\u79CD MediaWiki \u5E73\u53F0\u6700\u5E38\u7528\u7684\u7528\u6237\u540D\u3002</p><blockquote><p>\u4ED6\u4E4B\u6240\u4EE5\u81EA\u79F0\u201C\u5C0F\u9C7C\u541B\u201D\u662F\u56E0\u4E3A\u4ED6\u7684\u59D3\u6C0F\u4E0E\u201C\u9C7C\u201D\u53D1\u97F3\u76F8\u8FD1\uFF0C\u800C\u201C\u673A\u667A\u7684\u201D\u53EA\u662F\u4E00\u4E2A\u6CA1\u6709\u592A\u591A\u542B\u4E49\u7684\u524D\u7F00\uFF0C\u4ED6\u672C\u4EBA\u5E76\u4E0D\u8BB0\u5F97\u4E3A\u4EC0\u4E48\u8981\u7528\u8FD9\u4E2A\u5F62\u5BB9\u8BCD\u3002</p></blockquote><h2 id="inpageedit-\u4E0E-wikiplus-\u2014\u2014-\u9879\u76EE\u7684\u4F0A\u59CB" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u4E0E-wikiplus-\u2014\u2014-\u9879\u76EE\u7684\u4F0A\u59CB" aria-hidden="true">#</a> InPageEdit \u4E0E Wikiplus \u2014\u2014 \u9879\u76EE\u7684\u4F0A\u59CB</h2><p>\u5728 InPageEdit \u95EE\u4E16\u524D\u8BB8\u591A\u5E74\u5C31\u5DF2\u7ECF\u6709\u53E6\u4E00\u6B3E\u4EE5\u201C\u907F\u514D\u6253\u5F00\u7F16\u8F91\u9875\u9762\u4EE5\u63D0\u9AD8\u5C0F\u7F16\u8F91\u7684\u901F\u5EA6\u201D\u4E3A\u4E3B\u8981\u529F\u80FD\u7684 JavaScript \u5C0F\u5DE5\u5177 <a href="https://zh.moegirl.org.cn/User:%E5%A6%B9%E7%A9%BA%E9%85%B1/Wikiplus" target="_blank" rel="noopener noreferrer">Wikiplus`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a>\uFF08\u4EE5\u4E0B\u7B80\u79F0 W+\uFF09\uFF0C\u539F\u4F5C\u8005<strong>\u59B9\u7A7A\u9171</strong>\u5DF2\u7ECF\u5F03\u5751\u3002</p><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u66FE\u7ECF\u4E5F\u662F W+ \u4F7F\u7528\u8005\uFF0C\u4F46\u662F W+ \u76F4\u5230 2019 \u5E74\u4E5F\u672A\u80FD\u652F\u6301 Fandom \u5E73\u53F0\uFF08\u539F Wikia\uFF09\uFF0C\u800C\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u662F\u4E00\u540D\u4E3B\u8981\u7F16\u8F91 Fandom wiki \u7684\u7F16\u8F91\u8005\uFF0C\u4ED6\u4E3A\u6B64\u611F\u5230\u5341\u5206\u96BE\u8FC7\uFF0C\u4E8E\u662F\u5728 2019 \u5E74\u6253\u7B97\u81EA\u884C\u5F00\u53D1\u4E00\u6B3E\u7C7B\u4F3C\u5B9A\u4F4D\u7684\u5C0F\u5DE5\u5177\uFF0C\u6700\u521D\u7684\u76EE\u7684\u662F\u5F00\u53D1\u80FD\u591F\u8FD0\u884C\u4E8E Fandom \u7684\u5C0F\u7F16\u8F91\u63D2\u4EF6\u3002</p><p>\u4F46\u662F\u73B0\u5728 InPageEdit \u5DF2\u7ECF\u62E5\u6709\u6BD4 W+ \u66F4\u597D\u770B\u7684\u8BBE\u8BA1\u4EE5\u53CA\u8FDC\u591A\u4E8E\u5C0F\u7F16\u8F91\u7684\u4E30\u5BCC\u529F\u80FD\u3002</p><blockquote><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u627F\u8BA4 W+ \u7684\u4EE3\u7801\u7D20\u8D28\u8FDC\u9AD8\u4E8E InPageEdit\uFF0C\u5E76\u4E00\u76F4\u4EE5\u8D85\u8D8A W+\u3001\u6EE1\u8DB3 wiki \u7F16\u8F91\u8005\u7684\u66F4\u591A\u9700\u6C42\u4E3A\u76EE\u6807\u52AA\u529B\u66F4\u65B0\u3002</p></blockquote><h2 id="\u6B27\u4EA8\u5229\u5F0F\u5F00\u5C40-\u2014\u2014-\u610F\u60F3\u4E0D\u5230\u7684\u5C34\u5C2C\u5F00\u5C40" tabindex="-1"><a class="header-anchor" href="#\u6B27\u4EA8\u5229\u5F0F\u5F00\u5C40-\u2014\u2014-\u610F\u60F3\u4E0D\u5230\u7684\u5C34\u5C2C\u5F00\u5C40" aria-hidden="true">#</a> \u6B27\u4EA8\u5229\u5F0F\u5F00\u5C40 \u2014\u2014 \u610F\u60F3\u4E0D\u5230\u7684\u5C34\u5C2C\u5F00\u5C40</h2><p>InPageEdit \u6700\u521D\u88AB\u5F00\u53D1\u51FA\u6765\u7684\u76EE\u7684\u662F\u80FD\u591F\u8FD0\u884C\u4E8E Fandom \u5E73\u53F0\uFF0C\u800C\u4EE4\u4EBA\u610F\u60F3\u4E0D\u5230\u7684\u662F\uFF0C\u7531\u4E8E 2019 \u5E74 Fandom \u4ECD\u65E7\u4F7F\u7528 MediaWiki 1.19.x \u5E73\u53F0\uFF0C\u5BFC\u81F4\u4E86\u4F17\u591A\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u4E0D\u5F97\u4E0D\u653E\u5F03\u652F\u6301 Fandom \u5E73\u53F0\uFF0C\u534A\u6210\u54C1\u7684\u63D2\u4EF6\u4E00\u76F4\u88AB\u4E2A\u4EBA\u4F7F\u7528\u3002</p><blockquote><p>2020 \u5E74 Fandom \u5E73\u53F0\u8FCE\u6765\u4E86\u8FD1 8 \u5E74\u6765\u6700\u5927\u7684\u4E00\u6B21\u66F4\u65B0\uFF0C\u66F4\u65B0\u540E\u7684 Fandom \u8FD0\u884C MediaWiki 1.33.x\uFF0C\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C InPageEdit\uFF0C\u4E5F\u7B97\u662F\u5706\u4E86\u4F5C\u8005\u4E00\u4E2A\u68A6\u3002</p></blockquote><h2 id="inpageedit-\u4E0E-minecraft-wiki-\u2014\u2014-\u5076\u7136\u95F4\u7684\u4F20\u64AD" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u4E0E-minecraft-wiki-\u2014\u2014-\u5076\u7136\u95F4\u7684\u4F20\u64AD" aria-hidden="true">#</a> InPageEdit \u4E0E Minecraft Wiki \u2014\u2014 \u5076\u7136\u95F4\u7684\u4F20\u64AD</h2><p>\u5728\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u653E\u5F03\u652F\u6301 Fandom \u5E73\u53F0\u540E\uFF0C\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\u90FD\u6CA1\u6709\u7EE7\u7EED\u66F4\u65B0\u5B83\uFF0C\u53EA\u662F\u7528\u5B83\u6765\u7EF4\u62A4 MediaWiki \u9A71\u52A8\u7684\u4E2A\u4EBA\u7F51\u7AD9\u3002</p><p>\u76F4\u5230 2019 \u5E74\u5E95\uFF0C\u4ED6\u88AB\u81EA\u5DF1\u7684\u4EB2\u53CB\u62C9\u53BB\u73A9\u4E00\u6B3E\u53EB Minecraft \u7684\u6E38\u620F\uFF0C\u4ED6\u66FE\u7ECF\u53C2\u4E0E\u8FC7\u8BE5\u6E38\u620F\u7684 wiki\uFF0C\u4E8E\u662F\u4ED6\u8D81\u6B64\u673A\u4F1A\u56DE\u5230\u4E86 \u4E2D\u6587 Minecraft Wiki \uFF08\u4EE5\u4E0B\u7B80\u79F0 MCW\uFF09\u6253\u7B97\u7EE7\u7EED\u7F16\u8F91\uFF0C\u5C31\u662F\u8FD9\u4E2A\u65F6\u5019\u4ED6\u628A InPageEdit \u7684\u6E90\u4EE3\u7801\u62F7\u8D1D\u5230\u4E86\u8BE5 wiki \u7684\u4E2A\u4EBA js \u9875\u9762\u3002</p><p>\u4EE4\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u6CA1\u60F3\u5230\u7684\u662F\uFF0C\u4E00\u540D MCW \u7528\u6237\u62F7\u8D1D\u4E86\u4ED6\u7684 js \u4EE3\u7801\uFF0C\u5E76\u5728\u8BD5\u7528\u540E\u901A\u8FC7 MCW \u7684\u95F2\u804A QQ \u7FA4\u63D0\u51FA\u4E86\u6539\u8FDB\u5EFA\u8BAE\u3002\u4EE5\u6B64\u4E3A\u5951\u673A\uFF0C\u66F4\u591A\u7684 MCW \u7528\u6237\u5F00\u59CB\u4F7F\u7528\u5E76\u4F20\u64AD InPageEdit\uFF0C\u81EA\u6B64 InPageEdit \u5F00\u59CB\u62E5\u6709\u4E86\u66F4\u591A\u7684\u4F7F\u7528\u8005\u4EE5\u53CA\u53CD\u9988\u3002</p><blockquote><p>\u76EE\u524D\u9996\u4E2A\u4F7F\u7528 InPageEdit \u7684\u7B2C\u4E09\u8005\u4E0D\u660E\uFF0C\u5982\u679C\u60A8\u77E5\u9053\u8FD9\u4E2A\u7528\u6237\u662F\u8C01\uFF0C\u8BF7\u8054\u7CFB\u4F5C\u8005\uFF01</p></blockquote><h2 id="inpageedit-\u4E0E-\u840C\u5A18\u767E\u79D1-\u2014\u2014-\u5927\u89C4\u6A21\u6269\u6563" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u4E0E-\u840C\u5A18\u767E\u79D1-\u2014\u2014-\u5927\u89C4\u6A21\u6269\u6563" aria-hidden="true">#</a> InPageEdit \u4E0E \u840C\u5A18\u767E\u79D1 \u2014\u2014 \u5927\u89C4\u6A21\u6269\u6563</h2><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u662F\u4E00\u540D\u840C\u5A18\u767E\u79D1\u7528\u6237\uFF0C\u56E0\u6B64\u4ED6\u81EA\u7136\u800C\u7136\u7684\u5C06 InPageEdit \u76F8\u5173\u7684\u4EE3\u7801\u5E26\u5230\u4E86\u840C\u5A18\u767E\u79D1\u7684\u4E2A\u4EBA js \u9875\u9762\u3002\u5F53\u65F6\u4ED6\u6B63\u5728\u5BFB\u627E\u53EF\u4EE5\u63D0\u4F9B InPageEdit \u7684\u7B80\u4ECB\u9875\u9762\u7684\u6258\u7BA1\u7F51\u7AD9\uFF0C\u867D\u7136\u5DF2\u7ECF\u5229\u7528 Fandom Dev Wiki\u3001GitHub Pages \u4EE5\u53CA\u4E2A\u4EBA\u7F51\u7AD9\u53D1\u5E03\u8FC7\u9875\u9762\uFF0C\u4F46\u662F\u52A0\u8F7D\u901F\u5EA6\u8FC7\u6162\u4EE5\u53CA\u96BE\u4EE5\u7EF4\u62A4\u4F9D\u65E7\u662F\u5927\u95EE\u9898\u3002\u8FD9\u65F6\u4ED6\u60F3\u5230 InPageEdit \u7684\u524D\u8F88 W+ \u7684\u7B80\u4ECB\u4F4D\u4E8E\u840C\u5A18\u767E\u79D1\uFF0C\u4E8E\u662F\u5C1D\u8BD5\u5728\u840C\u5A18\u767E\u79D1\u64B0\u5199\u4E86\u4E00\u4EFD\u7B80\u4ECB\u9875\u9762\u3002</p><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u6700\u521D\u5728\u840C\u5A18\u767E\u79D1\u64B0\u5199 InPageEdit \u9875\u9762\u7684\u76EE\u7684\u53EA\u662F\u5355\u7EAF\u7684\u60F3<ruby>\u501F\u7528<rt>\u767D\u5AD6</rt></ruby>\u840C\u5A18\u767E\u79D1\u7684\u670D\u52A1\u5668\u8D44\u6E90\u6765\u6258\u7BA1\u7B80\u4ECB\u8D44\u6599\uFF0C\u4F46\u4E0D\u4E45\u540E\u7ECF\u7F51\u53CB\u63D0\u9192\uFF0C\u4ED6\u53D1\u73B0\u840C\u5A18\u767E\u79D1\u901A\u8FC7 Gadget \u6536\u5F55\u4E86 InPageEdit\uFF0C\u81EA\u6B64 InPageEdit \u7684\u4F7F\u7528\u6B21\u6570\u5448\u6307\u6570\u589E\u957F\u3002</p><blockquote><p>\u76EE\u524D\u840C\u5A18\u767E\u79D1\u6536\u5F55 InPageEdit \u7684\u539F\u56E0\u4E0D\u660E\uFF0C\u5982\u679C\u60A8\u77E5\u9053\u8FD9\u5176\u4E2D\u7684\u539F\u56E0\u8BF7\u8054\u7CFB\u4F5C\u8005\uFF01</p></blockquote><h2 id="inpageedit-\u4E0E-github-\u2014\u2014-\u6E90\u7801\u7248\u672C\u7BA1\u63A7\u7684\u8FDB\u5316" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u4E0E-github-\u2014\u2014-\u6E90\u7801\u7248\u672C\u7BA1\u63A7\u7684\u8FDB\u5316" aria-hidden="true">#</a> InPageEdit \u4E0E GitHub \u2014\u2014 \u6E90\u7801\u7248\u672C\u7BA1\u63A7\u7684\u8FDB\u5316</h2><p>\u6700\u521D InPageEdit \u7684\u6E90\u4EE3\u7801\u4F4D\u4E8E Wjghj Project \u670D\u52A1\u5668\u4E0A\uFF08\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u7684\u79C1\u4EBA\u670D\u52A1\u5668\uFF09\uFF0C\u4F46\u4ECE\u840C\u5A18\u767E\u79D1\u6536\u5F55 InPageEdit \u4E3A Gadget \u8D77\u7684\u7B2C\u4E8C\u5929\u8D77\uFF0C\u670D\u52A1\u5668\u6BCF\u79D2\u90FD\u4F1A\u53D7\u5230\u4E0A\u5343\u6B21\u6765\u6E90\u4E0D\u660E\u7684\u7528\u6237\u6807\u8BC6\u4E3A\u79FB\u52A8\u7AEF\u7684<ruby>\u4E0D\u660E\u76EE\u7684\u8BF7\u6C42<rt>\u7591\u4F3C\u88AB DDoS \u653B\u51FB</rt></ruby>\uFF0C\u5927\u591A\u6570\u8BF7\u6C42\u867D\u7136\u6BEB\u65E0\u89C4\u5F8B\u4F46\u662F\u5F88\u4E0D\u5DE7\u7684\u547D\u4E2D\u4E86\u9AD8\u5F00\u9500\u8BF7\u6C42\uFF08\u9700\u8981\u8C03\u7528\u6570\u636E\u5E93\u52A8\u6001\u6E32\u67D3\u7684\u9875\u9762\uFF09\uFF0C\u5BFC\u81F4 Wjghj Project \u6570\u636E\u4E2D\u5FC3\u762B\u75EA\u3002</p><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u660E\u767D\u81EA\u5DF1\u7684\u670D\u52A1\u5668<ruby>\u5E76\u4E0D\u80FD\u63D0\u4F9B\u7A33\u5B9A\u7684\u670D\u52A1<rt>\u914D\u7F6E\u5783\u573E\u7684\u4E00\u6BD4</rt></ruby>\uFF0C\u4E8E\u662F\u5C06\u6E90\u4EE3\u7801\u8FC1\u79FB\u5230\u4E86<s>\u5168\u7403\u6700\u5927\u540C\u6027\u4EA4\u53CB\u7F51\u7AD9</s>GitHub\uFF0C\u81EA\u6B64 InPageEdit \u7684\u7248\u672C\u7BA1\u63A7\u7531 MediaWiki \u8F6C\u4E3A Git\uFF0C\u5E76\u4F7F\u7528 GitHub \u6258\u7BA1\u6E90\u4EE3\u7801\uFF0CCDN \u4F9B\u5E94\u5546\u4E3A jsDeliver\u3002</p><h2 id="inpageedit-\u4E0E-node-js-package-\u2014\u2014-\u9879\u76EE\u5206\u53D1\u7684\u8FDB\u5316" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u4E0E-node-js-package-\u2014\u2014-\u9879\u76EE\u5206\u53D1\u7684\u8FDB\u5316" aria-hidden="true">#</a> InPageEdit \u4E0E Node.js Package \u2014\u2014 \u9879\u76EE\u5206\u53D1\u7684\u8FDB\u5316</h2><p>\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u8BA4\u4E3A GitHub \u7684\u5305\u7BA1\u7406\u592A\u9EBB\u70E6\uFF0C\u56E0\u6B64\u5728 2020 \u5E74 8 \u6708\u5DE6\u53F3\u9009\u62E9\u4F7F\u7528 Node.js Package \u6765\u7BA1\u7406 InPageEdit \u7684\u7F16\u8BD1\u5305\u5206\u53D1\u3002<s>\u4E0D\uFF0C\u4ED6\u53EA\u662F\u5355\u7EAF\u7684\u8BA4\u4E3A JavaScript \u5305\u7528 NPM \u53D1\u5E03\u6BD4\u8F83\u5E05\u3002</s></p><!--]-->`);
}
_sfc_main$1g.ssrRender = _sfc_ssrRender$12;
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/about/do-you-know.html.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
var doYouKnow_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1g
});
const _sfc_main$1f = {};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u652F\u6301\u4F5C\u8005" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u4F5C\u8005" aria-hidden="true">#</a> \u652F\u6301\u4F5C\u8005</h1><blockquote><p>\u5728 GitHub \u7ED9\u6211\u70B9\u661F\u661F\uFF0C\u63D0 issues \u5C31\u662F\u6700\u597D\u7684\u9F13\u52B1\uFF01</p></blockquote><h2 id="\u53C2\u4E0E\u8FDB\u6765" tabindex="-1"><a class="header-anchor" href="#\u53C2\u4E0E\u8FDB\u6765" aria-hidden="true">#</a> \u53C2\u4E0E\u8FDB\u6765</h2><p>\u4F60\u53EF\u4EE5\u5E2E\u6211\u5B8C\u5584\u6587\u6863\u4E2D\u5FC3\u8FD9\u4E2A\u65B0\u6316\u7684\u5DE8\u5751\uFF0C\u5982\u679C\u6BD4\u8F83\u4E86\u89E3 JavaScript \u4E5F\u53EF\u4EE5\u5E2E\u52A9\u6211\u5B8C\u5584\u63D2\u4EF6\u3002</p><h2 id="\u7269\u8D28\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u7269\u8D28\u652F\u6301" aria-hidden="true">#</a> \u7269\u8D28\u652F\u6301</h2><p>\u5982\u679C\u4F60\u592A\u559C\u6B22 InPageEdit \u4E86\uFF0C\u4E43\u81F3\u4E8E\u60F3\u6253\u94B1\u652F\u6301\u4F5C\u8005\uFF0C\u8BF7\u901A\u8FC7 QQ \u79C1\u804A\u2026\u2026<s>\u8FD8\u6CA1\u6253\u7B97\u628A\u6536\u6B3E\u7801\u6446\u51FA\u6765\uFF0C\u80AF\u5B9A\u4F1A\u88AB\u603C\u88AB\u4E0A\u5929\u2026\u2026</s></p><!--]-->`);
}
_sfc_main$1f.ssrRender = _sfc_ssrRender$11;
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/about/donate.html.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
var donate_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1f
});
var _imports_0 = "/images/logo/InPageEdit.png";
const _sfc_main$1e = {};
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  const _component_ColorPreview = vue.resolveComponent("ColorPreview");
  _push(`<!--[--><h1 id="\u5173\u4E8E-logo" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-logo" aria-hidden="true">#</a> \u5173\u4E8E Logo</h1><p><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt=""></p><p><a href="https://github.com/dianliang233/" target="_blank" rel="noopener noreferrer">Dianliang233`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> \u4F7F\u7528 <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">Sketch`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> \u5236\u4F5C</p><h2 id="\u8BBE\u8BA1-\u5B57\u4F53" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1-\u5B57\u4F53" aria-hidden="true">#</a> \u8BBE\u8BA1&amp;\u5B57\u4F53</h2><ul><li>\u8272\u5361\uFF1A<a href="https://atlassian.design/" target="_blank" rel="noopener noreferrer">Atlassian Design`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a><ul><li>In: Pacific Bridge B400 (`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorPreview, { color: "#0052CC" }, null, _parent));
  _push(`)</li><li>Page: Sodium Explosion B300 (`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorPreview, { color: "#0065FF" }, null, _parent));
  _push(`)</li><li>Edit: Coogee B200 (`);
  _push(serverRenderer.ssrRenderComponent(_component_ColorPreview, { color: "#2684FF" }, null, _parent));
  _push(`)</li></ul></li><li>Edit \u4E2D\u7684\u5B57\u6BCD i\uFF1A<svg style="${serverRenderer.ssrRenderStyle({ "width": "1em" })}" class="MuiSvgIcon-root jss67" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Edit" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg> \u6765\u81EA <a href="https://material.io/resources/icons/" target="_blank" rel="noopener noreferrer">Material Design Icon`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li>\u5B57\u4F53\uFF1AGoogle &quot;Product&quot; Sans</li></ul><!--]-->`);
}
_sfc_main$1e.ssrRender = _sfc_ssrRender$10;
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/about/logo.html.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
var logo_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1e
});
const _sfc_main$1d = {};
function _sfc_ssrRender$$(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="inpageedit-\u5F00\u53D1\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u5F00\u53D1\u6307\u5357" aria-hidden="true">#</a> InPageEdit \u5F00\u53D1\u6307\u5357</h1><h2 id="\u7248\u672C\u547D\u540D\u65B9\u9488" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u547D\u540D\u65B9\u9488" aria-hidden="true">#</a> \u7248\u672C\u547D\u540D\u65B9\u9488</h2><p>\u7248\u672C\u53F7\u7684\u683C\u5F0F\u4E3A <code>X.Y.Z</code> (\u53C8\u79F0<code>Major.Minor.Patch</code>)\uFF0C\u9012\u589E\u7684\u89C4\u5219\u4E3A\uFF1A</p><ul><li><code>X</code> \u8868\u793A\u4E3B\u7248\u672C\u53F7\uFF0C\u5F53 API \u7684\u517C\u5BB9\u6027\u53D8\u5316\u65F6\uFF0CX \u9700\u9012\u589E\u3002</li><li><code>Y</code> \u8868\u793A\u6B21\u7248\u672C\u53F7\uFF0C\u5F53\u589E\u52A0\u529F\u80FD\u65F6(\u4E0D\u5F71\u54CD API \u7684\u517C\u5BB9\u6027)\uFF0CY \u9700\u9012\u589E\u3002</li><li><code>Z</code> \u8868\u793A\u4FEE\u8BA2\u53F7\uFF0C\u5F53\u505A Bug \u4FEE\u590D\u65F6(\u4E0D\u5F71\u54CD API \u7684\u517C\u5BB9\u6027)\uFF0CZ \u9700\u9012\u589E\u3002</li></ul><p>\u8BE6\u7EC6\u7684\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>X, Y, Z \u5FC5\u987B\u4E3A<strong>\u975E\u8D1F\u6574\u6570</strong>\uFF0C\u4E14<strong>\u4E0D\u5F97</strong>\u5305\u542B\u524D\u5BFC\u96F6\uFF0C\u5FC5\u987B\u6309\u6570\u503C<strong>\u9012\u589E</strong>\uFF0C\u5982 1.9.0 -&gt; 1.10.0 -&gt; 1.11.0</li><li>\u5F53 API \u7684\u517C\u5BB9\u6027\u53D8\u5316\u65F6\uFF0CX \u5FC5\u987B\u9012\u589E\uFF0CY \u548C Z \u540C\u65F6\u8BBE\u7F6E\u4E3A 0</li><li>\u5F53\u65B0\u589E\u529F\u80FD(\u4E0D\u5F71\u54CD API \u7684\u517C\u5BB9\u6027)\u6216\u8005 API \u88AB\u6807\u8BB0\u4E3A Deprecated \u65F6\uFF0CY \u5FC5\u987B\u9012\u589E\uFF0C\u540C\u65F6 Z \u8BBE\u7F6E\u4E3A 0</li><li>\u5F53\u8FDB\u884C bug fix \u65F6\uFF0CZ \u5FC5\u987B\u9012\u589E</li><li>\u5148\u884C\u7248\u672C\u53F7(Pre-release)\u610F\u5473\u8BE5\u7248\u672C\u4E0D\u7A33\u5B9A\uFF0C\u53EF\u80FD\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u5176\u683C\u5F0F\u4E3A\uFF1AX.Y.Z-[\u7C7B\u578B].[\u975E\u8D1F\u6574\u6570]\uFF0C\u4F8B\u5982<code>2.0.0-alpha.1</code></li><li>\u7248\u672C\u53F7\u7684\u6392\u5E8F\u89C4\u5219\u4E3A\u4F9D\u6B21\u6BD4\u8F83\u4E3B\u7248\u672C\u53F7\u3001\u6B21\u7248\u672C\u53F7\u548C\u4FEE\u8BA2\u53F7\u7684\u6570\u503C\uFF0C\u5982 1.0.0 &lt; 1.0.1 &lt; 1.1.1 &lt; 2.0.0\uFF1B\u5BF9\u4E8E\u5148\u884C\u7248\u672C\u53F7\u548C\u5F00\u53D1\u7248\u672C\u53F7\uFF0C\u6211\u4EEC\u89C4\u5B9A alpha &lt; beta &lt; pre &lt; stable</li><li><strong>\u6CE8\u610F</strong>\uFF1A\u7248\u672C\u4E00\u7ECF\u53D1\u5E03\uFF0C\u4E0D\u5F97\u4FEE\u6539\u5176\u5185\u5BB9\uFF0C\u4EFB\u4F55\u4FEE\u6539\u5FC5\u987B\u5728\u65B0\u7248\u672C\u53D1\u5E03\uFF01</li></ul><p>\u5148\u884C\u7248\u672C\u7684\u7C7B\u578B\u5982\u4E0B\uFF1A</p><ul><li>\u5185\u90E8\u6D4B\u8BD5\uFF1A<code>alpha</code></li><li>\u5916\u90E8\u6D4B\u8BD5\uFF1A<code>beta</code></li><li>\u9884\u53D1\u5E03\u7248\uFF1A<code>pre</code></li></ul><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u7EF4\u62A4\u7248\u672C\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u7248\u672C\u53F7</span>
<span class="token function">yarn</span> checkversion
<span class="token comment"># \u8DDF\u65B0\u7248\u672C\u53F7</span>
<span class="token function">yarn</span> updateversion x.x.x-xxx.x
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6807\u7B7E-tag-\u65B9\u9488" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E-tag-\u65B9\u9488" aria-hidden="true">#</a> \u6807\u7B7E\uFF08tag\uFF09\u65B9\u9488</h2><ul><li>\u6700\u65B0\u7A33\u5B9A\u7248\uFF1A<code>latest</code></li><li>\u6700\u65B0\u6D4B\u8BD5\u7248\uFF1A<code>canary</code></li></ul><h2 id="\u4EE3\u7801\u683C\u5F0F\u65B9\u9488" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u683C\u5F0F\u65B9\u9488" aria-hidden="true">#</a> \u4EE3\u7801\u683C\u5F0F\u65B9\u9488</h2><p>\u672C\u9879\u76EE\u4F7F\u7528<code>prettier</code>\u89C4\u8303\u4EE3\u7801\u683C\u5F0F\uFF0C\u5728\u7F16\u64B0\u5B8C\u6BD5\u540E\uFF0C\u8BF7\u4F7F\u7528<code>prettier --check &lt;file&gt;</code>\u68C0\u67E5\u683C\u5F0F\u662F\u5426\u7B26\u5408\u6807\u51C6\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>yarn prettier</code>\u76F4\u63A5\u683C\u5F0F\u5316\u5168\u90E8\u6587\u4EF6\u3002</p><p>\u672C\u9879\u76EE\u7684\u683C\u5F0F\u89C4\u8303\u5982\u4E0B\uFF1A</p><ul><li>\u8BF7\u4F7F\u7528\u7A7A\u683C\u7F29\u8FDB\uFF0C\u7F29\u8FDB\u4E3A 2 \u7A7A\u683C</li><li>\u8BF7\u4F7F\u7528\u5355\u5F15\u53F7\u6216\u6A21\u677F\u8BED\u6CD5\u5305\u88F9\u5B57\u7B26\u4E32</li><li>\u8BF7\u4E0D\u8981\u5728\u884C\u672B\u6DFB\u52A0\u5206\u53F7</li><li>\u5173\u952E\u8BCD\u4E0E\u5173\u952E\u8BCD\u4E4B\u95F4\u9700\u8981\u4F7F\u7528\u7A7A\u683C\u9694\u5F00\uFF0C\u4F8B\u5982<code>{ foo: &#39;bar&#39; }</code></li><li>\u4EFB\u4F55\u8FDB\u5165 P4 \u9636\u6BB5\u7684\u8BED\u6CD5\u90FD\u662F\u5141\u8BB8\u7684\uFF0C\u6211\u4EEC\u4E0D\u8003\u8651\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u517C\u5BB9</li></ul><p>\u60A8\u53EF\u4EE5\u5728<code>.prettierrc.js</code>\u4E2D\u627E\u5230\u76F8\u5173\u914D\u7F6E\uFF0C\u8BF7\u4E0D\u8981\u66F4\u6539\u6B64\u6587\u4EF6\u3002</p><h2 id="\u5F00\u53D1\u6307\u5F15" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u6307\u5F15" aria-hidden="true">#</a> \u5F00\u53D1\u6307\u5F15</h2><h3 id="\u514B\u9686\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u514B\u9686\u4ED3\u5E93" aria-hidden="true">#</a> \u514B\u9686\u4ED3\u5E93</h3><p><code>git clone &lt;url&gt;</code></p><h3 id="\u540C\u6B65\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u4ED3\u5E93" aria-hidden="true">#</a> \u540C\u6B65\u4ED3\u5E93</h3><p>\u6BCF\u6B21\u5F00\u53D1\u524D\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u540C\u6B65\u662F\u4E00\u4E2A\u597D\u4E60\u60EF\u3002</p><p><code>git pull</code></p><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u9879\u76EE\u4F7F\u7528<strong>yarn</strong>\u7BA1\u7406\u5305\u4F9D\u8D56\uFF0C\u5982\u679C\u60A8\u6CA1\u6709\u5B89\u88C5yarn\uFF0C\u8BF7\u4F7F\u7528<code>npm i -g yarn</code>\u5B89\u88C5</p></div><p><code>yarn install</code></p><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><p>\u5F53\u9636\u6BB5\u6027\u5F00\u53D1\u5B8C\u6BD5\uFF0C\u9700\u8981\u4F7F\u7528\u5DE5\u5177\u6D4B\u8BD5\u9879\u76EE\uFF0C\u672C\u9879\u76EE\u4F7F\u7528<code>eslint</code>\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p><code>yarn test</code></p><h3 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h3><p>\u672C\u9879\u76EE\u901A\u8FC7<code>webpack</code>\u6253\u5305\u6784\u5EFA\uFF0C\u8F93\u51FA\u6587\u4EF6\u4F4D\u4E8E<code>dist</code>\u6587\u4EF6\u5939</p><ul><li>UNIX \u7CFB\u7EDF(bash)\uFF1A<code>yarn build:linux</code></li><li>Windows \u7CFB\u7EDF(cmd/powershell)\uFF1A<code>yarn build:windows</code></li></ul><h2 id="\u901A\u8FC7-node-js-package-\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-node-js-package-\u53D1\u5E03" aria-hidden="true">#</a> \u901A\u8FC7 Node.js Package \u53D1\u5E03</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u9879\u76EE\u7684 GitHub \u7684 master \u5206\u652F\u6536\u5230\u63A8\u9001\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6784\u5EFA\u53D1\u5E03npm\u5305</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u624B\u52A8\u63A8\u9001\u524D\u8BF7\u8BB0\u5F97\u5148\u8FDB\u884C\u6784\u5EFA</p></div><h3 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h3><p>\u5F53\u6D4B\u8BD5\u901A\u8FC7\uFF0C\u53EF\u4EE5\u9009\u62E9\u53D1\u5E03\u5305\u3002\u53EF\u4EE5\u8BD5\u7528\u4E00\u4E0B\u6307\u4EE4\u63A8\u9001\u5305\uFF1A</p><ul><li>\u63A8\u9001\u7A33\u5B9A\u7248\uFF1A<code>npm run publish:stable</code></li><li>\u63A8\u9001\u6D4B\u8BD5\u7248\uFF1A<code>npm run publish:canary</code></li></ul><p>\u6CE8\uFF1A\u63A8\u9001\u6D4B\u8BD5\u7248\u5305\u7684\u6307\u4EE4\u76EE\u524D\u9488\u5BF9 Windows \u7CFB\u7EDF\u8BBE\u8BA1\uFF1B\u7A33\u5B9A\u7248\u4E00\u822C\u7531 GitHub Actions \u81EA\u52A8\u6784\u5EFA\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u5F00\u53D1\u5B8C\u6BD5\u540E\u5411\u6E90\u4ED3\u5E93\u53D1\u9001 PR \u5373\u53EF\u3002</p><h3 id="\u64A4\u56DE\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u64A4\u56DE\u7248\u672C" aria-hidden="true">#</a> \u64A4\u56DE\u7248\u672C</h3><p>\u6709\u65F6\u5019\u9519\u8BEF\u7684\u63A8\u9001\u4E86\u672A\u5B8C\u6210\u7684\u4EE3\u7801\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u64A4\u56DE\u53D1\u5E03\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> unpublish <span class="token string">&quot;mediawiki-inpageedit@&lt;version&gt;&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u79FB\u52A8-tag" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8-tag" aria-hidden="true">#</a> \u79FB\u52A8 tag</h3><p>\u6709\u65F6\u5019\u4F1A\u5C06\u6D4B\u8BD5\u7248\u9519\u8BEF\u6807\u8BB0\u4E3A\u7A33\u5B9A\u7248\u53D1\u5E03\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u5C06<code>latest</code>\u6807\u8BB0\u91CD\u65B0\u6307\u5411\u7A33\u5B9A\u7248\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u6240\u6709 tag</span>
<span class="token function">npm</span> dist-tag
<span class="token comment"># \u79FB\u52A8 tag</span>
<span class="token function">npm</span> dist-tag <span class="token function">add</span> <span class="token string">&quot;mediawiki-inpageedit@&lt;version&gt;&quot;</span> <span class="token operator">&lt;</span>tag<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><!--]-->`);
}
_sfc_main$1d.ssrRender = _sfc_ssrRender$$;
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/index.html.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
var index_html$h = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1d
});
const _sfc_main$1c = {};
function _sfc_ssrRender$_(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_infobox = vue.resolveComponent("infobox");
  _push(`<!--[--><h1 id="api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a> API \u6587\u6863</h1><div class="custom-container tip"><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u672C\u9875\u9762\u7684\u5185\u5BB9\u6B63\u5728\u65BD\u5DE5\u4E2D\uFF0C\u8BF7\u4EE5\u6700\u7EC8\u7248\u4E3A\u51C6\uFF01</p></div><p>\u8FD9\u91CC\u4ECB\u7ECD\u7684\u662F\u7531 InPageEdit \u63D0\u4F9B\u7684\u51FD\u6570\u6216\u53D8\u91CF\u3002</p><p>\u5F53\u4ECB\u7ECD\u51FD\u6570\u65F6\uFF0C<code>&lt;param&gt;</code>\u4EE3\u8868\u5FC5\u9009\uFF0C<code>[param]</code>\u4EE3\u8868\u53EF\u9009\uFF0C<code>|</code>\u4EE3\u8868\u6216\u8005\u3002</p><h2 id="window-inpageedit" tabindex="-1"><a class="header-anchor" href="#window-inpageedit" aria-hidden="true">#</a> <code>window.InPageEdit</code></h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> InPageEdit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="inpageedit-about" tabindex="-1"><a class="header-anchor" href="#inpageedit-about" aria-hidden="true">#</a> <code>InPageEdit.about()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-api" tabindex="-1"><a class="header-anchor" href="#inpageedit-api" aria-hidden="true">#</a> <code>InPageEdit.api</code></h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9501\u5B9A`);
      } else {
        return [
          vue.createTextVNode("\u9501\u5B9A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u4FDD\u7559\u4E86\u6709\u5173 InPageEdit \u7684\u4E00\u4E9B\u63A5\u53E3\uFF0C\u4F8B\u5982</p><ul><li>Type: {Object}</li><li>Return: <ul><li><code>aboutUrl</code> \u5173\u4E8E&amp;\u5E2E\u52A9\u7684 URL</li><li><code>analysis</code> \u7EDF\u8BA1\u4FE1\u606F\u7684\u6570\u636E\u4E0A\u62A5\u63A5\u53E3</li><li><code>analysisUrl</code> \u7EDF\u8BA1\u4FE1\u606F\u5C55\u793A\u9875\u9762\u7684 URL</li><li><code>updatelogsUrl</code> \u66F4\u65B0\u65E5\u5FD7\u7684 URL</li></ul></li></ul><h2 id="inpageedit-articlelink-element" tabindex="-1"><a class="header-anchor" href="#inpageedit-articlelink-element" aria-hidden="true">#</a> <code>InPageEdit.articleLink([element])</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-findandreplace-element" tabindex="-1"><a class="header-anchor" href="#inpageedit-findandreplace-element" aria-hidden="true">#</a> <code>InPageEdit.findAndReplace(&lt;element&gt;)</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-preference" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference" aria-hidden="true">#</a> <code>InPageEdit.preference</code></h2><h3 id="inpageedit-preference-default" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-default" aria-hidden="true">#</a> <code>InPageEdit.preference.default</code></h3><p>\u4FDD\u5B58\u9884\u8BBE\u7684\u53C2\u6570\u8BBE\u7F6E</p><ul><li>Type: [Array]</li><li>Return:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;doNotCollectMyInfo&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;doNotShowLocalWarn&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editMinor&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editSummary&quot;</span><span class="token operator">:</span> <span class="token function">_msg</span><span class="token punctuation">(</span><span class="token string">&quot;preference-summary-default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;lockToolBox&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;redLinkQuickEdit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;outSideClose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;watchList&quot;</span><span class="token operator">:</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>mw<span class="token punctuation">.</span>user<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;watchdefault&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="inpageedit-preference-get-setting" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-get-setting" aria-hidden="true">#</a> <code>InPageEdit.preference.get([setting])</code></h3><p>\u83B7\u53D6\u53C2\u6570\u8BBE\u7F6E\u7684\u503C</p><ul><li><code>setting</code>{String} <ul><li>\u9700\u8981\u83B7\u53D6\u7684\u53C2\u6570\u8BBE\u7F6E\u7684\u952E\uFF0C\u4E0D\u6307\u5B9A\u5219\u4EE5 Object \u8FD4\u56DE\u5168\u90E8\u8BBE\u5B9A</li></ul></li></ul><h3 id="inpageedit-preference-set-settingkey-settingvalue" tabindex="-1"><a class="header-anchor" href="#inpageedit-preference-set-settingkey-settingvalue" aria-hidden="true">#</a> <code>InPageEdit.preference.set(&lt;settingKey&gt;[, settingValue])</code></h3>`);
  _push(serverRenderer.ssrRenderComponent(_component_infobox, { type: "info" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u4E0D\u63A8\u8350\u4F7F\u7528\u6B64\u51FD\u6570\u4FDD\u5B58\u4E2A\u4EBA\u8BBE\u7F6E`);
      } else {
        return [
          vue.createTextVNode("\u4E0D\u63A8\u8350\u4F7F\u7528\u6B64\u51FD\u6570\u4FDD\u5B58\u4E2A\u4EBA\u8BBE\u7F6E")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u4FDD\u5B58\u53C2\u6570\u8BBE\u7F6E\u7684\u503C</p><ul><li><code>settingKey</code> {Object|String} <ul><li>\u8981\u4FDD\u5B58\u7684\u53C2\u6570\u8BBE\u7F6E\u952E\u503C\u5BF9\u6216\u952E</li></ul></li><li><code>settingValue</code> {Any} <ul><li>\u8981\u4FDD\u5B58\u7684\u53C2\u6570\u7684\u503C</li><li>\u5F53<code>settingKey</code>\u4E3A String \u65F6\u5FC5\u586B</li></ul></li></ul><h2 id="inpageedit-progress-text" tabindex="-1"><a class="header-anchor" href="#inpageedit-progress-text" aria-hidden="true">#</a> <code>InPageEdit.progress(&lt;text&gt;)</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickdelete-page" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickdelete-page" aria-hidden="true">#</a> <code>InPageEdit.quickDelete([page])</code></h2><p>\u6253\u5F00\u5FEB\u901F\u5220\u9664\u7684\u5BF9\u8BDD\u6846</p><ul><li><code>page</code> {String} <ul><li>Default: <code>mw.config.get(&#39;wgPageName&#39;)</code></li><li>\u8981\u5220\u9664\u7684\u9875\u9762\u540D</li></ul></li></ul><h2 id="inpageedit-quickdiff-param" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickdiff-param" aria-hidden="true">#</a> <code>InPageEdit.quickDiff(&lt;param&gt;)</code></h2><p>\u901A\u8FC7\u53C2\u6570\u5C55\u793A\u5FEB\u901F\u5DEE\u5F02\u6A21\u6001\u6846</p><ul><li><code>param</code> {Object} <ul><li>MediaWiki diff API \u6807\u51C6\u53C2\u6570</li></ul></li></ul><h2 id="inpageedit-quickedit-options" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickedit-options" aria-hidden="true">#</a> <code>InPageEdit.quickEdit([options])</code></h2><p>\u6309\u7167\u8BBE\u5B9A\u53C2\u6570\u6253\u5F00\u5FEB\u901F\u7F16\u8F91\u7684\u6A21\u6001\u6846</p><ul><li><p><code>options</code> {Object|String}</p><ul><li>\u4E0D\u914D\u7F6E\u6216\u8005\u4F20\u5165\u7A7A\u503C\uFF0C\u4EE5\u5F53\u524D\u6D4F\u89C8\u7684\u9875\u9762\u4E3A\u76EE\u6807\u9875\u9762</li><li>\u4F20\u5165\u5B57\u7B26\u4E32\u65F6\uFF0C\u5C06\u5B57\u7B26\u4E32\u89C6\u4E3A\u76EE\u6807\u9875\u9762\u540D</li><li>\u4F20\u5165 JSON \u5BF9\u8C61\u65F6\uFF0C\u5C06\u4F1A\u5C1D\u8BD5\u4E0E\u9ED8\u8BA4\u914D\u7F6E\u9879\u8FDB\u884C\u5408\u5E76\u540E\u6267\u884C\u540E\u7EED\u64CD\u4F5C</li></ul></li><li><p>\u53EF\u4F9B\u914D\u7F6E\u7684 JSON \u53C2\u6570\uFF1A</p><ul><li><code>options.page</code> {String} \u9875\u9762\u540D\u79F0\uFF0C\u4E0D\u80FD\u4E0E<code>pageId</code>\u540C\u65F6\u4F7F\u7528\uFF08\u9884\u8BBE\u4E3A\u5F53\u524D\u9875\u9762\u540D\uFF09</li><li><code>options.pageId</code> {Number} \u9875\u9762 ID\uFF0C\u4E0D\u80FD\u4E0E<code>page</code>\u540C\u65F6\u4F7F\u7528</li><li><code>options.revision</code> {Number} \u82E5\u914D\u7F6E\uFF0C\u5C06\u4EE5\u63D0\u4F9B\u7684 revision \u7F16\u53F7\u67E5\u627E\u9875\u9762\u4FE1\u606F\uFF0C\u53EF\u80FD\u5FFD\u7565\u9875\u9762\u914D\u7F6E\uFF08\u9884\u8BBE\u4E3A\u5F53\u524D\u9875\u9762\u7684\u7248\u672C ID\uFF09</li><li><code>options.section</code> {Number|&quot;new&quot;} \u82E5\u914D\u7F6E\uFF0C\u7F16\u8F91\u6BB5\u843D\uFF0C\u6BB5\u843D\u4E3A\u5927\u4E8E 0 \u4E14\u5C0F\u4E8E\u9875\u9762\u6BB5\u843D\u6570\u7684\u6570\u5B57\u6216\u8005&quot;new&quot;\uFF08\u9884\u8BBE\u4E3A null\uFF0C\u7F16\u8F91\u5168\u6587\uFF09</li><li><code>options.editMinor</code> {Boolean} \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u5C0F\u7F16\u8F91\u7684\u52FE\u9009\u72B6\u6001</li><li><code>options.editSummary</code> \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u7F16\u8F91\u6458\u8981\u7684\u5185\u5BB9</li><li><code>options.reload</code> {Boolean} \u82E5\u914D\u7F6E\uFF0C\u53D6\u4EE3\u4FDD\u5B58\u540E\u5237\u65B0\u9875\u9762\u7684\u52FE\u9009\u72B6\u6001</li><li>\u5176\u4F59\u53C2\u6570\u5747\u4E0D\u5EFA\u8BAE\u4FEE\u6539\uFF0C\u5426\u5219\u53EF\u80FD\u5BFC\u81F4\u6545\u969C</li></ul></li></ul><h2 id="inpageedit-quickpreview" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickpreview" aria-hidden="true">#</a> <code>InPageEdit.quickPreview()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickredirect" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickredirect" aria-hidden="true">#</a> <code>InPageEdit.quickRedirect()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-quickrename" tabindex="-1"><a class="header-anchor" href="#inpageedit-quickrename" aria-hidden="true">#</a> <code>InPageEdit.quickRename()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-specialnotice" tabindex="-1"><a class="header-anchor" href="#inpageedit-specialnotice" aria-hidden="true">#</a> <code>InPageEdit.specialNotice()</code></h2><p>\u2026\u2026</p><h2 id="inpageedit-version" tabindex="-1"><a class="header-anchor" href="#inpageedit-version" aria-hidden="true">#</a> <code>InPageEdit.version</code></h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u9501\u5B9A`);
      } else {
        return [
          vue.createTextVNode("\u9501\u5B9A")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>Type: &quot;String&quot;</li><li>Return: \u5F53\u524D\u4F7F\u7528\u7684 InPageEdit \u7248\u672C\u53F7</li></ul><h2 id="inpageedit-versioninfo" tabindex="-1"><a class="header-anchor" href="#inpageedit-versioninfo" aria-hidden="true">#</a> <code>InPageEdit.versionInfo()</code></h2><p>\u2026\u2026</p><h2 id="msg-msgkey-args" tabindex="-1"><a class="header-anchor" href="#msg-msgkey-args" aria-hidden="true">#</a> <code>_msg(&lt;msgKey&gt;[, ...args])</code></h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "warning" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5185\u90E8`);
      } else {
        return [
          vue.createTextVNode("\u5185\u90E8")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u901A\u8FC7\u952E\u83B7\u53D6 i18n \u5B57\u7B26\u4E32</p><ul><li><code>msgKey</code> {String}</li><li><code>args</code> {String} <ul><li>\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u7684\u5360\u4F4D\u7B26\uFF08\u4F8B\u5982<code>$1</code>\uFF09</li></ul></li></ul><!--]-->`);
}
_sfc_main$1c.ssrRender = _sfc_ssrRender$_;
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/api.html.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
var api_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1c
});
const _sfc_main$1b = {};
function _sfc_ssrRender$Z(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="hook-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#hook-\u6587\u6863" aria-hidden="true">#</a> Hook \u6587\u6863</h1>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "dev" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`in progress`);
      } else {
        return [
          vue.createTextVNode("in progress")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u8FD9\u662F\u672A\u6765\u7248\u672C\u5C06\u5305\u542B\u7684\u7279\u6027\u3002</p><!--]-->`);
}
_sfc_main$1b.ssrRender = _sfc_ssrRender$Z;
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/hook.html.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
var hook_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1b
});
const _sfc_main$1a = {};
function _sfc_ssrRender$Y(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="inpageedit-\u540D\u8BCD\u8868" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u540D\u8BCD\u8868" aria-hidden="true">#</a> InPageEdit \u540D\u8BCD\u8868</h1><h2 id="\u63A5\u53E3-api" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3-api" aria-hidden="true">#</a> \u63A5\u53E3 API</h2><h2 id="\u529F\u80FD-functions" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD-functions" aria-hidden="true">#</a> \u529F\u80FD functions</h2><h3 id="\u5FEB\u901F\u7F16\u8F91-quick-edit" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u7F16\u8F91-quick-edit" aria-hidden="true">#</a> \u5FEB\u901F\u7F16\u8F91 Quick Edit</h3><h3 id="\u5FEB\u901F\u91CD\u547D\u540D-quick-rename" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u91CD\u547D\u540D-quick-rename" aria-hidden="true">#</a> \u5FEB\u901F\u91CD\u547D\u540D Quick Rename</h3><p>\u522B\u540D\u5FEB\u901F\u79FB\u52A8(Quick Move)</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> ...</h3><h2 id="\u94A9\u5B50-hook" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50-hook" aria-hidden="true">#</a> \u94A9\u5B50 Hook</h2><h2 id="\u8BED\u8A00\u5305-language-pack" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5305-language-pack" aria-hidden="true">#</a> \u8BED\u8A00\u5305 language pack</h2><h2 id="\u6A21\u5757-module" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757-module" aria-hidden="true">#</a> \u6A21\u5757 module</h2><h2 id="\u65B9\u6CD5-method" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-method" aria-hidden="true">#</a> \u65B9\u6CD5 method</h2><h2 id="\u63D2\u4EF6-plugin" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6-plugin" aria-hidden="true">#</a> \u63D2\u4EF6 plugin</h2><!--]-->`);
}
_sfc_main$1a.ssrRender = _sfc_ssrRender$Y;
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/nouns.html.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
var nouns_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1a
});
const _sfc_main$19 = {};
function _sfc_ssrRender$X(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="plugin-\u5F00\u53D1\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#plugin-\u5F00\u53D1\u6307\u5357" aria-hidden="true">#</a> Plugin \u5F00\u53D1\u6307\u5357</h1><p>\u5495\u5495\u5495\uFF01</p><!--]-->`);
}
_sfc_main$19.ssrRender = _sfc_ssrRender$X;
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/plugin.html.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var plugin_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$19
});
const _sfc_main$18 = {};
function _sfc_ssrRender$W(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "language-javascript ext-js line-numbers-mode" }, _attrs))}><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`);
}
_sfc_main$18.ssrRender = _sfc_ssrRender$W;
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/index.html.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$18
});
const _sfc_main$17 = {};
function _sfc_ssrRender$V(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u6587\u6863",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a> \u6587\u6863</h1>`);
}
_sfc_main$17.ssrRender = _sfc_ssrRender$V;
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var index_html$f = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$17
});
const _sfc_main$16 = {};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="\u63D2\u4EF6\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7B80\u4ECB" aria-hidden="true">#</a> \u63D2\u4EF6\u7B80\u4ECB</h1><p><strong>InPageEdit</strong>\u662F\u7531\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u7F16\u5199\u7684\u4E00\u6B3E MediaWiki \u591A\u529F\u80FD\u63D2\u4EF6\uFF0C\u5B83\u4E3B\u8981\u57FA\u4E8E jQuery \u7F16\u5199\u3002</p><h2 id="inpageedit-\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u7684\u4F18\u70B9" aria-hidden="true">#</a> InPageEdit \u7684\u4F18\u70B9</h2><p>InPageEdit \u5177\u6709\u8F83\u597D\u7684\u79FB\u52A8\u8BBE\u5907\u652F\u6301\u4EE5\u53CA<s>\u6BEB\u65E0\u5375\u7528\u7684</s><span style="${serverRenderer.ssrRenderStyle({ "color": "red" })}">\u4E94</span><span style="${serverRenderer.ssrRenderStyle({ "color": "orange" })}">\u5F69</span><span style="${serverRenderer.ssrRenderStyle({ "color": "green" })}">\u6591</span><span style="${serverRenderer.ssrRenderStyle({ "color": "indigo" })}">\u6593</span>\u8BBE\u8BA1\u3002\u4E3B\u8981\u529F\u80FD\u65E8\u5728\u4F7F\u8BB8\u591A MediaWiki \u7684\u529F\u80FD\u5728\u4E0D\u6253\u5F00\u65B0\u6807\u7B7E\u9875\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\uFF0C\u6781\u5927\u52A0\u5FEB\u7EF4\u62A4 wiki \u7684\u901F\u5EA6\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u9009\u62E9-inpageedit" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9009\u62E9-inpageedit" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9009\u62E9 InPageEdit\uFF1F</h2><h3 id="\u60C5\u666F\u5047\u8BBE" tabindex="-1"><a class="header-anchor" href="#\u60C5\u666F\u5047\u8BBE" aria-hidden="true">#</a> \u60C5\u666F\u5047\u8BBE</h3><p>\u60F3\u8C61\u4E00\u4E0B\u8FD9\u4E2A\u573A\u666F\u2026\u2026</p><p>\u4F60\u53D1\u73B0\u4F60\u5728\u6D4F\u89C8\u7684\u9875\u9762\u9700\u8981\u6539\u8FDB\uFF0C\u4F60\u6253\u5F00\u4E86\u7F16\u8F91\u9875\u9762\uFF0C\u5728\u4FEE\u6539\u5230\u4E00\u534A\u65F6\u9884\u89C8\u4E86\u4E00\u4E0B\uFF0C\u53D1\u73B0\u9875\u9762\u5185\u7684\u67D0\u4E2A\u6A21\u677F\u4E0D\u5C3D\u4EBA\u610F\uFF0C\u7136\u540E\u4F60\u70B9\u51FB\u524D\u5F80\u4E86\u8FD9\u4E2A\u6A21\u677F\u7684\u9875\u9762\uFF0C\u5728\u7126\u5934\u70C2\u989D\u7684\u4FEE\u6539\u4E86\u4E00\u5806\u5B57\u7B26\u4E32\u4EE5\u540E\u8FDB\u884C\u4E86\u6570\u6B21\u9884\u89C8\u8C03\u8BD5\u4EE5\u540E\u7EC8\u4E8E\u5F97\u5230\u4E86\u6EE1\u610F\u7684\u6548\u679C\uFF0C\u7136\u540E\u56DE\u5230\u4F60\u6700\u521D\u7F16\u8F91\u7684\u9875\u9762\uFF0C\u4F60\u7684\u601D\u8DEF\u5DF2\u7ECF\u5B8C\u5168\u88AB\u6253\u65AD\u4E86\uFF01</p><p>\u7EC6\u6570\u4EE5\u4E0A\u7684\u8FC7\u7A0B\uFF0C\u4F60\u5C45\u7136\u81F3\u5C11\u9700\u8981\u65B0\u6253\u5F00/\u91CD\u65B0\u52A0\u8F7D\u9875\u9762<strong>5 \u6B21</strong>\uFF01</p><p>\u5982\u679C\u4E0D\u5DE7\u518D\u9047\u5230\u7F51\u7EDC\u72B6\u51B5\u4E0D\u4F73\u2026\u2026\u5982\u679C\u8BA9\u6211\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u6211\u4E00\u5B9A\u4F1A\u6293\u72C2\u7684\uFF01<s>\u8C22\u8C22\uFF0C\u4EE3\u5165\u611F\u592A\u5F3A\uFF0C\u6211\u5DF2\u7ECF\u5F00\u59CB\u751F\u6C14\u4E86</s></p><h3 id="\u4E00\u5207\u5374\u80FD\u5982\u6B64" tabindex="-1"><a class="header-anchor" href="#\u4E00\u5207\u5374\u80FD\u5982\u6B64" aria-hidden="true">#</a> \u4E00\u5207\u5374\u80FD\u5982\u6B64\u2026\u2026</h3><p>\u5982\u679C\u4F60\u5B89\u88C5\u4E86 InPageEdit\uFF0C\u60C5\u51B5\u662F\u600E\u4E48\u6837\u7684\u5462\u2026\u2026</p><p>\u4F60\u53EF\u4EE5\u5728\u4E0D\u6253\u5F00\u65B0\u6807\u7B7E\u9875\u7684\u60C5\u51B5\u4E0B\u76F4\u63A5\u70B9\u51FB\u9875\u9762\u53F3\u4E0B\u89D2\u201CInPageEdit \u5DE5\u5177\u76D2\u201D\u4E2D\u7684\u201C\u94C5\u7B14\u56FE\u6807\u201D\u7F16\u8F91\u6B63\u5728\u6D4F\u89C8\u7684\u9875\u9762\uFF0C\u5F53\u4F60\u4FEE\u6539\u5230\u4E2D\u9014\u65F6\u4F60\u53D1\u73B0\u9700\u8981\u4FEE\u6539\u8BE5\u9875\u9762\u5D4C\u5165\u7684\u6A21\u677F\uFF0C\u4F60\u4EC5\u9700\u8981\u70B9\u51FB\u9875\u9762\u8BE6\u60C5\u4E2D\u7684\u201C\u4F7F\u7528\u7684\u6A21\u677F\u201D\uFF0C\u7136\u540E\u627E\u5230\u4F60\u8981\u4FEE\u6539\u7684\u6A21\u677F\u70B9\u51FB\u201C\u5FEB\u901F\u7F16\u8F91\u201D\u8FDB\u884C\u4FEE\u6539\u4FDD\u5B58\uFF0C\u4E4B\u540E\u70B9\u51FB\u201C\u9884\u89C8\u201D\u6309\u94AE\uFF0C\u67E5\u770B\u9875\u9762\u5185\u5BB9\u662F\u5426\u7B26\u5408\u9884\u671F\uFF0C\u4E4B\u540E\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u5373\u53EF\u53D1\u5E03\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u3002</p><p>\u56E0\u4E3A\u4E0D\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u4E0D\u9700\u8981\u591A\u6B21\u52A0\u8F7D\u9875\u9762\u91CC\u7684\u90A3\u6210\u5343\u4E0A\u4E07\u884C\u6837\u5F0F\u8868\u3001\u811A\u672C\uFF0C\u4E5F\u4E0D\u7528\u518D\u89C1\u5230\u66F4\u591A\u4F60\u4E0D\u611F\u5174\u8DA3\u7684\u607C\u4EBA\u7684\u8C37\u6B4C\u5E7F\u544A\uFF0C\u4F60\u4E0D\u4EC5\u53EF\u4EE5\u8BA9\u4F60\u7684\u601D\u8DEF\u66F4\u7D27\u51D1\u8FD8\u80FD\u987A\u4FBF\u8282\u7701\u65F6\u95F4\uFF0C\u8FD8\u80FD\u987A\u4FBF\u7701\u4E0B\u4E0D\u5C11\u7684\u6D41\u91CF\u8D39\u7528\uFF01</p><p>\u6211\u4EEC\u5728\u8FD9\u91CC\u8FD8\u53EA\u662F\u5047\u8BBE\u4E86\u4E00\u79CD\u4F7F\u7528\u573A\u666F\uFF0C\u800C InPageEdit \u63D0\u4F9B\u7684\u529F\u80FD<strong>\u8FDC\u6BD4\u201C\u7F16\u8F91\u4E00\u4E2A wiki \u9875\u9762\u201D\u8981\u591A\u5F97\u591A\uFF01</strong></p><h2 id="inpageedit-\u7684\u5176\u4ED6\u7279\u8272" tabindex="-1"><a class="header-anchor" href="#inpageedit-\u7684\u5176\u4ED6\u7279\u8272" aria-hidden="true">#</a> InPageEdit \u7684\u5176\u4ED6\u7279\u8272</h2><p>InPageEdit \u63D0\u4F9B\u4E86\u4EBA\u7C7B\u53EF\u8BFB\u5F0F\u7684\u4E2A\u6027\u5316\u8BBE\u5B9A\u7A97\u53E3\uFF0C\u60F3\u8981\u4FDD\u5B58\u4E00\u6BB5\u70AB\u9177\u7684\u7F16\u8F91\u63D0\u793A\u4F46\u662F\u4E0D\u77E5\u9053\u4EC0\u4E48\u662F JSON \u683C\u5F0F\u6587\u4EF6\uFF1F\u6CA1\u5173\u7CFB\uFF0C\u4F60\u6765\u6253\u5B57\u5C31\u884C\u4E86\uFF0CInPageEdit \u4F1A\u5E2E\u4F60\u5B8C\u6210\u8BBE\u5B9A\u7684\u4FDD\u5B58\u548C\u914D\u7F6E\u6587\u6863\u7684\u751F\u6210\u3002</p><p>InPageEdit \u91C7\u7528<s>\u4F2A\xB7\u6A21\u5757\u5316</s>\u8BBE\u8BA1\uFF0C\u63D0\u4F9B\u8BB8\u591A `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/api/" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`API`);
      } else {
        return [
          vue.createTextVNode("API")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` \u53EF\u4EE5\u81EA\u7531\u8C03\u7528\uFF0C\u5E76\u7559\u6709\u4F20\u9012\u4E0A\u4E0B\u6587\u7684 `);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/api/hook.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_status, { status: "dev" }, null, _parent2, _scopeId));
        _push2(`Hook`);
      } else {
        return [
          vue.createVNode(_component_status, { status: "dev" }),
          vue.createTextVNode("Hook")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u5728 InPageEdit \u7684\u57FA\u7840\u4E0A\u5F00\u53D1\u4F60\u60F3\u8981\u7684\u989D\u5916\u529F\u80FD\uFF0C\u4F8B\u5982\u5728\u9875\u9762\u7684\u67D0\u4E2A\u5730\u65B9\u63D2\u5165\u4E00\u4E2A\u5FEB\u901F\u7F16\u8F91\u7684\u6309\u94AE\uFF0C\u6216\u8005\u5728\u7F16\u8F91\u7A97\u53E3\u6253\u5F00\u65F6\u5728\u7F16\u8F91\u6846\u65C1\u8FB9\u63D2\u5165\u4E00\u6BB5\u5907\u5FD8\u5F55\u2026\u2026</p><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/install/quick-start.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FD8\u7B49\u4EC0\u4E48\uFF0C\u9A6C\u4E0A\u4F7F\u7528 \u2192`);
      } else {
        return [
          vue.createTextVNode("\u8FD8\u7B49\u4EC0\u4E48\uFF0C\u9A6C\u4E0A\u4F7F\u7528 \u2192")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><!--]-->`);
}
_sfc_main$16.ssrRender = _sfc_ssrRender$U;
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/intro.html.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var intro_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$16
});
const _sfc_main$15 = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="earlier-version-1-x" tabindex="-1"><a class="header-anchor" href="#earlier-version-1-x" aria-hidden="true">#</a> Earlier version (1.x)</h1><p>InPageEdit 1.0 no longer updated</p><!--]-->`);
}
_sfc_main$15.ssrRender = _sfc_ssrRender$T;
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/1.x.html.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var _1_x_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$15
});
const _sfc_main$14 = {};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-0-0-sora" tabindex="-1"><a class="header-anchor" href="#_14-0-0-sora" aria-hidden="true">#</a> 14.0.0 <code>Sora</code></h1><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 8 \u6708 30 \u65E5 20:05:14</p><div class="custom-container danger"><p class="custom-container-title">\u7834\u574F\u6027\u53D8\u66F4</p><p>\u8B66\u544A\uFF1A\u6B64\u7248\u672C\u5305\u542B\u7834\u574F\u6027\u53D8\u66F4\u3002</p></div><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u8FD9\u662F\u4E00\u6B21\u6280\u672F\u66F4\u65B0\uFF0C\u672A\u6DFB\u52A0\u65B0\u529F\u80FD </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u63D2\u4EF6\u5165\u53E3\u6587\u4EF6\u5730\u5740\u5DF2\u66F4\u6539\uFF0C\u8BF7\u4FEE\u6539\u60A8\u7684\u5F15\u7528\u5730\u5740\u4E3A\uFF1A </li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u6E90\u4EE3\u7801\u73B0\u5DF2\u91C7\u7528\u6A21\u5757\u5316\u8BBE\u8BA1 - InPageEdit \u6A21\u5757\u4F7F\u7528\`CommonJS\`\u89C4\u8303\uFF0C\u4F7F\u7528 Webpack \u6253\u5305 </li><li><span class="pornhub"><span>Breaking</span><span>changes</span></span> \u94A9\u5B50 <code>dfgh.i18n</code> \u88AB\u5220\u9664 <ul><li><code>_msg</code> \u6A21\u5757\u5C06\u4E0D\u518D\u4F7F\u7528 <code>dfgh.i18n</code> \u94A9\u5B50\uFF0C\u5B83\u73B0\u5728\u4F5C\u4E3A <code>mw.hook(&#39;InPageEdit&#39;)</code> \u7684\u4E0A\u4E0B\u6587\u4F20\u9012</li></ul></li><li><span class="pornhub"><span>Breaking</span><span>changes</span></span> <code>InPageEdit-v2</code> \u5C06<ruby>\u91CD\u547D\u540D<rt>brand new</rt></ruby>\u4E3A <code>InPageEdit</code><ul><li><strong>\u4E0D\u4F1A</strong>\u5728\u6B64\u7248\u672C\u53D1\u5E03\u540E\u7684 3 \u4E2A\u8865\u4E01\u5185\u6267\u884C\u6B64\u53D8\u66F4</li><li>GitHub \u4ED3\u5E93\u5C06\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u5C06\u4FDD\u7559\u65E7\u4ED3\u5E93\u5230\u65B0\u4ED3\u5E93\u7684\u91CD\u5B9A\u5411</li><li>\u5C06\u4FDD\u8BC1\u5373\u4FBF\u4F7F\u7528\u63D2\u4EF6\u7684\u4E2A\u4EBA\u6216 wiki \u4E0D\u91C7\u53D6\u4EFB\u4F55\u5E94\u5BF9\u63AA\u65BD\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u6B63\u5E38\u4F7F\u7528</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "warning" }, null, _parent));
  _push(` \u4ECE\u6B64\u7248\u672C\u5F00\u59CB\u5C06\u4F7F\u7528\u65B0\u7684\u7248\u672C\u547D\u540D\u65B9\u5F0F - \u65E7\u7248\u672C\u5C06**\u4E0D\u4F1A**\u91CD\u65B0\u547D\u540D - [\u67E5\u770B\u8BE6\u60C5](/develop/index.html#) </li></ul><!--]-->`);
}
_sfc_main$14.ssrRender = _sfc_ssrRender$S;
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.0.0.html.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var _14_0_0_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$14
});
const _sfc_main$13 = {};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-0-3-shiro" tabindex="-1"><a class="header-anchor" href="#_14-0-3-shiro" aria-hidden="true">#</a> 14.0.3 <code>Shiro</code></h1><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 9 \u6708 1 \u65E5 15:39:39</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u672C\u6B21\u66F4\u65B0\u65E5\u5FD7\u6DB5\u76D6 _14.0.1_ ~ _14.0.3_ \u7684\u591A\u4E2A\u8865\u4E01 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u65E7\u5165\u53E3\u6587\u4EF6\uFF08script.js\uFF09\u7684~~\u9634\u95F4 BUG~~\uFF0C\u73B0\u5728\u8C03\u7528\u65E7\u5730\u5740\u7684\u7528\u6237\u4E5F\u80FD\u6B63\u5E38\u52A0\u8F7D InPageEdit\uFF0C\u4F46\u63A8\u8350\u5C3D\u5FEB\u4FEE\u6539\u5F15\u7528\u5730\u5740\u4E3A\u65B0\u5730\u5740 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u5927\u91CF\u7531\`_msg\`\u6A21\u5757\u5BFC\u81F4\u7684~~\u9634\u95F4 BUG~~ - \u4F8B\u5982\uFF1A\u53F0\u6E7E\u6B63\u4F53\`zh-tw\`\u7684\u4F7F\u7528\u8005\u53EF\u4EE5\u6B63\u5E38\u52A0\u8F7D\u7E41\u4F53\u4E2D\u6587\u8BED\u8A00\u5305\u4E86 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u65B0\u529F\u80FD**\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305** - \u81EA\u5B9A\u4E49\u8BED\u8A00\u5305\u5206\u4E3A**\u5168\u5C40\u8BED\u8A00\u5305**\u548C**\u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305**\uFF0C\u4E24\u79CD\u5305\u53EF\u4EE5\u540C\u65F6\u5B9A\u4E49\uFF0C\u5176\u4E2D\u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305\u7684\u4F18\u5148\u7EA7\u6BD4\u5168\u5C40\u8BED\u8A00\u5305\u66F4\u9AD8 - **\u63D0\u793A**\uFF1A\u8BE5\u529F\u80FD\u4EC5\u4E3A\u81EA\u5B9A\u4E49\u6587\u672C\u663E\u793A\u63D0\u4F9B\u65B9\u4FBF\uFF0C\u8BF7\u4E0D\u8981\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u4FEE\u6B63\u7FFB\u8BD1\u6587\u672C\uFF0C\u6539\u8FDB\u7FFB\u8BD1\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u94FE\u63A5\u524D\u5F80 GitHub - \u793A\u4F8B\uFF1A </li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E0D\u8981\u7701\u7565\u8FD9\u4E00\u884C</span>
window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> window<span class="token punctuation">.</span>InPageEdit <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/** \u5168\u5C40\u8BED\u8A00\u5305 **/</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u270F\uFE0F\u5FEB\u7F16&#39;</span><span class="token punctuation">,</span> <span class="token comment">// =&gt; \u5DE5\u5177\u76D2\u4EE5\u53CA\u6BB5\u843D\u7F16\u8F91\u4E2D\u7684\u5FEB\u901F\u7F16\u8F91\u4F1A\u53D8\u6210\u201C\u270F\uFE0F\u5FEB\u7F16\u201D</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6307\u5B9A\u8BED\u8A00\u8BED\u8A00\u5305
 * \u7ED3\u6784\u4E3A InPageEdit.i18n.&lt;lang&gt;.&lt;msgKey&gt;
 * \u5176\u4E2D\u8BED\u8A00\u4EE3\u7801\u89C4\u8303\u4E0EMediaWiki\u7CFB\u7EDF\u4FDD\u6301\u4E00\u81F4
 */</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  en<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Fast edit&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ja<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;quick-delete&#39;</span><span class="token operator">:</span> <span class="token string">&#39;\u{1F4A3}\u30DA\u30FC\u30B8\u524A\u9664&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** \u4E24\u79CD\u540C\u65F6\u4F7F\u7528\uFF1F\u6211\u5168\u90FD\u8981\u3002 **/</span>
InPageEdit<span class="token punctuation">.</span>i18n <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u7B80\u4F53\u4E2D\u6587\u4F7F\u7528\u8005\u751F\u6548</span>
  <span class="token string">&#39;zh-hans&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE\u5FEB\u7F16&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u65E5\u6587\u4F7F\u7528\u8005\u751F\u6548</span>
  ja<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE\u30A8\u30C7\u30A3\u30C3\u30C8&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u5176\u4ED6\u8BED\u8A00\u7684\u4F7F\u7528\u8005\u751F\u6548</span>
  <span class="token string">&#39;quick-edit&#39;</span><span class="token operator">:</span> <span class="token string">&#39;IPE Edit&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><!--]-->`);
}
_sfc_main$13.ssrRender = _sfc_ssrRender$R;
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.0.3.html.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var _14_0_3_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$13
});
const _sfc_main$12 = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="_14-1-0-stephanie-dola" tabindex="-1"><a class="header-anchor" href="#_14-1-0-stephanie-dola" aria-hidden="true">#</a> 14.1.0 <code>Stephanie_Dola</code></h1><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 9 \u6708 10 \u65E5 20:19:20</p><h2 id="\u672C\u6B21\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u672C\u6B21\u66F4\u65B0" aria-hidden="true">#</a> \u672C\u6B21\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u6E90\u4EE3\u7801\u4ED3\u5E93\u5730\u5740\u5DF2\u4ECE\`Dragon-Fish/InPageEdit-v2\`\u79FB\u52A8\u5230\`Wjghj-Project/InPageEdit\`\uFF0C\u8FD9\u5BF9\u4E8E\u4E00\u822C\u4F7F\u7528\u8005\u4E0D\u4F1A\u9020\u6210\u5F71\u54CD </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u4E2A\u4EBA\u8BBE\u7F6E\u7A97\u53E3\u4F7F\u7528 Tabview \u8FDB\u884C\u5168\u65B0\u8BBE\u8BA1\uFF0C\u5237\u65B0\u4F7F\u7528\u4F53\u9A8C - `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u6DFB\u52A0\u4E86\u7EDF\u8BA1\u4FE1\u606F\u5C55\u793A\uFF0C\u5FEB\u53BB\u770B\u770B\u81EA\u5DF1\u5DF2\u7ECF\u5728 Wiki \u4E0A\u4F7F\u7528\u4E86\u591A\u5C11\u6B21 InPageEdit \u5427\uFF01 - `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u6DFB\u52A0\u4E86\u63D2\u4EF6\u5546\u5E97\uFF08Plugins Store\uFF09\uFF0C\u57FA\u4E8E InPageEdit \u7684\u6269\u5C55\u529F\u80FD\u4EFB\u541B\u6311\u9009\uFF01 - \u5F88\u591A\u66FE\u8FD1\u7684\u529F\u80FD\u5C06\u8F6C\u6362\u4E3A\u63D2\u4EF6\u7684\u5F62\u5F0F\uFF0C\u8BF7\u524D\u5F80\u6311\u9009\u5E76\u5F00\u542F - \u672A\u6765\u5C06\u6DFB\u52A0\u7684\u90E8\u5206\u529F\u80FD\u5C06\u4EE5\u63D2\u4EF6\u7684\u5F62\u5F0F\u51FA\u73B0\uFF0C\u4F8B\u5982\u4F60\u4EEC\u4E00\u76F4\u671F\u5F85\u7684\u5FEB\u901F\u5DE1\u67E5\u3001\u5FEB\u901F\u56DE\u9000 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` \u7248\u672C\u66F4\u65B0\u63D0\u793A\u5F39\u7A97\u88AB\u5220\u51CF\u4E3A\u4E86\u4E00\u6B21\u5F39\u7A97\uFF0C\u5E76\u4F1A\u5728 10 \u79D2\u540E\u81EA\u52A8\u6EDA\u86CB\uFF0C~~\u56E0\u4E3A\u5B83\u786E\u5B9E\u662F\u70E6\u6B7B\u4EBA\u4E86~~ </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u5728\u5FEB\u901F\u7F16\u8F91\u4E2D\uFF0C\u70B9\u51FB\u6BD4\u8F83\u5DEE\u5F02\u4E0D\u518D\u663E\u793A\`undefined\` </li></ul><h2 id="\u5DF2\u77E5\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u77E5\u95EE\u9898" aria-hidden="true">#</a> \u5DF2\u77E5\u95EE\u9898</h2><ul><li>\u5728\u5FEB\u901F\u5DEE\u5F02\u4E2D\uFF0C\u67E5\u770B\u8D85\u51FA\u6700\u540E\u4E00\u6B21\u7248\u672C\u6216\u8005\u6700\u65B0\u4E00\u6B21\u7248\u672C\u540E\u7EE7\u7EED\u70B9\u51FB\u53EF\u80FD\u4F1A\u663E\u793A<code>undefined</code>\uFF0C<s>\u5728\u4FEE\u4E86\u5728\u4FEE\u4E86\u522B\u50AC\u4E86</s></li></ul><h2 id="new-supported-languages" tabindex="-1"><a class="header-anchor" href="#new-supported-languages" aria-hidden="true">#</a> New supported languages</h2><ul><li>\u65E5\u672C\u8A9E (ja) - <a href="https://dev.fandom.com/wiki/User:Laclale" target="_blank" rel="noopener noreferrer">Laclale`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li>Portugu\xEAs do Brasil (pt-br) - <a href="https://dev.fandom.com/wiki/User:Eduaddad" target="_blank" rel="noopener noreferrer">Eduaddad`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li></ul><!--]-->`);
}
_sfc_main$12.ssrRender = _sfc_ssrRender$Q;
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.0.html.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var _14_1_0_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$12
});
const _sfc_main$11 = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-1-1" tabindex="-1"><a class="header-anchor" href="#_14-1-1" aria-hidden="true">#</a> 14.1.1</h1><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 9 \u6708 17 \u65E5 2:35:00</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u6280\u672F\u66F4\u65B0\uFF0C\u4FEE\u590D\u4E86\u4E00\u4E9B\u7F13\u5B58\u5BFC\u81F4\u7684\u95EE\u9898 </li></ul><!--]-->`);
}
_sfc_main$11.ssrRender = _sfc_ssrRender$P;
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.1.html.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var _14_1_1_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$11
});
const _sfc_main$10 = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-1-2" tabindex="-1"><a class="header-anchor" href="#_14-1-2" aria-hidden="true">#</a> 14.1.2</h1><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u6280\u672F\u66F4\u65B0\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6539\u52A8\u3002 </li></ul><!--]-->`);
}
_sfc_main$10.ssrRender = _sfc_ssrRender$O;
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.2.html.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var _14_1_2_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$10
});
const _sfc_main$$ = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="_14-1-3" tabindex="-1"><a class="header-anchor" href="#_14-1-3" aria-hidden="true">#</a> 14.1.3</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2020 \u5E74 10 \u6708 4 \u65E5 19:15:36</p><h2 id="\u672C\u6B21\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u672C\u6B21\u66F4\u65B0" aria-hidden="true">#</a> \u672C\u6B21\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u5728\u65B0\u7248\u672C MediaWiki (\`1.35.0\`) \u4E0A\u7684\u4E00\u4E9B\u95EE\u9898 </li></ul><h2 id="new-supported-languages" tabindex="-1"><a class="header-anchor" href="#new-supported-languages" aria-hidden="true">#</a> New supported languages</h2><ul><li>Hind\u012B (hi) - <a href="https://github.com/ThisIsACreeper0101" target="_blank" rel="noopener noreferrer">ThisIsACreeper0101`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li></ul><!--]-->`);
}
_sfc_main$$.ssrRender = _sfc_ssrRender$N;
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.3.html.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
var _14_1_3_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$$
});
const _sfc_main$_ = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-1-4" tabindex="-1"><a class="header-anchor" href="#_14-1-4" aria-hidden="true">#</a> 14.1.4</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2020 \u5E74 10 \u6708 10 \u65E5 12:05:00</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u90E8\u5206 wiki \u4E2D\u6BB5\u843D\u7F16\u8F91\u94FE\u63A5\u8BC6\u522B\u9519\u8BEF\u7684\u95EE\u9898 - \u7C7B\u4F3C\`/PageName?action=edit\xA7ion=n\`\u7684\u94FE\u63A5\u4F1A\u88AB\u6B63\u786E\u8BC6\u522B\u4E86 </li></ul><!--]-->`);
}
_sfc_main$_.ssrRender = _sfc_ssrRender$M;
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.4.html.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
var _14_1_4_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$_
});
const _sfc_main$Z = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-1-5" tabindex="-1"><a class="header-anchor" href="#_14-1-5" aria-hidden="true">#</a> 14.1.5</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2020 \u5E74 10 \u6708 10 \u65E5 15:39:00</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u4E0A\u4E00\u7248\u672C\u4E2D\u6240\u505A\u53D8\u66F4\u5BFC\u81F4\u7684\u4E00\u4E2A\u81F4\u547D\u9519\u8BEF - \`$wgArticleaPath\`\u8BBE\u5B9A\u4E3A\`/$1\`\u7684 wiki \u7684\u7F16\u8F91\u94FE\u63A5\u80FD\u591F\u88AB\u6B63\u5E38\u8BC6\u522B\u4E86 </li></ul><!--]-->`);
}
_sfc_main$Z.ssrRender = _sfc_ssrRender$L;
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.5.html.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
var _14_1_5_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Z
});
const _sfc_main$Y = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="_14-1-7" tabindex="-1"><a class="header-anchor" href="#_14-1-7" aria-hidden="true">#</a> 14.1.7</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 5 \u6708 19 \u65E5 23:41:35</p><h2 id="\u529F\u80FD\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u66F4\u65B0" aria-hidden="true">#</a> \u529F\u80FD\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u201C\u504F\u597D\u8BBE\u7F6E\u201D\u7A97\u53E3\u4E2D\u201C\u63D2\u4EF6\u5546\u5E97\u201D\u6807\u7B7E\u5185\u7684\u9519\u8BEF\u4F5C\u8005\u94FE\u63A5\uFF08\`gtihub\` \u2192 \`github\`\uFF09 </li></ul><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` InPageEdit Analysis \u6570\u636E\u4E2D\u5FC3\u5DF2\u66F4\u65B0 - \u751F\u4EA7\u73AF\u5883\u5DF2\u5207\u6362\u5230 V4 - V2 \u4E0E V3 \u5C06\u5F03\u7528\uFF08\u8BF7\u5C3D\u5FEB\u5347\u7EA7 API \u63A5\u53E3\u5230\u6700\u65B0\u7248\uFF09 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u6A21\u5757\`api.json\`\u4E2D\u7684\u90E8\u5206 URL \u5DF2\u66F4\u65B0 - **githubLink**: \`https://github.com/InPageEdit/InPageEdit\` - **pluginCDN**: \`https://ipe-plugins.js.org\` - **pluginGithub**: \`https://github.com/InPageEdit/Plugins/\` </li></ul><h2 id="\u4F5C\u8005\u7684\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u7684\u8BDD" aria-hidden="true">#</a> \u4F5C\u8005\u7684\u8BDD</h2><ol><li>\u65F6\u9694 7 \u4E2A\u6708\u7684\u66F4\u65B0\uFF0C\u4E45 \u7B49 \u4E86\uFF08<s>\u7ED3\u679C\u5E76\u6CA1\u6709\u4EFB\u4F55\u529F\u80FD\u5347\u7EA7</s>\uFF09</li><li>\u6211 520 \u5728\u4FEE bug\uFF08<s>\u56FD\u5BB6\u4EC0\u4E48\u65F6\u5019\u7ED9\u6211\u5206\u914D\u4E00\u4E2A\u517D\u8033\u5C0F\u841D\u8389</s>\uFF09</li><li><code>14.1.6</code>\u88AB\u6211\u5403\u4E86\u3002</li></ol><!--]-->`);
}
_sfc_main$Y.ssrRender = _sfc_ssrRender$K;
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.7.html.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
var _14_1_7_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Y
});
const _sfc_main$X = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_14-1-8" tabindex="-1"><a class="header-anchor" href="#_14-1-8" aria-hidden="true">#</a> 14.1.8</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 5 \u6708 24 \u65E5 00:06:05</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6CA1\u6709\u4FEE\u6539\u73B0\u6709\u529F\u80FD\uFF0C\u6CA1\u6709\u4FEE\u6539 API\u3002</p></div><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>\u66FF\u6362\u4E86\u4E00\u4E9B API \u63A5\u53E3\u5730\u5740</li></ul><!--]-->`);
}
_sfc_main$X.ssrRender = _sfc_ssrRender$J;
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.8.html.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
var _14_1_8_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$X
});
const _sfc_main$W = {};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_issues = vue.resolveComponent("issues");
  _push(`<!--[--><h1 id="_14-1-9" tabindex="-1"><a class="header-anchor" href="#_14-1-9" aria-hidden="true">#</a> 14.1.9</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 8 \u6708 14 \u65E5 20:06:26</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6709\u5C11\u91CF\u529F\u80FD\u53D8\u66F4\uFF0C\u6CA1\u6709 API \u53D8\u66F4\u3002</p></div><h2 id="\u6545\u969C\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u4FEE\u590D" aria-hidden="true">#</a> \u6545\u969C\u4FEE\u590D</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "105" }, null, _parent));
  _push(` - \u63D0\u4EA4\u7684\u7F16\u8F91\u6458\u8981\u91CC\u4E0D\u4F1A\u518D\u51FA\u73B0\u65E0\u6CD5\u8DF3\u8F6C\u7684\u951A\u70B9 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u7EC8\u4E8E\uFF08\u518D\u4E00\u6B21 \xD7 n\uFF09\u4FEE\u590D\u4E86\u7F16\u8F91\u51B2\u7A81\u7684\u95EE\u9898 (fix `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "129" }, null, _parent));
  _push(`) - \u73B0\u5728\u60A8\u53EF\u4EE5\u653E\u5FC3\u5927\u80C6\u7684\u4F7F\u7528 IPE \u7F16\u8F91\u8BA8\u8BBA\u7248\u7B49\u9AD8\u538B\u9875\u9762\u800C\u4E0D\u5FC5\u62C5\u5FC3\u8986\u76D6\u4ED6\u4EBA\u7684\u7F16\u8F91\u8BB0\u5F55\uFF08~~\u5E0C\u671B\u5982\u6B64~~\uFF09 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u6211\u4EEC\u6539\u8FDB\u4E86\u76EE\u6807\u9875\u9762\u80FD\u5426\u7F16\u8F91\u7684\u5224\u65AD\u903B\u8F91 - \u987A\u4FBF\u5220\u53BB\u4E86\u4EE4\u4EBA\u8BA8\u538C\u7684\u8B66\u544A\u5F39\u7A97 ~~\u5982\u679C\u60A8\u6267\u610F\u8981\u4FDD\u5B58\u60A8\u7684\u7F16\u8F91\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u963B\u62E6\u60A8\u7684~~ </li></ul><h2 id="\u529F\u80FD\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u53D8\u66F4" aria-hidden="true">#</a> \u529F\u80FD\u53D8\u66F4</h2><ul><li>\u4FEE\u6539\u4E86 <code>preference</code> \u4E2D\u201C\u5173\u4E8E\u201D\u9009\u9879\u5361\u4E2D\u7684\u4E00\u4E9B\u63CF\u8FF0\u4FE1\u606F</li></ul><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>\u4EE3\u7801\u683C\u5F0F\u5316</li></ul><!--]-->`);
}
_sfc_main$W.ssrRender = _sfc_ssrRender$I;
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.1.9.html.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
var _14_1_9_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$W
});
const _sfc_main$V = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_issues = vue.resolveComponent("issues");
  _push(`<!--[--><h1 id="_14-2-0" tabindex="-1"><a class="header-anchor" href="#_14-2-0" aria-hidden="true">#</a> 14.2.0</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 8 \u6708 22 \u65E5 23:35:05</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6709\u65B0\u589E\u529F\u80FD\uFF0C\u6709\u65B0\u589E API\u3002</p></div><h2 id="\u529F\u80FD\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u66F4\u65B0" aria-hidden="true">#</a> \u529F\u80FD\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u65B0\u589E\u201C\u94FE\u5165\u9875\u9762\u201D (close `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "112" }, null, _parent));
  _push(`) - \u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u5728\u201C\u5FEB\u901F\u7F16\u8F91\u201D\u7684\u201C\u9875\u9762\u8BE6\u60C5\u201D\u4E2D\u770B\u5230\u94FE\u5165\u9875\u9762\u529F\u80FD\u7684\u5165\u53E3 </li></ul><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u65B0\u589E API \`linksHere(title: string)\` </li></ul><h2 id="\u4F5C\u8005\u7684\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u8005\u7684\u8BDD" aria-hidden="true">#</a> \u4F5C\u8005\u7684\u8BDD</h2><p>\u7B54\u5E94\u8FC7 QQ \u7FA4\u91CC\u7684\u7F51\u53CB\uFF0C\u5728\u8FD9\u5468\u4E4B\u5185\uFF088 \u6708 23 \u65E5 0 \u70B9\u4E4B\u524D\uFF09\u5B9E\u88C5\u201C\u94FE\u5165\u9875\u9762\u201D\u529F\u80FD\uFF0C\u7EC8\u4E8E\u6210\u529F\u8D76\u5728 ddl \u7684 25 \u5206\u949F\u524D\u53D1\u7248\u4E86\uFF0C\u6CA1\u6709\u98DF\u8A00\u3002</p><p>\u5BA0\u7C89\u4F5C\u8005\u4E86\u5C5E\u4E8E\u662F \xD7</p><p>P.S. \u4F46\u662F\u597D\u50CF\u56E0\u4E3A\u592A\u6025\u4E86\u51FA\u73B0\u4E86\u4EBF\u70B9 bug</p><!--]-->`);
}
_sfc_main$V.ssrRender = _sfc_ssrRender$H;
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.2.0.html.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
var _14_2_0_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$V
});
const _sfc_main$U = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_14-2-1" tabindex="-1"><a class="header-anchor" href="#_14-2-1" aria-hidden="true">#</a> 14.2.1</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 8 \u6708 26 \u65E5 7:52:30</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6CA1\u6709\u4FEE\u6539\u73B0\u6709\u529F\u80FD\uFF0C\u6CA1\u6709\u4FEE\u6539 API\u3002</p></div><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><p>InPageEdit Analytics \u6570\u636E\u4E2D\u5FC3\u5DF2\u66F4\u65B0\u5230 V5</p><h2 id="\u5DF2\u77E5\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5DF2\u77E5\u95EE\u9898" aria-hidden="true">#</a> \u5DF2\u77E5\u95EE\u9898</h2><ul><li><code>preference.modal()</code>\u65E0\u6CD5\u542F\u52A8\u3002</li><li><code>linksHere</code>\u4E2D\u7684\u5FEB\u901F\u7F16\u8F91\u6309\u94AE\u65E0\u6CD5\u4F7F\u7528\u3002</li></ul><!--]-->`);
}
_sfc_main$U.ssrRender = _sfc_ssrRender$G;
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.2.1.html.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
var _14_2_1_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$U
});
const _sfc_main$T = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  const _component_issues = vue.resolveComponent("issues");
  _push(`<!--[--><h1 id="_14-2-3" tabindex="-1"><a class="header-anchor" href="#_14-2-3" aria-hidden="true">#</a> 14.2.3</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1A2021 \u5E74 9 \u6708 13 \u65E5 21:49:43</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6CA1\u6709\u4FEE\u6539\u73B0\u6709\u529F\u80FD\uFF0CAPI \u6709\u5411\u524D\u517C\u5BB9\u7684\u53D8\u66F4\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7248\u672C 14.2.2 \u7531\u4E8E\u6784\u5EFA\u65F6\u7684\u4E00\u4E2A\u9519\u8BEF\u800C\u88AB\u8DF3\u8FC7\u4E86\u3002</p></div><h2 id="\u529F\u80FD\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u66F4\u65B0" aria-hidden="true">#</a> \u529F\u80FD\u66F4\u65B0</h2><ul><li>\u73B0\u5728\uFF0C\u201C\u5FEB\u901F\u7F16\u8F91\u201D\u4E2D\u7684\u9875\u9762\u5DE5\u5177\u88AB\u6062\u590D\u6210\u4E86\u4EE5\u524D\u7684\u6837\u5F0F\uFF0C\u4E0D\u518D\u9ED8\u8BA4\u662F\u6298\u53E0\u72B6\u6001\u4E86\uFF08<s>\u4F5C\u8005\u672C\u4EBA\u7EC8\u4E8E\u610F\u8BC6\u5230\u4E86\u70B9\u51FB\u5C55\u5F00\u6709\u591A\u9EBB\u70E6</s>\uFF09</li><li>\u73B0\u5728\uFF0C\u201C\u94FE\u5165\u9875\u9762\u201D\u4E2D\u7684\u201C\u5FEB\u901F\u7F16\u8F91\u201D\u6309\u94AE\u6B63\u5E38\u751F\u6548\u4E86</li></ul><h2 id="\u6545\u969C\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u4FEE\u590D" aria-hidden="true">#</a> \u6545\u969C\u4FEE\u590D</h2><ul><li>\u4FEE\u590D\u4E86\u5173\u4E8E\u201C\u504F\u597D\u8BBE\u7F6E\u201D\u529F\u80FD\u7684\u8BF8\u591A\u95EE\u9898 <ul><li>\u5DF2\u4FEE\u590D\u201C\u504F\u597D\u8BBE\u7F6E\u201D\u5F39\u7A97\u65E0\u6CD5\u6253\u5F00\u7684\u95EE\u9898 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "153" }, null, _parent));
  _push(`</li><li>\u9488\u5BF9\u201C\u76D1\u89C6\u5217\u8868\u201D\u914D\u7F6E\u9879\u672A\u751F\u6548\u7684 bug \u91C7\u53D6\u4E86\u4E00\u4E9B\u4E34\u65F6\u63AA\u65BD\uFF08<s>\u4E07\u5E74\u9057\u4EA7</s>\uFF09</li><li>\u5DF2\u4FEE\u590D\u56E0 Analytics \u6570\u636E\u4E2D\u5FC3\u5207\u6362\u5BFC\u81F4\u7684\u201C\u6570\u636E\u201D\u4FE1\u606F\u6846\u663E\u793A\u5F02\u5E38 <ul><li>\u73B0\u5728\u529F\u80FD\u5217\u8868\u4F1A\u6309\u4F7F\u7528\u6B21\u6570\u964D\u5E8F\u6392\u5E8F</li></ul></li></ul></li></ul><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>\u4FEE\u6539\u4E86<code>api.json</code>\u7684\u5BFC\u5165\u65B9\u5F0F</li><li>\u4FEE\u6539\u4E86<code>api.js</code>\u4E2D\u7684\u90E8\u5206 API \u7684\u63A5\u53E3\u5730\u5740</li><li>\u4FEE\u6539\u4E86\u4E00\u5904\u5185\u90E8 API \u547D\u540D\u4EE5\u907F\u5F00 js \u4FDD\u7559\u5B57\uFF1A<code>preference.default</code> \u2192 <code>preference._defaults</code></li><li>\u4E3A\u4E00\u5904 API \u6DFB\u52A0\u4E86\u522B\u540D\uFF1A<code>_analysis</code> \u2192 <code>_analytics</code></li></ul><!--]-->`);
}
_sfc_main$T.ssrRender = _sfc_ssrRender$F;
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.2.3.html.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
var _14_2_3_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$T
});
const _sfc_main$S = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_14-2-6" tabindex="-1"><a class="header-anchor" href="#_14-2-6" aria-hidden="true">#</a> 14.2.6</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1ASat Dec 18 2021 23:33:59 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6CA1\u6709\u4FEE\u6539\u73B0\u6709\u529F\u80FD\uFF0C\u6CA1\u6709\u4FEE\u6539 API\u3002</p></div><h2 id="\u6545\u969C\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u4FEE\u590D" aria-hidden="true">#</a> \u6545\u969C\u4FEE\u590D</h2><ul><li>\u4FEE\u590D\u4E86<code>quickDiff</code>\u4E2D\u7684\u4E00\u4E2A\u76D8\u53E4\u7EA7 bug\uFF1A <ul><li>\u73B0\u5728\uFF0C\u6253\u5F00\u5BF9\u6BD4\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u66F4\u65B0\u6216\u66F4\u8001\u7684\u7248\u672C\uFF0C\u5C06\u4E0D\u4F1A\u518D\u663E\u793A\u76F8\u5173\u7684\u6309\u94AE</li><li>\u8FD9\u610F\u5473\u7740\u4E0D\u4F1A\u518D\u51FA\u73B0 <code>undefined</code> \u76F8\u5173\u7684\u62A5\u9519</li></ul></li><li>\u4FEE\u590D\u4E86<code>loadQuickDiff</code>\u7684\u52A0\u8F7D\u903B\u8F91\uFF1A <ul><li>\u73B0\u5728\uFF0C\u8BF8\u5982\u201C\u9632\u6EE5\u7528\u8FC7\u6EE4\u5668\u65E5\u5FD7\u201D\u7B49\u9875\u9762\u4E0A\u7684\u201C\u5DEE\u5F02\u201D\u80FD\u6B63\u5E38\u547C\u51FA<code>quickDiff</code>\u4E86\uFF08\u611F\u8C22<strong>\u661F\u6D77\u5B50@\u840C\u5A18\u767E\u79D1</strong>\uFF09</li></ul></li></ul><h2 id="\u6280\u672F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u66F4\u65B0" aria-hidden="true">#</a> \u6280\u672F\u66F4\u65B0</h2><ul><li>\u73B0\u5728\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>yarn dev</code>\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u4FDD\u5B58\u4EE3\u7801\u540E\u4F1A\u81EA\u52A8\u7F16\u8BD1</li><li>\u73B0\u5728\uFF0C\u6784\u5EFA\u6307\u4EE4\uFF08\u4F8B\u5982<code>yarn build</code>\uFF09\u53EF\u4EE5\u8DE8\u5E73\u53F0\u4F7F\u7528\uFF08\u6B64\u524D\u4EC5\u80FD\u5728\u914D\u7F6E\u4E86 WSL \u7684 Windows \u7CFB\u7EDF\u8FD0\u884C\uFF09</li></ul><!--]-->`);
}
_sfc_main$S.ssrRender = _sfc_ssrRender$E;
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.2.6.html.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
var _14_2_6_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$S
});
const _sfc_main$R = {};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="_14-2-7-14-2-8" tabindex="-1"><a class="header-anchor" href="#_14-2-7-14-2-8" aria-hidden="true">#</a> 14.2.7 - 14.2.8</h1><p>\u66F4\u65B0\u65F6\u95F4\uFF1ATue Dec 21 2021 20:10:59 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u672C\u6B21\u66F4\u65B0\u6CA1\u6709\u4FEE\u6539\u73B0\u6709\u529F\u80FD\uFF0C\u6CA1\u6709\u4FEE\u6539 API\u3002</p></div><h2 id="\u6545\u969C\u4FEE\u590D" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u4FEE\u590D" aria-hidden="true">#</a> \u6545\u969C\u4FEE\u590D</h2><ul><li>\u4FEE\u590D\u4E86<code>quickDiff</code>\u7684\u4E00\u4E9B\u6545\u969C\uFF1A <ul><li>\u73B0\u5728\uFF0C\u6253\u5F00\u5BF9\u6BD4\u65F6\uFF0C\u201C\u4E0A\u4E00\u7248\u672C/\u4E0B\u4E00\u7248\u672C\u201D\u7684\u6309\u94AE\u4E0D\u4F1A\u518D\u7F13\u6162\u6D88\u5931\uFF08\u611F\u8C22<strong>MysticNebula70@Minecraft wiki</strong>\uFF09</li></ul></li><li>\u4FEE\u590D\u4E86<code>loadQuickDiff</code>\u7684\u4E00\u4E9B\u6545\u969C\uFF1A <ul><li>\u73B0\u5728\uFF0C<code>quickDiff</code>\u4E0D\u4F1A\u518D\u7ED1\u5B9A\u5230\u5386\u53F2\u7248\u672C\u6216\u5176\u4ED6\u4E0D\u662F\u5DEE\u5F02\u6BD4\u8F83\u7684\u8FDE\u63A5\u4E0A\uFF08\u611F\u8C22<strong>LUO1P@\u840C\u5A18\u767E\u79D1\u3001MysticNebula70@Minecraft wiki</strong>\uFF09</li></ul></li></ul><!--]-->`);
}
_sfc_main$R.ssrRender = _sfc_ssrRender$D;
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/14.2.8.html.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
var _14_2_8_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$R
});
const _sfc_main$Q = {};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_issues = vue.resolveComponent("issues");
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="_2-x-update-logs" tabindex="-1"><a class="header-anchor" href="#_2-x-update-logs" aria-hidden="true">#</a> 2.x Update logs</h1><h2 id="_2-13-4-7-2-13-4-patch-7" tabindex="-1"><a class="header-anchor" href="#_2-13-4-7-2-13-4-patch-7" aria-hidden="true">#</a> 2.13.4-7 (2.13.4 patch 7)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 8 \u6708 24 \u65E5 14:22:24</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u73B0\u5728\uFF0C\u4F7F\u7528 \`quickRename\` \u6216\u8005 \`quickRedirect\` \u529F\u80FD\u65F6\uFF0C\u5982\u679C\u76EE\u6807\u9875\u9762\u5DF2\u5B58\u5728\uFF0C\u5C06\u4F1A\u5F39\u51FA\u63D0\u793A\u8BE2\u95EE\u662F\u5426\u8981\u7F16\u8F91\u76EE\u6807\u9875\u9762\uFF0C\u5982\u679C\u6709\`delete\`\u6743\u9650\u5219\u4F1A\u989D\u5916\u8BE2\u95EE\u662F\u5426\u76F4\u63A5\u5220\u9664\u76EE\u6807\u9875\u9762 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "88" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u7F13\u5B58\u4E86 MediaWiki API (\`mwApi = new mw.Api()\`) </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u66F4\u65B0\u4E86\`InPageEdit.api\`\u4E2D about \u548C update-logs \u7684 URL </li></ul><h2 id="_2-13-4-6-2-13-4-patch-6" tabindex="-1"><a class="header-anchor" href="#_2-13-4-6-2-13-4-patch-6" aria-hidden="true">#</a> 2.13.4-6 (2.13.4 patch 6)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 7 \u6708 18 \u65E5 22:52:27</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u9488\u5BF9 i18n \u6A21\u5757\u505A\u4E86\u4E00\u4E9B\u903B\u8F91\u4E0A\u7684\u4F18\u5316 <ul><li>\u5F53\u7248\u672C\u66F4\u65B0\u65F6\u5C06\u4F1A\u81EA\u52A8\u5237\u65B0\u7FFB\u8BD1\u7F13\u5B58</li><li>\u60A8\u53EF\u4EE5\u4F7F\u7528 url \u53C2\u6570<code>i18n=nocache</code>\u7ACB\u5373\u5237\u65B0\u7FFB\u8BD1\u7F13\u5B58</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u4E00\u4E9B\u7FFB\u8BD1\u6587\u672C\u7684\u9519\u8BEF </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "80" }, null, _parent));
  _push(`</li></ul><h2 id="_2-13-4-5-2-13-4-patch-5" tabindex="-1"><a class="header-anchor" href="#_2-13-4-5-2-13-4-patch-5" aria-hidden="true">#</a> 2.13.4-5 (2.13.4 patch 5)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 7 \u6708 4 \u65E5 04:41:57</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u5FEB\u901F\u7F16\u8F91\u6BB5\u843D\u65F6\u5FEB\u901F\u5DEE\u5F02\u51FA\u73B0\u7684\u95EE\u9898 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "73" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86 ssi_modal \u7684\u94A9\u5B50 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u91CD\u547D\u540D\u5185\u90E8\u6A21\u5757\`msg\`\u2192\`_msg\` </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u7CBE\u7B80\u4E86\u90E8\u5206 html \u7684\u7ED3\u6784 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u5BF9 \`InPageEdit.preference.modal\` \u6A21\u5757\u4F5C\u4E86\u4E00\u4E9B\u5C0F\u8C03\u6574 <ul><li>\u65B0\u589E\u4E24\u6761\u7FFB\u8BD1\u5B57\u7B26\u4E32 <code>preference-translate</code> <code>preference-discord</code></li></ul></li></ul><h2 id="_2-13-4-4-2-13-4-patch-4" tabindex="-1"><a class="header-anchor" href="#_2-13-4-4-2-13-4-patch-4" aria-hidden="true">#</a> 2.13.4-4 (2.13.4 patch 4)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 7 \u6708 1 \u65E5 03:40:58</p><h3 id="\u5E38\u89C4\u6539\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u6539\u52A8" aria-hidden="true">#</a> \u5E38\u89C4\u6539\u52A8</h3><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u6B63\u4E86 2.13.4-3 \u7248\u672C\u9488\u5BF9 Toolbox \u7684\u4E00\u4E9B\u5C0F\u4F18\u5316\u4E2D\u7684\u903B\u8F91\u95EE\u9898 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u6B63\u4E86 2.13.4-3 \u7248\u672C\u9488\u5BF9 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "60" }, null, _parent));
  _push(` \u7684\u6539\u52A8\u6240\u4EA7\u751F\u7684\u95EE\u9898 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u66F4\u65B0\u4E86\u7FFB\u8BD1\u6587\u4EF6\u7684\u90E8\u5206\u5B57\u7B26\u4E32 <ul><li>\u66F4\u6B63\u90E8\u5206\u7FFB\u8BD1</li><li>\u5220\u9664\u4E00\u4E9B\u4E0D\u518D\u4F7F\u7528\u7684\u5B57\u7B26\u4E32</li><li>\u6A21\u6001\u6846\u4E2D\u6309\u94AE\u7684\u6587\u5B57\u5C06\u5168\u90E8\u663E\u793A\u5927\u5199\u5B57\u6BCD\uFF08\u4E3B\u8981\u9488\u5BF9\u897F\u6587\uFF09</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "68" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "67" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` **\u518D\u4E00\u6B21**\u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "60" }, null, _parent));
  _push(`</li></ul><h3 id="\u6280\u672F\u6027\u6539\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6280\u672F\u6027\u6539\u52A8" aria-hidden="true">#</a> \u6280\u672F\u6027\u6539\u52A8</h3><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u66F4\u65B0\u4E86\u5185\u90E8\u6A21\u5757 \`msg()\` <ul><li>\u4E0D\u518D\u9700\u8981\u4F7F\u7528 <code>replace()</code>\uFF0C\u76F4\u63A5\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53CA\u4E4B\u540E\u7684\u53C2\u6570\u5373\u53EF\u66FF\u4EE3\u5360\u4F4D\u7B26\uFF0C\u53C2\u6570\u6570\u91CF\u4E0D\u9650</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@example</span> <span class="token class-name"><span class="token punctuation">{</span> <span class="token string">&quot;message-name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$1\u662F$2\u4ED6\u7238\u7238\u3002&quot;</span> <span class="token punctuation">}</span></span>
 */</span>
<span class="token doc-comment comment">/** \u65E7\u4EE3\u7801 **/</span>
<span class="token function">msg</span><span class="token punctuation">(</span><span class="token string">&#39;message-name&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5927\u660E&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;$2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; \u5927\u660E\u662F\u5C0F\u660E\u4ED6\u7238\u7238\u3002</span>
<span class="token doc-comment comment">/** \u65B0\u4EE3\u7801 **/</span>
<span class="token function">msg</span><span class="token punctuation">(</span><span class="token string">&#39;message-name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5927\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; \u5927\u660E\u662F\u5C0F\u660E\u4ED6\u7238\u7238\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-13-4-3-2-13-4-patch-3" tabindex="-1"><a class="header-anchor" href="#_2-13-4-3-2-13-4-patch-3" aria-hidden="true">#</a> 2.13.4-3 (2.13.4 patch 3)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 6 \u6708 18 \u65E5 03:43:46</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u4E00\u4E9B\u6280\u672F\u6027\u6539\u52A8 <ul><li>class \u5C5E\u6027\u53D8\u66F4\uFF1A<code>.editForm</code> \u2192 <code>.hideBeforeLoaded</code></li><li><code>InPageEdit.preview</code>\u6A21\u5757\u4F18\u5316</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "59" }, null, _parent));
  _push(`<ul><li>\u518D\u6B21\u4FEE\u590D\u7F16\u8F91\u51B2\u7A81\u7684\u95EE\u9898</li><li>\u8FD9\u610F\u5473\u7740\u73B0\u5728\u5E94\u8BE5\u4E0D\u4F1A\u518D\u51FA\u73B0<strong>\u4F60\u6253\u5F00\u7F16\u8F91\u5668\u81F3\u4F60\u4FDD\u5B58\u8FD9\u6BB5\u65F6\u95F4\u91CC\u5176\u4ED6\u7528\u6237\u505A\u51FA\u7684\u4FEE\u6539\u88AB\u8986\u76D6\u6389</strong>\u7684\u60C5\u51B5\u4E86</li><li><s>\u4F60\u77E5\u9053\u5417\uFF1A\u5C0F\u9C7C\u541B\u5728\u51E0\u4E2A\u6708\u524D\u66FE\u7ECF\u5C1D\u8BD5\u4FEE\u590D\u8FC7\u4E00\u6B21\u8FD9\u4E2A\u6545\u969C\uFF0C\u4F46\u662F\u7528\u4E8E\u9A8C\u8BC1\u7684\u65F6\u95F4\u6233\u586B\u9519\u4E86\u53D8\u91CF\uFF0C\u672C\u6B21\u8865\u4E01\u5C31\u662F\u4FEE\u590D\u4E86\u8FD9\u4E2A\u53D8\u91CF\uFF08\u8FD9\u4E2A\u5C51\u9C7C\u5C31\u662F\u900A\u5566\uFF09</s></li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4E0D\u5237\u65B0\u9875\u9762\u4FDD\u5B58\u7F16\u8F91\u540E\uFF0C\u5173\u95ED\u6807\u7B7E\u9875\u65F6\u4E0D\u4F1A\u518D\u963B\u6B62\u4F60\u79BB\u5F00 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, null, _parent));
  _push(` \u9488\u5BF9 Toolbox \u7684\u4E00\u4E9B\u5C0F\u4F18\u5316 <ul><li>\u5982\u679C\u9501\u5B9A\u5C55\u5F00\u5DE5\u5177\u76D2\uFF0C\u4E0B\u6B21\u52A0\u8F7D\u7F51\u9875\u65F6\u5DE5\u5177\u76D2\u4F1A\u81EA\u52A8\u5C55\u5F00</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u5C1D\u8BD5\u5B8C\u6210\u4E86\u8FD9\u4E2A~~\u523B\u8584~~\u7684\u8981\u6C42 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "60" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` \u914D\u7F6E\u9879\`InPageEdit.myPreference = { &quot;doNotShowLocalWarn&quot;: false }\`\u4E0D\u518D\u751F\u6548\uFF0C\u73B0\u5728\u91C7\u7528\u65B0\u7684\u63D0\u9192\u65B9\u5F0F\uFF0C\u4E0D\u4F1A\u518D\u6709\u70E6\u4EBA\u7684\u786E\u8BA4\u5F39\u7A97 </li></ul><h2 id="_2-13-4-2-2-13-4-patch-2" tabindex="-1"><a class="header-anchor" href="#_2-13-4-2-2-13-4-patch-2" aria-hidden="true">#</a> 2.13.4-2 (2.13.4 patch 2)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 6 \u6708 14 \u65E5 02:31:24</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "60" }, null, _parent));
  _push(` (<s>\u6700\u901F\u4F20\u8BF4</s>) </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "43" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "43" }, null, _parent));
  _push(` \u63D0\u53CA\u7684\u5EFA\u8BAE\u88AB\u91C7\u7EB3 <ul><li>\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u81EA\u5B9A\u4E49\u9009\u9879\u5B9E\u73B0\u4E0D\u518D\u8DF3\u51FA\u672C\u5730\u63D0\u793A\uFF1A<code>InPageEdit.myPreference = { &quot;doNotShowLocalWarn&quot;: false }</code></li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "53" }, null, _parent));
  _push(` \u4E2D\u63D0\u5230\uFF0C\u7EA2\u94FE\u4E5F\u4F1A\u51FA\u73B0\u201C\u5FEB\u901F\u7F16\u8F91\u201D\u94FE\u63A5\uFF0C\u4F7F\u6392\u7248\u663E\u5F97\u62E5\u6324\uFF0C\u8FD9\u662F 2.13.4 \u7248\u672C\u66F4\u65B0\u7684\u529F\u80FD <ul><li>\u4F46\u662F\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u81EA\u5B9A\u4E49\u9009\u9879\u79FB\u9664\u7EA2\u94FE\u540E\u7684\u201C\u5FEB\u901F\u7F16\u8F91\u201D\uFF1A<code>InPageEdit.myPreference = { &quot;redLinkQuickEdit&quot;: false }</code></li></ul></li></ul><h2 id="_2-13-4-1-2-13-4-patch-1" tabindex="-1"><a class="header-anchor" href="#_2-13-4-1-2-13-4-patch-1" aria-hidden="true">#</a> 2.13.4-1 (2.13.4 patch 1)</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 5 \u6708 21 \u65E5 00:22:36</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u6280\u672F\u5C42\u9762 <ul><li>\u4F7F\u4EE3\u7801\u7ED3\u6784\u66F4\u89C4\u8303(<s>\u5F92\u589E\u5B57\u8282</s>)</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D\u4E86\u201C\u663E\u793A\u4E00\u6B21\u540E\u52A0\u8F7D\u8FDB\u5EA6\u6761\u4FBF\u4E0D\u4F1A\u518D\u663E\u793A\u201D\u7684\u6545\u969C </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u91CD\u65B0\u8BBE\u8BA1\u4E86**\u5FEB\u901F\u7F16\u8F91**\u6A21\u5757\u4E2D**\u7F16\u8F91\u5DE5\u5177\u680F**\u91CC\u7684\`\u6807\u9898\`\u4E0B\u62C9\u83DC\u5355 <ul><li>\u4F7F\u7528<code>&lt;ul&gt;</code>\u4EE5\u53CA<code>&lt;li&gt;</code>\u66FF\u4EE3\u539F\u5148\u7684<code>&lt;select&gt;</code>\uFF0C\u914D\u5408 CSS\uFF0C\u4F7F\u5176\u66F4\u52A0\u7F8E\u89C2\uFF0C\u907F\u514D\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D\u7684\u6837\u5F0F\u4E0D\u7EDF\u4E00</li><li>\u90E8\u5206\u7CFB\u7EDF(\u4F8B\u5982 iOS)\u4E2D\uFF0C\u8C03\u8282<code>&lt;select&gt;</code>\u64CD\u4F5C\u4E0D\u4FBF\uFF0C\u6B64\u4E3E\u987A\u4FBF\u63D0\u9AD8\u90E8\u5206\u7528\u6237\u7684\u4F7F\u7528\u4F53\u9A8C</li></ul></li></ul><h2 id="_2-13-4-awesome-update" tabindex="-1"><a class="header-anchor" href="#_2-13-4-awesome-update" aria-hidden="true">#</a> 2.13.4 - Awesome Update</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 5 \u6708 8 \u65E5 04:00:00</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u8FD9\u662F\u4E00\u6B21\u6280\u672F\u66F4\u65B0 <ul><li>\u6574\u7406\u4E86<strong>\u7528\u6237\u8BBE\u7F6E</strong>\u6A21\u5757\u4FDD\u5B58\u8BBE\u7F6E\u4EE5\u53CA\u8BFB\u53D6\u8BBE\u7F6E\u7684\u903B\u8F91</li><li>\u91C7\u7528 Google \u4EE3\u7801\u89C4\u8303\u91CD\u65B0\u6392\u7248\uFF0C\u4E0D\u4F24\u773C\uFF0C\u5B69\u5B50\u5F88\u559C\u6B22</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` \u54E6\uFF0C\u5929\u54EA\uFF0C\u662F **<i class="icon icon-font-awesome"></i> FontAwesome**\u2122 <ul><li>\u4F7F\u7528 FontAwesome \u66FF\u4EE3\u4E86 Material Icons</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "26" }, null, _parent));
  _push(`<ul><li>\u8FD9\u4E2A\u5B58\u5728\u4E86\u597D\u51E0\u4E2A\u5927\u7248\u672C\u7684 Bug \u5C06\u88AB\u4FEE\u590D</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "16" }, null, _parent));
  _push(`<ul><li>\u91C7\u7EB3\u4E86\u8FD9\u4E2A\u5EFA\u8BAE</li></ul></li></ul><h2 id="_2-13-3" tabindex="-1"><a class="header-anchor" href="#_2-13-3" aria-hidden="true">#</a> 2.13.3</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A2020 \u5E74 4 \u6708 22 \u65E5 20:49:11</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Brand new **InPageEdit Analysis 3.0**\u2122 <ul><li>\u4F7F\u7528 MongoDB \u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6280\u672F\u6280\u672F\u5168\u65B0\u91CD\u5236\u7684 IPE \u6570\u636E\u7EDF\u8BA1\u7CFB\u7EDF\uFF0C\u9707\u64BC\u4E0A\u65B0</li><li>*\u56FE\u5F62\u754C\u9762\u6B63\u5728\u8BBE\u8BA1\u4E2D</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "40" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` \u91CD\u65B0\u4FEE\u590D `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "26" }, null, _parent));
  _push(`</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "test" }, null, _parent));
  _push(` \u5C1D\u8BD5\u89E3\u51B3 `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "39" }, null, _parent));
  _push(` \u7684\u65B9\u6848\u6B63\u5728\u7B49\u5F85\u6548\u679C\u53CD\u9988 </li></ul><h2 id="_2-13-2" tabindex="-1"><a class="header-anchor" href="#_2-13-2" aria-hidden="true">#</a> 2.13.2</h2><p>\u66F4\u65B0\u65E5\u671F\uFF1A-</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` \u7528\u82F1\u6587\u5199\u66F4\u65B0\u7B14\u8BB0\u592A\u9EBB\u70E6\u4E86\uFF0C\u4ECE\u8BE5\u7248\u672C\u5F00\u59CB\u7528\u4E2D\u6587\u8BB0\u8F7D\u66F4\u65B0\u7B14\u8BB0 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "info" }, null, _parent));
  _push(` \u8FD9\u662F\u4E00\u6B21\u6280\u672F\u66F4\u65B0 <ul><li>\u6CA1\u6709\u6DFB\u52A0\u65B0\u529F\u80FD</li><li>\u7531\u4E8E NPM \u6253\u5305\u4E0D\u5141\u8BB8 4 \u4F4D\u6DF1\u5EA6\u7684\u7248\u672C\u53F7\uFF0C\u56E0\u6B64\u6211\u4EEC\u66F4\u6362\u4E86\u7248\u672C\u53F7\uFF0C\u4EC5\u6B64\u800C\u5DF2</li></ul></li></ul><h2 id="_2-13-0-2" tabindex="-1"><a class="header-anchor" href="#_2-13-0-2" aria-hidden="true">#</a> 2.13.0.2</h2><p>Release date: April 17, 2020 02:19 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Update _About InPageEdit_ and _Update Logs_(AKA Version Info) modules. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed `);
  _push(serverRenderer.ssrRenderComponent(_component_issues, { id: "26" }, null, _parent));
  _push(`</li></ul><h2 id="_2-13-0-1-build-c052a80" tabindex="-1"><a class="header-anchor" href="#_2-13-0-1-build-c052a80" aria-hidden="true">#</a> 2.13.0.1(build_c052a80)</h2><p>Release date: -</p><ul><li>Security update</li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` Hook \`dev.i18n\` modified to \`dfgh.i18n\`. Prevent contamination of Fandom devwiki variables. </li></ul><h2 id="_2-13-0-build-2795" tabindex="-1"><a class="header-anchor" href="#_2-13-0-build-2795" aria-hidden="true">#</a> 2.13.0(build_2795)</h2><p><strong>Far From Enough, Continue Cup</strong> Release date: 17:14, 9 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Quick-Edit edit toolbar is available <ul><li>Designed similar to 2010 Wiki Editor</li><li>You can add extra custom buttons.</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` \`MyInPageEditPreference\` variable no longer used. Please use \`InPageEdit.myPreference\` instead. </li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** Demo to replace old code **/</span>
<span class="token comment">/* Old */</span>
window<span class="token punctuation">.</span>MyInPageEditPreference <span class="token operator">=</span> <span class="token punctuation">{</span>
  outSideClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  editMinor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  editSummary<span class="token operator">:</span> <span class="token string">&#39;[InPageEdit] $section\u6CA1\u6709\u7F16\u8F91\u6458\u8981$oldid&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">/* New */</span>
window<span class="token punctuation">.</span>InPageEdit <span class="token operator">=</span> window<span class="token punctuation">.</span>InPageEdit <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Keep this line</span>
InPageEdit<span class="token punctuation">.</span>myPreference <span class="token operator">=</span> <span class="token punctuation">{</span>
  outSideClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  editMinor<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  editSummary<span class="token operator">:</span> <span class="token string">&#39;[InPageEdit] $section\u6CA1\u6709\u7F16\u8F91\u6458\u8981$oldid&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_2-12-0-4-build-2686" tabindex="-1"><a class="header-anchor" href="#_2-12-0-4-build-2686" aria-hidden="true">#</a> 2.12.0.4(build_2686)</h2><p>Release data: 00:11, 6 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` When you are editting page section, IPE can display the name of the section correctly and jump to the anchor point after saving. <ul><li>Now <code>$section</code> placeholder in edit summary will replace with <code>/* Section title */</code>. Just like the original MW editor. (<strong>Finally!!!</strong>)</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a logic issue. When you open another editor in the editor (eg. via Page detail links). Saving will no longer reload the page. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed the logic of fetch editnotice. </li></ul><h2 id="_2-12-0-3-build-2629" tabindex="-1"><a class="header-anchor" href="#_2-12-0-3-build-2629" aria-hidden="true">#</a> 2.12.0.3(build_2629)</h2><p>Release date: 02:48, 5 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed the logic to get the last edit timestamp of the page. Edit conflict issues should be encountered less often. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed the logic of whether the editarea is modified. </li></ul><h2 id="_2-12-0-2-build-2619" tabindex="-1"><a class="header-anchor" href="#_2-12-0-2-build-2619" aria-hidden="true">#</a> 2.12.0.2(build_2619)</h2><p>Release date: 01:16, 4 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/4 </li></ul><h2 id="_2-12-0-1-build-2610" tabindex="-1"><a class="header-anchor" href="#_2-12-0-1-build-2610" aria-hidden="true">#</a> 2.12.0.1(build_2610)</h2><p>Release date: 00:11, 4 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/5 </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed https://github.com/Dragon-Fish/InPageEdit-v2/issues/2#issuecomment-607441343 </li></ul><h2 id="_2-12-0-build-2575-the-matryoshka-update" tabindex="-1"><a class="header-anchor" href="#_2-12-0-build-2575-the-matryoshka-update" aria-hidden="true">#</a> 2.12.0(build_2575) - The Matryoshka Update</h2><p>Release date: 01:37, 2 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` New functions in quick edit editor: page details list! <ul><li>Show the list of templates and images on the page!</li><li>You can easily edit the templates or view images via the list.</li></ul></li></ul><h2 id="_2-11-0-build-2545-just-hooks-update" tabindex="-1"><a class="header-anchor" href="#_2-11-0-build-2545-just-hooks-update" aria-hidden="true">#</a> 2.11.0(build_2545) - Just Hooks Update</h2><p>Release date: 18:15, 1 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Quick Delete launched. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Rewrote the logic of move pages, delete pages, and redirect pages modules. In addition, it is now possible to add reasons for your action. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Technical update: <ul><li>Add module alias: <code>InPageEdit.quickEdit</code>, <code>InPageEdit.quickRename</code>, <code>InPageEdit.quickRedirect</code>, <code>InPageEdit.quickDelete</code>. <strong>ATTENTION</strong>: Old module name will be archive soon.</li><li>Add mw.hook for InPageEdit. You can now write extended functions for IPE more easily. (eg. <code>mw.hook(&#39;InPageEdit.quickEdit&#39;).add(myFunctions);</code>)</li></ul></li></ul><h2 id="_2-10-0-1-build-2519" tabindex="-1"><a class="header-anchor" href="#_2-10-0-1-build-2519" aria-hidden="true">#</a> 2.10.0.1(build_2519)</h2><p>Release date: 12:03, 1 April 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Minor bug fixed </li></ul><h2 id="_2-10-0-build-2417-the-structure-tech-update" tabindex="-1"><a class="header-anchor" href="#_2-10-0-build-2417-the-structure-tech-update" aria-hidden="true">#</a> 2.10.0(build_2417) - The Structure Tech Update</h2><p>Release date: 22:12, 28 March 2020 (CST)</p><ul><li>It&#39;s more like a technical update. No new functions. <ul><li>We updated the rendering mode of HTML to make it easier to maintain.</li><li>We updated our method to get the version number.</li></ul></li></ul><h2 id="_2-9-1-build-2369" tabindex="-1"><a class="header-anchor" href="#_2-9-1-build-2369" aria-hidden="true">#</a> 2.9.1(build_2369)</h2><p>Release date: 00:53, 28 March 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Add i18n cache mechanism. Improve loading speed. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed styles for multiple components. <ul><li>eg. checkbox, header, icons</li></ul></li></ul><h2 id="_2-9-0-1-build-2319-world-wild-friends-update" tabindex="-1"><a class="header-anchor" href="#_2-9-0-1-build-2319-world-wild-friends-update" aria-hidden="true">#</a> 2.9.0.1(build_2319) - World Wild Friends Update</h2><p>Release date: 10:14, 26 March 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed i18n cross-domain reference failure. </li></ul><h2 id="_2-9-0-build-2311" tabindex="-1"><a class="header-anchor" href="#_2-9-0-build-2311" aria-hidden="true">#</a> 2.9.0(build_2311)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now InPageEdit has i18n module. Translate it here: http://dev.fandom.com/wiki/MediaWiki:Custom-InPageEdit-v2/i18n.json </li></ul><h2 id="_2-8-1-build-2236" tabindex="-1"><a class="header-anchor" href="#_2-8-1-build-2236" aria-hidden="true">#</a> 2.8.1(build_2236)</h2><p>Release date: 02:41, 21 March 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Find and Replace! <ul><li>It took me looooooooong time to write this function. So, hope you like it.</li></ul></li></ul><h2 id="_2-8-0-1-build-2213" tabindex="-1"><a class="header-anchor" href="#_2-8-0-1-build-2213" aria-hidden="true">#</a> 2.8.0.1(build_2213)</h2><p>Release date: 00:27, 18 March 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` InPageEdit advanced edittools coming soon. </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` User feedback that edit notice area takes up too much space. So it will be hide in the beginning. </li></ul><h2 id="_2-8-0-build-2026" tabindex="-1"><a class="header-anchor" href="#_2-8-0-build-2026" aria-hidden="true">#</a> 2.8.0(build_2026)</h2><p>Release date: 21:45, 29 January 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` InPageEdit Analysis module will no longer trigger error codes </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` InPageEdit will now register global functions </li></ul><h2 id="_2-7-1-1-build-1960" tabindex="-1"><a class="header-anchor" href="#_2-7-1-1-build-1960" aria-hidden="true">#</a> 2.7.1.1(build_1960)</h2><p>Release date: 20:21, 7 January 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that cause IPE not work </li></ul><h2 id="_2-7-1-build-1948-the-machine" tabindex="-1"><a class="header-anchor" href="#_2-7-1-build-1948-the-machine" aria-hidden="true">#</a> 2.7.1(build_1948) - The Machine</h2><p>Release date: 18:01, 7 January 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` We add a new feature: <ul><li>The plugin adds features that may collect your information. The information that may be collected is: The wiki you edited, the number of times you saved using IPE, the number of times you used other features of IPE, and the date you used IPE</li><li>We <strong>DO NOT</strong> collect any of your personal cookies and privacy information, and all information collected will be public</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` We changed InPageEdit-Analysis&#39;s address to https://doc.wjghj.cn/InPageEditAnalysis/ </li></ul><h2 id="_2-6-4-build-1897" tabindex="-1"><a class="header-anchor" href="#_2-6-4-build-1897" aria-hidden="true">#</a> 2.6.4(build_1897)</h2><p>Release date: 23:41, 4 January 2020 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "test" }, null, _parent));
  _push(` We started testing a new feature: <ul><li>The plugin adds features that may collect your information. The information that may be collected is: The wiki you edited, the number of times you saved using IPE, the number of times you used other features of IPE, and the date you used IPE</li><li>We <strong>DO NOT</strong> collect any of your personal cookies and privacy information, and all information collected will be public</li><li><s>You can find all informations here: https://doc.wjghj.cn/InPageEditApi/</s></li></ul></li></ul><h2 id="_2-6-3-5-build-1816" tabindex="-1"><a class="header-anchor" href="#_2-6-3-5-build-1816" aria-hidden="true">#</a> 2.6.3.5(build_1816)</h2><p>Release date: 15:29, 11 December 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug where the newest version of MediaWiki Recentchanges auto-refresh feature overwrites ipe-quick-diff module </li></ul><h2 id="_2-6-3-4-build-1767" tabindex="-1"><a class="header-anchor" href="#_2-6-3-4-build-1767" aria-hidden="true">#</a> 2.6.3.4(build_1767)</h2><p>Release date: 18:10, 8 December 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Redesigned IPE-Toolbox </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` **We no longer support InPageEdit-v2 compressed edition** (<s>https://common.wjghj.cn/js/InPageEdit-v2/min</s>) </li></ul><h2 id="_2-6-3-3-build-1709" tabindex="-1"><a class="header-anchor" href="#_2-6-3-3-build-1709" aria-hidden="true">#</a> 2.6.3.3(build_1709)</h2><p>Release date: 16:18, 5 December 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Rewrite quick-edit module </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that cause magic words such like <code>{{PAGENAME}}</code> not work in quick-edit edit notice </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Now, if you don&#39;t have permission to edit the page, you will receive a notice message and can&#39;t submit content </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Adjusted the load order of CSS, it is more easier to override basic styles with your personal CSS now </li></ul><h2 id="_2-6-3-2-build-1659" tabindex="-1"><a class="header-anchor" href="#_2-6-3-2-build-1659" aria-hidden="true">#</a> 2.6.3.2(build_1659)</h2><p>Release date: 05:00, 5 December 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Minor bug fix </li></ul><h2 id="_2-6-3-1-build-1536" tabindex="-1"><a class="header-anchor" href="#_2-6-3-1-build-1536" aria-hidden="true">#</a> 2.6.3.1(build_1536)</h2><p>Release date: 17:26, 2 December 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Minor bug fixed: Now quick-diff modal will display at top when quick-edit from quick-diff module </li></ul><h2 id="_2-6-3-build-1517-kimi-no-namai" tabindex="-1"><a class="header-anchor" href="#_2-6-3-build-1517-kimi-no-namai" aria-hidden="true">#</a> 2.6.3(build_1517) - Kimi no namai</h2><p>Release date: 17:20, 30 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` New function release: Rename page(Move)!!! <ul><li>Try it in your IPE toolbox~</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that cause modal not close after quick redirect </li></ul><h2 id="_2-6-2-3-build-1467" tabindex="-1"><a class="header-anchor" href="#_2-6-2-3-build-1467" aria-hidden="true">#</a> 2.6.2.3(build_1467)</h2><p>Release date: 14:03, 25 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Now the button in quick diff module lead you to the right page </li></ul><h2 id="_2-6-2-2-build-1459" tabindex="-1"><a class="header-anchor" href="#_2-6-2-2-build-1459" aria-hidden="true">#</a> 2.6.2.2(build_1459)</h2><p>Release date: 22:32, 24 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that cause in editor diff can&#39;t work </li></ul><h2 id="_2-6-2-1-build-1444" tabindex="-1"><a class="header-anchor" href="#_2-6-2-1-build-1444" aria-hidden="true">#</a> 2.6.2.1(build_1444)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` Merged &quot;\u5173\u4E8E&amp;\u5E2E\u52A9&quot; button from ipe-toolbox to ipe-preference module </li></ul><h2 id="_2-6-2-build-1432" tabindex="-1"><a class="header-anchor" href="#_2-6-2-build-1432" aria-hidden="true">#</a> 2.6.2(build_1432)</h2><p>Release date: 21:33, 24 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` We complete quick diff module <ul><li>Now quick diff shows right info</li><li>Now you can jump to next or prev version and quick view diff via quick diff module</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` We fixed the quick edit summary text <ul><li>Now <code>\\$oldid</code> will shows like <code>&amp;lt;nowiki&gt;(\u7F16\u8F91\u81EA[[Special:Diff/oldid]])&amp;lt;/nowiki&gt;</code></li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` We fixed checkbox style <ul><li>Made inline width to 1px</li><li>Hover style</li></ul></li><li>Transition <ul><li>thanks to <a href="https://minecraft-zh.gamepedia.com/User:Dianliang233" target="_blank" rel="noopener noreferrer">Dianliang233`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> \u{1F603}</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` <s>Now you can use compressed version via https://common.wjghj.cn/js/InPageEdit-v2/min</s><sup>**DO NOT USE**</sup></li></ul><h2 id="_2-6-1-build-1238" tabindex="-1"><a class="header-anchor" href="#_2-6-1-build-1238" aria-hidden="true">#</a> 2.6.1(build_1238)</h2><p>Release date: 14:35, 23 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Script now run strict mode </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` ~~We are now using new version number naming rule:~~ <ul><li>V2: <code>Main.Primary.Secondary(build_<i>&lt;revision-id&gt;</i>)</code></li><li>Canary: <code>Main.Primary.Secondary(canary_<i>&lt;revision-id&gt;</i>)</code></li></ul></li></ul><h2 id="_2-6-0-build-1196" tabindex="-1"><a class="header-anchor" href="#_2-6-0-build-1196" aria-hidden="true">#</a> 2.6.0(build_1196)</h2><p>Release date: 00:32, 23 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` We rewrote quick diff module <ul><li>Rename module <code>InPageEdit.viewDiff()</code> \u2192 <code>InPageEdit.loadQuickDiff(CompareApiJson)</code></li><li>Add module <code>InPageEdit.quickDiff()</code></li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` You can now quick view diff on history page! </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` We redesigned the quick edit editor <ul><li>More OOUI style (LOL)</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` You can now view difference between your code and old code when you are editting! </li></ul><h2 id="_2-5-3-build-1094" tabindex="-1"><a class="header-anchor" href="#_2-5-3-build-1094" aria-hidden="true">#</a> 2.5.3(build_1094)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` We are no longer support skin setting. <ul><li>We are now using the new OOUI-like skin. You can customize the look of the IPE on your personal css page.</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` New OOUI style progress bar </li></ul><h2 id="_2-5-2-build-944" tabindex="-1"><a class="header-anchor" href="#_2-5-2-build-944" aria-hidden="true">#</a> 2.5.2(build_944)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` We are now using the new OOUI-like skin! <ul><li><s>You can still load old Wikia-like designed skin via \`var InPageEditSkin = &#39;wds&#39;;\`</s></li></ul></li></ul><h2 id="_2-5-1-build-876" tabindex="-1"><a class="header-anchor" href="#_2-5-1-build-876" aria-hidden="true">#</a> 2.5.1(build_876)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` The page content is no longer overwritten when an editing conflict occurs </li></ul><h2 id="_2-5-0-build-821" tabindex="-1"><a class="header-anchor" href="#_2-5-0-build-821" aria-hidden="true">#</a> 2.5.0(build_821)</h2><p>Release date: 19:59, 16 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` This is a big update, we replaced the _cookie_ function with _localStorage_ <ul><li>You can manually delete old cookies or wait for 60 days to expire automatically</li></ul></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` You can turn off the function of clicking outside of edit window to close via setting </li></ul><h2 id="_2-4-1-build-783" tabindex="-1"><a class="header-anchor" href="#_2-4-1-build-783" aria-hidden="true">#</a> 2.4.1(build_783)</h2><p>Release date: 16:03, 16 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that caused the display title in the preview as **API** </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that caused personal local settings(\`MyInPageEditPreference\`) not working </li></ul><h2 id="_2-4-0-build-764" tabindex="-1"><a class="header-anchor" href="#_2-4-0-build-764" aria-hidden="true">#</a> 2.4.0(build_764)</h2><p>Release date: 01:55, 12 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` This is not important update for most of you, we use a new version number to remind you that we replaced some function names to make the module more holistic <ul><li><code>InPageEdit()</code> \u2192 <code>InPageEdit.edit()</code></li><li><code>InPageEditRedirect()</code> \u2192 <code>InPageEdit.redirect()</code></li><li><code>InPageEditDeletepage</code> \u2192 <code>InPageEdit.deletepage()</code></li><li><code>InPageEditRename()</code> \u2192 <code>InPageEdit.renamepage()</code></li><li><code>InPageEditPreference()</code> \u2192 <code>InPageEdit.preference()</code></li><li><code>InPageEditViewDiff()</code> \u2192 <code>InPageEdit.viewDiff()</code></li><li><code>InPageEditSectionLink()</code> \u2192 <code>InPageEdit.articleLink()</code></li></ul></li></ul><h2 id="_2-3-1-build-747" tabindex="-1"><a class="header-anchor" href="#_2-3-1-build-747" aria-hidden="true">#</a> 2.3.1(build_747)</h2><p>Release date: 00:16, 11 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` New function: Quick view page diff! <ul><li>Click diff links from &#39;&#39;Special:Recentchanges&#39;&#39; or &#39;&#39;action=history&#39;&#39;, make a quick view of the diff log</li></ul></li></ul><h2 id="_2-3-0-2-build-616" tabindex="-1"><a class="header-anchor" href="#_2-3-0-2-build-616" aria-hidden="true">#</a> 2.3.0.2(build_616)</h2><p>Release date: 21:28, 6 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` This is not important update for most of you, we use a new version number to remind you that we have modified some css selectors <ul><li>Main editor window <ul><li>Add <code>.ipe-editor .timestamp-&#39;&#39;&amp;lt;timestamp&gt;&#39;&#39;</code></li><li><code>#editPage</code> \u2192 <code>.editPage</code></li><li><code>#editArea</code> \u2192 <code>.editArea</code></li><li><code>#editSummary</code> \u2192 <code>.editSummary</code></li><li><code>#editMinor</code> \u2192 <code>.editMinor</code></li></ul></li><li>Quick redirect window <ul><li>Add <code>.quick-redirect</code></li></ul></li><li>Quick delete window <ul><li>Add \u2192 <code>.quick-deletepage</code></li></ul></li><li>Quick rename window <ul><li>Add <code>.quick-renamepage</code></li></ul></li><li>About &amp; Help window <ul><li>Add <code>.in-page-edit</code></li></ul></li></ul></li></ul><h2 id="_2-3-0-1-build-568" tabindex="-1"><a class="header-anchor" href="#_2-3-0-1-build-568" aria-hidden="true">#</a> 2.3.0.1(build_568)</h2><p>Release date: 12:52, 5 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Simplify codes </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Fixed a bug that cause in-article edit link save error </li></ul><h2 id="_2-3-0-build-488" tabindex="-1"><a class="header-anchor" href="#_2-3-0-build-488" aria-hidden="true">#</a> 2.3.0(build_488)</h2><p>Release date: 23:03, 3 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now you can save your custom preferences by clicking the gear icon(<span class="material-icons">settings</span>) in the InPageEdit Toolbox! <ul><li>Save your prefer edit summary, who doesn&#39;t like to be cool and maverick?</li><li>Default set all edits as minor edit</li></ul></li></ul><h2 id="_2-2-2-1-build-460" tabindex="-1"><a class="header-anchor" href="#_2-2-2-1-build-460" aria-hidden="true">#</a> 2.2.2.1(build_460)</h2><p>Release date: 21:49, 2 November 2019 (CST)</p><ul><li>This is not a regular update, we use a new version number to remind you that we have replaced the license agreement</li><li>*Some new functions coming soon (\u2022\u203E\u0311\u2323\u203E\u0311\u2022)\u2727\u02D6\xB0</li></ul><h2 id="_2-2-2-build-420" tabindex="-1"><a class="header-anchor" href="#_2-2-2-build-420" aria-hidden="true">#</a> 2.2.2(build_420)</h2><p>Release date: 20:45, 1 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Quick redirect now released! Check the InPageEdit Toolbox on right bottom of the page! </li></ul><h2 id="_2-2-1-build-382" tabindex="-1"><a class="header-anchor" href="#_2-2-1-build-382" aria-hidden="true">#</a> 2.2.1(build_382)</h2><p>Release date: 16:53, 1 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` The new design: InPageEdit Toolbox! Checking all ipe tools on right bottom of the page! </li><li>Quick redirect &amp; Quick rename page...</li></ul><h2 id="_2-2-0-build-350" tabindex="-1"><a class="header-anchor" href="#_2-2-0-build-350" aria-hidden="true">#</a> 2.2.0(build_350)</h2><p>Release date: 02:10, 1 November 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` New design with [Fandom Design System](https://fandomdesignsystem.com)! </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "deleted" }, null, _parent));
  _push(` No longer support load via URL param </li></ul><h2 id="_2-1-2-1-build-336" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-build-336" aria-hidden="true">#</a> 2.1.2.1(build_336)</h2><p>Release date: -</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Simplify json codes </li></ul><h2 id="_2-1-2-build-330" tabindex="-1"><a class="header-anchor" href="#_2-1-2-build-330" aria-hidden="true">#</a> 2.1.2(build_330)</h2><p>Release date: 19:51, 25 October 2019 (CST)</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Use the new way to get plugin version info </li></ul><h2 id="_2-1-1-build-318" tabindex="-1"><a class="header-anchor" href="#_2-1-1-build-318" aria-hidden="true">#</a> 2.1.1(build_318)</h2><p>Release date: 20191025</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "test" }, null, _parent));
  _push(` <s>Load via URL param</s><sup>\u2191 deleted, see #2.2.0(build_350)</sup></li></ul><h2 id="_2-1-0-1-build-306" tabindex="-1"><a class="header-anchor" href="#_2-1-0-1-build-306" aria-hidden="true">#</a> 2.1.0.1(build_306)</h2><p>Release date: 20191025</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Replace syntax with mw resource loader </li></ul><h2 id="_2-1-0-build-298" tabindex="-1"><a class="header-anchor" href="#_2-1-0-build-298" aria-hidden="true">#</a> 2.1.0(build_298)</h2><p>Release date: 20191019</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now support edit history </li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Posting error will show you the error code </li></ul><h2 id="_2-0-10-build-279" tabindex="-1"><a class="header-anchor" href="#_2-0-10-build-279" aria-hidden="true">#</a> 2.0.10(build_279)</h2><p>Release date: 20191018</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now support minor edit </li></ul><h2 id="_2-0-9" tabindex="-1"><a class="header-anchor" href="#_2-0-9" aria-hidden="true">#</a> 2.0.9</h2><p>Release date: unknown</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now support multi skins </li></ul><h2 id="_2-0-8" tabindex="-1"><a class="header-anchor" href="#_2-0-8" aria-hidden="true">#</a> 2.0.8</h2><p>Release date: unknown</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Now support preview </li></ul><h2 id="_2-0-7" tabindex="-1"><a class="header-anchor" href="#_2-0-7" aria-hidden="true">#</a> 2.0.7</h2><p>Release date: unknown</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "fixed" }, null, _parent));
  _push(` Multi bugs fixed, content can be published now </li></ul><h2 id="_2-0-0" tabindex="-1"><a class="header-anchor" href="#_2-0-0" aria-hidden="true">#</a> 2.0.0</h2><p>Release date: unknown</p><ul><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "new" }, null, _parent));
  _push(` Alpha release, rewrite InPageEdit via ssi modal plugin </li></ul><!--]-->`);
}
_sfc_main$Q.ssrRender = _sfc_ssrRender$C;
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/2.x.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var _2_x_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$Q
});
const _sfc_main$P = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u66F4\u65B0\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u65E5\u5FD7" aria-hidden="true">#</a> \u66F4\u65B0\u65E5\u5FD7</h1><p>InPageEdit \u662F\u4E00\u4E2A\u4E0D\u65AD\u8FED\u4EE3\u7684\u63D2\u4EF6\uFF0C\u5F00\u6E90\u7684\u672C\u8D28\u548C<s>\u793E\u533A</s>\u4F5C\u8005\u7684\u70ED\u60C5\u7ED9\u4E88\u4E86 InPageEdit \u6E90\u6E90\u4E0D\u65AD\u7684\u6D3B\u529B\u3002</p><p>\u82E5\u60F3\u67E5\u770B\u4EFB\u610F\u7248\u672C\u7684\u66F4\u65B0\u8BE6\u60C5\uFF0C\u53EF\u4EE5\u4ECE\u76EE\u5F55\u91CC\u9009\u62E9\u6765\u5FEB\u901F\u8DF3\u8F6C\u3002</p><!--]-->`);
}
_sfc_main$P.ssrRender = _sfc_ssrRender$B;
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/index.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$P
});
const _sfc_main$O = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="\u4E0B\u4E00\u4EE3-inpageedit" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u4EE3-inpageedit" aria-hidden="true">#</a> \u4E0B\u4E00\u4EE3 InPageEdit</h1><div class="custom-container tip"><p class="custom-container-title">\u65B0\u7248\u672C\u524D\u77BB</p><p>\u672C\u9875\u9762\u7684\u5185\u5BB9\u662F\u672A\u6765\u53EF\u80FD\u8FDB\u884C\u7684\u66F4\u65B0\uFF0C\u4F46\u4E0D\u4FDD\u8BC1\u63D0\u5230\u7684\u6240\u6709\u529F\u80FD\u4E0E\u7279\u6027\u5747\u4F1A\u5B9E\u88C5\uFF0C\u53EF\u80FD\u4EA7\u751F\u7684\u53D8\u5316\u4E5F\u4E0D\u4F1A\u5C3D\u6570\u7F57\u5217\u4E8E\u6B64\uFF0C\u4E00\u5207\u8BF7\u4EE5\u6700\u7EC8\u7248\u672C\u4E3A\u51C6\u3002</p></div><h2 id="\u5173\u4E8E\u4E0B\u4E00\u4EE3" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u4E0B\u4E00\u4EE3" aria-hidden="true">#</a> \u5173\u4E8E\u4E0B\u4E00\u4EE3</h2><p>\u4E0B\u4E00\u4EE3 InPageEdit \u2014\u2014 \u4EA6\u79F0 <code>inpageedit-next</code>\uFF0C\u662F\u57FA\u4E8E vue \u6280\u672F\u3001\u4F7F\u7528 TypeScript \u5B8C\u5168\u91CD\u6784\u7684\u3001\u9762\u5411\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u3001\u4EE5\u201C\u6807\u7B7E\u9875\u201D\u4E3A\u6838\u5FC3\u8BBE\u8BA1\u8BED\u8A00\u7684\u3001\u5168\u65B0\u6982\u5FF5\u7684\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F\u3002</p><h3 id="\u5BF9\u4E8E\u5F00\u53D1\u8005" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E\u5F00\u53D1\u8005" aria-hidden="true">#</a> \u5BF9\u4E8E\u5F00\u53D1\u8005</h3><p>\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\uFF0Cinpageedit-next \u5F88\u53EF\u80FD\u4F1A\u5B8C\u5168\u4E0D\u517C\u5BB9 v2 \u7248\u672C\u7684 API\uFF0C\u5176\u6838\u5FC3\u6280\u672F\u4E5F\u4E0D\u518D\u4F7F\u7528 jQuery\uFF0C\u53E6\u5916\uFF0C\u6211\u4EEC\u4F7F\u7528 TypeScript \u5B8C\u5168\u91CD\u6784\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u6838\u5FC3\u903B\u8F91\u3002</p><h3 id="\u5BF9\u4E8E\u4F7F\u7528\u8005" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E\u4F7F\u7528\u8005" aria-hidden="true">#</a> \u5BF9\u4E8E\u4F7F\u7528\u8005</h3><p>\u5BF9\u4E8E\u4F7F\u7528\u8005\u6765\u8BF4\uFF0C\u60A8\u53EF\u80FD\u4F1A\u770B\u5230\u66F4\u6F02\u4EAE\u7684 UI \u754C\u9762\u3001\u4F53\u9A8C\u5230\u66F4\u6613\u7528\u7684\u591A\u7EBF\u7A0B\u7F16\u8F91\u4F53\u9A8C\u3001\u611F\u53D7\u5230\u66F4\u53EF\u9760\u7684\u7A33\u5B9A\u6027\uFF0C\u7EDD\u5BF9\u4E0D\u4F1A\u6709\u66F4\u9AD8\u7684\u4E0A\u624B\u96BE\u5EA6\uFF0C\u6211\u4EEC\u4F1A\u4FDD\u8BC1\u60A8\u80FD\u91CD\u65B0\u4F53\u9A8C\u5230 v2 \u4E2D\u5DF2\u7ECF\u5B9E\u73B0\u7684\u5404\u79CD\u529F\u80FD\u3002</p><p>\u60A8\u53EF\u80FD\u65E0\u6CD5\u5728\u77ED\u65F6\u95F4\u5185\u63A5\u53D7\u4E00\u4E9B\u4F7F\u7528\u4F53\u9A8C\u4E0A\u7684\u53D8\u5316\u2014\u2014\u4F8B\u5982\u591A\u5C42\u5F39\u7A97\u53EF\u80FD\u4F1A\u53D8\u6210\u5E73\u884C\u7684\u591A\u4E2A\u6807\u7B7E\u9875\u3001UI \u770B\u8D77\u6765\u4F1A\u548C MediaWiki \u7684\u8BBE\u8BA1\u8BED\u8A00\u4E0D\u90A3\u4E48\u642D\u2014\u2014\u4F46\u76F8\u4FE1\u60A8\u5728\u4F7F\u7528\u4E00\u6BB5\u65F6\u95F4\u4EE5\u540E\u4F1A\u91CD\u65B0\u559C\u6B22\u4E0A InPageEdit\u3002</p><h2 id="roadmap" tabindex="-1"><a class="header-anchor" href="#roadmap" aria-hidden="true">#</a> Roadmap</h2><ul><li>\u57FA\u4E8E TypeScript \u91CD\u65B0\u7EC4\u7EC7\u7684\u5E94\u7528\u903B\u8F91</li><li>\u57FA\u4E8E VUE 3 \u5B9E\u73B0\u7684\u5168\u65B0\u524D\u7AEF\u7EC4\u4EF6\u6A21\u5757\u5316</li><li>\u57FA\u4E8E naive-ui \u7EC4\u4EF6\u5E93\u7684\u5168\u65B0 UI \u754C\u9762</li><li>\u57FA\u4E8E\u5E73\u884C\u6807\u7B7E\u9875(tab-view)\u7684\u5168\u65B0\u591A\u7EBF\u7A0B\u7F16\u8F91\u4F53\u9A8C</li></ul><h2 id="\u7ACB\u523B\u4F53\u9A8C-or-\u53C2\u4E0E\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u523B\u4F53\u9A8C-or-\u53C2\u4E0E\u5F00\u53D1" aria-hidden="true">#</a> \u7ACB\u523B\u4F53\u9A8C or \u53C2\u4E0E\u5F00\u53D1</h2><p>\u8BF7\u53C2\u8003\u6211\u4EEC\u7684 GitHub \u4ED3\u5E93\uFF1A<a href="https://github.com/inpageedit/inpageedit-next" target="_blank" rel="noopener noreferrer">https://github.com/inpageedit/inpageedit-next`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><p><code>inpageedit-next</code>\u5C06\u5728\u8FD1\u671F\u53D1\u5E03\u7B2C\u4E00\u4E2A\u5185\u90E8\u6D4B\u8BD5\u7248\u672C\uFF0C\u5728\u6B64\u4E4B\u524D\uFF0C\u5982\u679C\u60A8\u6709\u4E00\u5B9A\u7684\u524D\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u6B65\u9AA4\u81EA\u884C\u7F16\u8BD1\u4F53\u9A8C\u6700\u65B0\u7248\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Clone and checkout</span>
<span class="token function">git</span> clone git@github.com:inpageedit/inpageedit-next
<span class="token builtin class-name">cd</span> inpageedit-next
<span class="token function">git</span> checkout dev
<span class="token comment"># Resolve dependencies</span>
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token comment"># Run dev server</span>
<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u788E\u788E\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u788E\u788E\u5FF5" aria-hidden="true">#</a> \u788E\u788E\u5FF5</h2><h3 id="\u5173\u4E8E\u6070\u996D" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6070\u996D" aria-hidden="true">#</a> \u5173\u4E8E\u6070\u996D</h3><p>InPageEdit \u76EE\u524D\u662F\u4E00\u6B3E\u5B8C\u5168\u5F00\u6E90\u7684\u524D\u7AEF\u63D2\u4EF6\uFF0C\u6211\uFF08\u673A\u667A\u7684\u5C0F\u9C7C\u541B\uFF09\u4EE5\u4E2A\u4EBA\u5F00\u53D1\u8005\u7684\u8EAB\u4EFD\u7EF4\u62A4\u4E86\u5B83\u957F\u8FBE\u6570\u5E74\uFF0C\u8FD9\u5E76\u4E0D\u662F\u4E00\u4E2A\u5F88\u8F7B\u677E\u7684\u8FC7\u7A0B\u3002</p><p>\u56E0\u6B64\u5728\u5C06\u6765\u6211\u53EF\u80FD\u4F1A\u5F00\u8BBE\u6253\u8D4F\u901A\u9053\uFF0C\u5982\u679C\u60A8\u559C\u6B22 IPE \u4E14\u8D22\u529B\u4E0A\u6709\u76C8\u4F59\uFF0C\u53EF\u4EE5\u9002\u5F53\u5730\u5BF9\u6211\u8FDB\u884C\u6253\u8D4F\u3002</p><p>\u4F46\u662F InPageEdit \u4F1A\u4E00\u5982\u65E2\u5F80\u5B8C\u5168\u514D\u8D39\u5730\u63D0\u4F9B\u5B8C\u6574\u670D\u52A1\u3002</p><!--]-->`);
}
_sfc_main$O.ssrRender = _sfc_ssrRender$A;
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/update/next.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var next_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$O
});
const _sfc_main$N = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  const _component_status = vue.resolveComponent("status");
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="inpageedit-analytics-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#inpageedit-analytics-\u4ECB\u7ECD" aria-hidden="true">#</a> InPageEdit Analytics \u4ECB\u7ECD</h1><h2 id="\u5173\u4E8E-analytics" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-analytics" aria-hidden="true">#</a> \u5173\u4E8E Analytics</h2><p>TBC</p><h2 id="api-\u7248\u672C\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#api-\u7248\u672C\u5217\u8868" aria-hidden="true">#</a> API \u7248\u672C\u5217\u8868</h2><h3 id="analysis-v1-\u5DF2\u505C\u7528" tabindex="-1"><a class="header-anchor" href="#analysis-v1-\u5DF2\u505C\u7528" aria-hidden="true">#</a> Analysis V1 `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5DF2\u505C\u7528`);
      } else {
        return [
          vue.createTextVNode("\u5DF2\u505C\u7528")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><blockquote><p>\u6570\u636E\u5B58\u6863\uFF1Ahttps://common.wjghj.cn/-/148</p></blockquote><ul><li>\u670D\u52A1\u5668\uFF1AGuangzhou, Wjghj Tencent</li><li>\u6570\u636E\u4E2D\u5FC3\uFF1AMariaDB, innoDB</li><li>\u540E\u7AEF\u5B9E\u73B0\uFF1APHP + NGINX</li></ul><h3 id="analysis-v2-\u5DF2\u505C\u7528" tabindex="-1"><a class="header-anchor" href="#analysis-v2-\u5DF2\u505C\u7528" aria-hidden="true">#</a> Analysis V2 `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5DF2\u505C\u7528`);
      } else {
        return [
          vue.createTextVNode("\u5DF2\u505C\u7528")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><blockquote><p>\u6587\u6863\uFF1A`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/develop/analytics/v2.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`V2 documentation`);
      } else {
        return [
          vue.createTextVNode("V2 documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><ul><li>\u670D\u52A1\u5668\uFF1AGuangzhou, Wjghj Tencent &gt; Beijing, Wjghj Aliyun</li><li>\u6570\u636E\u4E2D\u5FC3\uFF1AmongoDB Server 4.4</li><li>\u524D\u7AEF\u5B9E\u73B0\uFF1AHexo + ECharts `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "done" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u751F\u4EA7\u9636\u6BB5`);
      } else {
        return [
          vue.createTextVNode("\u751F\u4EA7\u9636\u6BB5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>\u540E\u7AEF\u5B9E\u73B0\uFF1APHP + NGINX</li></ul><h3 id="analysis-v3-\u5DF2\u505C\u7528" tabindex="-1"><a class="header-anchor" href="#analysis-v3-\u5DF2\u505C\u7528" aria-hidden="true">#</a> Analysis V3 `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5DF2\u505C\u7528`);
      } else {
        return [
          vue.createTextVNode("\u5DF2\u505C\u7528")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><blockquote><p>\u6587\u6863\uFF1A`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/develop/analytics/v3.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`V3 documentation`);
      } else {
        return [
          vue.createTextVNode("V3 documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><ul><li>\u670D\u52A1\u5668\uFF1ABeijing, Wjghj Aliyun</li><li>\u6570\u636E\u4E2D\u5FC3\uFF1AmongoDB Server 4.4</li><li>\u524D\u7AEF\u5B9E\u73B0\uFF1AVue + axios + ECharts</li><li>\u540E\u7AEF\u5B9E\u73B0\uFF1AExpress Server + Node.js + NGINX</li></ul><h3 id="analysis-v4-\u5DF2\u505C\u7528" tabindex="-1"><a class="header-anchor" href="#analysis-v4-\u5DF2\u505C\u7528" aria-hidden="true">#</a> Analysis V4 `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "error" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u5DF2\u505C\u7528`);
      } else {
        return [
          vue.createTextVNode("\u5DF2\u505C\u7528")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><blockquote><p>\u6587\u6863\uFF1A`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/develop/analytics/v4.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`V4 documentation`);
      } else {
        return [
          vue.createTextVNode("V4 documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><ul><li>\u670D\u52A1\u5668\uFF1AVercel</li><li>\u6570\u636E\u4E2D\u5FC3\uFF1AMongoDB Atlas, AWS / Oregon (us-west-2)</li><li>\u524D\u7AEF\u5B9E\u73B0\uFF1A-</li><li>\u540E\u7AEF\u5B9E\u73B0\uFF1AVercel serverless Node.js 12 API</li></ul><h3 id="analytics-v5-\u6D4B\u8BD5\u4E2D" tabindex="-1"><a class="header-anchor" href="#analytics-v5-\u6D4B\u8BD5\u4E2D" aria-hidden="true">#</a> Analytics V5 `);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "updated" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u6D4B\u8BD5\u4E2D`);
      } else {
        return [
          vue.createTextVNode("\u6D4B\u8BD5\u4E2D")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><blockquote><p>\u6587\u6863\uFF1A`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/develop/analytics/v5.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`V5 documentation`);
      } else {
        return [
          vue.createTextVNode("V5 documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></blockquote><ul><li>\u670D\u52A1\u5668\uFF1AVercel</li><li>\u6570\u636E\u4E2D\u5FC3\uFF1AMongoDB Atlas, AWS / Oregon (us-west-2)</li><li>\u524D\u7AEF\u5B9E\u73B0\uFF1A-</li><li>\u540E\u7AEF\u5B9E\u73B0\uFF1AVercel serverless Node.js 14 API</li></ul><!--]-->`);
}
_sfc_main$N.ssrRender = _sfc_ssrRender$z;
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/analytics/index.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var index_html$d = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$N
});
const _sfc_main$M = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="analysis-v2" tabindex="-1"><a class="header-anchor" href="#analysis-v2" aria-hidden="true">#</a> Analysis V2</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>API \u63A5\u5165\u70B9\uFF1A<a href="https://doc.wjghj.cn/inpageedit-v2/analysis/api/" target="_blank" rel="noopener noreferrer">https://doc.wjghj.cn/inpageedit-v2/analysis/api/`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><p>V2 \u662F\u9996\u4E2A\u4F7F\u7528 mongoDB \u6570\u636E\u5E93\u7684\u7248\u672C\uFF0C\u4F46\u662F API \u6CA1\u6709\u592A\u5927\u53D8\u5316\uFF0C\u672C\u6B21\u66F4\u65B0\u7531\u4E8E\u6570\u636E\u7ED3\u6784\u8C03\u6574\u5BFC\u81F4\u4E86 V1 \u7684\u6570\u636E\u65E0\u6CD5\u7EE7\u627F\u3002</p><h2 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=&lt;action&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=&lt;type&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki" aria-hidden="true">#</a> <code>type=wiki</code></h3><p>\u83B7\u53D6 wiki \u7AD9\u70B9\u6570\u636E</p><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /inpageedit-v2/analysis/api/?action=query&amp;type=wiki&amp;sitename=[sitename]&amp;url=[url]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Params</strong></p><p>\u6309\u4F18\u5148\u7EA7\u6392\u5E8F</p><ul><li>sitename {String} <ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 sitename \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D\uFF0C\u82E5\u6709\u91CD\u540D wiki \u5C06\u8FD4\u56DE\u591A\u4E2A\u6570\u636E</li></ul></li><li>url {String} <ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 url \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
    <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// wikis...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    errors<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// if error</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u63D0\u4EA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6570\u636E" aria-hidden="true">#</a> \u63D0\u4EA4\u6570\u636E</h2><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>POST /inpageedit-v2/analysis/api/?action=submit

<span class="token header-name keyword">Content-Type:</span> application/json
{
  &quot;url&quot;: &quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;,
  &quot;sitename&quot;: &quot;&lt;wgSiteName&gt;&quot;,
  &quot;username&quot;: &quot;&lt;wgUserName&gt;&quot;,
  &quot;functionID&quot;: &quot;&lt;inpageedit_function_name&gt;&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Response</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
  <span class="token string">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// submitted data..</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  errors<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// if error</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><!--]-->`);
}
_sfc_main$M.ssrRender = _sfc_ssrRender$y;
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/analytics/v2.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var v2_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$M
});
const _sfc_main$L = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="analysis-v3" tabindex="-1"><a class="header-anchor" href="#analysis-v3" aria-hidden="true">#</a> Analysis V3</h1><p>API \u63A5\u5165\u70B9\uFF1Ahttps://api.wjghj.cn/inpageedit/</p><p>V3 \u53EF\u80FD\u4F1A\u88AB\u76F4\u63A5\u8DF3\u8FC7\u4E0D\u4F7F\u7528\uFF0C\u6240\u4EE5\u4E0D\u5199\u6587\u6863\u4E86\uFF0C\u7A0B\u5E8F\u5458\u7684\u4E8B\u600E\u4E48\u80FD\u53EB\u9E3D\uFF0C\u53EB\u653E\u7F6E\u3002</p><p>\u9996\u6B21\u5C1D\u8BD5\u4F7F\u7528 Node.js \u7F16\u5199\u7684\u540E\u7AEF\uFF0C\u7531\u4E8E\u4EE3\u7801\u7D20\u8D28\u8FC7\u4F4E\uFF0C\u96BE\u4EE5\u7EF4\u62A4\u3002</p><!--]-->`);
}
_sfc_main$L.ssrRender = _sfc_ssrRender$x;
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/analytics/v3.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var v3_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$L
});
const _sfc_main$K = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  const _component_status = vue.resolveComponent("status");
  _push(`<!--[--><h1 id="analysis-v4" tabindex="-1"><a class="header-anchor" href="#analysis-v4" aria-hidden="true">#</a> Analysis V4</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>API \u63A5\u5165\u70B9\uFF1A<a href="https://analysis.ipe.wjghj.cn/api" target="_blank" rel="noopener noreferrer">https://analysis.ipe.wjghj.cn/api`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></p><p>V4 \u662F\u9996\u4E2A\u4F7F\u7528 serverless \u6280\u672F\u7684\u7248\u672C\uFF0CAPI \u7ED3\u6784\u6709\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u6570\u636E\u7ED3\u6784\u65E0\u53D8\u5316\u3002</p><h2 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E</h2><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api/auery/:type
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="type-wiki" tabindex="-1"><a class="header-anchor" href="#type-wiki" aria-hidden="true">#</a> <code>type=wiki</code></h3><p>\u83B7\u53D6 wiki \u7AD9\u70B9\u6570\u636E</p><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET /api/query/wiki?sitename=[sitename]&amp;siteurl=[siteurl]&amp;prop=[prop]&amp;sortby=[sortby]&amp;sortorder=[sortorder]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Params</strong></p><p>\u4EE5\u4E0B\u4E24\u4E2A\u4E3A wiki \u7B5B\u9009\uFF0C\u4EC5\u751F\u6548\u4E00\u6761\uFF0C\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u6392\u5E8F\u3002\u53EF\u9009\uFF0C\u82E5\u672A\u6307\u5B9A\u5219\u641C\u7D22\u5168\u90E8 wiki\u3002</p><ul><li>siteurl <code>{String&lt;URL&gt;}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 url \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u786E\u5207\u5339\u914D</li></ul></li><li>sitename <code>{String}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u4EE5 sitename \u4E3A\u952E\u641C\u7D22\u6570\u636E\uFF0C\u6A21\u7CCA\u5339\u914D\uFF0C\u63A5\u53D7\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u82E5\u6709\u91CD\u540D wiki \u5C06\u8FD4\u56DE\u591A\u4E2A\u6570\u636E</li></ul></li></ul><p>\u4EE5\u4E0B\u4E3A\u9879\u76EE\u7B5B\u9009\uFF0C\u53EF\u9009\u3002</p><ul><li>prop <code>{String}</code><ul><li>@default <code>&quot;url|sitename|_total&quot;</code></li><li>\u82E5\u6307\u5B9A\uFF0C\u4EC5\u663E\u793A\u6307\u5B9A\u6570\u636E\uFF0C\u591A\u4E2A\u4EE5<code>|</code>\u9694\u5F00</li><li>url, sitename, _total, date, functions, users</li></ul></li><li>sortby <code>{String}</code><ul><li>\u82E5\u6307\u5B9A\uFF0C\u6309\u952E\u6392\u5E8F wiki array</li></ul></li><li>sortorder <code>{Number}</code><ul><li>\u6392\u5E8F\u89C4\u5219\uFF0C\u9884\u8BBE\u987A\u5E8F</li><li>&gt;= 0 \u987A\u5E8F</li><li>&lt; 0 \u5012\u5E8F</li></ul></li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
    <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// wikis...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    errors<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// if error</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="type-date" tabindex="-1"><a class="header-anchor" href="#type-date" aria-hidden="true">#</a> <code>type=date</code></h3><p>\u6682\u672A\u5B9E\u88C5\u3002</p><h2 id="\u63D0\u4EA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6570\u636E" aria-hidden="true">#</a> \u63D0\u4EA4\u6570\u636E</h2><p><strong>Send</strong></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>POST /api/submit

application/json
{
  &quot;url&quot;: &quot;&lt;wgServerName&gt;&lt;wgArticlePath&gt;&quot;,
  &quot;sitename&quot;: &quot;&lt;wgSiteName&gt;&quot;,
  &quot;username&quot;: &quot;&lt;wgUserName&gt;&quot;,
  &quot;functionID&quot;: &quot;&lt;inpageedit_function_name&gt;&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6240\u6709\u6570\u636E\u5C06\u4F1A\u88AB\u9A8C\u8BC1\uFF1A</p><ul><li>url \u5FC5\u987B\u4E3A\u5408\u6CD5\u7684 URL</li><li>sitename, username <ul><li>\u5C06\u5904\u7406\u6F5C\u5728\u7684 xss \u98CE\u9669\uFF0C<code>&lt;(.+?)&gt;</code> \u2192 <code>&amp;lt;$1&amp;gt;</code></li><li>`);
  _push(serverRenderer.ssrRenderComponent(_component_status, { status: "dev" }, null, _parent));
  _push(` \u5173\u952E\u8BCD\u5C4F\u853D\uFF0C\u9632\u6B62\u5192\u72AF\u6027\u8BCD\u6C47 </li></ul></li><li>username \u4E0D\u5141\u8BB8\u4E0D\u5408\u6CD5\u7684\u7528\u6237\u540D\uFF0C\u4E0D\u53EF\u51FA\u73B0\u4EE5\u4E0B\u7B26\u53F7\uFF1A<code>#&amp;?=[]{}</code></li><li>functionID \u6709\u767D\u540D\u5355\u673A\u5236</li></ul><p><strong>Response</strong></p><p><code>application/json</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;status&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// false</span>
  <span class="token string">&quot;submit&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// submitted data..</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  errors<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// if error</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Server informations...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p>\u26A0\uFE0F\u6CE8\u610F\uFF1A\u7531\u4E8E\u6280\u672F\u539F\u56E0\uFF0C<code>sitename</code>\u4E0E<code>username</code>\u4E2D\u7684\u82F1\u6587\u53E5\u53F7<code>.</code>\u5C06\u88AB\u8F6C\u4E49\u4E3A<code>{dot}</code>\u50A8\u5B58</p><p><code>application/BSON</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token function">ObjectId</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;ID&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgServer&gt;&lt;wgArticlePath&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;sitename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;wgSiteName&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;&lt;wgUserName&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;date&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;&lt;Y-m-d&gt;&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;_total&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;&lt;inpageedit_function_name&gt;&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><!--]-->`);
}
_sfc_main$K.ssrRender = _sfc_ssrRender$w;
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/analytics/v4.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var v4_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$K
});
const _sfc_main$J = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="analytics-v5" tabindex="-1"><a class="header-anchor" href="#analytics-v5" aria-hidden="true">#</a> Analytics V5</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>InPageEdit Analisys \u4ECE\u6B64\u7248\u672C\u6B63\u5F0F\u66F4\u540D\u4E3A InPageEdit Analytics</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6B64\u7248\u672C\u76F8\u8F83\u4E0A\u4E00\u7248\u672C\uFF0CAPI \u7ED3\u6784\u6709\u7834\u574F\u6027\u53D8\u66F4\uFF0C\u6570\u636E\u7ED3\u6784\u6709\u53D8\u5316\u3002</p><p>V4 \u6570\u636E\u5C06\u88AB\u629B\u5F03\u3002</p></div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>API \u63A5\u5165\u70B9:</p><ul><li><a href="https://analytics-v5.ipe.wjghj.cn/api" target="_blank" rel="noopener noreferrer">https://analytics-v5.ipe.wjghj.cn/api`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li><a href="https://inpageedit-analytics.vercel.app/api" target="_blank" rel="noopener noreferrer">https://inpageedit-analytics.vercel.app/api`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li></ul><h2 id="\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u6570\u636E</h2><p><code>/api/query/:type</code></p><h3 id="\u901A\u7528\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u5B57\u6BB5" aria-hidden="true">#</a> \u901A\u7528\u5B57\u6BB5</h3><ul><li><strong>\u8FC7\u6EE4</strong> <code>prop</code> {string} <ul><li>\u901A\u8FC7<code>|</code>\u5206\u9694\uFF0C\u4EE5<code>!</code>\u5F00\u5934\u8868\u793A\u8FC7\u6EE4\u3001\u5426\u5219\u8868\u793A\u663E\u793A</li><li>\u4F8B\u5982\uFF1A<code>foo|!bar</code>\uFF0C\u663E\u793A<code>foo</code>\u5B57\u6BB5\u3001\u8FC7\u6EE4<code>bar</code>\u5B57\u6BB5</li><li>\u5F53\u503C\u4E3A<code>*</code>\u65F6\uFF0C\u663E\u793A\u6240\u6709\u5B57\u6BB5</li></ul></li><li><strong>\u6392\u5E8F</strong> <code>sort</code> {string} <ul><li>\u901A\u8FC7<code>|</code>\u5206\u9694\uFF0C\u4EE5<code>!</code>\u5F00\u5934\u8868\u793A\u5012\u5E8F\u3001\u5426\u5219\u4E3A\u6B63\u5E8F</li><li>\u4F8B\u5982\uFF1A<code>foo|!bar</code>\uFF0C\u9996\u5148\u4EE5<code>foo</code>\u5B57\u6BB5\u6309\u987A\u5E8F\u6392\u5217\uFF0C\u76F8\u540C\u7684\u6309<code>bar</code>\u5B57\u6BB5\u5012\u5E8F\u6392\u5217</li></ul></li></ul><h3 id="\u901A\u8FC7\u7AD9\u53F0-wiki-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7AD9\u53F0-wiki-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u7AD9\u53F0(wiki)\u67E5\u8BE2\u6570\u636E</h3><p><code>GET /api/query/wiki</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryWikiParams</span> <span class="token punctuation">{</span>
  siteUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u4E0D\u63D0\u4F9B\u65F6\u67E5\u8BE2\u5168\u90E8 wiki</span>
  limit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u5927\u4E8E\u7B49\u4E8E 1 \u4E14\u5C0F\u4E8E\u7B49\u4E8E 100 \u7684\u6574\u6570\uFF1B\u9884\u8BBE 10</span>
  offset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u5927\u4E8E\u7B49\u4E8E 0 \u7684\u6574\u6570\uFF1B\u9884\u8BBE 0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><details class="custom-container details"><summary>\u8FD4\u56DE\u7ED3\u679C</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryWikiResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
      siteName<span class="token operator">:</span> <span class="token builtin">string</span>
      features<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      users<span class="token operator">:</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  limit<span class="token operator">:</span> <span class="token number">10</span>
  offset<span class="token operator">:</span> <span class="token number">0</span>
  hasNext<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></details><h3 id="\u901A\u8FC7\u7528\u6237-user-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7528\u6237-user-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u7528\u6237(user)\u67E5\u8BE2\u6570\u636E</h3><p><code>GET /api/query/user</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryUserParams</span> <span class="token punctuation">{</span>
  userName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u53EF\u4EE5\u4EE5 | \u5206\u9694\u67E5\u8BE2\u591A\u4E2A</span>
  siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><details class="custom-container details"><summary>\u8FD4\u56DE\u7ED3\u679C</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryUserResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      userName<span class="token operator">:</span> <span class="token builtin">string</span>
      siteUrl<span class="token operator">:</span> <span class="token builtin">string</span>
      siteName<span class="token operator">:</span> <span class="token builtin">string</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      features<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h3 id="\u901A\u8FC7\u65F6\u95F4-date-\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u65F6\u95F4-date-\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u901A\u8FC7\u65F6\u95F4(date)\u67E5\u8BE2\u6570\u636E</h3><p><code>GET /api/query/date</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryDateParams</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u7528\u4E8E Date \u6784\u9020\u51FD\u6570\u7684\u5B57\u7B26\u4E32</span>
  from<span class="token operator">:</span> <span class="token builtin">string</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u9884\u8BBE\u4E3A\u8BF7\u6C42\u7684\u5F53\u4E0B</span>
  interval<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;year&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;month&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;day&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hour&#39;</span> <span class="token comment">// \u9884\u8BBE\u4E3A day</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="custom-container details"><summary>\u8FD4\u56DE\u7ED3\u679C</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">QueryDateResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      _total<span class="token operator">:</span> <span class="token builtin">number</span>
      date<span class="token operator">:</span> <span class="token builtin">string</span>
      users<span class="token operator">:</span> <span class="token punctuation">{</span>
        userName<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
      sites<span class="token operator">:</span> <span class="token punctuation">{</span>
        featureID<span class="token operator">:</span> <span class="token builtin">string</span>
        count<span class="token operator">:</span> <span class="token builtin">number</span>
      <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  fromTime<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// ISOString</span>
  toTime<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// ISOString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></details><h2 id="\u63D0\u4EA4\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6570\u636E" aria-hidden="true">#</a> \u63D0\u4EA4\u6570\u636E</h2><p><code>POST /api/submit</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SubmitParams</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><details class="custom-container details"><summary>\u8FD4\u56DE\u7ED3\u679C</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SubmitResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    submit<span class="token operator">:</span> <span class="token punctuation">{</span>
      acknowledged<span class="token operator">:</span> <span class="token builtin">boolean</span>
      insertedId<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></details><h2 id="\u9519\u8BEF\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u8FD4\u56DE" aria-hidden="true">#</a> \u9519\u8BEF\u8FD4\u56DE</h2><p>\u5F53\u9047\u5230\u8BF7\u6C42\u672A\u80FD\u6B63\u786E\u5B8C\u6210\u7684\u60C5\u51B5\u65F6\uFF0C\u4E00\u5B9A\u4F1A\u8FD4\u56DE\u975E 200 \u72B6\u6001\u7801\uFF0C\u5E76\u4E00\u822C\u5305\u542B\u9519\u8BEF\u8BF4\u660E\u3002</p><details class="custom-container details"><summary>\u8FD4\u56DE\u7ED3\u679C</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ErrorResult</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u4E00\u822C\u4E0D\u662F 200</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">:</span> <span class="token builtin">any</span>
  error<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h3 id="\u5E38\u89C1\u9519\u8BEF\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF\u4EE3\u7801" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF\u4EE3\u7801</h3><ul><li><code>400 Bad Request</code> \u5BA2\u6237\u7AEF\u9519\u8BEF\uFF1A\u8BF7\u6C42\u65F6\uFF0C\u63D0\u4EA4\u7684\u5B57\u6BB5\u7C7B\u578B\u6709\u8BEF/\u7F3A\u5C11\u5FC5\u8981\u5B57\u6BB5</li><li><code>405 Method not allowed</code> \u5BA2\u6237\u7AEF\u9519\u8BEF\uFF1A\u8BF7\u6C42\u65F6\uFF0C\u4F7F\u7528\u4E86\u4E0D\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u4F8B\u5982\u6709\u4E9B\u63A5\u5165\u70B9\u8981\u6C42<code>POST</code>\u65B9\u6CD5</li><li><code>500 Internal Server Error</code> \u670D\u52A1\u7AEF\u9519\u8BEF\uFF1Aserverless \u51FD\u6570\u8D85\u65F6/MongoDB \u64CD\u4F5C\u5931\u8D25/<s>\u5C0F\u9C7C\u541B\u7684\u5E26\u5BBD\u7528\u5B8C\u4E86</s></li></ul><!--]-->`);
}
_sfc_main$J.ssrRender = _sfc_ssrRender$v;
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/develop/analytics/v5.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var v5_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$J
});
const _sfc_main$I = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "about-inpageedit",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#about-inpageedit" aria-hidden="true">#</a> About InPageEdit</h1>`);
}
_sfc_main$I.ssrRender = _sfc_ssrRender$u;
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/about/index.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var index_html$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$I
});
const _sfc_main$H = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="support-the-author" tabindex="-1"><a class="header-anchor" href="#support-the-author" aria-hidden="true">#</a> Support the author</h1><blockquote><p>Star me at GitHub or start an issue is the best encouragement!</p></blockquote><h2 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute" aria-hidden="true">#</a> Contribute</h2><p>You can help me improve the Documention Center, the newest and gigantic to-do; if you know some JavaScript, you can also help me improve the plugin.</p><h2 id="financial-support" tabindex="-1"><a class="header-anchor" href="#financial-support" aria-hidden="true">#</a> Financial Support</h2><p>If you are so into InPageEdit that you even wanna support the author in a financial way, DM him via QQ! <s>Don&#39;t have the plan to get the transferring QR code into pubic yet because I&#39;m sure thar I&#39;ll be attacked very fiercely</s></p><!--]-->`);
}
_sfc_main$H.ssrRender = _sfc_ssrRender$t;
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/about/donate.html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var donate_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$H
});
const _sfc_main$G = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="inpageedit-logo" tabindex="-1"><a class="header-anchor" href="#inpageedit-logo" aria-hidden="true">#</a> InPageEdit Logo</h1><p><a href="https://github.com/dianliang233/" target="_blank" rel="noopener noreferrer">Dianliang233`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a> with <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">Sketch`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a>.</p><h2 id="design-font" tabindex="-1"><a class="header-anchor" href="#design-font" aria-hidden="true">#</a> Design &amp; Font</h2><ul><li>Color palette: <a href="https://atlassian.design/" target="_blank" rel="noopener noreferrer">Atlassian Design`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a><ul><li>In: Pacific Bridge B400 (#0052CC)</li><li>Page: Sodium Explosion B300 (#0065FF)</li><li>Edit: Coogee B200 (#2684FF)</li></ul></li><li>The &quot;Edit&quot;(i/I) icon: <a href="https://material.io/resources/icons/" target="_blank" rel="noopener noreferrer">Material Design Icon`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a></li><li>Font: Google &quot;Product&quot; Sans</li></ul><!--]-->`);
}
_sfc_main$G.ssrRender = _sfc_ssrRender$s;
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/about/logo.html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var logo_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$G
});
const _sfc_main$F = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="api-documention" tabindex="-1"><a class="header-anchor" href="#api-documention" aria-hidden="true">#</a> API Documention</h1><p>Postponing!!!</p><!--]-->`);
}
_sfc_main$F.ssrRender = _sfc_ssrRender$r;
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/api/index.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var index_html$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$F
});
const _sfc_main$E = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "hook",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#hook" aria-hidden="true">#</a> Hook</h1>`);
}
_sfc_main$E.ssrRender = _sfc_ssrRender$q;
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/api/hook.html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var hook_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$E
});
const _sfc_main$D = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<!--[--><h1 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h1><p>InPageEdit is a MediaWiki plugin made by \u673A\u667A\u7684\u5C0F\u9C7C\u541B (DragonFish) in JavaScript which has good mobile optimization and useless colorful design. The main purpose is allowing users to use many MediaWiki functions without opening a new tab (including but not only &quot;editing&quot;), which speeds up the wiki maintaining process. The plugin is also modular designed, and providing many SDKs.</p><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/en/guide/install/quick-start.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`How to install \u2192`);
      } else {
        return [
          vue.createTextVNode("How to install \u2192")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><!--]-->`);
}
_sfc_main$D.ssrRender = _sfc_ssrRender$p;
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/intro.html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var intro_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$D
});
const _sfc_main$C = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="change-logs" tabindex="-1"><a class="header-anchor" href="#change-logs" aria-hidden="true">#</a> CHANGE LOGS</h1><p>InPageEdit is an iterative plugin, the nature of open source and the enthusiasm of authors <s>from the community</s> gives InPageEdit a constant source of vitality.</p><p>To read change log of any verison, please choose the verison you need on the left.</p><!--]-->`);
}
_sfc_main$C.ssrRender = _sfc_ssrRender$o;
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/update/index.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var index_html$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$C
});
const _sfc_main$B = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5" aria-hidden="true">#</a> \u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5</h1><h2 id="\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177</h2><blockquote><p><strong>\u5C0F\u5DE5\u5177</strong>\uFF08\u96F6\u4EF6/Gadget\uFF09\u5927\u591A\u6570\u57FA\u4E8E JavaScript\uFF0C\u6240\u4EE5\u4F60\u5FC5\u987B\u4F7F\u4F60\u7684\u6D4F\u89C8\u5668\u542F\u7528 JavaScript \u4EE5\u4F7F\u5B83\u4EEC\u5DE5\u4F5C\u3002</p><p>\u540C\u65F6\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u7279\u6B8A\u5C0F\u5DE5\u5177\u4E0D\u662F MediaWiki \u8F6F\u4EF6\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4ED6\u4EEC\u901A\u5E38\u662F\u7531 Wiki \u7684\u7BA1\u7406\u5458\u5F00\u53D1\u5E76\u7EF4\u62A4\u7684\u3002</p><p>\u2014\u2014 MediaWiki</p></blockquote><p><s>\u5EFA\u8BAE\u76F4\u63A5\u770B mediawiki.org\uFF0C\u61D2\u5F97\u5199\u4E86</s></p><h2 id="\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6" aria-hidden="true">#</a> \u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6</h2><p>\u5927\u591A\u6570 Wiki \u4E0A\u7684\u5C0F\u5DE5\u5177\u7531<code>MediaWiki:Gadgets-definition</code>\u7EDF\u4E00\u5B9A\u4E49\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u5C06 InPageEdit \u5B89\u88C5\u4E3A\u60A8 wiki \u7684\u5C0F\u5DE5\u5177\u3002</p><ol><li>\u5728<code>MediaWiki:Gadgets-definition</code>\u53E6\u8D77\u4E00\u884C\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token punctuation">*</span> InPageEdit<span class="token url">[ResourceLoader|rights=edit,skipcaptcha]</span><span class="token punctuation">|</span>InPageEdit.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5728<code>MediaWiki:Gadget-InPageEdit.js</code>\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5728<code>MediaWiki:Gadget-InPageEdit</code>\u6DFB\u52A0\u7C7B\u4F3C\u8FD9\u6837\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u6539\u52A8\uFF1A</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token url">[https://ipe.js.org/ InPageEdit]</span> - \u7531\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u7EF4\u62A4\uFF0C\u9762\u5411\u719F\u7EC3\u7528\u6237\u7684\u5FEB\u901F\u7EF4\u62A4\u5DE5\u5177\u96C6(\u5C0F\u7F16\u8F91\u3001\u91CD\u5B9A\u5411\u3001\u9875\u9762\u5386\u53F2)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u5927\u529F\u544A\u6210\uFF0C\u524D\u5F80\u53C2\u6570\u8BBE\u7F6E\u9875\u9762 \u2192 \u5C0F\u5DE5\u5177\uFF0C\u67E5\u770B\u5C0F\u5DE5\u5177\u662F\u5426\u6210\u529F\u6CE8\u518C</li></ol><!--]-->`);
}
_sfc_main$B.ssrRender = _sfc_ssrRender$n;
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/install/gadget.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var gadget_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$B
});
const _sfc_main$A = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h1><p>\u5B89\u88C5 InPageEdit \u5341\u5206\u7B80\u5355\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u53EA\u9700\u8981<strong>\u51E0\u79D2</strong>\u5C31\u80FD\u5B8C\u6210\u3002</p><h2 id="\u4E2A\u4EBA-js-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA-js-\u4F7F\u7528" aria-hidden="true">#</a> \u4E2A\u4EBA js \u4F7F\u7528</h2><p>\u5728\u5927\u591A\u6570 MediaWiki \u7F51\u7AD9\u4E0A\uFF0C\u90FD\u5141\u8BB8\u7528\u6237\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684 JavaScript\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u7F16\u8F91\u4E2A\u4EBA js \u9875\u9762\u5B89\u88C5 InPageEdit\u3002</p><ol><li>\u524D\u5F80\u60A8\u7684\u4E2A\u4EBA js \u9875\u9762\uFF0C\u8FD9\u4E2A\u9875\u9762\u901A\u5E38\u662F<code>User:&lt;\u4F60\u7684\u7528\u6237\u540D&gt;/common.js</code></li><li>\u70B9\u51FB\u201C\u7F16\u8F91\u201D\u6309\u94AE</li><li>\u5728\u7F16\u8F91\u6846\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u6309\u94AE</li><li>\u5B8C\u6210\uFF0C\u8BF7\u4EAB\u7528~</li></ol><h2 id="\u901A\u8FC7\u5C0F\u5DE5\u5177\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5C0F\u5DE5\u5177\u5F00\u542F" aria-hidden="true">#</a> \u901A\u8FC7\u5C0F\u5DE5\u5177\u5F00\u542F</h2><p>\u6709\u4E00\u4E9B wiki \u7F51\u7AD9\uFF08\u4F8B\u5982<a href="https://zh.moegirl.org.cn/Special:%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE#mw-prefsection-gadgets" target="_blank" rel="noopener noreferrer">\u840C\u5A18\u767E\u79D1`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a>\uFF09\u5DF2\u7ECF\u901A\u8FC7\u5C0F\u5DE5\u5177\uFF08Gadget\uFF09\u5B89\u88C5\u4E86\u672C\u63D2\u4EF6\uFF0C\u5728\u8FD9\u4E9B\u7F51\u7AD9\u4E0A\uFF0C\u6211\u4EEC\u63A8\u8350\u76F4\u63A5\u5728\u8BBE\u7F6E\u91CC\u6253\u94A9\u542F\u7528\u5B83\u3002</p><ol><li>\u524D\u5F80<code>Special:Preferences</code>\u9875\u9762\u6216\u8005\u901A\u8FC7\u7F51\u9875\u4E0A\u7684<code>\u53C2\u6570\u8BBE\u7F6E</code>\u94FE\u63A5\u8FDB\u5165\u201C\u53C2\u6570\u8BBE\u7F6E\u201D\u9875\u9762</li><li>\u4ECE\u9875\u9762\u7684\u5BFC\u822A\u6761\u9009\u4E2D\u201C\u5C0F\u5DE5\u5177\u201D</li><li>\u627E\u5230\u5E26\u6709\u201CInPageEdit\u201D\u5B57\u6837\u7684\u9009\u62E9\u6846\uFF0C\u6253\u94A9\u9009\u4E2D\u5B83</li><li>\u7FFB\u5230\u9875\u9762\u5E95\u90E8\uFF0C\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u6309\u94AE</li><li>\u5B8C\u6210\uFF0C\u8BF7\u4EAB\u7528~</li></ol><h2 id="\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u5B89\u88C5" aria-hidden="true">#</a> \u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u5B89\u88C5</h2><p>\u6709\u4E00\u4E9B MediaWiki \u7F51\u7AD9\u51FA\u4E8E\u5BF9\u5B89\u5168\u7684\u8003\u8651\uFF0C\u7981\u7528\u4E86\u4E2A\u4EBA js \u529F\u80FD\uFF0C\u800C\u4E14\u4E5F\u6CA1\u6709\u901A\u8FC7\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6\uFF08\u4F8B\u5982\u7070\u673A Wiki\uFF09\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5982\u679C\u60A8\u60F3\u4F7F\u7528\u672C\u63D2\u4EF6\uFF0C\u9700\u8981\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u6765\u5B9E\u73B0\u3002</p><p>\u4F7F\u6D4F\u89C8\u5668\u8FD0\u884C js \u63D2\u4EF6\u7684\u6269\u5C55\u5E02\u9762\u4E0A\u6709\u5F88\u591A\uFF0C\u5728\u6B64\u4E0D\u8D58\u8FF0\u5177\u4F53\u5B9E\u73B0\u65B9\u6848\uFF0C\u8FD9\u91CC\u4EC5\u4EC5\u63D0\u4F9B\u4E00\u79CD\u52A0\u8F7D\u7684\u601D\u8DEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// RLQ\u662FMediaWiki\u4FDD\u5B58\u5F02\u6B65\u6267\u884C\u51FD\u6570\u7684\u6570\u7EC4</span>
  window<span class="token punctuation">.</span><span class="token constant">RLQ</span> <span class="token operator">=</span> <span class="token constant">RLQ</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token constant">RLQ</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B49\u5F85jQuery\u52A0\u8F7D\u5B8C\u6BD5</span>
    <span class="token keyword">var</span> _count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> _interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> jQuery <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// jQuery\u52A0\u8F7D\u5B8C\u6BD5</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>_interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u9632\u6B62\u7F51\u7AD9\u5E76\u4E0D\u662FMediaWiki\u65F6\u62A5\u9519</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token comment">/* InPageEdit Path */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_count <span class="token operator">&gt;</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u52A0\u8F7D\u8D85\u65F6</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span>_interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u5B89\u88C5\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8981\u6C42" aria-hidden="true">#</a> \u5B89\u88C5\u8981\u6C42</h2><p>InPageEdit \u662F\u4E00\u4E2A\u57FA\u4E8E JavaScript \u7684\u63D2\u4EF6\uFF0C\u5728\u7F16\u5199\u65F6\u4F7F\u7528\u4E86\u5F88\u591A jQuery \u7684\u8BED\u6CD5\u4EE5\u53CA ECMAScript \u7248\u672C\u5927\u4E8E 2018 \u7684\u8BED\u6CD5\uFF0C\u5728\u8BF7\u6C42 MediaWiki API \u65F6\u4E5F\u7528\u5230\u4E86\u4E00\u4E9B\u6BD4\u8F83\u65B0\u7684\u63A5\u53E3\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u4F60\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4EE5\u53CA\u5C3D\u53EF\u80FD\u65B0\u7684 MediaWiki \u7F51\u7AD9\u4E0A\u4F7F\u7528\u3002\u5728\u672A\u6765\u5E76\u6CA1\u6709\u517C\u5BB9\u8FC7\u65F6\u6D4F\u89C8\u5668\u6216\u8005\u8001\u7248\u672C MediaWiki \u7684\u8BA1\u5212\u3002</p><h3 id="\u652F\u6301\u7684\u6D4F\u89C8\u5668" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u6D4F\u89C8\u5668" aria-hidden="true">#</a> \u652F\u6301\u7684\u6D4F\u89C8\u5668</h3><table class="browsersupport"><tbody><tr><th>IE</th><th>Firefox</th><th>Chrome</th><th>Safari</th><th>Opera</th></tr><tr class="browsericons"><td class="bsNoIE">\u4E0D\u652F\u6301IE\u6D4F\u89C8\u5668</td><td class="bsFirefox">\u6700\u65B02\u4E2A\u7248\u672C</td><td class="bsChrome">\u6700\u65B02\u4E2A\u7248\u672C</td><td class="bsSafari">\u6700\u65B02\u4E2A\u7248\u672C</td><td class="bsOpera">\u6700\u65B02\u4E2A\u7248\u672C</td></tr></tbody></table><h3 id="mediawiki-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#mediawiki-\u7248\u672C" aria-hidden="true">#</a> MediaWiki \u7248\u672C</h3><ul><li>MediaWiki &gt; 1.20.x</li></ul><h3 id="jquery-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#jquery-\u7248\u672C" aria-hidden="true">#</a> jQuery \u7248\u672C</h3><ul><li>jQuery &gt; 1.9.x</li></ul><!--]-->`);
}
_sfc_main$A.ssrRender = _sfc_ssrRender$m;
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/install/quick-start.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var quickStart_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$A
});
const _sfc_main$z = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u504F\u597D\u8BBE\u7F6E-preference",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u504F\u597D\u8BBE\u7F6E-preference" aria-hidden="true">#</a> \u504F\u597D\u8BBE\u7F6E preference</h1>`);
}
_sfc_main$z.ssrRender = _sfc_ssrRender$l;
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/preference.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var preference_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$z
});
const _sfc_main$y = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u5FEB\u901F\u5220\u9664-quick-delete",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u5FEB\u901F\u5220\u9664-quick-delete" aria-hidden="true">#</a> \u5FEB\u901F\u5220\u9664 quick-delete</h1>`);
}
_sfc_main$y.ssrRender = _sfc_ssrRender$k;
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-delete.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var quickDelete_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$y
});
const _sfc_main$x = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u5FEB\u901F\u5DEE\u5F02-quick-diff",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u5FEB\u901F\u5DEE\u5F02-quick-diff" aria-hidden="true">#</a> \u5FEB\u901F\u5DEE\u5F02 quick-diff</h1>`);
}
_sfc_main$x.ssrRender = _sfc_ssrRender$j;
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-diff.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var quickDiff_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$x
});
const _sfc_main$w = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u5FEB\u901F\u7F16\u8F91-quick-edit" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u7F16\u8F91-quick-edit" aria-hidden="true">#</a> \u5FEB\u901F\u7F16\u8F91 quick-edit</h1><p><strong>\u5FEB\u901F\u7F16\u8F91</strong> (quick-edit) \u662F\u6700\u5E38\u7528\u7684\u529F\u80FD\u4E4B\u4E00\uFF0C\u80FD\u8BA9\u60A8\u5728\u4E0D\u6253\u5F00\u65B0\u6807\u7B7E\u9875\u7684\u60C5\u51B5\u4E0B\u7F16\u8F91\u6307\u5B9A\u9875\u9762\u3001\u4ECE\u9875\u9762\u5386\u53F2\u7F16\u8F91\u6216\u8005\u7F16\u8F91\u6307\u5B9A\u9875\u9762\u7684\u6307\u5B9A\u6BB5\u843D\uFF0C\u751A\u81F3\u7F16\u8F91\u5386\u53F2\u9875\u9762\u7684\u6307\u5B9A\u6BB5\u843D\u3002</p><h2 id="\u901A\u8FC7\u5DE5\u5177\u76D2\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5DE5\u5177\u76D2\u4F7F\u7528" aria-hidden="true">#</a> \u901A\u8FC7\u5DE5\u5177\u76D2\u4F7F\u7528</h2><p>\u70B9\u5B83\u5C31\u5B8C\u4E8B\u4E86\uFF01</p><h2 id="\u901A\u8FC7\u7F16\u8F91\u6BB5\u843D\u65C1\u7684\u94FE\u63A5\u7F16\u8F91\u6BB5\u843D" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7F16\u8F91\u6BB5\u843D\u65C1\u7684\u94FE\u63A5\u7F16\u8F91\u6BB5\u843D" aria-hidden="true">#</a> \u901A\u8FC7\u7F16\u8F91\u6BB5\u843D\u65C1\u7684\u94FE\u63A5\u7F16\u8F91\u6BB5\u843D</h2><p>\u2026\u2026</p><h2 id="\u5728\u6D4F\u89C8\u9875\u9762\u5386\u53F2\u8BB0\u5F55\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u6D4F\u89C8\u9875\u9762\u5386\u53F2\u8BB0\u5F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u6D4F\u89C8\u9875\u9762\u5386\u53F2\u8BB0\u5F55\u65F6\u4F7F\u7528</h2><p>\u2026\u2026</p><h2 id="\u5728\u5FEB\u901F\u9875\u9762\u5DEE\u5F02\u65F6\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u5FEB\u901F\u9875\u9762\u5DEE\u5F02\u65F6\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u5FEB\u901F\u9875\u9762\u5DEE\u5F02\u65F6\u4F7F\u7528</h2><p>\u2026\u2026</p><!--]-->`);
}
_sfc_main$w.ssrRender = _sfc_ssrRender$i;
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-edit.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var quickEdit_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$w
});
const _sfc_main$v = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u5FEB\u901F\u9884\u89C8-quick-preview",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u5FEB\u901F\u9884\u89C8-quick-preview" aria-hidden="true">#</a> \u5FEB\u901F\u9884\u89C8 quick-preview</h1>`);
}
_sfc_main$v.ssrRender = _sfc_ssrRender$h;
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-preview.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var quickPreview_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$v
});
const _sfc_main$u = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u5FEB\u901F\u91CD\u5B9A\u5411-quick-redirect",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u5FEB\u901F\u91CD\u5B9A\u5411-quick-redirect" aria-hidden="true">#</a> \u5FEB\u901F\u91CD\u5B9A\u5411 quick-redirect</h1>`);
}
_sfc_main$u.ssrRender = _sfc_ssrRender$g;
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-redirect.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var quickRedirect_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$u
});
const _sfc_main$t = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "\u5FEB\u901F\u91CD\u547D\u540D-quick-rename",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#\u5FEB\u901F\u91CD\u547D\u540D-quick-rename" aria-hidden="true">#</a> \u5FEB\u901F\u91CD\u547D\u540D quick-rename</h1>`);
}
_sfc_main$t.ssrRender = _sfc_ssrRender$f;
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/quick-rename.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var quickRename_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$t
});
const _sfc_main$s = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u5DE5\u5177\u76D2-toolbox" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u76D2-toolbox" aria-hidden="true">#</a> \u5DE5\u5177\u76D2 toolbox</h1><p>\u5495\u5495\u5495</p><!--]-->`);
}
_sfc_main$s.ssrRender = _sfc_ssrRender$e;
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/usage/toolbox.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var toolbox_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$s
});
const _sfc_main$r = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="install-the-plugin-as-a-gadget" tabindex="-1"><a class="header-anchor" href="#install-the-plugin-as-a-gadget" aria-hidden="true">#</a> Install the plugin as a Gadget</h1><h2 id="what-s-a-gadget" tabindex="-1"><a class="header-anchor" href="#what-s-a-gadget" aria-hidden="true">#</a> What&#39;s a Gadget</h2><blockquote><p><strong>Gadgets</strong> are mostly based on JavaScript, so JavaScript has to be enabled in your browser for them to work.**<br> Also note that these special gadgets are not part of the MediaWiki software, and are usually developed and maintained by users on your local wiki.<br> ---- MediaWiki</p></blockquote><p><s>I suggest just read mediawiki.org, so tired to write anymore</s></p><h2 id="install-this-plugin-as-a-gadget" tabindex="-1"><a class="header-anchor" href="#install-this-plugin-as-a-gadget" aria-hidden="true">#</a> Install this plugin as a Gadget</h2><p>Gadgets on most wikis are defined by <code>MediaWiki:Gadgets-definition</code>, we suggest to install InPageEdit as a Gadget of your wiki, according to the following step.</p><ol><li>Start a new line at <code>MediaWiki:Gadgets-definition</code> and add some content:</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token punctuation">*</span> InPageEdit<span class="token url">[resourceloader|rights=edit,skipcaptcha]</span><span class="token punctuation">|</span>InPageEdit.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>Create <code>MediaWiki:Gadget-InPageEdit.js</code> as:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Create <code>MediaWiki:Gadget-InPageEdit</code> and write some content like this:</li></ol><div class="language-wiki ext-wiki line-numbers-mode"><pre class="language-wiki"><code><span class="token url">[InPageEdit https://github.com/Dragon-Fish/InPageEdit-v2/]</span> - \u7531\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u5F00\u53D1\uFF0C\u9762\u5411\u719F\u7EC3\u7528\u6237\u7684\u5FEB\u901F\u7EF4\u62A4\u5DE5\u5177\u96C6(\u5C0F\u7F16\u8F91\u3001\u91CD\u5B9A\u5411\u3001\u9875\u9762\u5386\u53F2)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>All done! Visit the Preferences page \u2192 Gadget, and check if the Gadget is registered successfully.</li></ol><!--]-->`);
}
_sfc_main$r.ssrRender = _sfc_ssrRender$d;
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/install/gadget.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var gadget_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$r
});
const _sfc_main$q = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = vue.resolveComponent("OutboundLink");
  _push(`<!--[--><h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><p>Installing InPageEdit is very simple, and take a few seconds in most cases.</p><h2 id="via-personal-js" tabindex="-1"><a class="header-anchor" href="#via-personal-js" aria-hidden="true">#</a> Via personal JS</h2><p>Most MediaWiki sites allow user add customized JavaScript and you can install InPageEdit via editing your personal JS page.</p><ol><li>Go to your personal JS page, the page is usually <code>User:&lt;username&gt;/common.js</code></li><li>Click the &quot;Edit&quot; button</li><li>Add the following content in the text field:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mw<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;https://cdn.jsdelivr.net/npm/mediawiki-inpageedit@latest/dist/InPageEdit.min.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>Click the &quot;Publish changes...&quot; buttion</li><li>Done, and enjoy~</li></ol><h2 id="via-gadget" tabindex="-1"><a class="header-anchor" href="#via-gadget" aria-hidden="true">#</a> Via Gadget</h2><p>Some wiki sites (e.g. <a href="https://zh.moegirl.org.cn/Special:%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE#mw-prefsection-gadgets" target="_blank" rel="noopener noreferrer">Moegirlpedia`);
  _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
  _push(`</a>) have already installed this plugin via Gadget. On these sites, we recommend that enable it in the preferences.</p><ol><li>Visit <code>http://&lt;wiki path&gt;/Special:Preferences</code> or via the <code>Preferences</code> link in the pages to go to the &quot;Preferences&quot; page</li><li>Select &quot;Gadgets&quot; in the tabs</li><li>Find &quot;InPageEdit&quot; and enable it</li><li>Go to the bottom of the page and click the &quot;Save&quot; button</li><li>Done, and enjoy~</li></ol><h2 id="via-browser-extensions" tabindex="-1"><a class="header-anchor" href="#via-browser-extensions" aria-hidden="true">#</a> Via browser extensions</h2><p>Some MediaWiki sites disabled personal JS due to security concerns, and don&#39;t have a Gadget to install it either (e.g. Huijiwiki). In these cases, you need a browser entension to install it.</p><p>There&#39;s a ton of userscript extensions around the market and detailed solution is not shown. However, if you are willing to, it is welcomed to click the link below to improve it!</p><!--]-->`);
}
_sfc_main$q.ssrRender = _sfc_ssrRender$c;
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/install/quick-start.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var quickStart_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$q
});
const _sfc_main$p = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "preferences",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#preferences" aria-hidden="true">#</a> Preferences</h1>`);
}
_sfc_main$p.ssrRender = _sfc_ssrRender$b;
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/preference.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var preference_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$p
});
const _sfc_main$o = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "quick-delete",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#quick-delete" aria-hidden="true">#</a> Quick-delete</h1>`);
}
_sfc_main$o.ssrRender = _sfc_ssrRender$a;
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/quick-delete.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var quickDelete_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$o
});
const _sfc_main$n = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "quick-diff",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#quick-diff" aria-hidden="true">#</a> Quick-diff</h1>`);
}
_sfc_main$n.ssrRender = _sfc_ssrRender$9;
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/quick-diff.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var quickDiff_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$n
});
const _sfc_main$m = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="quick-edit" tabindex="-1"><a class="header-anchor" href="#quick-edit" aria-hidden="true">#</a> Quick-edit</h1><p><strong>Quick-edit</strong> is one of the most frequent used features that allows you to edit a certain page, edit in the history page, edit the certain section f the certain page, or even edit a certain section from an old revision, without opening a new tab.</p><h2 id="use-via-toolbox" tabindex="-1"><a class="header-anchor" href="#use-via-toolbox" aria-hidden="true">#</a> Use via toolbox</h2><p>Click, and it&#39;s done!</p><h2 id="edit-a-section-via-link-beside-the-heading" tabindex="-1"><a class="header-anchor" href="#edit-a-section-via-link-beside-the-heading" aria-hidden="true">#</a> Edit a section via link beside the heading</h2><p>\u2026\u2026</p><h2 id="use-it-while-browsing-the-page-history" tabindex="-1"><a class="header-anchor" href="#use-it-while-browsing-the-page-history" aria-hidden="true">#</a> Use it while browsing the page history</h2><p>\u2026\u2026</p><h2 id="use-it-when-using-quick-diff" tabindex="-1"><a class="header-anchor" href="#use-it-when-using-quick-diff" aria-hidden="true">#</a> Use it when using quick-diff</h2><p>\u2026\u2026</p><!--]-->`);
}
_sfc_main$m.ssrRender = _sfc_ssrRender$8;
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/quick-edit.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var quickEdit_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$m
});
const _sfc_main$l = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "quick-redirect",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#quick-redirect" aria-hidden="true">#</a> Quick-redirect</h1>`);
}
_sfc_main$l.ssrRender = _sfc_ssrRender$7;
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/quick-redirect.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var quickRedirect_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$l
});
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<h1${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    id: "quick-rename",
    tabindex: "-1"
  }, _attrs))}><a class="header-anchor" href="#quick-rename" aria-hidden="true">#</a> Quick-rename</h1>`);
}
_sfc_main$k.ssrRender = _sfc_ssrRender$6;
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/quick-rename.html.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var quickRename_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="toolbox" tabindex="-1"><a class="header-anchor" href="#toolbox" aria-hidden="true">#</a> Toolbox</h1><p>Postponing</p><!--]-->`);
}
_sfc_main$j.ssrRender = _sfc_ssrRender$5;
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/en/guide/usage/toolbox.html.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var toolbox_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$j
});
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
}
_sfc_main$i.ssrRender = _sfc_ssrRender$4;
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$i
});
const data$10 = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo/InPageEdit-v2.png",
    "heroText": "InPageEdit",
    "tagline": "\u7531\u673A\u667A\u7684\u5C0F\u9C7C\u541B\u5F00\u53D1\uFF0C\u57FA\u4E8EjQuery\u7F16\u5199\u9762\u5411MediaWiki\u719F\u7EC3\u7528\u6237\u7684\u591A\u529F\u80FD\u63D2\u4EF6",
    "actions": [
      {
        "text": "\u67E5\u770B\u6587\u6863 \u2192",
        "link": "/guide/intro",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "\u4E1D\u6ED1\u4E14\u987A\u7545",
        "details": "\u5168\u65B0\u5347\u7EA7\u7684\u52A8\u6001\u6548\u679C\uFF0C\u5982\u4E1D\u822C\u987A\u6ED1\u3002\u914D\u4EE5 Material Design \u8272\u5F69\u4EE5\u53CA FontAwesome\u3002\u7ED9\u60A8\u5168\u65B0\u7F16\u8F91\u4F53\u9A8C\uFF0C\u7F16\u8F91\u4ECE\u672A\u5982\u6B64\u6109\u5FEB\uFF01"
      },
      {
        "title": "\u5C0F\u5DE7\u800C\u5F3A\u5927",
        "details": "InPageEdit\uFF0C\u4E00\u6B3E\u591A\u529F\u80FD MediaWiki \u63D2\u4EF6\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u7F16\u8F91\u5FEB\u901F\u6BD4\u5BF9\u9875\u9762\u5DEE\u5F02\u3001\u5FEB\u901F\u91CD\u5B9A\u5411\u3001\u5FEB\u901F\u79FB\u52A8\u9875\u9762\u2026\u2026\u6C47\u805A\u5927\u91CF\u5E38\u7528\u529F\u80FD\uFF0C\u8F85\u4EE5\u5F3A\u5927\u7684 API\uFF0C\u8BA9\u4F60\u65E0\u9700\u518D\u6253\u5F00\u4E00\u5806\u6807\u7B7E\u9875\uFF01"
      },
      {
        "title": "\u5F3A\u8FEB\u75C7\u72AF\u4E86",
        "details": "\u62FC\u4E0A\u4E09\u4E2A\u533A\u5757\uFF0C\u663E\u5F97\u6574\u9F50\u5212\u4E00\uFF0C\u4EE4\u4EBA\u5FC3\u65F7\u795E\u6021\uFF0C\u800C\u4E14\u8FD8\u80FD\u51D1\u5B57\u6570\u3002"
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2020-present Wjghj Project (Documentations)"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$10
});
const data$$ = {
  "key": "v-74bc627b",
  "path": "/about/",
  "title": "\u5173\u4E8E InPageEdit",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "InPageEdit",
      "slug": "inpageedit",
      "children": [
        {
          "level": 3,
          "title": "\u4F5C\u8005\u4FE1\u606F",
          "slug": "\u4F5C\u8005\u4FE1\u606F",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5F00\u6E90\u534F\u8BAE",
          "slug": "\u5F00\u6E90\u534F\u8BAE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6280\u672F\u4FE1\u606F",
          "slug": "\u6280\u672F\u4FE1\u606F",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "InPageEdit Analysis",
      "slug": "inpageedit-analysis",
      "children": [
        {
          "level": 3,
          "title": "\u4F5C\u8005\u4FE1\u606F",
          "slug": "\u4F5C\u8005\u4FE1\u606F-1",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5F00\u6E90\u534F\u8BAE",
          "slug": "\u5F00\u6E90\u534F\u8BAE-1",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6280\u672F\u4FE1\u606F",
          "slug": "\u6280\u672F\u4FE1\u606F-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "InPageEdit Documentation Center",
      "slug": "inpageedit-documentation-center",
      "children": [
        {
          "level": 3,
          "title": "\u4F5C\u8005\u4FE1\u606F",
          "slug": "\u4F5C\u8005\u4FE1\u606F-2",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5F00\u6E90\u534F\u8BAE",
          "slug": "\u5F00\u6E90\u534F\u8BAE-2",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6280\u672F\u4FE1\u606F",
          "slug": "\u6280\u672F\u4FE1\u606F-2",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "about/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$$
});
const data$_ = {
  "key": "v-74cce7b9",
  "path": "/about/do-you-know.html",
  "title": "InPageEdit \u8DA3\u95FB\u5F55",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u673A\u667A\u7684\u5C0F\u9C7C\u541B \u2014\u2014 \u5173\u4E8E\u4F5C\u8005\uFF0C\u8FD9\u4E00\u5207\u7684\u5143\u51F6",
      "slug": "\u673A\u667A\u7684\u5C0F\u9C7C\u541B-\u2014\u2014-\u5173\u4E8E\u4F5C\u8005-\u8FD9\u4E00\u5207\u7684\u5143\u51F6",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit \u4E0E Wikiplus \u2014\u2014 \u9879\u76EE\u7684\u4F0A\u59CB",
      "slug": "inpageedit-\u4E0E-wikiplus-\u2014\u2014-\u9879\u76EE\u7684\u4F0A\u59CB",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6B27\u4EA8\u5229\u5F0F\u5F00\u5C40 \u2014\u2014 \u610F\u60F3\u4E0D\u5230\u7684\u5C34\u5C2C\u5F00\u5C40",
      "slug": "\u6B27\u4EA8\u5229\u5F0F\u5F00\u5C40-\u2014\u2014-\u610F\u60F3\u4E0D\u5230\u7684\u5C34\u5C2C\u5F00\u5C40",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit \u4E0E Minecraft Wiki \u2014\u2014 \u5076\u7136\u95F4\u7684\u4F20\u64AD",
      "slug": "inpageedit-\u4E0E-minecraft-wiki-\u2014\u2014-\u5076\u7136\u95F4\u7684\u4F20\u64AD",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit \u4E0E \u840C\u5A18\u767E\u79D1 \u2014\u2014 \u5927\u89C4\u6A21\u6269\u6563",
      "slug": "inpageedit-\u4E0E-\u840C\u5A18\u767E\u79D1-\u2014\u2014-\u5927\u89C4\u6A21\u6269\u6563",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit \u4E0E GitHub \u2014\u2014 \u6E90\u7801\u7248\u672C\u7BA1\u63A7\u7684\u8FDB\u5316",
      "slug": "inpageedit-\u4E0E-github-\u2014\u2014-\u6E90\u7801\u7248\u672C\u7BA1\u63A7\u7684\u8FDB\u5316",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit \u4E0E Node.js Package \u2014\u2014 \u9879\u76EE\u5206\u53D1\u7684\u8FDB\u5316",
      "slug": "inpageedit-\u4E0E-node-js-package-\u2014\u2014-\u9879\u76EE\u5206\u53D1\u7684\u8FDB\u5316",
      "children": []
    }
  ],
  "filePathRelative": "about/do-you-know.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var doYouKnow_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$_
});
const data$Z = {
  "key": "v-008c1322",
  "path": "/about/donate.html",
  "title": "\u652F\u6301\u4F5C\u8005",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u53C2\u4E0E\u8FDB\u6765",
      "slug": "\u53C2\u4E0E\u8FDB\u6765",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7269\u8D28\u652F\u6301",
      "slug": "\u7269\u8D28\u652F\u6301",
      "children": []
    }
  ],
  "filePathRelative": "about/donate.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var donate_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Z
});
const data$Y = {
  "key": "v-3ba185f3",
  "path": "/about/logo.html",
  "title": "\u5173\u4E8E Logo",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u8BBE\u8BA1&\u5B57\u4F53",
      "slug": "\u8BBE\u8BA1-\u5B57\u4F53",
      "children": []
    }
  ],
  "filePathRelative": "about/logo.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var logo_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Y
});
const data$X = {
  "key": "v-1891b76b",
  "path": "/develop/",
  "title": "InPageEdit \u5F00\u53D1\u6307\u5357",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7248\u672C\u547D\u540D\u65B9\u9488",
      "slug": "\u7248\u672C\u547D\u540D\u65B9\u9488",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6807\u7B7E\uFF08tag\uFF09\u65B9\u9488",
      "slug": "\u6807\u7B7E-tag-\u65B9\u9488",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4EE3\u7801\u683C\u5F0F\u65B9\u9488",
      "slug": "\u4EE3\u7801\u683C\u5F0F\u65B9\u9488",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5F00\u53D1\u6307\u5F15",
      "slug": "\u5F00\u53D1\u6307\u5F15",
      "children": [
        {
          "level": 3,
          "title": "\u514B\u9686\u4ED3\u5E93",
          "slug": "\u514B\u9686\u4ED3\u5E93",
          "children": []
        },
        {
          "level": 3,
          "title": "\u540C\u6B65\u4ED3\u5E93",
          "slug": "\u540C\u6B65\u4ED3\u5E93",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5B89\u88C5\u4F9D\u8D56",
          "slug": "\u5B89\u88C5\u4F9D\u8D56",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6D4B\u8BD5",
          "slug": "\u6D4B\u8BD5",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6784\u5EFA",
          "slug": "\u6784\u5EFA",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u901A\u8FC7 Node.js Package \u53D1\u5E03",
      "slug": "\u901A\u8FC7-node-js-package-\u53D1\u5E03",
      "children": [
        {
          "level": 3,
          "title": "\u63A8\u9001",
          "slug": "\u63A8\u9001",
          "children": []
        },
        {
          "level": 3,
          "title": "\u64A4\u56DE\u7248\u672C",
          "slug": "\u64A4\u56DE\u7248\u672C",
          "children": []
        },
        {
          "level": 3,
          "title": "\u79FB\u52A8 tag",
          "slug": "\u79FB\u52A8-tag",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "develop/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$X
});
const data$W = {
  "key": "v-1277236a",
  "path": "/develop/api.html",
  "title": "API \u6587\u6863",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "window.InPageEdit",
      "slug": "window-inpageedit",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.about()",
      "slug": "inpageedit-about",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.api",
      "slug": "inpageedit-api",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.articleLink([element])",
      "slug": "inpageedit-articlelink-element",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.findAndReplace(<element>)",
      "slug": "inpageedit-findandreplace-element",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.preference",
      "slug": "inpageedit-preference",
      "children": [
        {
          "level": 3,
          "title": "InPageEdit.preference.default",
          "slug": "inpageedit-preference-default",
          "children": []
        },
        {
          "level": 3,
          "title": "InPageEdit.preference.get([setting])",
          "slug": "inpageedit-preference-get-setting",
          "children": []
        },
        {
          "level": 3,
          "title": "InPageEdit.preference.set(<settingKey>[, settingValue])",
          "slug": "inpageedit-preference-set-settingkey-settingvalue",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "InPageEdit.progress(<text>)",
      "slug": "inpageedit-progress-text",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickDelete([page])",
      "slug": "inpageedit-quickdelete-page",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickDiff(<param>)",
      "slug": "inpageedit-quickdiff-param",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickEdit([options])",
      "slug": "inpageedit-quickedit-options",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickPreview()",
      "slug": "inpageedit-quickpreview",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickRedirect()",
      "slug": "inpageedit-quickredirect",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.quickRename()",
      "slug": "inpageedit-quickrename",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.specialNotice()",
      "slug": "inpageedit-specialnotice",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.version",
      "slug": "inpageedit-version",
      "children": []
    },
    {
      "level": 2,
      "title": "InPageEdit.versionInfo()",
      "slug": "inpageedit-versioninfo",
      "children": []
    },
    {
      "level": 2,
      "title": "_msg(<msgKey>[, ...args])",
      "slug": "msg-msgkey-args",
      "children": []
    }
  ],
  "filePathRelative": "develop/api.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var api_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$W
});
const data$V = {
  "key": "v-f69d0aea",
  "path": "/develop/hook.html",
  "title": "Hook \u6587\u6863",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "develop/hook.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var hook_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$V
});
const data$U = {
  "key": "v-4bb7f28b",
  "path": "/develop/nouns.html",
  "title": "InPageEdit \u540D\u8BCD\u8868",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u63A5\u53E3 API",
      "slug": "\u63A5\u53E3-api",
      "children": []
    },
    {
      "level": 2,
      "title": "\u529F\u80FD functions",
      "slug": "\u529F\u80FD-functions",
      "children": [
        {
          "level": 3,
          "title": "\u5FEB\u901F\u7F16\u8F91 Quick Edit",
          "slug": "\u5FEB\u901F\u7F16\u8F91-quick-edit",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5FEB\u901F\u91CD\u547D\u540D Quick Rename",
          "slug": "\u5FEB\u901F\u91CD\u547D\u540D-quick-rename",
          "children": []
        },
        {
          "level": 3,
          "title": "...",
          "slug": "",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u94A9\u5B50 Hook",
      "slug": "\u94A9\u5B50-hook",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BED\u8A00\u5305 language pack",
      "slug": "\u8BED\u8A00\u5305-language-pack",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6A21\u5757 module",
      "slug": "\u6A21\u5757-module",
      "children": []
    },
    {
      "level": 2,
      "title": "\u65B9\u6CD5 method",
      "slug": "\u65B9\u6CD5-method",
      "children": []
    },
    {
      "level": 2,
      "title": "\u63D2\u4EF6 plugin",
      "slug": "\u63D2\u4EF6-plugin",
      "children": []
    }
  ],
  "filePathRelative": "develop/nouns.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var nouns_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$U
});
const data$T = {
  "key": "v-0be73d8a",
  "path": "/develop/plugin.html",
  "title": "Plugin \u5F00\u53D1\u6307\u5357",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "develop/plugin.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var plugin_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$T
});
const data$S = {
  "key": "v-2d0a870d",
  "path": "/en/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo/InPageEdit-v2.png",
    "heroText": "InPageEdit",
    "tagline": "Developed by \u673A\u667A\u7684\u5C0F\u9C7C\u541B (DragonFish), A plugin with muliple functionalities for advanced MediaWiki users based on jQuery",
    "actions": [
      {
        "text": "Install now \u2192",
        "link": "/en/guide/install/quick-start"
      }
    ],
    "features": [
      {
        "title": "Smooth",
        "details": "Updated smooth animations with Material Design colors and FontAwesome icon gives you a brand new editing experience. Editing is never so enjoyable!"
      },
      {
        "title": "Powerful",
        "details": "InPageEdit is a MediaWiki plugin with muliple functionalities, it can not only do quick-diff-s, quick-redirects or quick-renames...... Making fenquent used features all-in-one, with powerful API, tons of tabs are no longer needed!"
      },
      {
        "title": "Ordered",
        "details": "Three trunks. Ordered. Pleasant. Adds word count."
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2020-present Dragon Fish (Documentions)"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$S
});
const data$R = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "\u6587\u6863",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$R
});
const data$Q = {
  "key": "v-77a9ffd9",
  "path": "/guide/intro.html",
  "title": "\u63D2\u4EF6\u7B80\u4ECB",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "InPageEdit \u7684\u4F18\u70B9",
      "slug": "inpageedit-\u7684\u4F18\u70B9",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E3A\u4EC0\u4E48\u9009\u62E9 InPageEdit\uFF1F",
      "slug": "\u4E3A\u4EC0\u4E48\u9009\u62E9-inpageedit",
      "children": [
        {
          "level": 3,
          "title": "\u60C5\u666F\u5047\u8BBE",
          "slug": "\u60C5\u666F\u5047\u8BBE",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E00\u5207\u5374\u80FD\u5982\u6B64\u2026\u2026",
          "slug": "\u4E00\u5207\u5374\u80FD\u5982\u6B64",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "InPageEdit \u7684\u5176\u4ED6\u7279\u8272",
      "slug": "inpageedit-\u7684\u5176\u4ED6\u7279\u8272",
      "children": []
    }
  ],
  "filePathRelative": "guide/intro.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var intro_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$Q
});
const data$P = {
  "key": "v-14239e2b",
  "path": "/update/1.x.html",
  "title": "Earlier version (1.x)",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/1.x.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _1_x_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$P
});
const data$O = {
  "key": "v-52296ff6",
  "path": "/update/14.0.0.html",
  "title": "14.0.0 Sora",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.0.0.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_0_0_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$O
});
const data$N = {
  "key": "v-47ec5c3c",
  "path": "/update/14.0.3.html",
  "title": "14.0.3 Shiro",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.0.3.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_0_3_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$N
});
const data$M = {
  "key": "v-3ecc74e4",
  "path": "/update/14.1.0.html",
  "title": "14.1.0 Stephanie_Dola",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u672C\u6B21\u66F4\u65B0",
      "slug": "\u672C\u6B21\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5DF2\u77E5\u95EE\u9898",
      "slug": "\u5DF2\u77E5\u95EE\u9898",
      "children": []
    },
    {
      "level": 2,
      "title": "New supported languages",
      "slug": "new-supported-languages",
      "children": []
    }
  ],
  "filePathRelative": "update/14.1.0.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_0_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$M
});
const data$L = {
  "key": "v-40814d83",
  "path": "/update/14.1.1.html",
  "title": "14.1.1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.1.1.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_1_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$L
});
const data$K = {
  "key": "v-42362622",
  "path": "/update/14.1.2.html",
  "title": "14.1.2",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.1.2.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_2_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$K
});
const data$J = {
  "key": "v-43eafec1",
  "path": "/update/14.1.3.html",
  "title": "14.1.3",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u672C\u6B21\u66F4\u65B0",
      "slug": "\u672C\u6B21\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "New supported languages",
      "slug": "new-supported-languages",
      "children": []
    }
  ],
  "filePathRelative": "update/14.1.3.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_3_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$J
});
const data$I = {
  "key": "v-459fd760",
  "path": "/update/14.1.4.html",
  "title": "14.1.4",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.1.4.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_4_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$I
});
const data$H = {
  "key": "v-4754afff",
  "path": "/update/14.1.5.html",
  "title": "14.1.5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/14.1.5.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_5_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$H
});
const data$G = {
  "key": "v-4abe613d",
  "path": "/update/14.1.7.html",
  "title": "14.1.7",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u529F\u80FD\u66F4\u65B0",
      "slug": "\u529F\u80FD\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F5C\u8005\u7684\u8BDD",
      "slug": "\u4F5C\u8005\u7684\u8BDD",
      "children": []
    }
  ],
  "filePathRelative": "update/14.1.7.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_7_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$G
});
const data$F = {
  "key": "v-4c7339dc",
  "path": "/update/14.1.8.html",
  "title": "14.1.8",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    }
  ],
  "filePathRelative": "update/14.1.8.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_8_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$F
});
const data$E = {
  "key": "v-4e28127b",
  "path": "/update/14.1.9.html",
  "title": "14.1.9",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6545\u969C\u4FEE\u590D",
      "slug": "\u6545\u969C\u4FEE\u590D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u529F\u80FD\u53D8\u66F4",
      "slug": "\u529F\u80FD\u53D8\u66F4",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    }
  ],
  "filePathRelative": "update/14.1.9.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_1_9_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$E
});
const data$D = {
  "key": "v-b2a4bc7a",
  "path": "/update/14.2.0.html",
  "title": "14.2.0",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u529F\u80FD\u66F4\u65B0",
      "slug": "\u529F\u80FD\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F5C\u8005\u7684\u8BDD",
      "slug": "\u4F5C\u8005\u7684\u8BDD",
      "children": []
    }
  ],
  "filePathRelative": "update/14.2.0.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_2_0_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$D
});
const data$C = {
  "key": "v-af3b0b3c",
  "path": "/update/14.2.1.html",
  "title": "14.2.1",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5DF2\u77E5\u95EE\u9898",
      "slug": "\u5DF2\u77E5\u95EE\u9898",
      "children": []
    }
  ],
  "filePathRelative": "update/14.2.1.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_2_1_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$C
});
const data$B = {
  "key": "v-a867a8c0",
  "path": "/update/14.2.3.html",
  "title": "14.2.3",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u529F\u80FD\u66F4\u65B0",
      "slug": "\u529F\u80FD\u66F4\u65B0",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6545\u969C\u4FEE\u590D",
      "slug": "\u6545\u969C\u4FEE\u590D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    }
  ],
  "filePathRelative": "update/14.2.3.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_2_3_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$B
});
const data$A = {
  "key": "v-9e2a9506",
  "path": "/update/14.2.6.html",
  "title": "14.2.6",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6545\u969C\u4FEE\u590D",
      "slug": "\u6545\u969C\u4FEE\u590D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6280\u672F\u66F4\u65B0",
      "slug": "\u6280\u672F\u66F4\u65B0",
      "children": []
    }
  ],
  "filePathRelative": "update/14.2.6.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_2_6_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$A
});
const data$z = {
  "key": "v-9757328a",
  "path": "/update/14.2.8.html",
  "title": "14.2.7 - 14.2.8",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6545\u969C\u4FEE\u590D",
      "slug": "\u6545\u969C\u4FEE\u590D",
      "children": []
    }
  ],
  "filePathRelative": "update/14.2.8.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _14_2_8_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$z
});
const data$y = {
  "key": "v-7c04cb0a",
  "path": "/update/2.x.html",
  "title": "2.x Update logs",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "2.13.4-7 (2.13.4 patch 7)",
      "slug": "_2-13-4-7-2-13-4-patch-7",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4-6 (2.13.4 patch 6)",
      "slug": "_2-13-4-6-2-13-4-patch-6",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4-5 (2.13.4 patch 5)",
      "slug": "_2-13-4-5-2-13-4-patch-5",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4-4 (2.13.4 patch 4)",
      "slug": "_2-13-4-4-2-13-4-patch-4",
      "children": [
        {
          "level": 3,
          "title": "\u5E38\u89C4\u6539\u52A8",
          "slug": "\u5E38\u89C4\u6539\u52A8",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6280\u672F\u6027\u6539\u52A8",
          "slug": "\u6280\u672F\u6027\u6539\u52A8",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.13.4-3 (2.13.4 patch 3)",
      "slug": "_2-13-4-3-2-13-4-patch-3",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4-2 (2.13.4 patch 2)",
      "slug": "_2-13-4-2-2-13-4-patch-2",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4-1 (2.13.4 patch 1)",
      "slug": "_2-13-4-1-2-13-4-patch-1",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.4 - Awesome Update",
      "slug": "_2-13-4-awesome-update",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.3",
      "slug": "_2-13-3",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.2",
      "slug": "_2-13-2",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.0.2",
      "slug": "_2-13-0-2",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.0.1(build_c052a80)",
      "slug": "_2-13-0-1-build-c052a80",
      "children": []
    },
    {
      "level": 2,
      "title": "2.13.0(build_2795)",
      "slug": "_2-13-0-build-2795",
      "children": []
    },
    {
      "level": 2,
      "title": "2.12.0.4(build_2686)",
      "slug": "_2-12-0-4-build-2686",
      "children": []
    },
    {
      "level": 2,
      "title": "2.12.0.3(build_2629)",
      "slug": "_2-12-0-3-build-2629",
      "children": []
    },
    {
      "level": 2,
      "title": "2.12.0.2(build_2619)",
      "slug": "_2-12-0-2-build-2619",
      "children": []
    },
    {
      "level": 2,
      "title": "2.12.0.1(build_2610)",
      "slug": "_2-12-0-1-build-2610",
      "children": []
    },
    {
      "level": 2,
      "title": "2.12.0(build_2575) - The Matryoshka Update",
      "slug": "_2-12-0-build-2575-the-matryoshka-update",
      "children": []
    },
    {
      "level": 2,
      "title": "2.11.0(build_2545) - Just Hooks Update",
      "slug": "_2-11-0-build-2545-just-hooks-update",
      "children": []
    },
    {
      "level": 2,
      "title": "2.10.0.1(build_2519)",
      "slug": "_2-10-0-1-build-2519",
      "children": []
    },
    {
      "level": 2,
      "title": "2.10.0(build_2417) - The Structure Tech Update",
      "slug": "_2-10-0-build-2417-the-structure-tech-update",
      "children": []
    },
    {
      "level": 2,
      "title": "2.9.1(build_2369)",
      "slug": "_2-9-1-build-2369",
      "children": []
    },
    {
      "level": 2,
      "title": "2.9.0.1(build_2319) - World Wild Friends Update",
      "slug": "_2-9-0-1-build-2319-world-wild-friends-update",
      "children": []
    },
    {
      "level": 2,
      "title": "2.9.0(build_2311)",
      "slug": "_2-9-0-build-2311",
      "children": []
    },
    {
      "level": 2,
      "title": "2.8.1(build_2236)",
      "slug": "_2-8-1-build-2236",
      "children": []
    },
    {
      "level": 2,
      "title": "2.8.0.1(build_2213)",
      "slug": "_2-8-0-1-build-2213",
      "children": []
    },
    {
      "level": 2,
      "title": "2.8.0(build_2026)",
      "slug": "_2-8-0-build-2026",
      "children": []
    },
    {
      "level": 2,
      "title": "2.7.1.1(build_1960)",
      "slug": "_2-7-1-1-build-1960",
      "children": []
    },
    {
      "level": 2,
      "title": "2.7.1(build_1948) - The Machine",
      "slug": "_2-7-1-build-1948-the-machine",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.4(build_1897)",
      "slug": "_2-6-4-build-1897",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3.5(build_1816)",
      "slug": "_2-6-3-5-build-1816",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3.4(build_1767)",
      "slug": "_2-6-3-4-build-1767",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3.3(build_1709)",
      "slug": "_2-6-3-3-build-1709",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3.2(build_1659)",
      "slug": "_2-6-3-2-build-1659",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3.1(build_1536)",
      "slug": "_2-6-3-1-build-1536",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.3(build_1517) - Kimi no namai",
      "slug": "_2-6-3-build-1517-kimi-no-namai",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.2.3(build_1467)",
      "slug": "_2-6-2-3-build-1467",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.2.2(build_1459)",
      "slug": "_2-6-2-2-build-1459",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.2.1(build_1444)",
      "slug": "_2-6-2-1-build-1444",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.2(build_1432)",
      "slug": "_2-6-2-build-1432",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.1(build_1238)",
      "slug": "_2-6-1-build-1238",
      "children": []
    },
    {
      "level": 2,
      "title": "2.6.0(build_1196)",
      "slug": "_2-6-0-build-1196",
      "children": []
    },
    {
      "level": 2,
      "title": "2.5.3(build_1094)",
      "slug": "_2-5-3-build-1094",
      "children": []
    },
    {
      "level": 2,
      "title": "2.5.2(build_944)",
      "slug": "_2-5-2-build-944",
      "children": []
    },
    {
      "level": 2,
      "title": "2.5.1(build_876)",
      "slug": "_2-5-1-build-876",
      "children": []
    },
    {
      "level": 2,
      "title": "2.5.0(build_821)",
      "slug": "_2-5-0-build-821",
      "children": []
    },
    {
      "level": 2,
      "title": "2.4.1(build_783)",
      "slug": "_2-4-1-build-783",
      "children": []
    },
    {
      "level": 2,
      "title": "2.4.0(build_764)",
      "slug": "_2-4-0-build-764",
      "children": []
    },
    {
      "level": 2,
      "title": "2.3.1(build_747)",
      "slug": "_2-3-1-build-747",
      "children": []
    },
    {
      "level": 2,
      "title": "2.3.0.2(build_616)",
      "slug": "_2-3-0-2-build-616",
      "children": []
    },
    {
      "level": 2,
      "title": "2.3.0.1(build_568)",
      "slug": "_2-3-0-1-build-568",
      "children": []
    },
    {
      "level": 2,
      "title": "2.3.0(build_488)",
      "slug": "_2-3-0-build-488",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2.2.1(build_460)",
      "slug": "_2-2-2-1-build-460",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2.2(build_420)",
      "slug": "_2-2-2-build-420",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2.1(build_382)",
      "slug": "_2-2-1-build-382",
      "children": []
    },
    {
      "level": 2,
      "title": "2.2.0(build_350)",
      "slug": "_2-2-0-build-350",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1.2.1(build_336)",
      "slug": "_2-1-2-1-build-336",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1.2(build_330)",
      "slug": "_2-1-2-build-330",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1.1(build_318)",
      "slug": "_2-1-1-build-318",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1.0.1(build_306)",
      "slug": "_2-1-0-1-build-306",
      "children": []
    },
    {
      "level": 2,
      "title": "2.1.0(build_298)",
      "slug": "_2-1-0-build-298",
      "children": []
    },
    {
      "level": 2,
      "title": "2.0.10(build_279)",
      "slug": "_2-0-10-build-279",
      "children": []
    },
    {
      "level": 2,
      "title": "2.0.9",
      "slug": "_2-0-9",
      "children": []
    },
    {
      "level": 2,
      "title": "2.0.8",
      "slug": "_2-0-8",
      "children": []
    },
    {
      "level": 2,
      "title": "2.0.7",
      "slug": "_2-0-7",
      "children": []
    },
    {
      "level": 2,
      "title": "2.0.0",
      "slug": "_2-0-0",
      "children": []
    }
  ],
  "filePathRelative": "update/2.x.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var _2_x_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$y
});
const data$x = {
  "key": "v-5c0c536d",
  "path": "/update/",
  "title": "\u66F4\u65B0\u65E5\u5FD7",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "update/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$x
});
const data$w = {
  "key": "v-eb88660e",
  "path": "/update/next.html",
  "title": "\u4E0B\u4E00\u4EE3 InPageEdit",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5173\u4E8E\u4E0B\u4E00\u4EE3",
      "slug": "\u5173\u4E8E\u4E0B\u4E00\u4EE3",
      "children": [
        {
          "level": 3,
          "title": "\u5BF9\u4E8E\u5F00\u53D1\u8005",
          "slug": "\u5BF9\u4E8E\u5F00\u53D1\u8005",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5BF9\u4E8E\u4F7F\u7528\u8005",
          "slug": "\u5BF9\u4E8E\u4F7F\u7528\u8005",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Roadmap",
      "slug": "roadmap",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7ACB\u523B\u4F53\u9A8C or \u53C2\u4E0E\u5F00\u53D1",
      "slug": "\u7ACB\u523B\u4F53\u9A8C-or-\u53C2\u4E0E\u5F00\u53D1",
      "children": []
    },
    {
      "level": 2,
      "title": "\u788E\u788E\u5FF5",
      "slug": "\u788E\u788E\u5FF5",
      "children": [
        {
          "level": 3,
          "title": "\u5173\u4E8E\u6070\u996D",
          "slug": "\u5173\u4E8E\u6070\u996D",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "update/next.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var next_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$w
});
const data$v = {
  "key": "v-5326f9d8",
  "path": "/develop/analytics/",
  "title": "InPageEdit Analytics \u4ECB\u7ECD",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5173\u4E8E Analytics",
      "slug": "\u5173\u4E8E-analytics",
      "children": []
    },
    {
      "level": 2,
      "title": "API \u7248\u672C\u5217\u8868",
      "slug": "api-\u7248\u672C\u5217\u8868",
      "children": [
        {
          "level": 3,
          "title": "Analysis V1 \u5DF2\u505C\u7528",
          "slug": "analysis-v1-\u5DF2\u505C\u7528",
          "children": []
        },
        {
          "level": 3,
          "title": "Analysis V2 \u5DF2\u505C\u7528",
          "slug": "analysis-v2-\u5DF2\u505C\u7528",
          "children": []
        },
        {
          "level": 3,
          "title": "Analysis V3 \u5DF2\u505C\u7528",
          "slug": "analysis-v3-\u5DF2\u505C\u7528",
          "children": []
        },
        {
          "level": 3,
          "title": "Analysis V4 \u5DF2\u505C\u7528",
          "slug": "analysis-v4-\u5DF2\u505C\u7528",
          "children": []
        },
        {
          "level": 3,
          "title": "Analytics V5 \u6D4B\u8BD5\u4E2D",
          "slug": "analytics-v5-\u6D4B\u8BD5\u4E2D",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "develop/analytics/index.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$v
});
const data$u = {
  "key": "v-69cc7e49",
  "path": "/develop/analytics/v2.html",
  "title": "Analysis V2",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7B80\u4ECB",
      "slug": "\u7B80\u4ECB",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5165\u53E3\u6587\u4EF6",
      "slug": "\u5165\u53E3\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u53D6\u6570\u636E",
      "slug": "\u83B7\u53D6\u6570\u636E",
      "children": [
        {
          "level": 3,
          "title": "type=wiki",
          "slug": "type-wiki",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u63D0\u4EA4\u6570\u636E",
      "slug": "\u63D0\u4EA4\u6570\u636E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u7ED3\u6784",
      "slug": "\u6570\u636E\u7ED3\u6784",
      "children": []
    }
  ],
  "filePathRelative": "develop/analytics/v2.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var v2_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$u
});
const data$t = {
  "key": "v-6b8156e8",
  "path": "/develop/analytics/v3.html",
  "title": "Analysis V3",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "develop/analytics/v3.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var v3_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$t
});
const data$s = {
  "key": "v-6d362f87",
  "path": "/develop/analytics/v4.html",
  "title": "Analysis V4",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7B80\u4ECB",
      "slug": "\u7B80\u4ECB",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5165\u53E3\u6587\u4EF6",
      "slug": "\u5165\u53E3\u6587\u4EF6",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u53D6\u6570\u636E",
      "slug": "\u83B7\u53D6\u6570\u636E",
      "children": [
        {
          "level": 3,
          "title": "type=wiki",
          "slug": "type-wiki",
          "children": []
        },
        {
          "level": 3,
          "title": "type=date",
          "slug": "type-date",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u63D0\u4EA4\u6570\u636E",
      "slug": "\u63D0\u4EA4\u6570\u636E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6570\u636E\u7ED3\u6784",
      "slug": "\u6570\u636E\u7ED3\u6784",
      "children": []
    }
  ],
  "filePathRelative": "develop/analytics/v4.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var v4_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$s
});
const data$r = {
  "key": "v-6eeb0826",
  "path": "/develop/analytics/v5.html",
  "title": "Analytics V5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7B80\u4ECB",
      "slug": "\u7B80\u4ECB",
      "children": []
    },
    {
      "level": 2,
      "title": "\u83B7\u53D6\u6570\u636E",
      "slug": "\u83B7\u53D6\u6570\u636E",
      "children": [
        {
          "level": 3,
          "title": "\u901A\u7528\u5B57\u6BB5",
          "slug": "\u901A\u7528\u5B57\u6BB5",
          "children": []
        },
        {
          "level": 3,
          "title": "\u901A\u8FC7\u7AD9\u53F0(wiki)\u67E5\u8BE2\u6570\u636E",
          "slug": "\u901A\u8FC7\u7AD9\u53F0-wiki-\u67E5\u8BE2\u6570\u636E",
          "children": []
        },
        {
          "level": 3,
          "title": "\u901A\u8FC7\u7528\u6237(user)\u67E5\u8BE2\u6570\u636E",
          "slug": "\u901A\u8FC7\u7528\u6237-user-\u67E5\u8BE2\u6570\u636E",
          "children": []
        },
        {
          "level": 3,
          "title": "\u901A\u8FC7\u65F6\u95F4(date)\u67E5\u8BE2\u6570\u636E",
          "slug": "\u901A\u8FC7\u65F6\u95F4-date-\u67E5\u8BE2\u6570\u636E",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u63D0\u4EA4\u6570\u636E",
      "slug": "\u63D0\u4EA4\u6570\u636E",
      "children": []
    },
    {
      "level": 2,
      "title": "\u9519\u8BEF\u8FD4\u56DE",
      "slug": "\u9519\u8BEF\u8FD4\u56DE",
      "children": [
        {
          "level": 3,
          "title": "\u5E38\u89C1\u9519\u8BEF\u4EE3\u7801",
          "slug": "\u5E38\u89C1\u9519\u8BEF\u4EE3\u7801",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "develop/analytics/v5.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var v5_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$r
});
const data$q = {
  "key": "v-fcccd0e2",
  "path": "/en/about/",
  "title": "About InPageEdit",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/about/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$q
});
const data$p = {
  "key": "v-d04ae64a",
  "path": "/en/about/donate.html",
  "title": "Support the author",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Contribute",
      "slug": "contribute",
      "children": []
    },
    {
      "level": 2,
      "title": "Financial Support",
      "slug": "financial-support",
      "children": []
    }
  ],
  "filePathRelative": "en/about/donate.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var donate_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$p
});
const data$o = {
  "key": "v-bce67142",
  "path": "/en/about/logo.html",
  "title": "InPageEdit Logo",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Design & Font",
      "slug": "design-font",
      "children": []
    }
  ],
  "filePathRelative": "en/about/logo.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var logo_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$o
});
const data$n = {
  "key": "v-075401e2",
  "path": "/en/api/",
  "title": "API Documention",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/api/README.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$n
});
const data$m = {
  "key": "v-4df3f418",
  "path": "/en/api/hook.html",
  "title": "Hook",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/api/hook.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var hook_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$m
});
const data$l = {
  "key": "v-61b22826",
  "path": "/en/guide/intro.html",
  "title": "About",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/intro.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var intro_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$l
});
const data$k = {
  "key": "v-2a547e4e",
  "path": "/en/update/",
  "title": "CHANGE LOGS",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/update/index.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$k
});
const data$j = {
  "key": "v-d5db55a6",
  "path": "/guide/install/gadget.html",
  "title": "\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177",
      "slug": "\u4EC0\u4E48\u662F\u5C0F\u5DE5\u5177",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6",
      "slug": "\u4ECE\u5C0F\u5DE5\u5177\u5B89\u88C5\u672C\u63D2\u4EF6",
      "children": []
    }
  ],
  "filePathRelative": "guide/install/gadget.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var gadget_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-982af712",
  "path": "/guide/install/quick-start.html",
  "title": "\u5FEB\u901F\u4E0A\u624B",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E2A\u4EBA js \u4F7F\u7528",
      "slug": "\u4E2A\u4EBA-js-\u4F7F\u7528",
      "children": []
    },
    {
      "level": 2,
      "title": "\u901A\u8FC7\u5C0F\u5DE5\u5177\u5F00\u542F",
      "slug": "\u901A\u8FC7\u5C0F\u5DE5\u5177\u5F00\u542F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u5B89\u88C5",
      "slug": "\u901A\u8FC7\u6D4F\u89C8\u5668\u6269\u5C55\u5B89\u88C5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5B89\u88C5\u8981\u6C42",
      "slug": "\u5B89\u88C5\u8981\u6C42",
      "children": [
        {
          "level": 3,
          "title": "\u652F\u6301\u7684\u6D4F\u89C8\u5668",
          "slug": "\u652F\u6301\u7684\u6D4F\u89C8\u5668",
          "children": []
        },
        {
          "level": 3,
          "title": "MediaWiki \u7248\u672C",
          "slug": "mediawiki-\u7248\u672C",
          "children": []
        },
        {
          "level": 3,
          "title": "jQuery \u7248\u672C",
          "slug": "jquery-\u7248\u672C",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/install/quick-start.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickStart_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-2608ff04",
  "path": "/guide/usage/preference.html",
  "title": "\u504F\u597D\u8BBE\u7F6E preference",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/preference.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var preference_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-7c1102d4",
  "path": "/guide/usage/quick-delete.html",
  "title": "\u5FEB\u901F\u5220\u9664 quick-delete",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/quick-delete.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickDelete_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-72c2de3a",
  "path": "/guide/usage/quick-diff.html",
  "title": "\u5FEB\u901F\u5DEE\u5F02 quick-diff",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/quick-diff.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickDiff_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-93901156",
  "path": "/guide/usage/quick-edit.html",
  "title": "\u5FEB\u901F\u7F16\u8F91 quick-edit",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u901A\u8FC7\u5DE5\u5177\u76D2\u4F7F\u7528",
      "slug": "\u901A\u8FC7\u5DE5\u5177\u76D2\u4F7F\u7528",
      "children": []
    },
    {
      "level": 2,
      "title": "\u901A\u8FC7\u7F16\u8F91\u6BB5\u843D\u65C1\u7684\u94FE\u63A5\u7F16\u8F91\u6BB5\u843D",
      "slug": "\u901A\u8FC7\u7F16\u8F91\u6BB5\u843D\u65C1\u7684\u94FE\u63A5\u7F16\u8F91\u6BB5\u843D",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5728\u6D4F\u89C8\u9875\u9762\u5386\u53F2\u8BB0\u5F55\u65F6\u4F7F\u7528",
      "slug": "\u5728\u6D4F\u89C8\u9875\u9762\u5386\u53F2\u8BB0\u5F55\u65F6\u4F7F\u7528",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5728\u5FEB\u901F\u9875\u9762\u5DEE\u5F02\u65F6\u4F7F\u7528",
      "slug": "\u5728\u5FEB\u901F\u9875\u9762\u5DEE\u5F02\u65F6\u4F7F\u7528",
      "children": []
    }
  ],
  "filePathRelative": "guide/usage/quick-edit.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickEdit_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-1f379e0b",
  "path": "/guide/usage/quick-preview.html",
  "title": "\u5FEB\u901F\u9884\u89C8 quick-preview",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/quick-preview.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickPreview_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-6675a47a",
  "path": "/guide/usage/quick-redirect.html",
  "title": "\u5FEB\u901F\u91CD\u5B9A\u5411 quick-redirect",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/quick-redirect.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickRedirect_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-916955be",
  "path": "/guide/usage/quick-rename.html",
  "title": "\u5FEB\u901F\u91CD\u547D\u540D quick-rename",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/quick-rename.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickRename_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-7a1c19c0",
  "path": "/guide/usage/toolbox.html",
  "title": "\u5DE5\u5177\u76D2 toolbox",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/usage/toolbox.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var toolbox_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-99c880ce",
  "path": "/en/guide/install/gadget.html",
  "title": "Install the plugin as a Gadget",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "What's a Gadget",
      "slug": "what-s-a-gadget",
      "children": []
    },
    {
      "level": 2,
      "title": "Install this plugin as a Gadget",
      "slug": "install-this-plugin-as-a-gadget",
      "children": []
    }
  ],
  "filePathRelative": "en/guide/install/gadget.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var gadget_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-e50284ea",
  "path": "/en/guide/install/quick-start.html",
  "title": "Quick Start",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Via personal JS",
      "slug": "via-personal-js",
      "children": []
    },
    {
      "level": 2,
      "title": "Via Gadget",
      "slug": "via-gadget",
      "children": []
    },
    {
      "level": 2,
      "title": "Via browser extensions",
      "slug": "via-browser-extensions",
      "children": []
    }
  ],
  "filePathRelative": "en/guide/install/quick-start.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickStart_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-313d0320",
  "path": "/en/guide/usage/preference.html",
  "title": "Preferences",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/preference.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var preference_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-49475740",
  "path": "/en/guide/usage/quick-delete.html",
  "title": "Quick-delete",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/quick-delete.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickDelete_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-341b5da6",
  "path": "/en/guide/usage/quick-diff.html",
  "title": "Quick-diff",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/quick-diff.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickDiff_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-779076c1",
  "path": "/en/guide/usage/quick-edit.html",
  "title": "Quick-edit",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Use via toolbox",
      "slug": "use-via-toolbox",
      "children": []
    },
    {
      "level": 2,
      "title": "Edit a section via link beside the heading",
      "slug": "edit-a-section-via-link-beside-the-heading",
      "children": []
    },
    {
      "level": 2,
      "title": "Use it while browsing the page history",
      "slug": "use-it-while-browsing-the-page-history",
      "children": []
    },
    {
      "level": 2,
      "title": "Use it when using quick-diff",
      "slug": "use-it-when-using-quick-diff",
      "children": []
    }
  ],
  "filePathRelative": "en/guide/usage/quick-edit.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickEdit_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-25b8172f",
  "path": "/en/guide/usage/quick-redirect.html",
  "title": "Quick-redirect",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/quick-redirect.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickRedirect_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-f6fcace6",
  "path": "/en/guide/usage/quick-rename.html",
  "title": "Quick-rename",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/quick-rename.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var quickRename_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-ebc8e998",
  "path": "/en/guide/usage/toolbox.html",
  "title": "Toolbox",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "en/guide/usage/toolbox.md",
  "git": {
    "updatedTime": 1640089812e3,
    "contributors": []
  }
};
var toolbox_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": null,
  "git": {}
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
var _sfc_main$h = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$h
});
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
var _sfc_main$g = vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => shared.isLinkHttp(item.value.link));
    const hasNonHttpProtocal = vue.computed(() => shared.isLinkMailto(item.value.link) || shared.isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocal.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocal.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_OutboundLink = vue.resolveComponent("OutboundLink");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: ["nav-link", { "router-link-active": vue.unref(isActive) }],
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "nav-link external",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_OutboundLink, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var _sfc_main$f = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroImage = vue.computed(() => {
      if (!frontmatter.value.heroImage) {
        return null;
      }
      return withBase(frontmatter.value.heroImage);
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!shared.isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const features = vue.computed(() => {
      if (shared.isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "home",
        "aria-labelledby": vue.unref(heroText) ? "main-title" : void 0
      }, _attrs))}><header class="hero">`);
      if (vue.unref(heroImage)) {
        _push(`<img${serverRenderer.ssrRenderAttr("src", vue.unref(heroImage))}${serverRenderer.ssrRenderAttr("alt", vue.unref(heroAlt))}>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (vue.unref(features).length) {
        _push(`<div class="features"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="theme-default-content custom">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const resolveRepoType = (repo) => {
  if (!shared.isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern) {
    pattern = editLinkPattern;
  } else if (repoType !== null) {
    pattern = editLinkPatterns[repoType];
  }
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, shared.isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, shared.removeLeadingSlash(`${shared.removeEndingSlash(docsDir)}/${filePathRelative}`));
};
var _sfc_main$e = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const siteLocale = useSiteLocaleData();
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString(siteLocale.value.lang);
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span><span class="meta-item-info">${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var _sfc_main$d = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (shared.isString(conf)) {
        return useNavLink(conf);
      }
      if (shared.isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev"> \u2190 `);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(` \u2192 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var _sfc_main$c = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var _sfc_main$b = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var _sfc_main$a = vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="mobile-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="nav-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child, index2) => {
              _push2(`<li class="dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "nav-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child, index2) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.link || index2,
                    class: "dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var _sfc_main$9 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unkown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e2, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e2 = targetThemeLocale.selectLanguageName) != null ? _e2 : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !shared.isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (shared.isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-links" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-links-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var _sfc_main$8 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var _sfc_main$7 = vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var _sfc_main$6 = vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbar = vue.ref(null);
    const siteBrand = vue.ref(null);
    const siteBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const siteBrandTitle = vue.computed(() => siteLocale.value.title);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = siteBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(siteBrandLink) }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue.unref(siteBrandLogo)) {
              _push2(`<img class="logo"${serverRenderer.ssrRenderAttr("src", vue.unref(withBase)(vue.unref(siteBrandLogo)))}${serverRenderer.ssrRenderAttr("alt", vue.unref(siteBrandTitle))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (vue.unref(siteBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(siteBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(siteBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.unref(siteBrandLogo) ? (vue.openBlock(), vue.createBlock("img", {
                key: 0,
                class: "logo",
                src: vue.unref(withBase)(vue.unref(siteBrandLogo)),
                alt: vue.unref(siteBrandTitle)
              }, null, 8, ["src", "alt"])) : vue.createCommentVNode("", true),
              vue.unref(siteBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 1,
                class: ["site-name", { "can-hide": vue.unref(siteBrandLogo) }]
              }, vue.toDisplayString(vue.unref(siteBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="navbar-links-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (route, link) => {
  if (link === void 0) {
    return false;
  }
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.link)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child));
  }
  return false;
};
const renderItem = (item, props) => {
  if (item.link) {
    return vue.h(_sfc_main$g, __spreadProps(__spreadValues({}, props), {
      item
    }));
  }
  return vue.h("p", props, item.text);
};
const renderChildren = (item, depth) => {
  var _a;
  if (!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
    return null;
  }
  return vue.h("ul", {
    class: {
      "sidebar-sub-items": depth > 0
    }
  }, item.children.map((child) => vue.h("li", vue.h(SidebarChild, {
    item: child,
    depth: depth + 1
  }))));
};
const SidebarChild = ({ item, depth = 0 }) => {
  const route = vueRouter.useRoute();
  const active = isActiveItem(route, item);
  return [
    renderItem(item, {
      class: {
        "sidebar-heading": depth === 0,
        "sidebar-item": true,
        active
      }
    }),
    renderChildren(item, depth)
  ];
};
SidebarChild.displayName = "SidebarChild";
SidebarChild.props = {
  item: {
    type: Object,
    required: true
  },
  depth: {
    type: Number,
    required: false
  }
};
var _sfc_main$5 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<ul class="sidebar-links"><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
        _push(serverRenderer.ssrRenderComponent(vue.unref(SidebarChild), {
          key: item.link || item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var _sfc_main$4 = vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise2 = useScrollPromise();
    scrollPromise2.resolve;
    scrollPromise2.pending;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      if (vue.unref(shouldShowNavbar)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, {
          before: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "navbar-before")
              ];
            }
          }),
          after: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "navbar-after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="sidebar-mask"></div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, {
        top: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "sidebar-top")
            ];
          }
        }),
        bottom: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "sidebar-bottom")
            ];
          }
        }),
        _: 3
      }, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$c, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
var ColorPreview_vue_vue_type_style_index_0_lang = ".color-preview {\n  margin: 0 2px 0 2px;\n}\n.color-preview .color-block {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  box-shadow: 0 0 0 1px #aaaaaa;\n  margin-right: 4px;\n}";
const _sfc_main$3 = {
  name: "ColorPreview",
  props: {
    color: {
      type: String,
      default: "#000000"
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "color-preview" }, _attrs))}><span class="color-block" style="${serverRenderer.ssrRenderStyle({ backgroundColor: $props.color })}"></span>${serverRenderer.ssrInterpolate($props.color)}</span>`);
}
_sfc_main$3.ssrRender = _sfc_ssrRender$3;
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../components/ColorPreview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ColorPreview = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
var infobox_vue_vue_type_style_index_0_lang = '\n/** \u4FE1\u606F\u6846 **/\n.infobox {\n  color: rgba(0, 0, 0, 0.7);\n  margin: 1.5625em 0;\n  padding: 0.6rem;\n  overflow: hidden;\n  font-size: 1em;\n  page-break-inside: avoid;\n  border-left: 0.3rem solid #00b8d4;\n  border-radius: 0.3rem;\n  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.05),\n    0 0 0.05rem rgba(0, 0, 0, 0.1);\n  background-color: #fafafa;\n}\n.dark-theme .infobox {\n  background: #151515;\n  color: #dfdfdf;\n}\n.infobox .title {\n  position: relative;\n  margin: -0.6rem -0.6rem 0.8em -0.6rem !important;\n  padding: 0.4rem 0.6rem 0.4rem 2.5rem;\n  font-weight: 700;\n  background-color: rgba(66, 185, 131, 0.1);\n}\n.infobox .title::before {\n  position: absolute;\n  top: 0.9rem;\n  left: 1rem;\n  width: 12px;\n  height: 12px;\n  background-color: #42b983;\n  border-radius: 50%;\n  content: " ";\n}\n.infobox > .title,\n.infobox.todo > .title {\n  background-color: rgba(0, 184, 212, 0.1);\n}\n.infobox.warning > .title,\n.infobox.attention > .title,\n.infobox.caution > .title {\n  background-color: rgba(255, 145, 0, 0.1);\n}\n.infobox.failure > .title,\n.infobox.missing > .title,\n.infobox.fail > .title,\n.infobox.error > .title {\n  background-color: rgba(255, 82, 82, 0.1);\n}\n.infobox.info,\n.infobox.todo {\n  border-color: #00b8d4;\n}\n.infobox.success,\n.infobox.done {\n  border-color: #05ad38;\n}\n.infobox.warning,\n.infobox.attention,\n.infobox.caution {\n  border-color: #ff9100;\n}\n.infobox.failure,\n.infobox.missing,\n.infobox.fail,\n.infobox.error {\n  border-color: #ff5252;\n}\n.infobox.infobox > .title::before,\n.infobox.todo > .title::before {\n  background-color: #00b8d4;\n  border-radius: 50%;\n}\n.infobox.success > .title::before,\n.infobox.done > .title::before {\n  background-color: #05ad38;\n  border-radius: 50%;\n}\n.infobox.warning > .title::before,\n.infobox.attention > .title::before,\n.infobox.caution > .title::before {\n  background-color: #ff9100;\n  border-radius: 50%;\n}\n.infobox.failure > .title::before,\n.infobox.missing > .title::before,\n.infobox.fail > .title::before,\n.infobox.error > .title::before {\n  background-color: #ff5252;\n  border-radius: 50%;\n}\n.infobox > :last-child {\n  margin-bottom: 0 !important;\n}\n';
const _sfc_main$2 = {
  name: "infobox",
  props: {
    type: {
      type: String,
      default: "info"
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: ["infobox", $props.type]
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
_sfc_main$2.ssrRender = _sfc_ssrRender$2;
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../components/infobox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var infobox = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _sfc_main$1 = {
  name: "issues-link",
  props: {
    id: {
      type: [Number, String],
      default: ""
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "issues-link external",
    id: "issues-" + $props.id,
    href: "https://github.com/inpageedit/inpageedit-v2/issues/" + $props.id
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`issue#${serverRenderer.ssrInterpolate($props.id)}`);
  }, _push, _parent);
  _push(`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>`);
}
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../components/issues.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var issues = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
var status_vue_vue_type_style_index_0_lang = "\n.status-tag {\n  padding: 2px 6px;\n  margin: auto 2px;\n  user-select: none;\n  cursor: default;\n  text-transform: uppercase;\n  border-radius: 2px;\n  background: #888888;\n  color: #ffffff;\n}\n.status-tag.new,\n.status-tag.ok,\n.status-tag.success,\n.status-tag.stable,\n.status-tag.done {\n  background: #6cc569;\n}\n.status-tag.test,\n.status-tag.updated,\n.status-tag.dev {\n  background: #6bbfe9;\n}\n.status-tag.fixed {\n  background: #cc69e0;\n}\n.status-tag.deleted,\n.status-tag.error,\n.status-tag.fail {\n  background: #c22525;\n}\n.status-tag.warning,\n.status-tag.progress {\n  background: #ff9100;\n}\n\n/** GitHub Labels **/\n.status-tag.level-1 {\n  background: #ff0000;\n}\n.status-tag.level-2 {\n  background: #ff9040;\n}\n.status-tag.level-3 {\n  background: #6eba03;\n}\n.status-tag.level-4 {\n  background: #dff49a;\n  color: #252525;\n}\n.status-tag.review {\n  background: #d4c5f9;\n  color: #252525;\n}\n";
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: ["status-tag", $props.status],
    style: { backgroundColor: $props.color }
  }, _attrs))}>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${serverRenderer.ssrInterpolate($props.status)}`);
  }, _push, _parent);
  _push(`</span>`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../components/status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var status = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
