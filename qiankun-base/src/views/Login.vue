<template>
  <div>
    <span @click="login">登陆</span>
  </div>
</template>

<script>
import { setToken } from "../utils/auth";

export default {
  methods: {
    login() {
      setToken("token", "token");
      this.$store.commit("login", "token");
      //   this.$router.replace("/");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
