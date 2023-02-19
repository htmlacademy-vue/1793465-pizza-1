<template>
  <AppLayout :auth="auth" :sum="sum">
    <router-view @changeValue="sum = $event" />
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
      sum: 0,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
