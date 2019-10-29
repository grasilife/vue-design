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
    "revision": "63e54662d1e253f7c1f493d353a4bf77"
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
    "url": "assets/js/11.9dce5aae.js",
    "revision": "afe641e8ca771f261e115b5ec5664233"
  },
  {
    "url": "assets/js/12.e4475de6.js",
    "revision": "fdb8f721d8092a988e6d01c511546571"
  },
  {
    "url": "assets/js/13.35724dcd.js",
    "revision": "feec33709dab33b34cb53124c1897a09"
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
    "url": "assets/js/38.9f1d9a7f.js",
    "revision": "df114b346c2f9dde6e3442b738181fda"
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
    "url": "assets/js/40.a7171f67.js",
    "revision": "7496e200f0d60657d256bce792f9d454"
  },
  {
    "url": "assets/js/41.e65a1cf5.js",
    "revision": "101a98c32520ae043d8d56f5f360145a"
  },
  {
    "url": "assets/js/42.e2ac1a40.js",
    "revision": "ca7950beb876efb4dbf78326fd0ea79e"
  },
  {
    "url": "assets/js/43.97f28d00.js",
    "revision": "15d9243b6f974db49826bfdac5b7cd0c"
  },
  {
    "url": "assets/js/44.afacf44f.js",
    "revision": "d188042822ecc613a2b3722e31494659"
  },
  {
    "url": "assets/js/45.9beba999.js",
    "revision": "a9c0b05c4b536985fab6f1ebef783e3c"
  },
  {
    "url": "assets/js/46.902da94a.js",
    "revision": "05fabbda461bc785b95bcbecce8fc006"
  },
  {
    "url": "assets/js/47.6de8ea3a.js",
    "revision": "aa6166208d8ffae497d411ceffeff261"
  },
  {
    "url": "assets/js/48.5cba6faa.js",
    "revision": "77c135d2e33c07e32a3dd28ea3f362fd"
  },
  {
    "url": "assets/js/49.112995f8.js",
    "revision": "80a24a3528178b937bbc39d898d0e1d7"
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
    "url": "assets/js/51.59d93d87.js",
    "revision": "c7e37b3a6e64eb870861279e5d0c3c52"
  },
  {
    "url": "assets/js/52.b270e133.js",
    "revision": "6dd35389e58e3bb913f2b188600dad1a"
  },
  {
    "url": "assets/js/53.24dc60eb.js",
    "revision": "f0d5ec287a239ba7fd4559851c8eb296"
  },
  {
    "url": "assets/js/54.0e50ad9c.js",
    "revision": "c6b09ed85f31844f85eca595b893e7ae"
  },
  {
    "url": "assets/js/55.86e8ba81.js",
    "revision": "404c3abbb2853d2c320cb573f5ee8935"
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
    "url": "assets/js/app.7154275f.js",
    "revision": "a1194c56fb45ec1e89e2fb8926a000a0"
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
    "revision": "c92a3884a169f3def8066e24000470b1"
  },
  {
    "url": "componentsDocs/changelog.html",
    "revision": "cc4fc38c08b4fc1b93966acbcf1c39c2"
  },
  {
    "url": "componentsDocs/contributing.zh-CN.html",
    "revision": "832587ef2538b8095fe4f6c1342a1342"
  },
  {
    "url": "componentsDocs/customize-theme.zh-CN.html",
    "revision": "1204e4ed773410dba89009ddfdc30048"
  },
  {
    "url": "componentsDocs/faq.zh-CN.html",
    "revision": "6169fe95339dc6d05247e2fbeb4aadf8"
  },
  {
    "url": "componentsDocs/getting-started.zh-CN.html",
    "revision": "d489e1ea74071f5d22e010b75cc65231"
  },
  {
    "url": "componentsDocs/i18n.zh-CN.html",
    "revision": "6bc7bec921c69b9a8887f1d575064a47"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "8591c5003fa3a4be88295beee14ae278"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "f3d1e143933367296a8b70ac6005aa98"
  },
  {
    "url": "componentsDocs/introduce.zh-CN.html",
    "revision": "a7a433d5509f9496fb2c93594ecee18d"
  },
  {
    "url": "componentsDocs/practical-projects.zh-CN.html",
    "revision": "ddef42091ed03146e4e4251fc1a3a2f2"
  },
  {
    "url": "componentsDocs/use-with-create-react-app.zh-CN.html",
    "revision": "eb9b07570c47d23261e29d97728137be"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "46b3f78b07c907b96bd97341eb1df22f"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "f8bf590be81297fa4b6fcd06008ae8ee"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "125b4d4f9382676254fb7af6aab2c30b"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "4d79c1bfe8feb9e1289bbffd795aafbe"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "e4e0456948ba12948c70a6cc6f7b087f"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "00bdafc5264d3b3c0c5a684e73b2cf3a"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "5d62db9312473f762b358ace6bfa5fc3"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "af81a7af870262d141d8568fcd592bf6"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "eee98b40b84953ded3dafb5872cc05f0"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "cbfa3eb890a47da8c8fdb52feb8dd693"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "e573e1f8cbbe65423c99ed730fac02b4"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "e2a85ca6d98b264e77c6ab0aafb62626"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "design/alignment.zh-CN.html",
    "revision": "2f25d8efb722926c474aac563bffef55"
  },
  {
    "url": "design/article.zh-CN.html",
    "revision": "992874422ac59fa9bcbbc600c3f11d4c"
  },
  {
    "url": "design/cases.zh-CN.html",
    "revision": "f79a6272df657ba006c3ada53fe7ff7a"
  },
  {
    "url": "design/colors.zh-CN.html",
    "revision": "5f3ffbb6048581777aa38625021b1843"
  },
  {
    "url": "design/contrast.zh-CN.html",
    "revision": "2f2a31b053f2cdbbdef2dfb113cf367d"
  },
  {
    "url": "design/copywriting.zh-CN.html",
    "revision": "aaa70affb9668500ec934a6212b8354f"
  },
  {
    "url": "design/data-display.zh-CN.html",
    "revision": "4a09170109d3f3b8eb2750bcac3cfa5d"
  },
  {
    "url": "design/data-entry.zh-CN.html",
    "revision": "3bc2ab3bf1bd58bac87355ff7ac54cea"
  },
  {
    "url": "design/direct.zh-CN.html",
    "revision": "3280ea9a843b83e746435567d2000b6a"
  },
  {
    "url": "design/download.zh-CN.html",
    "revision": "d727ebc47ef5e9cd8db8ee4b3ee922b4"
  },
  {
    "url": "design/feedback.zh-CN.html",
    "revision": "e817390d43efaeef5d2d4fc7ed5a391a"
  },
  {
    "url": "design/font.zh-CN.html",
    "revision": "52cfbd5f8e4fb34fdb7653019a9b5bcd"
  },
  {
    "url": "design/icon.zh-CN.html",
    "revision": "ed44427e8c8846f0e4cd14f9a2c44ba0"
  },
  {
    "url": "design/index.html",
    "revision": "a07c70d3a9ab467b4e611a1701d7f6bd"
  },
  {
    "url": "design/invitation.zh-CN.html",
    "revision": "e3c812e5c06d19b8f69d95cb1d2e18b9"
  },
  {
    "url": "design/layout.zh-CN.html",
    "revision": "e04fabd67a29aeed9dc15195da929ab9"
  },
  {
    "url": "design/lightweight.zh-CN.html",
    "revision": "c8ca5be1dfa650c194e1832ce52d092f"
  },
  {
    "url": "design/motion.zh-CN.html",
    "revision": "386375aa29367be2a99b0c70bfdeb156"
  },
  {
    "url": "design/navigation.zh-CN.html",
    "revision": "79cfa555921ecfceeef699826272d428"
  },
  {
    "url": "design/overview.zh-CN.html",
    "revision": "4d6a3994677e48c59891f5dc569e3fb0"
  },
  {
    "url": "design/proximity.zh-CN.html",
    "revision": "4d8a6a488ff978a81fb028caa8ee8ff7"
  },
  {
    "url": "design/reaction.zh-CN.html",
    "revision": "2eb92ebce9a20bfdca1fa40a2cdfd99a"
  },
  {
    "url": "design/reference.zh-CN.html",
    "revision": "b5f3b4316a5848d49d70fab0af4e8762"
  },
  {
    "url": "design/repetition.zh-CN.html",
    "revision": "2854d622f9e49b4462d6310843b33a8a"
  },
  {
    "url": "design/stay.zh-CN.html",
    "revision": "3980bc89778dd60ef3e25a296437f4ee"
  },
  {
    "url": "design/transition.zh-CN.html",
    "revision": "72503612cad026ccdb9c295edff9c201"
  },
  {
    "url": "design/values.zh-CN.html",
    "revision": "9e69b4b10476f2af56c656b11cfc3155"
  },
  {
    "url": "design/visual.zh-CN.html",
    "revision": "b93933041fcaeca4fedb4768822b31ac"
  },
  {
    "url": "design/work-with-us.zh-CN.html",
    "revision": "741d66ab8b05ab7992e8fb34047d5856"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "97d3cc0674b9fb60a3db0e4328ada673"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "ceab488a179a0281bd72824287423dda"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "93d8fa7a3d05b59686ebf7608be279f2"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "04670e9a8fe976da7da33cc2a5a3ca6e"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "cba0dfba09736f12a04da90619b3570d"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "df73e0bc9db05b2766137d55874b0c16"
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
    "revision": "867be3ff7c3714ae9935b4fa85d9e531"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "c57696f50eed1db6376e93b7a7c285ee"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "5ac25135ee1fd979bb2bdd3345b05fc2"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "ab9cc6029c4f4fa288047cef7835a7e3"
  },
  {
    "url": "guide/css.html",
    "revision": "6682fa92c67073ce0bf5cb6bf506f5db"
  },
  {
    "url": "guide/deployment.html",
    "revision": "fa84e11b4d9b8edf26a4b156153ee024"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "8f46ccb289f34fef3ba6a7716a420619"
  },
  {
    "url": "guide/index.html",
    "revision": "375b67f9828c0fd7300c66ed66f97013"
  },
  {
    "url": "guide/installation.html",
    "revision": "875c639cafa3313385bec42c8212a60f"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "6b8a3ebef38584835fd2959fdc328597"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "f340082b2ae3434d35572262d45c3b72"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "3fedb66459b522e1be0f85ffe171e5f8"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "a30bed655406875d90c0410090c02494"
  },
  {
    "url": "guide/webpack.html",
    "revision": "5582edc8f53cb2a42f069b03f861eda1"
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
    "revision": "2dd2e238b0c07b5cbaf876a152a51df1"
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
