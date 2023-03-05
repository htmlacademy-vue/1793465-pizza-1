<template>
  <div class="app-layout-main">
    <AppLayoutHeader :auth="auth" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
  props: {
    auth: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

