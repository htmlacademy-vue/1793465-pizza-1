<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="#" class="logo">
          <img src="@/assets/img/logo.svg" alt="V!U!E! Pizza logo" width="90" height="40">
        </a>
      </div>
      <div class="header__cart">
        <a href="#">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>
    <main class="content">
      <form action="#" method="post">

        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            :doughs="doughs"
            :selectedDough="selectedDough"
            @change="selectedDough = $event"
          />
          <BuilderSizeSelector :sizes="sizes" />
          <BuilderIngredientsSelector
            :ingredients="ingredients"
            :sauces="sauces"
            :selectedSauce="selectedSauce"
            @change="selectedSauce = $event"
            @changeCount="arrIngredients"
          />

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input type="text" name="pizza_name" placeholder="Введите название пиццы">
            </label>
            <BuilderPizzaView
              :selectedSauce="sauceName"
              :selectedDough="doughName"
            />
            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>

        </div>

      </form>
    </main>
  </div>
</template>

<script>
import pizza from "@/static/pizza.json";
import { INGREDIENTS, SAUCES, DOUGHS, SIZES } from "@/common/constants";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue;";

export default {
  name: "index",
  components: {
    BuilderPizzaView,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      doughs: pizza.dough,
      ingredients: pizza.ingredients,
      sauces: pizza.sauces,
      sizes: pizza.sizes,
      DOUGHS,
      SAUCES,
      SIZES,
      INGREDIENTS,
      selectedDough: this.doughs[0],
      selectedSauce: this.sauces[0],
      sauceSum: 50,
      ingredientsSum: 0,
      multiplier: 1,
      ingredientsCount: new Array(this.ingredients.length).fill(0),
    };
  },
  computed: {
    sauceName() {
      const sauce = this.sauces.find((elem) => elem.id === this.selectedSauce);
      return SAUCES[sauce.name].name;
    },
    doughName() {
      const dough = this.doughs.find((elem) => elem.id === this.selectedDough);
      return DOUGHS[dough.name].name;
    },
    finishSum() {
      return (
        (this.selectedSauce.price + this.selectedDough.price + this.ingredientsSum) * this.multiplier
      );
    },
  },
};
</script>

<style scoped></style>
