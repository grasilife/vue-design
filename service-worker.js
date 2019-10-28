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
    "revision": "efe6491084f0ba3d9dfb924bc43f5a27"
  },
  {
    "url": "assets/css/0.styles.20fa447c.css",
    "revision": "38858814afd32401c9778e7c65da7d2a"
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
    "url": "assets/js/10.dec7e91f.js",
    "revision": "e731b65cb1db09e091b208515c4669c3"
  },
  {
    "url": "assets/js/11.9b10918f.js",
    "revision": "851fd1d5ad93739b45f7743093d5890f"
  },
  {
    "url": "assets/js/12.dfbc7ea4.js",
    "revision": "14e03fbfc11c95df602337a66273d9e0"
  },
  {
    "url": "assets/js/13.b9d2a14f.js",
    "revision": "a14cef2751e9f91af726154059c6ae7c"
  },
  {
    "url": "assets/js/14.2359a873.js",
    "revision": "6c5d77dc4684fa3788de7bf28ba3923c"
  },
  {
    "url": "assets/js/15.94762f6f.js",
    "revision": "5491f361e863b300706aed028fb11c4a"
  },
  {
    "url": "assets/js/16.603856c4.js",
    "revision": "91420dfec99b17d85e9472cc589ebfb7"
  },
  {
    "url": "assets/js/17.7f939703.js",
    "revision": "14f6ebb1c3dc707b9003ad2a128f2478"
  },
  {
    "url": "assets/js/18.888b4015.js",
    "revision": "01dc93fd919255bb6f502092f8dddc05"
  },
  {
    "url": "assets/js/19.0034fab5.js",
    "revision": "2ed18a8bb33e638554ef7623fd4b6532"
  },
  {
    "url": "assets/js/20.75035e37.js",
    "revision": "59c2efed4da81e9f6720ec77aed11dcd"
  },
  {
    "url": "assets/js/21.e6392940.js",
    "revision": "c5928e2ef96a98158d3d129d45fd8cb7"
  },
  {
    "url": "assets/js/22.1916563b.js",
    "revision": "a9e3fddb57ffafa44966477941bb7d66"
  },
  {
    "url": "assets/js/23.99240db0.js",
    "revision": "d4c73cf2b7c27d2122307d9c9e71f028"
  },
  {
    "url": "assets/js/24.ff171a22.js",
    "revision": "c04902cd0a22f640a214b2928e082e92"
  },
  {
    "url": "assets/js/25.7bdb7874.js",
    "revision": "24643c7cc5519abe36997f31f9d83e60"
  },
  {
    "url": "assets/js/26.00316607.js",
    "revision": "a9ef773bfbf8507c90f080c22952b5e9"
  },
  {
    "url": "assets/js/27.aac06806.js",
    "revision": "21ede4690bbadd0a0185d94b0b80501f"
  },
  {
    "url": "assets/js/28.f4249e23.js",
    "revision": "d60ca1f79f8f590f3b0b7f121d2a7948"
  },
  {
    "url": "assets/js/29.b3833e7a.js",
    "revision": "501179d0723c8c895f16292a5adec8ad"
  },
  {
    "url": "assets/js/3.579ff110.js",
    "revision": "260a5a5c670bdc848e58fc5d44b48a06"
  },
  {
    "url": "assets/js/30.d7186fc7.js",
    "revision": "f814c09483b133d4d72e99625725e189"
  },
  {
    "url": "assets/js/31.16fdf295.js",
    "revision": "b0dbab429bb21dfdee398b51b23c7364"
  },
  {
    "url": "assets/js/32.1757d2eb.js",
    "revision": "3df82a6c63bb2efe8c58ad47f2f70ae5"
  },
  {
    "url": "assets/js/33.5a29b40a.js",
    "revision": "e7a6a3f63765920007ed6ff806a3e023"
  },
  {
    "url": "assets/js/34.7b8e7d93.js",
    "revision": "6f7de856adab7a7fec1852e637de57d5"
  },
  {
    "url": "assets/js/35.db995b69.js",
    "revision": "79e6ab4ab97f4c7e7933f6dc89b192ea"
  },
  {
    "url": "assets/js/36.393e8fb1.js",
    "revision": "e6f399102e6e4b28656c9763115fa095"
  },
  {
    "url": "assets/js/37.1aa167c0.js",
    "revision": "a2a1fe3e03a3fb1338e20ca2ddd878e3"
  },
  {
    "url": "assets/js/38.f79ebd48.js",
    "revision": "8fcbb1c18c7ea5839b024a173ddd888d"
  },
  {
    "url": "assets/js/39.2d9f2355.js",
    "revision": "4c9d13c4fa5823a1190a355c61599ea0"
  },
  {
    "url": "assets/js/4.8e57af99.js",
    "revision": "44984d2fb7a1359bf160c44610513ff9"
  },
  {
    "url": "assets/js/40.80f753ca.js",
    "revision": "387868b437c8d2cf9c5cad72b1810ad7"
  },
  {
    "url": "assets/js/41.22a219c9.js",
    "revision": "7b6bf28538ef9056d5e5e4e5d31e4d80"
  },
  {
    "url": "assets/js/42.2d05323e.js",
    "revision": "e874cc68d7be96961c436989ecee6151"
  },
  {
    "url": "assets/js/43.99990c07.js",
    "revision": "589f3c3426b45e6636de9c1a162e51db"
  },
  {
    "url": "assets/js/44.28867c99.js",
    "revision": "c9fa7e4d8a3788b3fef4e17697883f40"
  },
  {
    "url": "assets/js/45.b0a5d0d7.js",
    "revision": "cd444d67113a982f46d614e6eb802731"
  },
  {
    "url": "assets/js/46.a00e2ef2.js",
    "revision": "b65977ed1935d3e62b528336c3f9161a"
  },
  {
    "url": "assets/js/47.218b74c4.js",
    "revision": "08c0bfde8249c4ac3cc38b0043a814c4"
  },
  {
    "url": "assets/js/48.5cba6faa.js",
    "revision": "77c135d2e33c07e32a3dd28ea3f362fd"
  },
  {
    "url": "assets/js/49.448aec92.js",
    "revision": "decdaea045268ca6ffcfbb9fa6754a65"
  },
  {
    "url": "assets/js/5.024c3c7c.js",
    "revision": "5aa4388e750fbcaf49b0d902f7ed4b29"
  },
  {
    "url": "assets/js/50.047a10f9.js",
    "revision": "befd654c019cf65cef47b9473b810f01"
  },
  {
    "url": "assets/js/51.e03c7a3e.js",
    "revision": "34c5ecdc48e080a12be7371cf9b408ea"
  },
  {
    "url": "assets/js/52.2f55b3e9.js",
    "revision": "b655e9fcae19bee9bd9736016d532ce9"
  },
  {
    "url": "assets/js/53.b7335e74.js",
    "revision": "c5b5dcb75ee0456ee41138091c2e41b2"
  },
  {
    "url": "assets/js/54.7795c91b.js",
    "revision": "cb8f04061b0af398d0e7ba0cd41120f9"
  },
  {
    "url": "assets/js/55.71d59b0c.js",
    "revision": "06c90f9ab870851dc48a1d1b88dceeda"
  },
  {
    "url": "assets/js/56.14eccb0a.js",
    "revision": "30f8fa7b8a99e0f96e337f2bc09c835d"
  },
  {
    "url": "assets/js/57.2a6eb28f.js",
    "revision": "a7278d73dd04f73bf7275be2dbb1986c"
  },
  {
    "url": "assets/js/58.d31adb2f.js",
    "revision": "dd3cba2148cbb615e579876127f2a24e"
  },
  {
    "url": "assets/js/59.af5d6ede.js",
    "revision": "3211d4eba9cd7ee3f44a63dc273e3435"
  },
  {
    "url": "assets/js/6.8cd74dce.js",
    "revision": "fe633bfac5cc8d76afe52bac4c09400e"
  },
  {
    "url": "assets/js/60.c026cbb1.js",
    "revision": "3363086a80b1aef51c7c529e78cd373c"
  },
  {
    "url": "assets/js/61.5f77e7be.js",
    "revision": "9752a5df76fe01a7d5f9bb4633e8add6"
  },
  {
    "url": "assets/js/62.e5f405d5.js",
    "revision": "a112a011d40d1e8b6b1e4f3574802a8c"
  },
  {
    "url": "assets/js/63.8c960407.js",
    "revision": "3066591d28d9e3764abcad5c84f2b71d"
  },
  {
    "url": "assets/js/64.4dfd9d84.js",
    "revision": "380f956a52b4200a633b28077f725388"
  },
  {
    "url": "assets/js/65.14d5d670.js",
    "revision": "aae0db1064fd2d0a3fd82ed8942bef05"
  },
  {
    "url": "assets/js/66.bcee767f.js",
    "revision": "4219984b1a25213ee0bf2b9780b7d465"
  },
  {
    "url": "assets/js/67.1759129a.js",
    "revision": "efb01810b9c5b82611ca9e8c0b97c268"
  },
  {
    "url": "assets/js/68.82c2ff9b.js",
    "revision": "5b50e0f9cc4ac1a05c936fff9729f65d"
  },
  {
    "url": "assets/js/69.dc7f9d82.js",
    "revision": "76b4bbc285196bacc2e473db517f7eb1"
  },
  {
    "url": "assets/js/7.f012ec4c.js",
    "revision": "432dfbdf7eb0032c2e19cfb3d5d17e18"
  },
  {
    "url": "assets/js/70.b42dc1c1.js",
    "revision": "e1ee0fafbf4305d8820c4ccdbb4782c1"
  },
  {
    "url": "assets/js/71.78e4d9fb.js",
    "revision": "ab2922756dacc94a65f8c611194d8acf"
  },
  {
    "url": "assets/js/72.03e9f58b.js",
    "revision": "5bb49426957750360e2d7dcac6646e73"
  },
  {
    "url": "assets/js/73.14a27c11.js",
    "revision": "8c6df5ec641e0daf5265188d20decab1"
  },
  {
    "url": "assets/js/74.762e3a60.js",
    "revision": "3f897613ba4ab16329b488e98d2f1e30"
  },
  {
    "url": "assets/js/75.99acdedf.js",
    "revision": "0411b85ca0f8b95e594620c78c55936f"
  },
  {
    "url": "assets/js/76.3311337b.js",
    "revision": "3fd46fcc0c0ffcc02449a818165e1143"
  },
  {
    "url": "assets/js/77.ea933a6e.js",
    "revision": "b3005be7d302ab9f4cb427d63f560b90"
  },
  {
    "url": "assets/js/78.a5a17fb9.js",
    "revision": "1aa4995a3ecc14fb9b4e4d0a8c798617"
  },
  {
    "url": "assets/js/79.18d51288.js",
    "revision": "e79da29402db5bd3f859776b9e17a522"
  },
  {
    "url": "assets/js/8.54b8f028.js",
    "revision": "62861aed9cc0e94345c0200bc6c1da6e"
  },
  {
    "url": "assets/js/80.385e0e25.js",
    "revision": "bd821c807b470d733bf86496e05739ae"
  },
  {
    "url": "assets/js/81.c4a05fe3.js",
    "revision": "b33757833cada4278ce4ef9b5d1b1921"
  },
  {
    "url": "assets/js/82.0803268a.js",
    "revision": "4a0bb30ff22020a2bb6cdf16349939bb"
  },
  {
    "url": "assets/js/83.807924bd.js",
    "revision": "823552ed39160a6cf42e37bf34e3eaaf"
  },
  {
    "url": "assets/js/84.4c1b29ad.js",
    "revision": "b849ed8a4cdc88f8572faecb846435ca"
  },
  {
    "url": "assets/js/85.97cf644e.js",
    "revision": "2e10e7ed9e97e364d044ba7166d55d52"
  },
  {
    "url": "assets/js/86.1182d3b7.js",
    "revision": "49c11da0b10c117c827ee7d3070fc5d9"
  },
  {
    "url": "assets/js/9.bf078d4e.js",
    "revision": "22e61b6a046c19e899154dd8579b3a17"
  },
  {
    "url": "assets/js/app.b56d8f80.js",
    "revision": "9ecf30c16d5ca80f89dd85b75b824d6e"
  },
  {
    "url": "assets/js/vendors~docsearch.433acaa7.js",
    "revision": "95e6bcd232e8311bc31951432e6b7df0"
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
    "revision": "c22aecc4e81b014832a7fafc92ea9812"
  },
  {
    "url": "componentsDocs/changelog.html",
    "revision": "39c783ca6af341a60951e3cb18dd845f"
  },
  {
    "url": "componentsDocs/contributing.zh-CN.html",
    "revision": "ea40744dc5095b8248f40b7b425ab4de"
  },
  {
    "url": "componentsDocs/customize-theme.zh-CN.html",
    "revision": "d8271db82da55030e8a1ab5709aa7ee3"
  },
  {
    "url": "componentsDocs/faq.zh-CN.html",
    "revision": "89e133b0f531b41d825e8a068ff60a2e"
  },
  {
    "url": "componentsDocs/getting-started.zh-CN.html",
    "revision": "1e4da9133ec964beeaafd81cabff595b"
  },
  {
    "url": "componentsDocs/i18n.zh-CN.html",
    "revision": "ceffc8f36d8a64770acefc01cdc5f950"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "20236143f201a44c8e73c2c8e9c5ad2e"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "09f063facdc1b60028a2120033582357"
  },
  {
    "url": "componentsDocs/introduce.zh-CN.html",
    "revision": "ff9aca64c3a6ca7dde434942fd30f638"
  },
  {
    "url": "componentsDocs/practical-projects.zh-CN.html",
    "revision": "4f484427ea10c7387d66576fa5b632d3"
  },
  {
    "url": "componentsDocs/use-with-create-react-app.zh-CN.html",
    "revision": "698a268b333ee77bf502bc7f69c3bd4f"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "8b92ec2c173e787620654ffb342f90ce"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "c0d1ecb5663099a9435cd2dfcd740c2b"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "8d78effec0c568acc1bc46761b8c498c"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "73b7c8ecf63b41603cde631229026a4a"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "bb5041beb632cba4a57aa7f845d1b227"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "4930a9dc468d61482f3212038ef78293"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "5df3c80005e34a1c1c74bb33667e00cc"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "f792a8afbffb4060f945d34c6e892f9b"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "2c6eea0476d5afe06178428fe9ac0f9f"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "a5f78c61d7dcec9e788ae28f5ddb48e0"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "e4b222ebf91415202befc54d306f1e08"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "f14adf8438cb44c996ef4775501a6b7d"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "design/alignment.zh-CN.html",
    "revision": "fe738d29c788934c536d19f879b92636"
  },
  {
    "url": "design/article.zh-CN.html",
    "revision": "f748bd4880a123251a5adbea32433f7d"
  },
  {
    "url": "design/cases.zh-CN.html",
    "revision": "930c16d54bfa1b0384f912a6e7c651c5"
  },
  {
    "url": "design/colors.zh-CN.html",
    "revision": "c524cde1868471470438f75ab1667a19"
  },
  {
    "url": "design/contrast.zh-CN.html",
    "revision": "cd9485a8c8d80cfbef99bdcabada15d7"
  },
  {
    "url": "design/copywriting.zh-CN.html",
    "revision": "f574401be286b8782bbfcfc641a0c110"
  },
  {
    "url": "design/data-display.zh-CN.html",
    "revision": "18ecc0dab0504171d184fdd7dc3860ab"
  },
  {
    "url": "design/data-entry.zh-CN.html",
    "revision": "7b3e1feb994f9fde1598e7c5479e5232"
  },
  {
    "url": "design/direct.zh-CN.html",
    "revision": "20dda9b411f87257b545cb6ed0fc3ff0"
  },
  {
    "url": "design/download.zh-CN.html",
    "revision": "10b01040e06b91d6b6576f9180419038"
  },
  {
    "url": "design/feedback.zh-CN.html",
    "revision": "3d5f12e32dc4da4687df98db8e9b9616"
  },
  {
    "url": "design/font.zh-CN.html",
    "revision": "956a362a2a73fac2774d288d00520690"
  },
  {
    "url": "design/icon.zh-CN.html",
    "revision": "9ae276a7c58b72b30f60a5699c0c6a56"
  },
  {
    "url": "design/index.html",
    "revision": "681d9f0691bbb37683733a852f822634"
  },
  {
    "url": "design/invitation.zh-CN.html",
    "revision": "8e810796c3e8d8a05966e82c803ef1c8"
  },
  {
    "url": "design/layout.zh-CN.html",
    "revision": "c7f032a678ad7f7540301b4b7a142877"
  },
  {
    "url": "design/lightweight.zh-CN.html",
    "revision": "97dd0a2204f8248e8e187fc9aac7b5a6"
  },
  {
    "url": "design/motion.zh-CN.html",
    "revision": "a378251b9c701fad336864472c4866ff"
  },
  {
    "url": "design/navigation.zh-CN.html",
    "revision": "228211911322e5430ad6ad2b94d1037c"
  },
  {
    "url": "design/overview.zh-CN.html",
    "revision": "59973dc5dadea65164aa3748beed9666"
  },
  {
    "url": "design/proximity.zh-CN.html",
    "revision": "52e20a6d2fbfd806cbd2959decdca2b8"
  },
  {
    "url": "design/reaction.zh-CN.html",
    "revision": "58b891eb6edb1241716dc60ca3d18a3b"
  },
  {
    "url": "design/reference.zh-CN.html",
    "revision": "6c23e4884c648d66cadb5cb60a4f1be6"
  },
  {
    "url": "design/repetition.zh-CN.html",
    "revision": "23829f534f984fcb64c4a8c2601bbea1"
  },
  {
    "url": "design/stay.zh-CN.html",
    "revision": "fe897956e6e18b12fa99745d692c9375"
  },
  {
    "url": "design/transition.zh-CN.html",
    "revision": "1b2aec7f6797cca320ed8b8c5c707ade"
  },
  {
    "url": "design/values.zh-CN.html",
    "revision": "b7dc05a64a6fa2b866161be8c77c1ec4"
  },
  {
    "url": "design/visual.zh-CN.html",
    "revision": "23ab241e7de81be816946422b3ef4394"
  },
  {
    "url": "design/work-with-us.zh-CN.html",
    "revision": "44ba3daabcf58889c7d6c3e91112a639"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "775504ad98dee3a33eec0bb39c560e35"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "410e3c40a07b6f02f14c9880b7221df5"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "dad074f37cf36bff614f434d7ab2db62"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "c4b50f8f10d41b59bc01e78cdac9c0a3"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "5469dcc74b1ecca257ec6b67c1fd3f87"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "f6c2d3b83f52d1f9e2c34d91291a705f"
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
    "revision": "6c04a5ce371634bf4e7f996929b91629"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "8735663886a48a8d5aadbc65c853724f"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "0c9643dbea1c6483949faba118ac606f"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "177c15d5f4581df269e22ebbabee0c86"
  },
  {
    "url": "guide/css.html",
    "revision": "9cfa916cf9ec3cfc611d3db0898c1ba8"
  },
  {
    "url": "guide/deployment.html",
    "revision": "1fb75290e59a18a0cda9faa24b4bf587"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "df7011fc39913950c3c0db3958b7c388"
  },
  {
    "url": "guide/index.html",
    "revision": "0cc31d9e659026e8c0771c91b8b073e2"
  },
  {
    "url": "guide/installation.html",
    "revision": "f7e78d3f8e1fe189bd0607a3345e62c0"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "fdebe26092fc9a79a49a32cf4a948686"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "33a106837b1c8fd859418f87878bccc4"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "8ee89e74838b0659e320b46d31741e01"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "dd472b58d92a665233ac0ad7503f47ac"
  },
  {
    "url": "guide/webpack.html",
    "revision": "a2c7f161abae2b3c1225d472569fc43e"
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
    "revision": "f550b66a0113c065f9d88db88c4956af"
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
