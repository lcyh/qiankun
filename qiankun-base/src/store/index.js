import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { removeToken } from "../utils/auth";
import { routerList } from "../utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userInfo: "",
    routes: [
      {
        path: "/",
        icon: "el-icon-location",
        type: "main",
        key: "main",
        label: "main",
        children: [
          {
            path: "/",
            icon: "el-icon-location",
            type: "main",
            key: "home",
            label: "home",
            meta: {
              isAuth: true,
            },
          },
          {
            path: "/about",
            icon: "el-icon-location",
            type: "main",
            key: "about",
            label: "about",
            meta: {
              isAuth: true,
            },
          },
        ],
      },
      {
        path: "/vue",
        icon: "el-icon-location",
        type: "micro",
        key: "vue",
        label: "vue",
        children: [
          {
            path: "/vue",
            icon: "el-icon-location",
            type: "micro",
            key: "vue-project",
            label: "vue-project",
            meta: {
              isAuth: true,
            },
          },
          {
            path: "/vue/about",
            icon: "el-icon-location",
            type: "micro",
            key: "vue-about",
            label: "vue-project-about",
            meta: {
              isAuth: true,
            },
          },
        ],
      },
      {
        path: "/react",
        icon: "el-icon-location",
        type: "micro",
        key: "react",
        label: "react",
        children: [
          {
            path: "/react",
            icon: "el-icon-location",
            type: "micro",
            key: "react-project",
            label: "react-project",
            meta: {
              isAuth: true,
            },
          },
          {
            path: "/react/about",
            icon: "el-icon-location",
            type: "micro",
            key: "react-project-about",
            label: "react-project-about",
            meta: {
              isAuth: true,
            },
          },
        ],
      },
    ],
    hasInited: false,
    menuStatus: false,
  },
  mutations: {
    logout(state, params) {
      state.token = "";
      state.userInfo = "";
    },
    login(state, params) {
      state.token = params;
    },
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve) => {
        removeToken("token");
        commit("logout");
        resolve();
      });
    },
    login({ commit }) {
      commit("login");
      router.push("/");
    },
    addRouters({ state }) {
      return new Promise((resolve) => {
        const { routes } = state;
        console.log("routes-store", routes);
        const list = routerList(routes);
        resolve(list);
      });
    },
  },
  modules: {},
});
