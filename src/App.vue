<template>
  <div id="app">
    <Header @changeRangePicker="fetchData($event)" :range="rangeToTimeline()" />
    <Tabs>
      <Tab name="List" :selected="true">
        <List />
      </Tab>
      <Tab name="Timeline">
        <Timeline  :range="rangeToTimeline()"/>
      </Tab>
      <Tab name="Statistics">
        <DayCounter />
      </Tab>
    </Tabs>
    <Explorer />
  </div>
</template>

<script>
import Timeline from "./components/Tabs/Timeline.vue";
import DayCounter from "./components/Tabs/DayCounter.vue";
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer/Explorer.vue";
import api, { mock } from "./api";
import store from "./store";
import Tabs from "./components/Tabs/Tabs.vue";
import List from "./components/Tabs/List.vue";
import Tab from "./components/Tabs/Tab.vue";
import laws from "../data/reduced.json";
import { Range } from "./models";

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/data").reply(200, { data: laws, delayResponse: 5000 });

export default {
  name: "app",
  components: {
    Timeline,
    DayCounter,
    Explorer,
    Tabs,
    Tab,
    List,
    Header
  },
  data() {
    return {
      loading: this.$root.$data.store.loading
    };
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
      store.setLoading(true);
      return api
        .get("/data")
        .then(r => {
          store.setData(r.data.data);
        })
        .finally(() => store.setLoading(false));
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
