import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

const initialState = {
  payments: [],
  selectedPayment: null,
};

const paymentModule = new Vuex.Store({
  namespaced: true,
  state: initialState,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default paymentModule;
