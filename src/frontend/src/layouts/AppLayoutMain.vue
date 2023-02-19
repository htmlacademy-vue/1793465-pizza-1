<template>
  <div class="app-layout-main">
    <AppLayoutHeader :auth="auth" :sum="sum" />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutHeader,
  },
  props: {
    sum: {
      type: Number,
    },
    auth: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
