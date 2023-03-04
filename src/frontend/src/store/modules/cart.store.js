import pizza from "@/static/pizza.json";

const state = {
  ingredients: pizza.ingredients,
  pizzas: [],
};
const getters = {};
const mutations = {
  addPizza(state, pizza) {
    pizza.ingredientsCount.forEach((element, key) => {
      if (element >= 1) {
        pizza.ingredientsName += state.ingredients[key].name + ", ";
      }
    });
    pizza.ingredientsName = pizza.ingredientsName.slice(0, -2);
    state.pizzas.push(pizza);
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
