import shareData from "./shared";
/*
 * name: 微应用名称 - 具有唯一性
 * entry: 微应用入口 - 通过该地址加载微应用
 * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */
const apps = [
  {
    name: "vueApp", // 应用的名字
    entry: "//localhost:10000", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#app-qiankun", // 容器名
    activeRule: "/vue", // 激活的路径
    props: { appData: shareData, data: "父应用数据111" },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#app-qiankun",
    activeRule: "/react",
    props: { appData: shareData, data: "父应用数据222" },
  },
];

export default apps;
