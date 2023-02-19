const state = {
  pizzas: [],
};
const getters = {};
const mutations = {
  addPizza(state, pizza) {
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
