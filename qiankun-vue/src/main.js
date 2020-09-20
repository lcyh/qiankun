import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;

let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app"); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去
}
if (window.__POWERED_BY_QIANKUN__) {
  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render();
}
// 子组件的协议就ok了
export async function bootstrap(props) {}
export async function mount(props) {
  console.log("父应用传给vue子应用的数据-vue", props);
  render(props);
}
export async function unmount(props) {
  instance.$destroy();
}
