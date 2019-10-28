/*
 * @Author: 付国强
 * @Date: 2019-09-05 21:46:07
 * @LastEditors: 付国强
 * @LastEditTime: 2019-10-28 22:48:16
 * @Description:
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  base: "/vue-design/",
  port: 8081,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VUE DESIGN",
      description: "🛠️ Vue.js设计语言"
    },
    "/en/": {
      lang: "en-US",
      title: "VUE DESIGN",
      description: "🛠️ Vue.js设计语言"
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        "/": {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        "/en/": {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    }
  },
  theme: "@vuepress/theme-vue",
  themeConfig: {
    repo: "grasilife/vue-design",
    docsDir: "docs",
    docsBranch: "docs",
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      indexName: "cli_vuejs",
      apiKey: "f6df220f7d246aff64a56300b7f19f21"
    },
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        lastUpdated: "上次编辑时间",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          {
            text: "指南",
            link: "/guide/"
          },
          {
            text: "设计语言",
            link: "/design/"
          },
          {
            text: "组件",
            link: "/componentsDocs/"
          },
          {
            text: "配置参考",
            link: "/config/"
          },
          {
            text: "脚手架开发",
            items: [
              { text: "插件开发指南", link: "/dev-guide/plugin-dev.md" },
              { text: "UI 插件信息", link: "/dev-guide/ui-info.md" },
              { text: "UI 插件 API", link: "/dev-guide/ui-api.md" },
              { text: "UI 本地化", link: "/dev-guide/ui-localization.md" }
            ]
          },
          {
            text: "插件",
            items: [
              {
                text: "Babel",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md"
              },
              {
                text: "TypeScript",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md"
              },
              {
                text: "ESLint",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-eslint/README.md"
              },
              {
                text: "PWA",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md"
              },
              {
                text: "Jest",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-jest/README.md"
              },
              {
                text: "Mocha",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-mocha/README.md"
              },
              {
                text: "Cypress",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-cypress/README.md"
              },
              {
                text: "Nightwatch",
                link:
                  "https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-e2e-nightwatch/README.md"
              }
            ]
          },
          {
            text: "更新记录",
            link:
              "https://github.com/grasilife/vue-design/blob/master/CHANGELOG.md"
          }
        ],
        sidebar: {
          "/guide/": [
            "/guide/",
            "/guide/installation",
            {
              title: "脚手架",
              collapsable: false,
              children: ["/guide/cli-service"]
            },
            {
              title: "开发",
              collapsable: false,
              children: [
                "/guide/browser-compatibility",
                "/guide/html-and-static-assets",
                "/guide/css",
                "/guide/webpack",
                "/guide/mode-and-env",
                "/guide/build-targets"
              ]
            }
          ],
          "/design/": [
            "/design/",
            {
              title: "Vue Design",
              collapsable: false,
              children: ["/design/values.zh-CN", "/design/cases.zh-CN"]
            },
            {
              title: "原则",
              collapsable: false,
              children: [
                "/design/proximity.zh-CN",
                "/design/alignment.zh-CN",
                "/design/contrast.zh-CN",
                "/design/repetition.zh-CN",
                "/design/direct.zh-CN",
                "/design/stay.zh-CN",
                "/design/lightweight.zh-CN",
                "/design/invitation.zh-CN",
                "/design/transition.zh-CN",
                "/design/reaction.zh-CN"
              ]
            },
            {
              title: "视觉",
              collapsable: false,
              children: [
                "/design/colors.zh-CN",
                "/design/layout.zh-CN",
                "/design/font.zh-CN",
                "/design/icon.zh-CN"
              ]
            },
            {
              title: "模式",
              collapsable: false,
              children: [
                "/design/overview.zh-CN",
                "/design/copywriting.zh-CN",
                "/design/navigation.zh-CN",
                "/design/data-entry.zh-CN",
                "/design/data-display.zh-CN",
                "/design/feedback.zh-CN"
              ]
            },
            {
              title: "可视化",
              collapsable: false,
              children: ["/design/visual.zh-CN"]
            },
            {
              title: "动效",
              collapsable: false,
              children: ["/design/motion.zh-CN"]
            },
            {
              title: "其他",
              collapsable: false,
              children: [
                "/design/download.zh-CN",
                "/design/article.zh-CN",
                "/design/reference.zh-CN",
                "/design/work-with-us.zh-CN"
              ]
            }
          ],
          "/componentsDocs/": [
            "/componentsDocs/",
            "/componentsDocs/getting-started.zh-CN",
            "/componentsDocs/practical-projects.zh-CN",
            "/componentsDocs/use-with-create-react-app.zh-CN",
            "/componentsDocs/customize-theme.zh-CN",
            "/componentsDocs/changelog",
            "/componentsDocs/i18n.zh-CN",
            "/componentsDocs/faq.zh-CN",
            "/componentsDocs/contributing.zh-CN",
            {
              title: "组件",
              collapsable: false,
              children: ["/componentsDocs/button"]
            }
          ],
          "/dev-guide/": [
            "/dev-guide/plugin-dev.md",
            {
              title: "UI 开发",
              collapsable: false,
              children: [
                "/dev-guide/ui-info.md",
                "/dev-guide/ui-api.md",
                "/dev-guide/ui-localization.md"
              ]
            }
          ],
          "/core-plugins/": [
            {
              title: "Core Vue CLI Plugins",
              collapsable: false,
              children: [
                "/core-plugins/babel.md",
                "/core-plugins/typescript.md",
                "/core-plugins/eslint.md",
                "/core-plugins/pwa.md",
                "/core-plugins/unit-jest.md",
                "/core-plugins/unit-mocha.md",
                "/core-plugins/e2e-cypress.md",
                "/core-plugins/e2e-nightwatch.md"
              ]
            }
          ]
        }
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        lastUpdated: "Last Updated",
        editLinkText: "Edit this page on GitHub"
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src")
      }
    }
  }
};
