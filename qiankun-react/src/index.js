import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./publicPath";

//子应用容器
let root = document.getElementById("root");

function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__);

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
/**
 * 应用只第一次进入调用一次
 */
export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("父应用传给react子应用的数据-mount111", props);
  root = document.getElementById("root");
  render(props);
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  console.log("ReactMicroApp unmount");
  ReactDOM.unmountComponentAtNode(root);
  root = null;
}
