<template>
  <div class="menu-wrp">
    <template v-if="route.children && route.children.length">
      <el-submenu :index="basePath">
        <template slot="title">
          <i :class="route.icon"></i>
          <span slot="title">{{ route.label }}</span>
        </template>
        <el-menu-item-group>
          <MenuItem
            v-for="item in route.children"
            :key="item.path"
            :route="item"
            :base-path="item.path"
          />
        </el-menu-item-group>
      </el-submenu>
    </template>
    <template v-else>
      <router-link :to="basePath">
        <el-menu-item :index="route.path">
          <i :class="route.icon"></i>
          <span slot="title">{{ route.label }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  components: {},
  props: ["route", "basePath"],
  data() {
    return {};
  },
  created() {
    console.log("this.props.route", this.route);
  },
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.el-menu--collapse span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
