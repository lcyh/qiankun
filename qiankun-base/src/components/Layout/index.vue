<template>
  <div id="main-app">
    <el-container class="select-prant">
      <Header />
      <el-container class="el-container-main">
        <el-aside class="aside-menu" :width="computedWidth">
          <Scrollbar class="scroll-menu">
            <Menu :menu-status="menuStatus" />
          </Scrollbar>
          <div class="icon">
            <i
              @click="menuStatus = !menuStatus"
              :class="[menuStatus ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
            ></i>
          </div>
        </el-aside>
        <Scrollbar class="scroll">
          <el-main class="layou-main">
            <router-view />
            <div id="app-qiankun"></div>
          </el-main>
        </Scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
import Header from "./components/Header.vue";
import Scrollbar from "./scrollbar.vue";
export default {
  name: "HelloWorld",
  components: {
    Menu,
    Scrollbar,
    Header,
  },
  props: {},
  computed: {
    computedWidth() {
      return this.menuStatus ? "65px" : "200px";
    },
  },
  data() {
    return {
      menuStatus: false,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#app-qiankun {
  position: relative;
}
.el-container-main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.select-prant {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
}
.scroll-menu {
  height: 100%;
}
.el-aside {
  position: relative;
  overflow: hidden;
  .icon {
    font-size: 28px;
    position: absolute;
    bottom: 15px;
    right: 0;
    cursor: pointer;
    color: #409eff;
  }
}
.layou-main {
  min-height: 100%;
  background: #f4f4f8;
}
.aside-menu {
  width: 65px;
}
</style>
