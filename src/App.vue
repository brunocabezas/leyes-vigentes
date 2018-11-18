<template>
  <div id="app">
    <vue-ctk-date-time-picker v-model="dateRange" range-mode />
    {{dateRange}}
    <day-counter />
    <timeline :range="rangeToTimeline()"/>
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import DayCounter from "./components/DayCounter.vue";
import Vue from "vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";
import store from "./store";
import { Range } from "./models";

Vue.component("vue-ctk-date-time-picker", VueCtkDateTimePicker);
// function formatDate(date) {
//   var d = new Date(date),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();
//
//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;
//
//   return [year, month, day].join("-");
// }
export default {
  name: "app",
  components: {
    Timeline,
    DayCounter
  },
  computed: {
    // a computed getter
    dateRange: {
      set: range => store.setDateRange(range),
      get: function() {
        // `this` points to the vm instance
        return this.$root.$data.store.dateRange;
      }
    }
  },
  methods: {
    rangeToTimeline: function() {
      const range = new Range(
        this.$root.$data.store.dateRange.start,
        this.$root.$data.store.dateRange.end
      );
      return range;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
