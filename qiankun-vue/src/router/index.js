import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
console.log(
  "子应用-vue-window.__POWERED_BY_QIANKUN__",
  window.__POWERED_BY_QIANKUN__
);
const router = new VueRouter({
  mode: "history",
  // 运行在主应用中时，基础路由地址配置为 /vue
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  routes,
});

export default router;
