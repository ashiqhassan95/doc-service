import mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

const initialState = {
  services: [],
  clients: [],
  isLoading: false,
  selectedService: null,
};

export default {
  namespaced: true,
  state: initialState,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
