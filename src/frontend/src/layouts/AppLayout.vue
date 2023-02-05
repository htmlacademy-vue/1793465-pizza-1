<template>
  <component :is="layout" :auth="auth" :sum="sum">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  props: {
    auth: {
      type: Boolean,
      required: true,
    },
    sum: {
      type: Number,
    },
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
