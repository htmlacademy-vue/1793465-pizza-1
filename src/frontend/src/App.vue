<template>
  <AppLayout :auth="auth">
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      auth: false,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
