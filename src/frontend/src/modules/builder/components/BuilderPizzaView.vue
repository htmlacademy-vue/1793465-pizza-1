<template>
  <div class="content__constructor">
    <div
      :class="`pizza pizza--foundation--${doughName}-${sauceName}`"
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
import { INGREDIENTS, DOUGHS, SAUCES } from "@/common/constants";
import pizza from "@/static/pizza.json";
import { mapState } from "vuex";

export default {
  name: "BuilderPizzaView",

  computed: {
    ...mapState("Builder", [
      "selectedDough",
      "selectedSauce",
      "ingredientsCount",
    ]),
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
    doughName() {
      return DOUGHS[this.selectedDough.name].name;
    },
    sauceName() {
      return SAUCES[this.selectedSauce.name].name;
    },
  },
  methods: {
    dropIngredient({ dataTransfer }) {
      const data = dataTransfer.getData("ingredient");
      console.log(data);
      if (this.ingredientsCount[data] !== 3) {
        this.$store.commit("Builder/IncrementIngredientsCount", data);
      }
    },
  },
};
</script>

<style scoped></style>
