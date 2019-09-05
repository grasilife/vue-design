"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const port = 9527; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, "styles")]
      }
    }
  },
  publicPath: "./",
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/rest": {
        target: "https://www.gxhrvip.com/garbage-search/",
        changeOrigin: true,
        pathRewrite: {
          "^/rest": ""
        }
      },
      "/mock": {
        target: "http://39.104.14.199:4000/mock/21/",
        changeOrigin: true,
        pathRewrite: {
          "^/mock": ""
        }
      }
    }
  },
  chainWebpack: config => {
    if (process.env.IS_ANALYZ) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
    config.module
      .rule("swf")
      .test(/\.(swf)$/)
      .use("file-loader")
      .loader("vue-loader");
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
