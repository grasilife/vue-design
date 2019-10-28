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
    "revision": "c529a08873e5afb9b590cb4b7727ce06"
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
    "url": "assets/js/app.50a4fef7.js",
    "revision": "00199b35c1638f0e033be0df635b7790"
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
    "revision": "66c89a47fba0d8a153200d2ebda8ce6e"
  },
  {
    "url": "componentsDocs/changelog.html",
    "revision": "f0fd6fae60e746c3e865502558893c8c"
  },
  {
    "url": "componentsDocs/contributing.zh-CN.html",
    "revision": "f3f315fe6bf57a83f937d812f100c7cf"
  },
  {
    "url": "componentsDocs/customize-theme.zh-CN.html",
    "revision": "3667bcd90ebfda4a0a3e1fb88be4b755"
  },
  {
    "url": "componentsDocs/faq.zh-CN.html",
    "revision": "2a8a920eeda8c34a11a8cd53660071f7"
  },
  {
    "url": "componentsDocs/getting-started.zh-CN.html",
    "revision": "d4460de30b535251ccbe63382983e060"
  },
  {
    "url": "componentsDocs/i18n.zh-CN.html",
    "revision": "44181d2d706be0f85e0ee95b55bdf7c1"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "3245c41c5645b4a59374947b224e9b06"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "ecf8e38880625113d2e568ad529df235"
  },
  {
    "url": "componentsDocs/introduce.zh-CN.html",
    "revision": "e49afde66ba86252a4b7b05ca1680f6e"
  },
  {
    "url": "componentsDocs/practical-projects.zh-CN.html",
    "revision": "87366972cc6461ac79bf96ca853e0fba"
  },
  {
    "url": "componentsDocs/use-with-create-react-app.zh-CN.html",
    "revision": "bd0379dbcf4d3254d237b0adee9315ed"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "ce12d4524832a414b1da62c282fc7570"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "4d857e359ed71c3d39c5cb78f233caee"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "f19826c983e7696baeff2094eaba370b"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "8ac39ff7950688e2947f7fb4c4c7f250"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "5b19db1bb9b2ad24e51e60952099769d"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "3030b8d6810e3d280d112b435c77ca8d"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "b1729533e97bbed2ade5dcf1292d212e"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "2a6d4d0b4948a4fa3a91808afca6bd48"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "a8f179247363e79b907a7cc87b10e590"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "9cb2c6d0eea90d908287d9011be6ac29"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "cc1434595ac2ed5dec1726b482b32b74"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "2d9e99e9452b4274c6c7ab29ab1ba141"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "design/alignment.zh-CN.html",
    "revision": "170e3aafa03e14c9cfdef47daa3cf308"
  },
  {
    "url": "design/article.zh-CN.html",
    "revision": "f1f64c3110068f1afd9514a36d9e0253"
  },
  {
    "url": "design/cases.zh-CN.html",
    "revision": "9e6d27d9695cafd027a661f407966ff5"
  },
  {
    "url": "design/colors.zh-CN.html",
    "revision": "a305c2da84c9f8beedb15b9acfc9019b"
  },
  {
    "url": "design/contrast.zh-CN.html",
    "revision": "3757d6a317f1e3e9183d84eb9bab653a"
  },
  {
    "url": "design/copywriting.zh-CN.html",
    "revision": "16e31b228e9970324cdd860d387a8d70"
  },
  {
    "url": "design/data-display.zh-CN.html",
    "revision": "1079cfd4eb3b79ffd679ab42e12f21f1"
  },
  {
    "url": "design/data-entry.zh-CN.html",
    "revision": "6886a6515c627e64a78b8507ef14344c"
  },
  {
    "url": "design/direct.zh-CN.html",
    "revision": "ca60bf2e484feaf5ffdd239e00d67831"
  },
  {
    "url": "design/download.zh-CN.html",
    "revision": "6e4f05fdf3ca8573b621cbfcd7c0b7e6"
  },
  {
    "url": "design/feedback.zh-CN.html",
    "revision": "7e56ee905fb9b354ac3dacabbb0cabed"
  },
  {
    "url": "design/font.zh-CN.html",
    "revision": "c01022f6e65e3bfc005e24f342a858c6"
  },
  {
    "url": "design/icon.zh-CN.html",
    "revision": "cfc7eaa539863376b609cd9ac47fc865"
  },
  {
    "url": "design/index.html",
    "revision": "f092377052bde0d4fceabfd0fd6f7419"
  },
  {
    "url": "design/invitation.zh-CN.html",
    "revision": "86400f825fe68856d3ce713278265629"
  },
  {
    "url": "design/layout.zh-CN.html",
    "revision": "aa26b66dac44da3134297c72c58c9b5b"
  },
  {
    "url": "design/lightweight.zh-CN.html",
    "revision": "7f2d43e71108deaf47cfce92de53f6c0"
  },
  {
    "url": "design/motion.zh-CN.html",
    "revision": "1fb1bf1606f8f3ebaca4b5ae8417d3d7"
  },
  {
    "url": "design/navigation.zh-CN.html",
    "revision": "cb7a04f2bbab25bbd869e76ab883685c"
  },
  {
    "url": "design/overview.zh-CN.html",
    "revision": "6fcd3d679d02fdb4b2a86d65da9db618"
  },
  {
    "url": "design/proximity.zh-CN.html",
    "revision": "6b0d038f263f2d9b4a35116b623818b0"
  },
  {
    "url": "design/reaction.zh-CN.html",
    "revision": "fad39243f787af378901eacca280d408"
  },
  {
    "url": "design/reference.zh-CN.html",
    "revision": "ff0779267e6b6d82535f8519d5d35c67"
  },
  {
    "url": "design/repetition.zh-CN.html",
    "revision": "5909d67917a5ca78d39839dc56e009b6"
  },
  {
    "url": "design/stay.zh-CN.html",
    "revision": "b715d9e22e51f2060c706a92a0ec872e"
  },
  {
    "url": "design/transition.zh-CN.html",
    "revision": "107dbfc38a7d172d117bf6fe4cc62652"
  },
  {
    "url": "design/values.zh-CN.html",
    "revision": "247d37cb4c15cedde9d84c297d10bd9d"
  },
  {
    "url": "design/visual.zh-CN.html",
    "revision": "058f6bd0a5ad9927a0fdc40ad229fdaa"
  },
  {
    "url": "design/work-with-us.zh-CN.html",
    "revision": "71309f9f83ba740e03aa741687689ede"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "e5393e7ec3beb41fe45485ccaee1404d"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "22343bec3f9ddd4a83a2388fd842b175"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "0d7e72c5d9c1d07e60b1e0956e8223cd"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "d370a7184453ebfe85dbd69a337313c2"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "4dadef0f4abaae8489d946404d36bd4d"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "f9b882b6430b8780e45c6c8b507dd9a1"
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
    "revision": "f42715e186e46efb4821c48f02ec6ef8"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "a2b5ef40befab43d8cb5e648bdea1c3e"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "8c012872d855b501f4fca1782eb26357"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "01dbf9ced92913a19ed6b1c836a15ce4"
  },
  {
    "url": "guide/css.html",
    "revision": "75359574fd2ff6e44209fc7046bac96a"
  },
  {
    "url": "guide/deployment.html",
    "revision": "e9e1398b4131e0369623e755d39a73fd"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "b26c887ea030c2194523324226550507"
  },
  {
    "url": "guide/index.html",
    "revision": "4cfaa953ff0a5e1f1119f9ba508cb6a3"
  },
  {
    "url": "guide/installation.html",
    "revision": "7bb67344a15913ce56a65c64fac72471"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "38398f6ea0d90f4953359d80f63ce873"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "94e71525b59c1f6ab2e8ba11769943ad"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "fa6911417a7067890fa7f883e772e13a"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "b877f6e6f584c034ce3b0d07616139f4"
  },
  {
    "url": "guide/webpack.html",
    "revision": "e5ed0223729ece7bf3fb65478cb506a5"
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
    "revision": "89490ab32dbc693b6ffb56862bf99274"
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
