# 安装

::: tip Node 版本要求
Vue CLI 需要 [Node.js](https://nodejs.org/) 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

```bash
npm install vue-designer --save
# OR
yarn add vue-designer --save
```

创建一个项目：

```bash
import Vue from 'vue';
import VueDesigner from 'vue-designer';
import App from './App.vue';

Vue.use(VueDesigner);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
