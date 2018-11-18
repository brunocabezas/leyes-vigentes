import Vue from "vue";
import dayjs from "dayjs";
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
  },
  created() {
    var now = dayjs()
      .set("minute", 0)
      .set("second", 0)
      .set("millisecond", 0);
    var groupCount = 3;
    var itemCount = 20;
    // create a data set with groups
    var names = ["John", "Alston", "Lee", "Grant"];
    for (var g = 0; g < groupCount; g++) {
      this.groups.push({
        id: g,
        content: names[g]
      });
    }
    // create a dataset with items
    for (var i = 0; i < itemCount; i++) {
      var start = now.clone().add(Math.random() * 200, "hours");
      var group = Math.floor(Math.random() * groupCount);
      this.items.push({
        id: i,
        group: group,
        content:
          "item " +
          i +
          ' <span style="color:#97B0F8;">(' +
          names[group] +
          ")</span>",
        start: start,
        type: "box"
      });
    }
  }
}).$mount("#app");
