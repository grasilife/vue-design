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
    "revision": "95e7a1070720c5dfc68c5b3497758a6e"
  },
  {
    "url": "assets/css/0.styles.f58a96c3.css",
    "revision": "a65533e7203e05accc02f51000413951"
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
    "url": "assets/js/10.65852571.js",
    "revision": "b3f2861bfe287be144a09ca98fbf74b4"
  },
  {
    "url": "assets/js/11.db166520.js",
    "revision": "7f132ec99d5bb8e8946879e24e5fc63d"
  },
  {
    "url": "assets/js/12.960f3d92.js",
    "revision": "9a9c313a86ef620d52a16e9b9884bf88"
  },
  {
    "url": "assets/js/13.d2fab166.js",
    "revision": "eaf5fef1a00656333740be8549c78942"
  },
  {
    "url": "assets/js/14.43fa10f5.js",
    "revision": "0bda391421b703f5b95982e67e0ac299"
  },
  {
    "url": "assets/js/15.8ff44917.js",
    "revision": "ff89d23acbc2e5ff2914f008d1d08b39"
  },
  {
    "url": "assets/js/16.3e53132c.js",
    "revision": "d1db22fedd8464ab29eebd7bfc7d7243"
  },
  {
    "url": "assets/js/17.8331627f.js",
    "revision": "d4ea3e89721c42f81a7a24dd153ff703"
  },
  {
    "url": "assets/js/18.2ffc78b8.js",
    "revision": "dec0d76a3c9ad1fa1a275ab9559c1a86"
  },
  {
    "url": "assets/js/19.70a0cf04.js",
    "revision": "fd608a9cf89770675c498157693fa71d"
  },
  {
    "url": "assets/js/20.69121152.js",
    "revision": "1a4fbe7f9bfda3eb36e63891c67cae5c"
  },
  {
    "url": "assets/js/21.4bdbc393.js",
    "revision": "3db4e290671b4bb08d38505e0a3fd4b5"
  },
  {
    "url": "assets/js/22.eea7cb25.js",
    "revision": "4ccf4b29a282caf68e88482280d8c500"
  },
  {
    "url": "assets/js/23.5c12eb8b.js",
    "revision": "27ff16c3d205b889000c8439dc5ce811"
  },
  {
    "url": "assets/js/24.5bf4ef12.js",
    "revision": "5b86201946cec8e9907f6401a4a1586e"
  },
  {
    "url": "assets/js/25.0f798c08.js",
    "revision": "82d4deb445266e6f97c0f4d9ac4a0561"
  },
  {
    "url": "assets/js/26.8e54d284.js",
    "revision": "d13a042a37f20cea7caa8d480bef3c98"
  },
  {
    "url": "assets/js/27.b478d331.js",
    "revision": "384d0e142469cd8796f05d11f787f35e"
  },
  {
    "url": "assets/js/28.fad3fd81.js",
    "revision": "cec02031065374f74a6fa1e00ee9753a"
  },
  {
    "url": "assets/js/29.3fef1942.js",
    "revision": "bfadc2731354946846f4291128f1fda3"
  },
  {
    "url": "assets/js/3.171cf084.js",
    "revision": "95811f5308a399ebf6b307284c809063"
  },
  {
    "url": "assets/js/30.2b3ad6b0.js",
    "revision": "c41c206f2cbd12900811fa86b956be20"
  },
  {
    "url": "assets/js/31.86d73342.js",
    "revision": "3477fd95421fdffc581befd5ee7c33c6"
  },
  {
    "url": "assets/js/32.26e782b5.js",
    "revision": "51e92f0e89ad3719d437a566393640a4"
  },
  {
    "url": "assets/js/33.94bfd4c7.js",
    "revision": "a9c6cdcba534f7ce157746618cfa2562"
  },
  {
    "url": "assets/js/34.ea1595b4.js",
    "revision": "bffd44ef7a3946cf6a120cdbc6e72af1"
  },
  {
    "url": "assets/js/35.bee872ae.js",
    "revision": "b6a79a6503d21e2318f58d7c84ebaf8f"
  },
  {
    "url": "assets/js/36.355bfdfa.js",
    "revision": "875d9a29ef0989e773e6ecb2f8f93513"
  },
  {
    "url": "assets/js/37.ff1670d3.js",
    "revision": "519e2afa6db4ff92556a68d40d932b24"
  },
  {
    "url": "assets/js/38.b7328735.js",
    "revision": "80df6966dd0b8ee57f68648a8e765773"
  },
  {
    "url": "assets/js/39.62d49c95.js",
    "revision": "1e6a0ffc0eb38800206bf24185bfb454"
  },
  {
    "url": "assets/js/4.13028485.js",
    "revision": "8bbd323a2f45f4d3e57cb769a1f6c338"
  },
  {
    "url": "assets/js/40.e2b5cd03.js",
    "revision": "76112288447272f191585a54fd416890"
  },
  {
    "url": "assets/js/41.ddde64b7.js",
    "revision": "06070bf913004a72a893c88162c8d86b"
  },
  {
    "url": "assets/js/42.3f740e6a.js",
    "revision": "e29d7c78614f3969c11f3c262e38324b"
  },
  {
    "url": "assets/js/43.bed98063.js",
    "revision": "5ce76e9ef40c3d177a2d2230d28619ca"
  },
  {
    "url": "assets/js/44.8aaa39eb.js",
    "revision": "2fe79394194bf8ad2b5e48de2befe2ea"
  },
  {
    "url": "assets/js/45.8736c173.js",
    "revision": "350af50ae3d71cb7a3a01c16643c8d7f"
  },
  {
    "url": "assets/js/46.9c630f1b.js",
    "revision": "a0349d10b3a1e2e50626800ee7f3a975"
  },
  {
    "url": "assets/js/47.2b633e7c.js",
    "revision": "e78f2931043be18412523d011f6fe261"
  },
  {
    "url": "assets/js/48.f5d3b105.js",
    "revision": "8e07c3a3e788308e815edb708c004efa"
  },
  {
    "url": "assets/js/5.d4470fe1.js",
    "revision": "7abeead9b49a9fb882b10ffc5c57d9af"
  },
  {
    "url": "assets/js/6.17a43a82.js",
    "revision": "1664ccc4050bb8c5392700a733f21ead"
  },
  {
    "url": "assets/js/7.7a2bb4e4.js",
    "revision": "f76e0c6c3dd45a9ba2dd474f2e4b8843"
  },
  {
    "url": "assets/js/8.261eb0f0.js",
    "revision": "d45eb0f124223b677811ead52ca2b258"
  },
  {
    "url": "assets/js/9.44235661.js",
    "revision": "e64be5244cd7b7cd0805babd72679d26"
  },
  {
    "url": "assets/js/app.67f22ed7.js",
    "revision": "8edda2358c0f9a50eaa079ad832afdee"
  },
  {
    "url": "assets/js/vendors~docsearch.62a5ee3d.js",
    "revision": "2e9026c89b07af2856fbd03c7cee335c"
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
    "revision": "128d9d2230465a108089162e4e832dfd"
  },
  {
    "url": "componentsDocs/index.html",
    "revision": "6933cbb7b48be37b9ece7fcf5625f07b"
  },
  {
    "url": "componentsDocs/installation.html",
    "revision": "f0516374480d304143cbd49e587f6f4e"
  },
  {
    "url": "config-ui.png",
    "revision": "e97a682034659cfcfa7e3803cd2b5f22"
  },
  {
    "url": "config/index.html",
    "revision": "719e937697e87ed37f9a9b53d7cfd8eb"
  },
  {
    "url": "core-plugins/babel.html",
    "revision": "9b7c5356da763b314906634488110418"
  },
  {
    "url": "core-plugins/e2e-cypress.html",
    "revision": "b99dbfaf924bf4dbe95cfe3cafa19c4f"
  },
  {
    "url": "core-plugins/e2e-nightwatch.html",
    "revision": "d9dcacf7ca230138b05220f1352b312a"
  },
  {
    "url": "core-plugins/eslint.html",
    "revision": "ed208954fbd8342206901766237531d5"
  },
  {
    "url": "core-plugins/index.html",
    "revision": "6c09df0ccc2bd6d9a70933c702e123ff"
  },
  {
    "url": "core-plugins/pwa.html",
    "revision": "5db8ccf242d82ed0318614ca2ea528cf"
  },
  {
    "url": "core-plugins/router.html",
    "revision": "1d164c4d74b62af068789816175c0a8f"
  },
  {
    "url": "core-plugins/typescript.html",
    "revision": "0e27c980b2589d57ec66d3a51bd1630e"
  },
  {
    "url": "core-plugins/unit-jest.html",
    "revision": "c9f651e8ca3111ce3d3b8f50a4a366b0"
  },
  {
    "url": "core-plugins/unit-mocha.html",
    "revision": "9643c9d57210f04c8707dc339aad005c"
  },
  {
    "url": "core-plugins/vuex.html",
    "revision": "7b7191b999821769d7ee355562cdce03"
  },
  {
    "url": "custom-view.png",
    "revision": "623e2f13ffff457bddb06b0ed62216cd"
  },
  {
    "url": "dev-guide/generator-api.html",
    "revision": "6039d919ff6ade9bdfe6a69eb3bbdb7e"
  },
  {
    "url": "dev-guide/plugin-api.html",
    "revision": "726123919128cb6f8c9ed89dcda91395"
  },
  {
    "url": "dev-guide/plugin-dev.html",
    "revision": "9bd041e8535833e54991c1847aefa067"
  },
  {
    "url": "dev-guide/ui-api.html",
    "revision": "a97e55e3d40c00e3edd7c587365ee7a4"
  },
  {
    "url": "dev-guide/ui-info.html",
    "revision": "3fae33d6d66a3be4f8c00aa1c19bd97c"
  },
  {
    "url": "dev-guide/ui-localization.html",
    "revision": "a8c2a52f34c8333a41c0e52629d8e905"
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
    "revision": "97822212d0a7e5417bf2c9353c395e27"
  },
  {
    "url": "guide/build-targets.html",
    "revision": "6daca238c68c24fbcf76198727c9b3c8"
  },
  {
    "url": "guide/cli-service.html",
    "revision": "32c808dc11b956f8588ad332396cf732"
  },
  {
    "url": "guide/creating-a-project.html",
    "revision": "074069a03190090daa9631f20130f1a3"
  },
  {
    "url": "guide/css.html",
    "revision": "9c309d961b5573dc35e499d698f3fb33"
  },
  {
    "url": "guide/deployment.html",
    "revision": "7557cd654f9b7a2d53f14260e90d0519"
  },
  {
    "url": "guide/html-and-static-assets.html",
    "revision": "bb8e3f5c54b0c4cb06a989382464e8e6"
  },
  {
    "url": "guide/index.html",
    "revision": "5f21e13d2e4e323dbeea0f3a758af290"
  },
  {
    "url": "guide/installation.html",
    "revision": "e908d21a0b6d4a49940b58d0275ee82d"
  },
  {
    "url": "guide/mode-and-env.html",
    "revision": "af9df6ddc91969bd6b1d35cb73ad518b"
  },
  {
    "url": "guide/plugins-and-presets.html",
    "revision": "f16d67b7106db1f7fb9bd78c3018a5d3"
  },
  {
    "url": "guide/prototyping.html",
    "revision": "45d03a8124e531d0a07a6db117b50d6a"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "97b170527ff4dbedd5fd3a78c5de4a58"
  },
  {
    "url": "guide/webpack.html",
    "revision": "e2d9cc4ef409ca56bb42bac7dd0a2e14"
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
    "revision": "22cdbe5b6a55201799f1745d62fcb886"
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
