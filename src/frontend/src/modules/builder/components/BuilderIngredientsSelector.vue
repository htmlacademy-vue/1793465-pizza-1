<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="sauce in $store.state.Builder.sauces"
            :key="sauce.id"
            class="radio ingredients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="SAUCES[sauce.name].name"
              :checked="sauce.id === $store.state.Builder.selectedSauce.id"
              @change="$store.commit('Builder/setSelectedSauce', sauce)"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="(ingredient, index) in $store.state.Builder.ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span
                draggable="true"
                @dragstart="dragIngredient(index)"
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
import { mapState } from "vuex";

export default {
  name: "BuilderIngredientsSelector",
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
      this.$store.commit("Builder/DecrementIngredientsCount", index);
    },
    increment(index) {
      this.$store.commit("Builder/IncrementIngredientsCount", index);
    },
  },
  computed: {
    ...mapState("Builder", ["ingredientsCount"]),
  },
};
</script>

<style scoped></style>
