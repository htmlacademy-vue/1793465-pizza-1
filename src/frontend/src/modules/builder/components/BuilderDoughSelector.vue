<template>
  <div class="content__dough">

    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="dough in doughs"
          :key="dough.id"
          :class="`dough__input dough__input--${DOUGHS[dough.name].name}`">
          <input
            type="radio"
            name="dought"
            :value="DOUGHS[dough.name].name"
            class="visually-hidden"
            :checked="dough.id === selectedDough.id"
            @change="$emit('change', dough)"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { DOUGHS } from "@/common/constants";
export default {
  name: "BuilderDoughSelector",
  props: {
    doughs: {
      type: Array,
    },
    selectedDough: {
      type: Object,
    },
  },
  data() {
    return {
      DOUGHS,
    };
  },
};
</script>

<style scoped></style>
