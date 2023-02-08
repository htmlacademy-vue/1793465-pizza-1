import Vue from 'vue';
import Vuex from 'vuex';

import Auth from "@/store/modules/auth.store";
import Builder from "@/store/modules/builder.store";
import Cart from "@/store/modules/cart.store";
import Orders from "@/store/modules/orders.store";
import Addresses from "@/store/modules/addresses.store";

Vue.use(Vuex);

const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
  Auth,
  Builder,
  Cart,
  Orders,
  Addresses,
};
