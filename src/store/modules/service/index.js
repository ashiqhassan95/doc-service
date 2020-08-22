import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

const initialState = {
  services: [],
  selectedService: null,
};

const serviceModule = new Vuex.Store({
  namespaced: true,
  state: initialState,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export default serviceModule;
