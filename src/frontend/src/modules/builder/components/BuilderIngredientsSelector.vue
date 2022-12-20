<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">

        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="sauce in sauces"
            :key="sauce.id"
            class="radio ingredients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="SAUCES[sauce.name].name"
              :checked="sauce.id === selectedSauce.id"
              @change="$emit('change', sauce)"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="(ingredient, index) in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span
                :class="`filling filling--${INGREDIENTS[ingredient.name].name}`"
                >{{ ingredient.name }}</span
              >

              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  :disabled="arrIngredients[index] === 0"
                  @click="
                    $set(arrIngredients, index, arrIngredients[index] - 1)
                  "
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  :value="arrIngredients[index]"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  :disabled="arrIngredients[index] === 3"
                  @click="
                    $set(arrIngredients, index, arrIngredients[index] + 1)
                  "
                >
                  <span class="visually-hidden">Больше</span>
                </button>
              </div>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { INGREDIENTS, SAUCES } from "@/common/constants";

export default {
  name: "BuilderIngredientsSelector",
  props: {
    ingredients: {
      type: Array,
    },
    sauces: {
      type: Array,
    },
    selectedSauce: {
      type: Object,
    },
  },
  data() {
    return {
      INGREDIENTS,
      SAUCES,
      arrIngredients: new Array(this.ingredients.length).fill(0),
    };
  },
  watch: {
    arrIngredients: {
      handler(arrIngredients) {
        this.$emit("changeCount", arrIngredients);
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
