<template>
  <div class="app-layout-main">
    <AppLayoutHeader :auth="auth" :sumInHeader="sumInHeader" />
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
    sumInHeader: {
      type: Number,
      required: true,
    },
    auth: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
