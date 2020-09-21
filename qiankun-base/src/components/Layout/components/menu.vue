<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical"
    :collapse="menuStatus"
  >
    <MenuItem
      v-for="item in computedRouterList"
      :key="item.path"
      :route="item"
      :base-path="item.path"
    />
  </el-menu>
</template>

<script>
import MenuItem from "./menu-item.vue";

export default {
  name: "Menu",
  components: { MenuItem },
  props: ["menuStatus", "basePath"],
  data() {
    return {};
  },
  computed: {
    computedRouterList() {
      return this.$store.state.routes;
    },
  },
  created() {
    console.log("$route.path", this.$route.path);
    console.log("computedRouterList", this.computedRouterList);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
<style scoped>
.el-menu-vertical .el-menu-item {
  min-width: auto;
}
.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
</style>
