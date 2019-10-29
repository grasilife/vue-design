<!--
 * @Author: 付国强
 * @Date: 2019-09-05 21:46:08
 * @LastEditors: 付国强
 * @LastEditTime: 2019-10-29 20:34:35
 * @Description:
 -->
<template>
  <div id="app">
    hellow world
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
/* 解决element-ui的table表格控件表头与内容列不对齐问题 */
.el-table th.gutter {
  display: table-cell !important;
}
</style>
