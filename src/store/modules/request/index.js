import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

const initialState = {
  requests: [],
  selectedServiceClients: [],
  isLoading: false,
  selectedRequest: null,
  totalRequestCount: 50,
  perPageRequestCount: 5,
  currentPage: 1,
};

export default {
  namespaced: true,
  state: initialState,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
