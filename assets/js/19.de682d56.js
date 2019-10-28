(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{513:function(e,a,t){"use strict";t.r(a);var n=t(4),s=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-cli-plugin-babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-plugin-babel"}},[e._v("#")]),e._v(" @vue/cli-plugin-babel")]),e._v(" "),t("blockquote",[t("p",[e._v("babel plugin for vue-cli")])]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("Uses Babel 7 + "),t("code",[e._v("babel-loader")]),e._v(" + "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vue/babel-preset-app"),t("OutboundLink")],1),e._v(" by default, but can be configured via "),t("code",[e._v("babel.config.js")]),e._v(" to use any other Babel presets or plugins.")]),e._v(" "),t("p",[e._v("By default, "),t("code",[e._v("babel-loader")]),e._v(" excludes files inside "),t("code",[e._v("node_modules")]),e._v(" dependencies. If you wish to explicitly transpile a dependency module, you will need to add it to the "),t("code",[e._v("transpileDependencies")]),e._v(" option in "),t("code",[e._v("vue.config.js")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  transpileDependencies"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// can be string or regex")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'my-dep'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token regex"}},[e._v("/other-dep/")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[e._v("#")]),e._v(" Caching")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/webpack-contrib/cache-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("cache-loader"),t("OutboundLink")],1),e._v(" is enabled by default and cache is stored in "),t("code",[e._v("<projectRoot>/node_modules/.cache/babel-loader")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"parallelization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallelization"}},[e._v("#")]),e._v(" Parallelization")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/webpack-contrib/thread-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("thread-loader"),t("OutboundLink")],1),e._v(" is enabled by default when the machine has more than 1 CPU cores. This can be turned off by setting "),t("code",[e._v("parallel: false")]),e._v(" in "),t("code",[e._v("vue.config.js")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"installing-in-an-already-created-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-in-an-already-created-project"}},[e._v("#")]),e._v(" Installing in an Already Created Project")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("vue "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" babel\n")])])]),t("h2",{attrs:{id:"injected-webpack-chain-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#injected-webpack-chain-rules"}},[e._v("#")]),e._v(" Injected webpack-chain Rules")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("config.rule('js')")])]),e._v(" "),t("li",[t("code",[e._v("config.rule('js').use('babel-loader')")])]),e._v(" "),t("li",[t("code",[e._v("config.rule('js').use('cache-loader')")])])])])},[],!1,null,null,null);a.default=s.exports}}]);