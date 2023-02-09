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
                draggable="true"
                @dragstart="dragIngredient(index, $event)"
                :class="`filling filling--${INGREDIENTS[ingredient.name].name}`"
                >{{ ingredient.name }}</span
              >

              <div class="counter counter--orange ingredients__counter">
                <button
                  type="button"
                  class="counter__button counter__button--minus"
                  :disabled="ingredientsCount[index] === 0"
                  @click="decrement(index)"
                >
                  <span class="visually-hidden">Меньше</span>
                </button>
                <input
                  type="text"
                  name="counter"
                  class="counter__input"
                  :value="ingredientsCount[index]"
                />
                <button
                  type="button"
                  class="counter__button counter__button--plus"
                  :disabled="ingredientsCount[index] === 3"
                  @click="increment(index)"
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
    ingredientsCount: {
      type: Array,
    },
  },
  data() {
    return {
      INGREDIENTS,
      SAUCES,
    };
  },
  methods: {
    dragIngredient(index, { dataTransfer }) {
      dataTransfer.setData("ingredient", index);
    },
    decrement(index) {
      this.$emit("decrement", index);
    },
    increment(index) {
      this.$emit("increment", index);
    },
  },
};
</script>

<style scoped></style>
