<template>
  <div id="app">
    <Header :range="rangeToTimeline()" />
    {{dateRange}}
    <DayCounter />
    <Timeline :range="rangeToTimeline()"/>
    <Explorer />
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import DayCounter from "./components/DayCounter.vue";
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer/Explorer.vue";
import store from "./store";
import { Range } from "./models";

export default {
  name: "app",
  components: {
    Timeline,
    DayCounter,
    Explorer,
    Header
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
