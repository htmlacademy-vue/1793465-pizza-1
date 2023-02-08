<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${selectedDough}-${selectedSauce}`"
      @drop="dropIngredient"
      @dragover.prevent
    >
      <div class="pizza__wrapper">
        <div :key="item" v-for="item in ingredientClasses" :class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { INGREDIENTS } from "@/common/constants";
import pizza from "@/static/pizza.json";

export default {
  name: "BuilderPizzaView",
  props: {
    selectedDough: {
      type: String,
    },
    selectedSauce: {
      type: String,
    },
    ingredientsCount: {
      type: Array,
    },
  },
  computed: {
    ingredientClasses() {
      let arrIngredients = [];
      this.ingredientsCount.forEach((elem, index) => {
        if (elem > 0) {
          const { name } = pizza.ingredients[index];
          let classes =
            "pizza__filling pizza__filling--" + INGREDIENTS[name].name;
          if (elem === 2) {
            classes += " pizza__filling--second";
          }
          if (elem === 3) {
            classes += " pizza__filling--third";
          }
          arrIngredients.push(classes);
        }
      });
      return arrIngredients;
    },
  },
  methods: {
    dropIngredient({ dataTransfer }) {
      const data = dataTransfer.getData("ingredient");
      this.$emit("incrementCount", data);
    },
  },
};
</script>

<style scoped></style>
