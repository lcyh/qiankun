<template>
  <div>
    <span @click="login">登陆</span>
  </div>
</template>

<script>
import { setToken } from "../utils/auth";
import { restRouter } from "@/router";

export default {
  methods: {
    login() {
      setToken("token", "token");
      this.$store.commit("login", "token");
      this.$store.state.hasInited = false;
      //   restRouter();
      //   if (this.$route.query.redirect === "/") {
      //     this.$router.replace("/");
      //     return;
      //   }
      this.$router.replace({ path: this.$route.query.redirect || "/" });
    },
  },
};
</script>
