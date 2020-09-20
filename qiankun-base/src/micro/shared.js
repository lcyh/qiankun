import store from "../store";

const model = {
  /**
   * 获取token
   */
  getToken: () => store.state.token || 1,
  /**
   * 获取用户数据
   */
  getUserInfo: () => store.state.userInfo,
  /**
   * 获取浏览器window
   */
  getWindow: () => window,
  /**
   * 登出
   */
  logout() {
    store.dispatch("logout");
  },
};

export default model;
