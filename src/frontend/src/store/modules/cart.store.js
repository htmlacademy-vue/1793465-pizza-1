import pizza from "@/static/pizza.json";
import misc from "@/static/misc.json";
import Vue from "vue";

const state = {
  ingredients: pizza.ingredients,
  pizzas: [],
  pizzasCounts: [],
  oldPizzaIndex: null,
  miscGoods: misc,
  goodsCounts: Array(misc.length).fill(0),
};
const getters = {
  pizzasPrices(state) {
    return state.pizzas.map((element, index) => {
      return element.price * state.pizzasCounts[index];
    });
  },
  pizzasSum(state, getters) {
    return getters.pizzasPrices.reduce((sum, item) => {
      return sum + item;
    }, 0);
  },
};
const mutations = {
  addPizza(state, pizza) {
    pizza.ingredientsCount.forEach((element, key) => {
      if (element >= 1) {
        pizza.ingredientsName += state.ingredients[key].name + ", ";
      }
    });
    pizza.ingredientsName = pizza.ingredientsName.slice(0, -2);
    state.pizzasCounts.push(1);
    state.pizzas.push(pizza);
  },
  incrementPizzaCount(state, index) {
    Vue.set(state.pizzasCounts, index, state.pizzasCounts[index] + 1);
  },
  decrementPizzaCount(state, index) {
    Vue.set(state.pizzasCounts, index, state.pizzasCounts[index] - 1);
    if (state.pizzasCounts[index] === 0) {
      state.pizzas.splice(index, 1);
      state.pizzasCounts.splice(index, 1);
    }
  },
  incrementGoodCount(state, index) {
    Vue.set(state.goodsCounts, index, state.goodsCounts[index] + 1);
  },
  decrementGoodCount(state, index) {
    Vue.set(state.goodsCounts, index, state.goodsCounts[index] - 1);
  },
  changeOldPizzaId(state, index) {
    state.oldPizzaIndex = index;
  },
  deleteOldPizza(state, index) {
    state.pizzas.splice(index, 1);
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
