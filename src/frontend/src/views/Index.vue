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
          <BuilderSizeSelector
            :sizes="sizes"
            :selectedSize="selectedSize"
            @change="selectedSize = $event"
          />
          <BuilderIngredientsSelector
            :ingredients="ingredients"
            :sauces="sauces"
            :selectedSauce="selectedSauce"
            @change="selectedSauce = $event"
            @changeCount="setIngredientsSum"
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
              <p>Итого: {{ finishSum }} ₽</p>
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
      selectedDough: pizza.dough[0],
      selectedSauce: pizza.sauces[0],
      sauceSum: 50,
      ingredientsSum: 0,
      selectedSize: pizza.sizes[0],
      ingredientsCount: new Array(pizza.ingredients.length).fill(0),
    };
  },
  computed: {
    sauceName() {
      return SAUCES[this.selectedSauce.name].name;
    },
    doughName() {
      return DOUGHS[this.selectedDough.name].name;
    },
    finishSum() {
      return (
        (this.selectedSauce.price + this.selectedDough.price + this.ingredientsSum) * this.selectedSize.multiplier
      );
    },
  },
  methods: {
    setIngredientsSum(arrIngredients) {
      let sum = 0;
      arrIngredients.forEach((item, index) => {
        sum += pizza.ingredients[index].price * item;
      });
      this.ingredientsSum = sum;
    },
  },
};
</script>

<style scoped></style>
