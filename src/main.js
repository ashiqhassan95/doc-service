import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import moment from 'moment';

Vue.filter('unixToLongReadable', (unix) => {
  const momentTm = moment(unix);
  return momentTm.format("LLLL");
});

Vue.filter('unixToShortReadable', (unix) => {
  const momentTm = moment(unix);
  return momentTm.format("hh:mm A DD/MM/YYYY");
});

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
