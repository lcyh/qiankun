<template>
  <div class="home">
    HOME默认的base
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld/index";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    // console.log("主应用-HOME首页", this.$route);
  },
};
</script>
