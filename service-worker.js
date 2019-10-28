/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf90998bf20628c5bd7a1bf252199b24"
  },
  {
    "url": "assets/css/0.styles.d5cdda76.css",
    "revision": "181c92575e924e0591526a5dc84ae10a"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.32c81e84.js",
    "revision": "e7f0a121cc33aad2a129cb2d51d11a4e"
  },
  {
    "url": "assets/js/11.0cd7688c.js",
    "revision": "59139d5023dec4d0016d18fe2e38f821"
  },
  {
    "url": "assets/js/12.edae7419.js",
    "revision": "2b90942f8ff76fbe2f298cfb891f2b98"
  },
  {
    "url": "assets/js/13.b9fd770f.js",
    "revision": "fc35932cb99b0503b0fda24a2aa88ad3"
  },
  {
    "url": "assets/js/14.945765a4.js",
    "revision": "07e9f77af0324e1e532c6301f9bb6c75"
  },
  {
    "url": "assets/js/15.b04233f4.js",
    "revision": "95ac538c4e8ef61fafb101b804feb598"
  },
  {
    "url": "assets/js/16.bcaa7dae.js",
    "revision": "564f0ddcdc891a55841618dd851ed061"
  },
  {
    "url": "assets/js/17.4daa367e.js",
    "revision": "4cd2eebd929e3f82e715943ff40710f8"
  },
  {
    "url": "assets/js/18.1fa24790.js",
    "revision": "cab8bbbe2fd854f9c4ed1ffb9b7c62fd"
  },
  {
    "url": "assets/js/19.de682d56.js",
    "revision": "489e0a545689ee758c378d0c2857d396"
  },
  {
    "url": "assets/js/20.558c6940.js",
    "revision": "a1bba20069f108e5d7304f9d67e1c192"
  },
  {
    "url": "assets/js/21.39bf3db1.js",
    "revision": "55dea3f013fbee824719dfe83daf780c"
  },
  {
    "url": "assets/js/22.f55eaa11.js",
    "revision": "5d217e646b79884cf0651dc85918ebda"
  },
  {
    "url": "assets/js/23.33779fbe.js",
    "revision": "8f9d8c33c1aec22a58d27f47e9fdfedc"
  },
  {
    "url": "assets/js/24.658dff98.js",
    "revision": "5a96f1961fe05579e4d5e262967a3cb8"
  },
  {
    "url": "assets/js/25.94ce5875.js",
    "revision": "84c0c43cb62c92525be78eee0ef17211"
  },
  {
    "url": "assets/js/26.5d1571c0.js",
    "revision": "e15d4e2d870b29f443ad241fe004628b"
  },
  {
    "url": "assets/js/27.48d90ced.js",
    "revision": "f397875044039605f98c0ac973292997"
  },
  {
    "url": "assets/js/28.c7cef4d0.js",
    "revision": "b721528d2eca9fcb306923d2ce2b984a"
  },
  {
    "url": "assets/js/29.418ea133.js",
    "revision": "4498c1ef1bdcdb9333f3cc6755aef063"
  },
  {
    "url": "assets/js/3.c05e9166.js",
    "revision": "642a4e20ad479c2c015a7b168efb6df8"
  },
  {
    "url": "assets/js/30.cf46e103.js",
    "revision": "e1793e32b72b38d4a79c9e8033ea8cd3"
  },
  {
    "url": "assets/js/31.e1849b22.js",
    "revision": "85b6b31428be53f5999dcfea75b449f6"
  },
  {
    "url": "assets/js/32.97782875.js",
    "revision": "ec10aafafe51249e77e92ae13e1ad87c"
  },
  {
    "url": "assets/js/33.fd08bf85.js",
    "revision": "0128c3a642cb2280611364d0ddcf212c"
  },
  {
    "url": "assets/js/34.644d82b4.js",
    "revision": "d6953e550d8232c46f8e0866a28d106e"
  },
  {
    "url": "assets/js/35.7715ae93.js",
    "revision": "b4d86778efd9d5f613f395bb1eb27fad"
  },
  {
    "url": "assets/js/36.39109088.js",
    "revision": "f83e739bfa7dd098714a68a55fe6faf0"
  },
  {
    "url": "assets/js/37.abc162b0.js",
    "revision": "aefdaa8673e08168508150b6042d42f2"
  },
  {
    "url": "assets/js/38.e6e300de.js",
    "revision": "4270b2557fe0ffb040689dc51899fec1"
  },
  {
    "url": "assets/js/39.d285a497.js",
    "revision": "bb7081d2a5418122ee57613a55f074cd"
  },
  {
    "url": "assets/js/4.3a4fb93d.js",
    "revision": "bc4f4859dcc266505b26ef94118f0a1a"
  },
  {
    "url": "assets/js/40.0ab7918f.js",
    "revision": "60abeafb6d17ea7c00d2f16018e4e325"
  },
  {
    "url": "assets/js/41.07707aa8.js",
    "revision": "095df2feaa87dd8753f1ec1bdf2ed7d1"
  },
  {
    "url": "assets/js/42.a08ed5a1.js",
    "revision": "57e864e65428e7b495b9692173346c75"
  },
  {
    "url": "assets/js/43.52bbd6ba.js",
    "revision": "962e8be8bc6044d256dbaff5b54d7614"
  },
  {
    "url": "assets/js/44.1ffc2f6f.js",
    "revision": "27ff500ba2567d310165b6b8b25cfa97"
  },
  {
    "url": "assets/js/45.77ed8bd6.js",
    "revision": "e6d4baf5f77fe174ec75e8180d9b746a"
  },
  {
    "url": "assets/js/46.11e77d8c.js",
    "revision": "bd1ab6d17ef6776501e7e6ba0d495aab"
  },
  {
    "url": "assets/js/47.ab955f92.js",
    "revision": "7cb8c7b8f977ccc6e7b5322c9f8930f4"
  },
  {
    "url": "assets/js/48.f2472cb1.js",
    "revision": "9b18a4df00c03f5078f6f7ff0ffa14bb"
  },
  {
    "url": "assets/js/49.ef3d4f09.js",
    "revision": "c9523905a1de88e9b4acfe67c4d692e1"
  },
  {
    "url": "assets/js/5.2f0c830b.js",
    "revision": "6ba167e547693cac52d2009813a856b4"
  },
  {
    "url": "assets/js/50.bf2b3a56.js",
    "revision": "1463342bee05cc3a9fb541071ab8de1d"
  },
  {
    "url": "assets/js/51.21da989e.js",
    "revision": "afc12a3d5de5197ab3e0d980b2982582"
  },
  {
    "url": "assets/js/52.b1a96fe3.js",
    "revision": "5a72b7b914c5784bd9c75a7f65a00781"
  },
  {
    "url": "assets/js/53.7e04e7a6.js",
    "revision": "6c6936930dc1c7c456c876e88679d28b"
  },
  {
    "url": "assets/js/54.32f833ea.js",
    "revision": "718a97b37623f7db235517bd941c13ab"
  },
  {
    "url": "assets/js/55.111b5304.js",
    "revision": "ffc9071dcac92369538b53e049658753"
  },
  {
    "url": "assets/js/56.24dc5e25.js",
    "revision": "f8f3f9d3aa3b59117e05250927a608fc"
  },
  {
    "url": "assets/js/57.ce1a01a8.js",
    "revision": "378a1ee658575f11f9de7beb09b03c01"
  },
  {
    "url": "assets/js/58.7b71c605.js",
    "revision": "1d8e27a181f2593320a092b2e7c94e9d"
  },
  {
    "url": "assets/js/59.5b5bd8c4.js",
    "revision": "990c4eb38b2d9ae44d506c77798d560e"
  },
  {
    "url": "assets/js/6.d7f75f3c.js",
    "revision": "f496b39fad7c2bb17e4a153dd8cafe3c"
  },
  {
    "url": "assets/js/60.0668bf26.js",
    "revision": "24f37aebbdc7ead6bdc7af20c3dbb621"
  },
  {
    "url": "assets/js/61.99488bf3.js",
    "revision": "e162d6c02b31edac4283a6cfcc470368"
  },
  {
    "url": "assets/js/62.2baf4fdb.js",
    "revision": "2e58ca8245cf35ea439947d7a1be0b3e"
  },
  {
    "url": "assets/js/63.0840a583.js",
    "revision": "b39fb2258fcb750e31c37e349b160d90"
  },
  {
    "url": "assets/js/64.f5721492.js",
    "revision": "ba8460f50c4f70eee329bd12a2afad8c"
  },
  {
    "url": "assets/js/65.71f38080.js",
    "revision": "1ba98b9d9f6cc8cb83abd80a6ed7cb29"
  },
  {
    "url": "assets/js/66.6e75b3c8.js",
    "revision": "b2aa0437263ec9f4631b254dbcdd29f5"
  },
  {
    "url": "assets/js/67.30cc2db8.js",
    "revision": "a15f68669e68255e851e40eff3501de7"
  },
  {
    "url": "assets/js/68.d72c79a4.js",
    "revision": "2450e698e8e4be5684d3d092a3e365a9"
  },
  {
    "url": "assets/js/69.ef3c6de2.js",
    "revision": "4a56b0dfa985bc68bb5ba77a0d8c81c4"
  },
  {
    "url": "assets/js/7.ebc179bb.js",
    "revision": "afb4991cf2f6ab6da593c4e725f42883"
  },
  {
    "url": "assets/js/70.f8a3ae51.js",
    "revision": "6a219dcb60f1e07cdb8854b2182bca0c"
  },
  {
    "url": "assets/js/71.f43ed5a2.js",
    "revision": "f4722ffdbfbaa01d86fdee3ed5238452"
  },
  {
    "url": "assets/js/72.866c6890.js",
    "revision": "3e3f70531ed3b1ecea4203a69f28ac10"
  },
  {
    "url": "assets/js/73.66749f60.js",
    "revision": "a87b997eff35638d7fd9e44ed505a774"
  },
  {
    "url": "assets/js/74.b875b2b6.js",
    "revision": "9ee550bbc049636143564c1d50c2b7cf"
  },
  {
    "url": "assets/js/75.7ff7b3b4.js",
    "revision": "b80d47a765cb4b669323105496690258"
  },
  {
    "url": "assets/js/76.14fce2d5.js",
    "revision": "59ea5472a07210b80fd23db4daee1d7c"
  },
  {
    "url": "assets/js/77.34c3aefe.js",
    "revision": "9d03732816af712460b991aa62d89e5e"
  },
  {
    "url": "assets/js/8.7c61f84f.js",
    "revision": "c876bba91cd19fa7344c633ae0993564"
  },
  {
    "url": "assets/js/9.8d5e8257.js",
    "revision": "637629df08c1bd2fa3638a52d2043a46"
  },
  {
    "url": "assets/js/app.3289f146.js",
    "revision": "30a39de2d6ba3b5869b0635e824e5c70"
  },
  {
    "url": "assets/js/vendors~docsearch.0030fbdb.js",
    "revision": "f2a8cf49a507072bebbe46bba8224c41"
  },
  {
    "url": "bit-wide.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "cli-new-project.png",
    "revision": "92eba99ef4ce3133242f6f3b1b7fae3c"
  },
  {
    "url": "cli-select-features.png",
    "revision": "b3a275b99d5505ee4622395a05c9b52a"
  },
  {
    "url": "componentsDocs/button.html",
    "revision": "0863d0626ea821c91a91722a75b5c6b4"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "666f202442fa01981adf47c05179870a"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "1e213681746d49fc223a35d507628da1"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "46249269a3637d2a640932b64f9691e2"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "4e3f7993cb282f80c25fb91df8b0b2df"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "dcc08e85a656e424bbdfc0eb8eb7c9bf"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "96846cc2399b4908cf881fc5706e7624"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "e559c319acabb628cbec80c234c90203"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "8ede4bdc0477d218e02c2298c95ea47a"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "56eddadc5d9811525bdc3884c3fb5386"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "08ffc9759688a8c1535e5d4fd9ce576c"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "2649069ec3f7239e9e507e2a6b771080"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "e9612dd1f5579b1778218618afd61da3"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "4d33abf3c6a6da0aaf7b2b1f2cb1d460"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "ee0b838df8a4ac5141d5c615e301a7a9"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "design/alignment.zh-CN.html",
    "revision": "f572a365fc959b268fbd438cc71e28f6"
  },
  {
    "url": "design/article.zh-CN.html",
    "revision": "70eefa4de67b6fcec12f3c254351eb01"
  },
  {
    "url": "design/cases.zh-CN.html",
    "revision": "9d5264a908015d9f1156ca776950db04"
  },
  {
    "url": "design/colors.zh-CN.html",
    "revision": "456afccfc95665af0fcefe5db7f5fae3"
  },
  {
    "url": "design/contrast.zh-CN.html",
    "revision": "5a7eca5bd29837da3281c204ede0c557"
  },
  {
    "url": "design/copywriting.zh-CN.html",
    "revision": "932ad0f9de0193785360bf7b9006146e"
  },
  {
    "url": "design/data-display.zh-CN.html",
    "revision": "4688ff10a4f208e9acfea0e7bc216898"
  },
  {
    "url": "design/data-entry.zh-CN.html",
    "revision": "8be0748a5e1a980ba42c48c1639b66bb"
  },
  {
    "url": "design/direct.zh-CN.html",
    "revision": "45cf6aec5ce622651ddb3bf838896880"
  },
  {
    "url": "design/download.zh-CN.html",
    "revision": "29b067a4f711dbb904fc6f583c200aff"
  },
  {
    "url": "design/feedback.zh-CN.html",
    "revision": "b6e014187d0099b4570f9dd7ba8c3d09"
  },
  {
    "url": "design/font.zh-CN.html",
    "revision": "610e6399c396182e9c469e9e259f44de"
  },
  {
    "url": "design/icon.zh-CN.html",
    "revision": "03b02633ff67d7e83093abe1be883bf8"
  },
  {
    "url": "design/index.html",
    "revision": "e5c0bfb796a3c56553fae27d33b1777f"
  },
  {
    "url": "design/invitation.zh-CN.html",
    "revision": "eee366baec4436aab85f59fd1e7c7a6b"
  },
  {
    "url": "design/layout.zh-CN.html",
    "revision": "6d9287fd86899bcbf2e7d80578a5cd2d"
  },
  {
    "url": "design/lightweight.zh-CN.html",
    "revision": "829daead7bb4b579cbf0dfa25ecd3c69"
  },
  {
    "url": "design/motion.zh-CN.html",
    "revision": "48f234a7ea0d08297b294809169b9b08"
  },
  {
    "url": "design/navigation.zh-CN.html",
    "revision": "50ce86239bba72c51fe83a406c5baa77"
  },
  {
    "url": "design/overview.zh-CN.html",
    "revision": "fec69509108c5561cebc6e1ac40a962b"
  },
  {
    "url": "design/proximity.zh-CN.html",
    "revision": "20e9ab65b36f2ad6da5d09ae3bb9cedd"
  },
  {
    "url": "design/reaction.zh-CN.html",
    "revision": "c90da363e62a2b55a58b71ae7dea4003"
  },
  {
    "url": "design/reference.zh-CN.html",
    "revision": "ec014cf7094ae70c34c6ddef98bbdf2e"
  },
  {
    "url": "design/repetition.zh-CN.html",
    "revision": "866c987f2d086f59b6f06f938eb20dbd"
  },
  {
    "url": "design/stay.zh-CN.html",
    "revision": "e081f46e82273ee0d59846a8a8e4ce1a"
  },
  {
    "url": "design/transition.zh-CN.html",
    "revision": "be094a8c9bdcb11fa3be41866bc3a6c0"
  },
  {
    "url": "design/values.zh-CN.html",
    "revision": "601bd4bf82d34161f64db41e4b1f7a3c"
  },
  {
    "url": "design/visual.zh-CN.html",
    "revision": "89d797eca03c6a952194fd782bcec994"
  },
  {
    "url": "design/work-with-us.zh-CN.html",
    "revision": "0c2e642a32e1b1f8e78ab77b8823c424"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "576085a944dc357e9b909611ca079b92"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "02c592fa401754add239cb5173a015e5"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "3e57a570356f486bc842eb0be17e12d3"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "1ce2a576fee8c179c81b01fabd694a34"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "c8be3ccc941a2dca3904f2fb008f962c"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "6a343302e4938af5fe21af6d11226aa8"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "generator-template.png",
    "revision": "48e1da57cb9739a5ed48a4631889a951"
  },
  {
    "url": "guide/browser-compatibility.html",
    "revision": "67b9229999538fee806f4e2f8b42f90d"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "49fbc118265ea189cbefc8475e9a8732"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "f58d1674e8b122b7eb4e85bde2307b7c"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "8e39d55d412d6c5872ab1ddb883ca868"
  },
  {
    "url": "guide/css.html",
    "revision": "2fa7c9da85e79fe3862c2ee77a9de029"
  },
  {
    "url": "guide/deployment.html",
    "revision": "42aa674b476ccb772492288ce411faca"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "d9769092b3d997e9f40692bb43f4c50e"
  },
  {
    "url": "guide/index.html",
    "revision": "9d952b4df5475cb3d325493bd5362276"
  },
  {
    "url": "guide/installation.html",
    "revision": "6a3322c5b89bb49d782fb20694a214b2"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "1b2728a2d635d8a7776da14ebc1f6aea"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "8cd1c64212c62d084919dbc8cc72872f"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "0093d263cc5719d4079fe68c8e4fd25e"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "fc55c828fe44f76ce2c67e0ecbc7e87e"
  },
  {
    "url": "guide/webpack.html",
    "revision": "36aede61ff87e13baa8267eeb6bf2fd0"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1496c5b493d6cc7b0edf97cee54923af"
  },
  {
    "url": "plugin-search-item.png",
    "revision": "6f65b4e8ae9bd1afa8f0c9cfe64f769c"
  },
  {
    "url": "plugins.png",
    "revision": "ce8ce5bfc34d3ef709895d66fff8396a"
  },
  {
    "url": "prompts-example.png",
    "revision": "66d10e746046951dec06a6db3e2c816e"
  },
  {
    "url": "screenshot.png",
    "revision": "b09e5bcd945dadfff7e8116d1c46a44d"
  },
  {
    "url": "suggestion.png",
    "revision": "dbac5be64fdb516e564fde02974eb833"
  },
  {
    "url": "task-view.png",
    "revision": "3efc61b1c61f79381daec24ec060b3e3"
  },
  {
    "url": "tasks-ui.png",
    "revision": "4b271c3a1df05f3ba9cec18829ab3fd9"
  },
  {
    "url": "ui-analyzer.png",
    "revision": "89f829eb201f268fc8ef5698ef2f5d9a"
  },
  {
    "url": "ui-browse-local-plugin.png",
    "revision": "3358f71b0bc6ae733cb5beb10a35f686"
  },
  {
    "url": "ui-config-start.png",
    "revision": "9bdac28bae9920012076bbc823252386"
  },
  {
    "url": "ui-configuration-default.png",
    "revision": "90b1cc05688b6c230d2e4e7ce5fa0e8c"
  },
  {
    "url": "ui-configuration.png",
    "revision": "7198b603bebca0fea84b51f1745f48ef"
  },
  {
    "url": "ui-greet-task.png",
    "revision": "97dded6e9f515a18827bbe4caacf6210"
  },
  {
    "url": "ui-new-project.png",
    "revision": "b445678f1a79c36cb74b54971e2959f9"
  },
  {
    "url": "ui-plugin-refresh.png",
    "revision": "6ae0e6a9a0e86562dd234e743724f0f0"
  },
  {
    "url": "ui-project-manager.png",
    "revision": "71cfde004266603a0998a90342977fa8"
  },
  {
    "url": "ui-prompts.png",
    "revision": "9442e88075c4fbc30cfa91dd2bbf0075"
  },
  {
    "url": "ui-select-plugin.png",
    "revision": "65e7155d35a866b94ecc09f978e93c87"
  },
  {
    "url": "vue-cli-ui-schema.png",
    "revision": "08266803bd50c4ba141a52c81f8e1b0c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
