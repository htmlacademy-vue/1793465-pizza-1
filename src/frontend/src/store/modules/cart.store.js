import pizza from "@/static/pizza.json";
import Vue from "vue";

const state = {
  ingredients: pizza.ingredients,
  pizzas: [],
  pizzasSum: 0,
  pizzasCounts: [],
};
const getters = {
  pizzasPrices(state) {
    return state.pizzas.map((element, index) => {
      return element.price * state.pizzasCounts[index];
    });
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
    state.pizzasSum += pizza.price;
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
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
