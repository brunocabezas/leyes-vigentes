<template>
  <div id="app">
    <Header @changeRangePicker="fetchData($event)" :range="rangeToTimeline()" />
    <div class="app__content">
      <Tabs>
        <Tab name="List" :selected="true">
          <List :laws="listData" :loading="loading"/>
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
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer/Explorer.vue";
import api, { mock } from "./api";
import store from "./store";
import Tabs from "./components/common/Tabs.vue";
import Tab from "./components/common/Tab.vue";
import Timeline from "./components/Tabs/Timeline.vue";
import List from "./components/Tabs/List.vue";
import DayCounter from "./components/Tabs/Statistics/DayCounter.vue";
import laws from "../data/reduced.json";
import detailedLaws from "../data/leyes3.json";
import { Range } from "./models";

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/data").reply(200, { data: laws });
mock.onGet("/detail").reply(200, { data: detailedLaws });

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
      loading: store.state.loading,
      activeLaw: this.$root.$data.store.activeLaw
    };
  },
  computed: {
    listData: {
      get: function() {
        return this.$root.$data.store.data.map(r => ({
          ...r,
          id: parseInt(r.id, 10),
          title: "ley " + r.id,
          start: r.date
        }));
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
    },
    fetchData: function(data) {
      if (!data.start || !data.end) return console.error("error fetching data");

      // console.log("fetchData", data.start, data.end, data);
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

html, body
  max-height 100%
  height 100%
  margin 0
body
  padding 10px
#app
  font-family "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  // margin-top 60px
  width 100%
  height 100%
  max-height 100%
  .app__content
    padding 0 1em

</style>
