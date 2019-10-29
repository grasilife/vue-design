/*
 * @Author: 付国强
 * @Date: 2019-09-05 21:46:08
 * @LastEditors: 付国强
 * @LastEditTime: 2019-10-29 20:35:27
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      title: "首页局部",
      component: () => import("@/views/Hellow.vue"),
      redirect: "/home/video",
      children: []
    }
  ]
});
