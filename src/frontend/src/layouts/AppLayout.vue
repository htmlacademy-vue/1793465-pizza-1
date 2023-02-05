<template>
  <component
    :is="layout"
    :auth="auth"
    @onCook="onCook"
    :sumInHeader="sumInHeader"
  >
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
    sumInHeader: {
      type: Number,
    },
  },
  methods: {
    onCook(sumInHeader) {
      this.sumInHeader = sumInHeader;
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
