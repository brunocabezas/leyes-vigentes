<template>
  <div id="app">
    <vue-ctk-date-time-picker v-model="dateRange" range-mode />
    {{dateRange}}
    <day-counter />
    <Timeline />
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import DayCounter from "./components/DayCounter.vue";
import Vue from "vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";
import store from "./store";

Vue.component("vue-ctk-date-time-picker", VueCtkDateTimePicker);

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
