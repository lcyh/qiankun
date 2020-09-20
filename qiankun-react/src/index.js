import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

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
export async function bootstrap() {}
export async function mount(props) {
  console.log("父应用传给react子应用的数据", props);
  render(props);
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}
