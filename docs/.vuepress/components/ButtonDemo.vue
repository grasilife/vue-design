<!--
 * @Author: 付国强
 * @Date: 2019-09-05 21:46:07
 * @LastEditors: 付国强
 * @LastEditTime: 2019-10-29 20:42:18
 * @Description:
 -->
<template>
  <div class="demo">
    <h2>📌 简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <el-button>默认按钮</el-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)">
        <w-icon
          class="icon-down"
          :name="isShow[0] === false ? 'down' : 'up'"
        ></w-icon>
        <span class="lock-code-word">{{
          isShow[0] === false ? "显示代码" : "隐藏代码"
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import WButton from "../../../src/components/Button/Button";
// import WButtonGroup from "../../../src/components/Button/ButtonGroup";
// import WIcon from "../../../src/components/Icon/Icon";
import mixin from "../mixin";
export default {
  name: "demo",
  mixins: [mixin],
  components: {
    // WButton,
    // WIcon,
    // WButtonGroup
  },
  data() {
    return {
      codeStr: `<el-button>默认按钮</el-button>`
    };
  },
  mounted() {
    // import("./lib-that-access-window-on-import").then(module => {
    //   //   this.dynamicComponent = module.default;
    // });
  }
};
</script>

<style scoped></style>
