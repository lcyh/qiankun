### 什么是微前端？

    微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略，

<img src='https://user-gold-cdn.xitu.io/2020/6/3/172795808b5b0cce?imageslim'>

#### qiankun

qiankun 蚂蚁金服基于 single-spa 的微前端解决方案，生产可用。
**特性**

- 基于 single-spa 封装，提供了更加开箱即用的 API。
- 技术栈无关，任意技术栈的应用均可 使用/接入，不论是 React/Vue/Angular/JQuery 还是其他等框架。
- HTML Entry 接入方式，让你接入微应用像使用 iframe 一样简单。
- 样式隔离，确保微应用之间样式互相不干扰。
- JS 沙箱，确保微应用之间 全局变量/事件 不冲突。
- 资源预加载，在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度。

**主应用搭建**
选择用[vue-cli]('https://cli.vuejs.org/zh/guide/installation.html')初始化了主应用，不了解的可自行阅读官方文档
项目中引入[qiankun]('https://qiankun.umijs.org/zh/guide')：

```
$ yarn add qiankun # 或者 npm i qiankun -S
```
