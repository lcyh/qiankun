import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import startQiankun from "../micro/index";
import { getToken } from "../utils/auth";
import apps from "../micro/apps";
import Home from "../views/Home.vue";
import Layout from "../components/Layout/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "",
    component: Layout,
    children: [
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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const whiteList = ["login"];
router.beforeEach((to, from, next) => {
  const token = getToken("token"); //获取token
  store.state.token = token;
  console.log("父应用token", token);
  if (token) {
    //token存在
    if (to.name === "login") {
      //如果login直接跳转首页
      return next({ path: "/" });
    }
    if (!store.state.hasInited) {
      //防止反复addRoutes预设的值
      store.dispatch("addRouters").then((res) => {
        router.addRoutes(res);
        startQiankun(apps);
        store.state.hasInited = true;
        next({ ...to, replace: true });
      });
      return;
    }
    next();
  } else if (whiteList.includes(to.name)) {
    //白名单直接放行
    next();
  } else {
    //token不存在
    next({ path: "/login" });
    // next({ path: "/login", query: { redirect: to.fullPath } });
  }
});

export default router;
