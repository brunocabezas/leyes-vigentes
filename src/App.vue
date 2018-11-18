<template>
  <div id="app">
    <Header @changeRange="fetchData($event)" :range="rangeToTimeline()" />
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
// import store from "./store";
import { Range } from "./models";

export default {
  name: "app",
  components: {
    Timeline,
    DayCounter,
    Explorer,
    Header
  },
  methods: {
    rangeToTimeline: function() {
      const range = new Range(
        this.$root.$data.store.dateRange.start,
        this.$root.$data.store.dateRange.end
      );
      return range;
    },
    fetchData: function(data) {
      if (!data.start || !data.end) return console.error("this is bad");
      console.log("fetchData", data.start, data.end, data);
    }
  }
};
</script>

<style lang="stylus">
*
  box-sizing border-box
#app
  font-family "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  width 100%
  height 100%

</style>
