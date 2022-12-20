<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter">
        <label v-for="size in sizes" :key="size.id" :class="`diameter__input diameter__input--${
                  SIZES[size.id].name}`">
          <input type="radio"
            name="diameter"
            :value="SIZES[size.id].name"
            class="visually-hidden"
            :checked="size.id === selectedSize.id"
            @change="$emit('change', size)"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { SIZES } from "@/common/constants";
export default {
  name: "BuilderSizeSelector",
  props: {
    sizes: {
      type: Array,
    },
    selectedSize: {
      type: Object,
    }
  },
  data() {
    return {
      SIZES,
    }
  },
}
</script>

<style scoped>

</style>
