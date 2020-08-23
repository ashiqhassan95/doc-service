import Vue from "vue";
import Vuex from "vuex";
import request from "./modules/request";
import service from "./modules/service";
import payment from "./modules/payment";

Vue.use(Vuex);

const initialState = {
  isAppLoaded: false,
};

export default new Vuex.Store({
  strict: true,
  state: initialState,
  modules: {
    request,
    service,
    payment,
  },
});
