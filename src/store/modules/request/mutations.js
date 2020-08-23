import * as types from "./mutation-type";
export default {
  [types.SET_SERVICES](state, payload) {
    state.services = payload;
  },
  [types.SET_CLIENTS_TO_SERIVICE](state, payload) {
    state.clients = payload;
  },
  [types.REMOVE_CLIENT](state, payload) {
    state.clients = state.clients.filter((client) => {
      if (client.id === payload) {
        return false;
      }
      return true;
    });
  },

  [types.SET_LOADING](state, payload) {
    state.isLoading = payload;
  },
};
