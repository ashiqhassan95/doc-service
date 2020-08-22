import * as types from "./mutation-type";
export default {
  [types.SET_REQUESTS](state, payload) {
    state.requests = payload;
  },
  [types.SET_CLIENT_TO_SERIVICE_REQUEST](state, payload) {
    state.selectedServiceClients = payload;
  },
  [types.REMOVE_CLIENT](state, payload) {
    state.selectedServiceClients = state.selectedServiceClients.filter(
      (client) => {
        if (client.id === payload) {
          return false;
        }
        return true;
      }
    );
  },

  [types.SET_LOADING](state, payload) {
    state.isLoading = payload;
  },
};
