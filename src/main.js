import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  store: store.state,
  render: h => h(App),
  data: {
    store: store.state,
    groups: [],
    items: []
  }
}).$mount("#app");
