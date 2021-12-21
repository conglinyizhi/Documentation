/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-f96f0f89'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "404.html",
    "revision": "d3d220469b1dfe05085825d0beca8ec3"
  }, {
    "url": "about/do-you-know.html",
    "revision": "37c85adf5e45b9e0dd4760b03390d94d"
  }, {
    "url": "about/donate.html",
    "revision": "62f7d086ffa68bcb16fe211b5240d678"
  }, {
    "url": "about/index.html",
    "revision": "b84a098a5885d47202052b69da9934c6"
  }, {
    "url": "about/logo.html",
    "revision": "fc4ad522da69429954df12f028369fb0"
  }, {
    "url": "assets/1.x.html.6e32ef82.js",
    "revision": null
  }, {
    "url": "assets/1.x.html.73324e42.js",
    "revision": null
  }, {
    "url": "assets/14.0.0.html.2f2831ab.js",
    "revision": null
  }, {
    "url": "assets/14.0.0.html.caa67350.js",
    "revision": null
  }, {
    "url": "assets/14.0.3.html.09762188.js",
    "revision": null
  }, {
    "url": "assets/14.0.3.html.a07fcadc.js",
    "revision": null
  }, {
    "url": "assets/14.1.0.html.a4b02050.js",
    "revision": null
  }, {
    "url": "assets/14.1.0.html.bf3e31e1.js",
    "revision": null
  }, {
    "url": "assets/14.1.1.html.0ab4444e.js",
    "revision": null
  }, {
    "url": "assets/14.1.1.html.fafda703.js",
    "revision": null
  }, {
    "url": "assets/14.1.2.html.2a69309c.js",
    "revision": null
  }, {
    "url": "assets/14.1.2.html.c5b9e118.js",
    "revision": null
  }, {
    "url": "assets/14.1.3.html.55e0b89f.js",
    "revision": null
  }, {
    "url": "assets/14.1.3.html.6f8c2d77.js",
    "revision": null
  }, {
    "url": "assets/14.1.4.html.7c1248f7.js",
    "revision": null
  }, {
    "url": "assets/14.1.4.html.83672218.js",
    "revision": null
  }, {
    "url": "assets/14.1.5.html.f7843ff4.js",
    "revision": null
  }, {
    "url": "assets/14.1.5.html.f8b5bca6.js",
    "revision": null
  }, {
    "url": "assets/14.1.7.html.32906102.js",
    "revision": null
  }, {
    "url": "assets/14.1.7.html.c6958e89.js",
    "revision": null
  }, {
    "url": "assets/14.1.8.html.24c7dbfa.js",
    "revision": null
  }, {
    "url": "assets/14.1.8.html.94f260fc.js",
    "revision": null
  }, {
    "url": "assets/14.1.9.html.15d24ea7.js",
    "revision": null
  }, {
    "url": "assets/14.1.9.html.5523d7ea.js",
    "revision": null
  }, {
    "url": "assets/14.2.0.html.cf63a8a0.js",
    "revision": null
  }, {
    "url": "assets/14.2.0.html.fb5b88e1.js",
    "revision": null
  }, {
    "url": "assets/14.2.1.html.547b396c.js",
    "revision": null
  }, {
    "url": "assets/14.2.1.html.dc1feeee.js",
    "revision": null
  }, {
    "url": "assets/14.2.3.html.0c53c3fc.js",
    "revision": null
  }, {
    "url": "assets/14.2.3.html.69d1e869.js",
    "revision": null
  }, {
    "url": "assets/14.2.6.html.35a1ee30.js",
    "revision": null
  }, {
    "url": "assets/14.2.6.html.8fe5bea6.js",
    "revision": null
  }, {
    "url": "assets/14.2.8.html.365de2d5.js",
    "revision": null
  }, {
    "url": "assets/14.2.8.html.4070069d.js",
    "revision": null
  }, {
    "url": "assets/2.x.html.68bddb8a.js",
    "revision": null
  }, {
    "url": "assets/2.x.html.c393c1a8.js",
    "revision": null
  }, {
    "url": "assets/404.70f9909e.js",
    "revision": null
  }, {
    "url": "assets/404.html.30464ba6.js",
    "revision": null
  }, {
    "url": "assets/404.html.abd9b2e5.js",
    "revision": null
  }, {
    "url": "assets/api.html.0b334dd9.js",
    "revision": null
  }, {
    "url": "assets/api.html.a3123780.js",
    "revision": null
  }, {
    "url": "assets/app.95e2640d.js",
    "revision": null
  }, {
    "url": "assets/back-to-top.8efcbe56.svg",
    "revision": null
  }, {
    "url": "assets/ColorPreview.f2d63a08.js",
    "revision": null
  }, {
    "url": "assets/do-you-know.html.5da3c6c0.js",
    "revision": null
  }, {
    "url": "assets/do-you-know.html.d64b567b.js",
    "revision": null
  }, {
    "url": "assets/donate.html.17ef8f0a.js",
    "revision": null
  }, {
    "url": "assets/donate.html.72b2c254.js",
    "revision": null
  }, {
    "url": "assets/donate.html.8e9307e6.js",
    "revision": null
  }, {
    "url": "assets/donate.html.b87bee70.js",
    "revision": null
  }, {
    "url": "assets/gadget.html.2106bc55.js",
    "revision": null
  }, {
    "url": "assets/gadget.html.4a3b719b.js",
    "revision": null
  }, {
    "url": "assets/gadget.html.4c99ec94.js",
    "revision": null
  }, {
    "url": "assets/gadget.html.ff4fbc1c.js",
    "revision": null
  }, {
    "url": "assets/hook.html.8572166e.js",
    "revision": null
  }, {
    "url": "assets/hook.html.87b396e8.js",
    "revision": null
  }, {
    "url": "assets/hook.html.8d5ead7a.js",
    "revision": null
  }, {
    "url": "assets/hook.html.97ea27ab.js",
    "revision": null
  }, {
    "url": "assets/index.0e8935cb.js",
    "revision": null
  }, {
    "url": "assets/index.html.02fd3766.js",
    "revision": null
  }, {
    "url": "assets/index.html.0da923ad.js",
    "revision": null
  }, {
    "url": "assets/index.html.15a96a25.js",
    "revision": null
  }, {
    "url": "assets/index.html.1786e1a6.js",
    "revision": null
  }, {
    "url": "assets/index.html.1fa87192.js",
    "revision": null
  }, {
    "url": "assets/index.html.301b27e3.js",
    "revision": null
  }, {
    "url": "assets/index.html.392de618.js",
    "revision": null
  }, {
    "url": "assets/index.html.3d5435f0.js",
    "revision": null
  }, {
    "url": "assets/index.html.4c402e66.js",
    "revision": null
  }, {
    "url": "assets/index.html.5af8c73a.js",
    "revision": null
  }, {
    "url": "assets/index.html.5dc74fa4.js",
    "revision": null
  }, {
    "url": "assets/index.html.675c5b7f.js",
    "revision": null
  }, {
    "url": "assets/index.html.6ce38dee.js",
    "revision": null
  }, {
    "url": "assets/index.html.723fb8d5.js",
    "revision": null
  }, {
    "url": "assets/index.html.7a0513b6.js",
    "revision": null
  }, {
    "url": "assets/index.html.7f8e694d.js",
    "revision": null
  }, {
    "url": "assets/index.html.d0f5af78.js",
    "revision": null
  }, {
    "url": "assets/index.html.e3fe84a6.js",
    "revision": null
  }, {
    "url": "assets/index.html.e6092a9a.js",
    "revision": null
  }, {
    "url": "assets/index.html.f05c1de9.js",
    "revision": null
  }, {
    "url": "assets/infobox.2fd167ce.js",
    "revision": null
  }, {
    "url": "assets/intro.html.26337d59.js",
    "revision": null
  }, {
    "url": "assets/intro.html.79d84add.js",
    "revision": null
  }, {
    "url": "assets/intro.html.d66327f0.js",
    "revision": null
  }, {
    "url": "assets/intro.html.ee9b1655.js",
    "revision": null
  }, {
    "url": "assets/issues.cf577a9e.js",
    "revision": null
  }, {
    "url": "assets/Layout.4cf83b71.js",
    "revision": null
  }, {
    "url": "assets/logo.html.750f15f2.js",
    "revision": null
  }, {
    "url": "assets/logo.html.778ee2b6.js",
    "revision": null
  }, {
    "url": "assets/logo.html.c9eeafa4.js",
    "revision": null
  }, {
    "url": "assets/logo.html.cbbfadd1.js",
    "revision": null
  }, {
    "url": "assets/next.html.02cea20b.js",
    "revision": null
  }, {
    "url": "assets/next.html.9ce5a2fa.js",
    "revision": null
  }, {
    "url": "assets/nouns.html.9eb19801.js",
    "revision": null
  }, {
    "url": "assets/nouns.html.d17a16bd.js",
    "revision": null
  }, {
    "url": "assets/plugin.html.3d5bf702.js",
    "revision": null
  }, {
    "url": "assets/plugin.html.718072c2.js",
    "revision": null
  }, {
    "url": "assets/preference.html.01424e21.js",
    "revision": null
  }, {
    "url": "assets/preference.html.404d1431.js",
    "revision": null
  }, {
    "url": "assets/preference.html.5586e429.js",
    "revision": null
  }, {
    "url": "assets/preference.html.902c21da.js",
    "revision": null
  }, {
    "url": "assets/quick-delete.html.5540310f.js",
    "revision": null
  }, {
    "url": "assets/quick-delete.html.7da1d9ed.js",
    "revision": null
  }, {
    "url": "assets/quick-delete.html.bc2cb632.js",
    "revision": null
  }, {
    "url": "assets/quick-delete.html.c35c9fad.js",
    "revision": null
  }, {
    "url": "assets/quick-diff.html.3cefb2d4.js",
    "revision": null
  }, {
    "url": "assets/quick-diff.html.a1f381a1.js",
    "revision": null
  }, {
    "url": "assets/quick-diff.html.bf32a13a.js",
    "revision": null
  }, {
    "url": "assets/quick-diff.html.ffcdca2a.js",
    "revision": null
  }, {
    "url": "assets/quick-edit.html.2ddf318a.js",
    "revision": null
  }, {
    "url": "assets/quick-edit.html.437959b4.js",
    "revision": null
  }, {
    "url": "assets/quick-edit.html.66a40f73.js",
    "revision": null
  }, {
    "url": "assets/quick-edit.html.e81aecb6.js",
    "revision": null
  }, {
    "url": "assets/quick-preview.html.2c57bd74.js",
    "revision": null
  }, {
    "url": "assets/quick-preview.html.fbb82536.js",
    "revision": null
  }, {
    "url": "assets/quick-redirect.html.3f1781e7.js",
    "revision": null
  }, {
    "url": "assets/quick-redirect.html.4d4398ca.js",
    "revision": null
  }, {
    "url": "assets/quick-redirect.html.cc6031f6.js",
    "revision": null
  }, {
    "url": "assets/quick-redirect.html.f3585e5d.js",
    "revision": null
  }, {
    "url": "assets/quick-rename.html.40bc6095.js",
    "revision": null
  }, {
    "url": "assets/quick-rename.html.631a3bb7.js",
    "revision": null
  }, {
    "url": "assets/quick-rename.html.7448b3a7.js",
    "revision": null
  }, {
    "url": "assets/quick-rename.html.8b8f29c8.js",
    "revision": null
  }, {
    "url": "assets/quick-start.html.1c496428.js",
    "revision": null
  }, {
    "url": "assets/quick-start.html.600c5127.js",
    "revision": null
  }, {
    "url": "assets/quick-start.html.8669d975.js",
    "revision": null
  }, {
    "url": "assets/quick-start.html.b26cae07.js",
    "revision": null
  }, {
    "url": "assets/status.2a281b61.js",
    "revision": null
  }, {
    "url": "assets/style.ff2a2152.css",
    "revision": null
  }, {
    "url": "assets/toolbox.html.0bac5cc0.js",
    "revision": null
  }, {
    "url": "assets/toolbox.html.4bd5bcb7.js",
    "revision": null
  }, {
    "url": "assets/toolbox.html.842c2ac9.js",
    "revision": null
  }, {
    "url": "assets/toolbox.html.ac88a683.js",
    "revision": null
  }, {
    "url": "assets/v2.html.69404a50.js",
    "revision": null
  }, {
    "url": "assets/v2.html.7666ada4.js",
    "revision": null
  }, {
    "url": "assets/v3.html.666679a7.js",
    "revision": null
  }, {
    "url": "assets/v3.html.d425904e.js",
    "revision": null
  }, {
    "url": "assets/v4.html.07ed482c.js",
    "revision": null
  }, {
    "url": "assets/v4.html.635b2572.js",
    "revision": null
  }, {
    "url": "assets/v5.html.1bfb9dc3.js",
    "revision": null
  }, {
    "url": "assets/v5.html.f2f91faa.js",
    "revision": null
  }, {
    "url": "develop/analytics/index.html",
    "revision": "d0279513b7505e051e14869bd6351b17"
  }, {
    "url": "develop/analytics/v2.html",
    "revision": "6e39861e60d489e82243fca9a7bcb026"
  }, {
    "url": "develop/analytics/v3.html",
    "revision": "c915023bcfeb2225d0fb5e0b53487e26"
  }, {
    "url": "develop/analytics/v4.html",
    "revision": "bf113f0906b107e21c4192ece16f0222"
  }, {
    "url": "develop/analytics/v5.html",
    "revision": "0b569c72573b9e7112fe342a4af19088"
  }, {
    "url": "develop/api.html",
    "revision": "dfbd278730e1d73580754a536a4eed8b"
  }, {
    "url": "develop/hook.html",
    "revision": "1cc17d0b77440310e63a8ccf0ad3e04d"
  }, {
    "url": "develop/index.html",
    "revision": "586d986d7072ace350460dd70cb3410b"
  }, {
    "url": "develop/nouns.html",
    "revision": "756b9e392f19ee928cd50976d922527e"
  }, {
    "url": "develop/plugin.html",
    "revision": "5452943557ae23f9de7970df445c4128"
  }, {
    "url": "en/about/donate.html",
    "revision": "6d4f5ac808311e7d0607321776bd007c"
  }, {
    "url": "en/about/index.html",
    "revision": "089e13dc2ccd47dcb2bac6deeff7a75d"
  }, {
    "url": "en/about/logo.html",
    "revision": "27a649732f2a2f93ded7bbd888c8c450"
  }, {
    "url": "en/api/hook.html",
    "revision": "b06c0a497bd522c73090eb33216b98c0"
  }, {
    "url": "en/api/index.html",
    "revision": "fc4d39684e430dfd817b38b16bd4c9a3"
  }, {
    "url": "en/guide/install/gadget.html",
    "revision": "1326ded5ea9a070686471e616d0d0a2d"
  }, {
    "url": "en/guide/install/quick-start.html",
    "revision": "41db064a16c8924fbfb43f5ef8946a2f"
  }, {
    "url": "en/guide/intro.html",
    "revision": "b12eaf09d761ecc15a7191fc62368bae"
  }, {
    "url": "en/guide/usage/preference.html",
    "revision": "6b05ea06c69d405d6815808ff4a8ed0d"
  }, {
    "url": "en/guide/usage/quick-delete.html",
    "revision": "c279ea17fd4ef41a3a10d8db381b53ed"
  }, {
    "url": "en/guide/usage/quick-diff.html",
    "revision": "4d8441a4bcea96a02280221e8a868e85"
  }, {
    "url": "en/guide/usage/quick-edit.html",
    "revision": "ae921dd21c9abc3a0794f99d9d3adaf2"
  }, {
    "url": "en/guide/usage/quick-redirect.html",
    "revision": "e8fbf744fa179b0ef5d47775427f4e2d"
  }, {
    "url": "en/guide/usage/quick-rename.html",
    "revision": "fe599b7fafdfe02b74ff0540c91edf88"
  }, {
    "url": "en/guide/usage/toolbox.html",
    "revision": "b185f5e81f73e6e8523f585efb85a512"
  }, {
    "url": "en/index.html",
    "revision": "acdfcf1d8bc17367ad4bed6cad927f21"
  }, {
    "url": "en/update/index.html",
    "revision": "2b9337c81f32a9aae30691ec69832acc"
  }, {
    "url": "guide/index.html",
    "revision": "d23669cda5e1e52b05b3a77d23643c1d"
  }, {
    "url": "guide/install/gadget.html",
    "revision": "18e3ca6f7fd4da4ad6577129ddc9e7ed"
  }, {
    "url": "guide/install/quick-start.html",
    "revision": "e4a38b284def8c2ab721ffd5089532fe"
  }, {
    "url": "guide/intro.html",
    "revision": "ab3965306349f4b772013d8fbd8af301"
  }, {
    "url": "guide/usage/preference.html",
    "revision": "dc3ebef7a13265c0d31f4170e6e98b37"
  }, {
    "url": "guide/usage/quick-delete.html",
    "revision": "469c9e659d3de2b5b87f3f8353d8af0a"
  }, {
    "url": "guide/usage/quick-diff.html",
    "revision": "e955587f5affd4ce1e61dab7057e0390"
  }, {
    "url": "guide/usage/quick-edit.html",
    "revision": "63ec4c887a9808a6e89b67c066ed8c7c"
  }, {
    "url": "guide/usage/quick-preview.html",
    "revision": "efb87e19422538d85023b4bf95f04578"
  }, {
    "url": "guide/usage/quick-redirect.html",
    "revision": "2cdb9fadcb8d4b5fb9e6eb61b2fa5013"
  }, {
    "url": "guide/usage/quick-rename.html",
    "revision": "68f25b73f78ef09ec221694f475cd436"
  }, {
    "url": "guide/usage/toolbox.html",
    "revision": "338e3ae37591883d0c50c40b77ff68b8"
  }, {
    "url": "images/browser/compatible_chrome.png",
    "revision": "62865d1b320de643a107c7df7be889cb"
  }, {
    "url": "images/browser/compatible_firefox.png",
    "revision": "5ac2fe75f6ea214a9e9071e293fcb30e"
  }, {
    "url": "images/browser/compatible_ie.png",
    "revision": "02717a5efaf89b02c8f81df3bf6da579"
  }, {
    "url": "images/browser/compatible_opera.png",
    "revision": "e8d7563914ad7b5fa2d4699e9117ab85"
  }, {
    "url": "images/browser/compatible_safari.png",
    "revision": "95335d2b9cf3c2a4362730afff2843e6"
  }, {
    "url": "images/browser/incompatible_chrome.png",
    "revision": "bbde0d28faf36472a1a9078b6857f0de"
  }, {
    "url": "images/browser/incompatible_firefox.png",
    "revision": "85d5832343560153bb321b0d83252ce5"
  }, {
    "url": "images/browser/incompatible_ie.png",
    "revision": "295715ae830913834289300244750926"
  }, {
    "url": "images/browser/incompatible_opera.png",
    "revision": "9fcaf974145f458b77a595604a1b8722"
  }, {
    "url": "images/browser/incompatible_safari.png",
    "revision": "08ed3f25472d0ad01601d6be9e5235c3"
  }, {
    "url": "images/logo/InPageEdit-v2.png",
    "revision": "ed16a8de541d3431c45b427b76f07572"
  }, {
    "url": "images/logo/InPageEdit.png",
    "revision": "7372a15201e94efe95f20e0ec65537fe"
  }, {
    "url": "images/logo/IPE-v2.png",
    "revision": "56069053e1b1680c30b1ba43b7dc0a59"
  }, {
    "url": "images/logo/IPE.png",
    "revision": "c63644d9bcb1825b70d31a8b0fcde338"
  }, {
    "url": "images/logo/touch-icon.jpg",
    "revision": "0705823a38cc80e01bd058e7f9b7c892"
  }, {
    "url": "images/webpack/webpack-icon.svg",
    "revision": "d19378a95ebe6b15d5ddea281138dcf4"
  }, {
    "url": "images/webpack/webpack-logo.svg",
    "revision": "e0b5805d423a4ec9473ee315250968b2"
  }, {
    "url": "index.html",
    "revision": "a81b508781df23dda29cd54bccdda3ed"
  }, {
    "url": "update/1.x.html",
    "revision": "8b433b543ad280fb04d3449608698b73"
  }, {
    "url": "update/14.0.0.html",
    "revision": "8c1191dc9f02935f613c394dd024e4d6"
  }, {
    "url": "update/14.0.3.html",
    "revision": "657b91aed7cc56767aa07529294477b9"
  }, {
    "url": "update/14.1.0.html",
    "revision": "f7d6efe21447caa7a2b188aa389fc369"
  }, {
    "url": "update/14.1.1.html",
    "revision": "221d33ed48267c70659d61ebf4e12640"
  }, {
    "url": "update/14.1.2.html",
    "revision": "1a1d41330112e1274a14680b8c5871c7"
  }, {
    "url": "update/14.1.3.html",
    "revision": "ed3aef51fae111953c3d373a0a76afe1"
  }, {
    "url": "update/14.1.4.html",
    "revision": "154c271d66f218757d988a7b110682ce"
  }, {
    "url": "update/14.1.5.html",
    "revision": "66e8f2e7565a46a8683a7e1b886ba01f"
  }, {
    "url": "update/14.1.7.html",
    "revision": "18277e4913375874219585d9cea17dd3"
  }, {
    "url": "update/14.1.8.html",
    "revision": "f801cbca82ad8fd0cace56d801811641"
  }, {
    "url": "update/14.1.9.html",
    "revision": "902653be50a8344bdc248d3cb2716d2f"
  }, {
    "url": "update/14.2.0.html",
    "revision": "e3231136109b414f329bfc1d72672f38"
  }, {
    "url": "update/14.2.1.html",
    "revision": "f6f306d4a3af070f4f5a3720e40c910c"
  }, {
    "url": "update/14.2.3.html",
    "revision": "bf7bb1e63112a634dbd615c9eaeaba20"
  }, {
    "url": "update/14.2.6.html",
    "revision": "665e12ea1e6815a7b1a8766942265e0b"
  }, {
    "url": "update/14.2.8.html",
    "revision": "2ce41836f12df3b27b0457388caa4ddc"
  }, {
    "url": "update/2.x.html",
    "revision": "be43086dc45d8ba045bbaebd51f4eb89"
  }, {
    "url": "update/index.html",
    "revision": "c2d80c3f0779a789b5fcb70954490b3f"
  }, {
    "url": "update/next.html",
    "revision": "72e1e7cd04088e00a90fc1c47dc2025d"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
