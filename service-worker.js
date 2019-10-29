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
    "revision": "eb470b3ecc7e0b92fac2efa3c5fa5ce7"
  },
  {
    "url": "assets/css/0.styles.db40ae97.css",
    "revision": "d5a6acba152e29e7158a41c06145498e"
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
    "url": "assets/js/10.a99428fa.js",
    "revision": "68f8399790388db91c5fdb620d3cf83d"
  },
  {
    "url": "assets/js/11.c11ec0e5.js",
    "revision": "2fdde8704cd3cb96294016980c3a6e3f"
  },
  {
    "url": "assets/js/12.e4475de6.js",
    "revision": "fdb8f721d8092a988e6d01c511546571"
  },
  {
    "url": "assets/js/13.cb697527.js",
    "revision": "d04b813c64f6cae2859720215aa49294"
  },
  {
    "url": "assets/js/14.648f15c6.js",
    "revision": "3a948e479a03a76ade9de5bf81c298e0"
  },
  {
    "url": "assets/js/15.169abdc1.js",
    "revision": "97e50120c0a6391674b98b1cf78d303c"
  },
  {
    "url": "assets/js/16.5092bca8.js",
    "revision": "159365e1c43eb710526e6174c28dcaae"
  },
  {
    "url": "assets/js/17.eb225a30.js",
    "revision": "2938242096796827f316750322461dfa"
  },
  {
    "url": "assets/js/18.61733bf1.js",
    "revision": "7e759340a014855c84ca145209be689a"
  },
  {
    "url": "assets/js/19.b1b678cb.js",
    "revision": "0c02db2c25d9fa96642ea6d21068c3f2"
  },
  {
    "url": "assets/js/20.6686c8fe.js",
    "revision": "7e0c54ed1851790d26db711afc103f7d"
  },
  {
    "url": "assets/js/21.e774a5c3.js",
    "revision": "f893cdbcaaf156875d7934c30f697ae8"
  },
  {
    "url": "assets/js/22.d52a5b96.js",
    "revision": "e931b2db4dd12284a4099ea16281aa2e"
  },
  {
    "url": "assets/js/23.d27a5ab5.js",
    "revision": "f644d5548fe26b9f645973ef19419af2"
  },
  {
    "url": "assets/js/24.9ce9f02c.js",
    "revision": "b479476d4ef642c82f35a755d6a66cc7"
  },
  {
    "url": "assets/js/25.25f61d41.js",
    "revision": "9c1e67994dbc81eb8259573f4e6c72d1"
  },
  {
    "url": "assets/js/26.94dbcddf.js",
    "revision": "ef4eaf0f171ad08bbcb2dc5d5ac1e9dc"
  },
  {
    "url": "assets/js/27.fe7acfab.js",
    "revision": "b955abba728c50869b4eb90edb668662"
  },
  {
    "url": "assets/js/28.a0deb0cf.js",
    "revision": "917976d2e723101de50ac61353d6b0f6"
  },
  {
    "url": "assets/js/29.d7ff73c3.js",
    "revision": "f3fec9486037c32092f16ef187f551db"
  },
  {
    "url": "assets/js/3.cd2e6205.js",
    "revision": "c5316c2270b7dfde93416959250fbc0b"
  },
  {
    "url": "assets/js/30.75386a70.js",
    "revision": "4e86ab3acaaed6d680e95c657ec30401"
  },
  {
    "url": "assets/js/31.3529d502.js",
    "revision": "0967c36d8d2751efbf388939907f0782"
  },
  {
    "url": "assets/js/32.5dde5fe1.js",
    "revision": "7bd06f5f871fd46f0dbc8f049b6c4da0"
  },
  {
    "url": "assets/js/33.693c0633.js",
    "revision": "63a17340969ea7893b54907cc4d8bd6c"
  },
  {
    "url": "assets/js/34.60d33caa.js",
    "revision": "7e073b278c00e86b87cf0fe1595cb8b9"
  },
  {
    "url": "assets/js/35.4e91c729.js",
    "revision": "17a7c0870d3c08b95bf7db267bd6b326"
  },
  {
    "url": "assets/js/36.0cb75e58.js",
    "revision": "785958e4b1be1f287583f72a0002bcff"
  },
  {
    "url": "assets/js/37.5a96dffa.js",
    "revision": "198c5f6c459d27eea4c47671cc3adb3d"
  },
  {
    "url": "assets/js/38.72f75415.js",
    "revision": "7c5300dba70539a38ffb518ff3f6fe0a"
  },
  {
    "url": "assets/js/39.6fe1e9eb.js",
    "revision": "8b0a1a7b3992391ffa5d8a05147685c8"
  },
  {
    "url": "assets/js/4.8dacd5dc.js",
    "revision": "1f1322151eeb8d5f8de20784914e9f2b"
  },
  {
    "url": "assets/js/40.303876a4.js",
    "revision": "b97415b453bf95bae62e1bd7a02e2e01"
  },
  {
    "url": "assets/js/41.0e67d268.js",
    "revision": "074d41b1ff18c382da370aa3112d0ba4"
  },
  {
    "url": "assets/js/42.7779940d.js",
    "revision": "04f2e2cb242ddc95c7d8ffc093ede603"
  },
  {
    "url": "assets/js/43.4a16f468.js",
    "revision": "efcb33b5cecba1617a5a625fcc3c8136"
  },
  {
    "url": "assets/js/44.afacf44f.js",
    "revision": "d188042822ecc613a2b3722e31494659"
  },
  {
    "url": "assets/js/45.4185870a.js",
    "revision": "e0d4c9f233ddae29a985a9bedd2d0948"
  },
  {
    "url": "assets/js/46.79542a63.js",
    "revision": "6ce8be741abcf0fc78c4bb59af5a4be3"
  },
  {
    "url": "assets/js/47.c6658b98.js",
    "revision": "e52a403e7a7d4b23571d38a379e8e787"
  },
  {
    "url": "assets/js/48.faab21e0.js",
    "revision": "73f6cae2e5494fef55009efe36769dd8"
  },
  {
    "url": "assets/js/49.4d911ee6.js",
    "revision": "952ae532fa0e5b7a6d2fccde3153ccd3"
  },
  {
    "url": "assets/js/5.25e0a774.js",
    "revision": "8c09df2df3785729ab5df26950d18ec9"
  },
  {
    "url": "assets/js/50.5f3a6e14.js",
    "revision": "ce85c603ed170003a1fce6ce629cace3"
  },
  {
    "url": "assets/js/51.a23333f3.js",
    "revision": "b66fd33655675ba27bc4f37e17b50276"
  },
  {
    "url": "assets/js/52.620743a4.js",
    "revision": "102eb26b58e17c827c5ce32eaf497514"
  },
  {
    "url": "assets/js/53.992615d8.js",
    "revision": "c082ed1fe5e4e418900b899078fea875"
  },
  {
    "url": "assets/js/54.d4c86103.js",
    "revision": "1616b454561492c72db38ab0c53468d0"
  },
  {
    "url": "assets/js/55.6d302cd8.js",
    "revision": "a5a2922de37173de63b80e60495f2bd5"
  },
  {
    "url": "assets/js/56.0db01569.js",
    "revision": "03ee465055858273d32606137adb96cc"
  },
  {
    "url": "assets/js/57.3c2d5edc.js",
    "revision": "363a1a9122262467535627cdd9e4d8fd"
  },
  {
    "url": "assets/js/58.cffcd475.js",
    "revision": "0c208837214726b391ac2007f0efe3de"
  },
  {
    "url": "assets/js/59.ac9e9fc4.js",
    "revision": "2c82881576298bb581d22b76c8369d13"
  },
  {
    "url": "assets/js/6.0d29693a.js",
    "revision": "3c107703ae4d680311a8d78d8e46a234"
  },
  {
    "url": "assets/js/60.7dab3fba.js",
    "revision": "5b45f5f8c21a03ac8598c9fbf9eaab44"
  },
  {
    "url": "assets/js/61.c43ea6b1.js",
    "revision": "d7093a86c9c41a7e85a48321fdab61f0"
  },
  {
    "url": "assets/js/62.457f4138.js",
    "revision": "d432c6d11670a7cf1bb4651b97c06d17"
  },
  {
    "url": "assets/js/63.71c444c7.js",
    "revision": "fb47d4a34d815d9ee615603a4cbf5bd5"
  },
  {
    "url": "assets/js/64.b6ec5380.js",
    "revision": "25f1cc728e69f7c510407576be2d03eb"
  },
  {
    "url": "assets/js/65.514ccb9a.js",
    "revision": "97e1a8c9356dba7d497bacb10fe92ecf"
  },
  {
    "url": "assets/js/66.533d1f09.js",
    "revision": "af95c4ce91fb257095c1ea23e7fd40a1"
  },
  {
    "url": "assets/js/67.590d1706.js",
    "revision": "58657d228a38aef1aa39218f47c51f5d"
  },
  {
    "url": "assets/js/68.ffaaba3c.js",
    "revision": "4b3c3bd8904ff2e667614253c7ec7828"
  },
  {
    "url": "assets/js/69.8be62ff4.js",
    "revision": "991de44e437aa046342df10a17da15b0"
  },
  {
    "url": "assets/js/7.6152352a.js",
    "revision": "545a846ba762c134918468cc5cf7c17b"
  },
  {
    "url": "assets/js/70.9ff25c31.js",
    "revision": "c5d28b7e8597202852f4c020c3a1a7eb"
  },
  {
    "url": "assets/js/71.a7557595.js",
    "revision": "a4b003a9bcded14a65bf1040d62d586c"
  },
  {
    "url": "assets/js/72.5d7fa5a4.js",
    "revision": "d50aa0cf30ec18fbcdc9559f67a3b241"
  },
  {
    "url": "assets/js/73.4d7249e8.js",
    "revision": "27179404573b23d4492e8b27c66d8852"
  },
  {
    "url": "assets/js/74.87377793.js",
    "revision": "66653adb2b3ab05ad9f72efad78bc94f"
  },
  {
    "url": "assets/js/75.dce76b14.js",
    "revision": "c8e91d4de222c3c870f18b9e757b9f5a"
  },
  {
    "url": "assets/js/76.a401494a.js",
    "revision": "49ad9497b660145f4f7f5abeb7b7f456"
  },
  {
    "url": "assets/js/77.36372630.js",
    "revision": "22ff4cacd4053849e17e40ff85b5a81e"
  },
  {
    "url": "assets/js/78.4e68b97f.js",
    "revision": "f0332e319984c4f8495a19805ad8cf65"
  },
  {
    "url": "assets/js/79.4a0bc1a7.js",
    "revision": "2e57dad4db4f451525d86388d3cad273"
  },
  {
    "url": "assets/js/8.b6c921b2.js",
    "revision": "9659ac0ed5181cc1d8ca5297681b6dc8"
  },
  {
    "url": "assets/js/80.e86e2884.js",
    "revision": "5893ba952d209dfbd27974450bda4709"
  },
  {
    "url": "assets/js/81.37a24af2.js",
    "revision": "163ef9ead317469f51566b795ab9b877"
  },
  {
    "url": "assets/js/82.61f55969.js",
    "revision": "592d2eed0d23d82b77845a2828d7d2e0"
  },
  {
    "url": "assets/js/83.5d6f2f7c.js",
    "revision": "0d024dcc4e7ad27843fd04f411a3221d"
  },
  {
    "url": "assets/js/84.e60d78f2.js",
    "revision": "7ea8de1b408023f42531babc83cc58b9"
  },
  {
    "url": "assets/js/85.07fbf35a.js",
    "revision": "10026694ad999aac6044bb0e4e023762"
  },
  {
    "url": "assets/js/86.1182d3b7.js",
    "revision": "49c11da0b10c117c827ee7d3070fc5d9"
  },
  {
    "url": "assets/js/9.d7ec4dfc.js",
    "revision": "3833dbfad79994996c16c6efed5ea150"
  },
  {
    "url": "assets/js/app.c30262eb.js",
    "revision": "8b0d9b9089bb0415efab41015043d9c9"
  },
  {
    "url": "assets/js/vendors~docsearch.8ea997f4.js",
    "revision": "ebae33a2c6b5bb0d3ddaf0b805f576d3"
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
    "revision": "de6fa3d077127ae8535b960e6d06ff7c"
  },
  {
    "url": "componentsDocs/changelog.html",
    "revision": "87087d7b4d129e6e3457e3e08e55bd62"
  },
  {
    "url": "componentsDocs/contributing.zh-CN.html",
    "revision": "967d7382c3c91fe6fdd5f54785f1d83e"
  },
  {
    "url": "componentsDocs/customize-theme.zh-CN.html",
    "revision": "1c34a7208977d21f787a4bbb3eb4a81a"
  },
  {
    "url": "componentsDocs/faq.zh-CN.html",
    "revision": "af6327709629d02d200c356d2e5ef212"
  },
  {
    "url": "componentsDocs/getting-started.zh-CN.html",
    "revision": "f2511146344be10f775af659153815ef"
  },
  {
    "url": "componentsDocs/i18n.zh-CN.html",
    "revision": "87d7afead406dfba9524e5818fc2807a"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "a8d6e057c8aea701cc8e75dfafae9745"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "5c21e8c7859608f0ab4f190063a0eda2"
  },
  {
    "url": "componentsDocs/introduce.zh-CN.html",
    "revision": "34995215aa8aaa116b6156161fb2ecb2"
  },
  {
    "url": "componentsDocs/practical-projects.zh-CN.html",
    "revision": "38f5dc8d7fae2e8f96644807b826e61b"
  },
  {
    "url": "componentsDocs/use-with-create-react-app.zh-CN.html",
    "revision": "6341755f8a52fa8a7ec8665f2b09372a"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "8c018dd41cf2e224b23f2fee50bc70f8"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "b4317fa5010eb96aed219739e3f3bdbd"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "5581db58a0567db74a95fbcd2c9bc130"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "15faec44c07fee99345d04f3a6ff626a"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "f62fed3cb963b8ba30f8066334acaa1c"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "1c34c85bd2ceb9cc3701a3708bce5955"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "fa63b100e8a2eec9713168ee642b6ce0"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "cfe035e250415453450fcec19aa5c27f"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "9b17ffa6873c5d1bd745ea93a6a7afb7"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "96353486f697f49fd28cc47a8fb86f9a"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "84f9706252902d77d20775c4fbc901f0"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "112672e9354f9c6c1a5abb7b1b051605"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "design/alignment.zh-CN.html",
    "revision": "e96a5fae3815f073e71f31c1f967a2ff"
  },
  {
    "url": "design/article.zh-CN.html",
    "revision": "74d71953ad1a5e19905791366c78ce03"
  },
  {
    "url": "design/cases.zh-CN.html",
    "revision": "90022f9198ae0d99231539299c3edcc0"
  },
  {
    "url": "design/colors.zh-CN.html",
    "revision": "4c8de2262b026829c364c99fa1876f65"
  },
  {
    "url": "design/contrast.zh-CN.html",
    "revision": "e371ce3418a321d86e7016994d0ecf81"
  },
  {
    "url": "design/copywriting.zh-CN.html",
    "revision": "c87541cfe9d186f2a2a805db6648efb9"
  },
  {
    "url": "design/data-display.zh-CN.html",
    "revision": "c6cd07f5c0c6f5e92beb2787a14a7ce1"
  },
  {
    "url": "design/data-entry.zh-CN.html",
    "revision": "5dcd9333db3b00dfe6f592d04b10d3fb"
  },
  {
    "url": "design/direct.zh-CN.html",
    "revision": "be058b669ad6ea96a0fa7a7981a65f64"
  },
  {
    "url": "design/download.zh-CN.html",
    "revision": "b5840f124b18ea8a6076b70d22184609"
  },
  {
    "url": "design/feedback.zh-CN.html",
    "revision": "fbe22b7d8be0a95395369026f4ad0407"
  },
  {
    "url": "design/font.zh-CN.html",
    "revision": "2a9901825193ff54579c093559db8def"
  },
  {
    "url": "design/icon.zh-CN.html",
    "revision": "f441858a524acb4b152200c5c6bd6fb9"
  },
  {
    "url": "design/index.html",
    "revision": "54964c2e1ec98aab5e3a543316756aed"
  },
  {
    "url": "design/invitation.zh-CN.html",
    "revision": "a2ec6f63a39f5d6ef05daf54ee5b050e"
  },
  {
    "url": "design/layout.zh-CN.html",
    "revision": "b1f91f4838bde84adb658c7065a6d628"
  },
  {
    "url": "design/lightweight.zh-CN.html",
    "revision": "5b868d7067ba99713f0a96932d18c11c"
  },
  {
    "url": "design/motion.zh-CN.html",
    "revision": "c0dd7f69efc5f01d6d9669f786bedce2"
  },
  {
    "url": "design/navigation.zh-CN.html",
    "revision": "43da04f6dc7a8ab8f66aa73f952e0c99"
  },
  {
    "url": "design/overview.zh-CN.html",
    "revision": "d3eb051e6022005ecefb3ecfe10b45cf"
  },
  {
    "url": "design/proximity.zh-CN.html",
    "revision": "4664bfe48366212bb563983ba79e72b4"
  },
  {
    "url": "design/reaction.zh-CN.html",
    "revision": "4d451db4de533558b0fdbdc6ef9a9627"
  },
  {
    "url": "design/reference.zh-CN.html",
    "revision": "093d6e3a75830da3b4395e6d78323ce2"
  },
  {
    "url": "design/repetition.zh-CN.html",
    "revision": "b71a45fa1fac9db54548001f2dd9fdf3"
  },
  {
    "url": "design/stay.zh-CN.html",
    "revision": "25d41e1d3e7e46a4976c5f975d0f9176"
  },
  {
    "url": "design/transition.zh-CN.html",
    "revision": "56642fa0ebcdcaa3c6f65a2e20def9f2"
  },
  {
    "url": "design/values.zh-CN.html",
    "revision": "efdc663ec989f8c19af1aaba7ac06fbe"
  },
  {
    "url": "design/visual.zh-CN.html",
    "revision": "7292aa96c3f2fcb71f5eba4f961c4b94"
  },
  {
    "url": "design/work-with-us.zh-CN.html",
    "revision": "b5caea92dbce5a681dcaa3106deea80a"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "721dece9ba3391fd50db4e9de93fa8bc"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "ab2753a29e2dfa8d91e080b6774bc567"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "649757450354fd60699e1347f4856b41"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "95458abd7c7824973ba2dc02e21b197c"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "0c654a549db373d3d3f6c12a4f1dcf22"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "e2add7379cf247bee0111e059beb57f3"
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
    "revision": "9df15412f1eaef3d1998ab6378c9349a"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "000cf0215704239d9dc251a309ab9996"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "c537855cdfab730f05e67f2ac90d4479"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "b2155af784c34b1d9bafbdeca5e8fea0"
  },
  {
    "url": "guide/css.html",
    "revision": "c4b33e8c8e733f4e9a0dc8d228697c78"
  },
  {
    "url": "guide/deployment.html",
    "revision": "d44c4e7c73f6ca935d349e516faad74a"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "72b7a74fe2f1f246786e986a05ba40b2"
  },
  {
    "url": "guide/index.html",
    "revision": "dd7f3067936d0876b383874df4523402"
  },
  {
    "url": "guide/installation.html",
    "revision": "ad4e563c7fc9728148f559e0a78e1657"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "3a6753ee0f2c8ea9fce86f131a4c01f2"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "23b972a50f2eff572d44c0fffc171b7f"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "0bdc77d7e1f76ef0ea318436654f2c1a"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "1cd2f689f2e8e0cafb774c5715c112bf"
  },
  {
    "url": "guide/webpack.html",
    "revision": "aca4a7480f51d7172d9bed8787efbb54"
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
    "revision": "90eefdc7a7ef258c9d44fb7951848e96"
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
