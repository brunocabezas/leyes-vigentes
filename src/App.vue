<template>
  <div id="app">
    <Header :range="rangeToTimeline()" />
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
import api from "./api";
import store from "./store";
import Tabs from "./components/common/Tabs.vue";
import Tab from "./components/common/Tab.vue";
import Timeline from "./components/Tabs/Timeline.vue";
import List from "./components/Tabs/List.vue";
import DayCounter from "./components/Tabs/Statistics/DayCounter.vue";
import { Range } from "./models";

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
      loading: this.$root.$data.store.loading,
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
    },
    lawTypeId: {
      get: function() {
        return this.$root.$data.store.filters.type;
      }
    },
    dateRange: {
      get: function() {
        return this.$root.$data.store.filters.dateRange;
      }
    }
  },
  mounted: function() {
    // First call of fecthData is made from Header
    // this.fetchData({ start: new Date(), end: new Date() });
    this.fetchLawTypes();
  },
  watch: {
    dateRange: function(newVal, old) {
      this.fetchData({ dateRange: newVal });
    },
    lawTypeId: function(newVal, old) {
      const law = this.$root.$data.store.lawTypes.find(l => l.id === newVal);
      this.fetchData({ lawType: law });
      console.log("lawTypeId change", law);
    }
  },
  methods: {
    rangeToTimeline: function() {
      const range = new Range(
        this.$root.$data.store.filters.dateRange.start,
        this.$root.$data.store.filters.dateRange.end
      );
      return range;
    },
    fetchData: function(p = { dateRange: {} }) {
      const lawTypeFromStore = this.$root.$data.store.lawTypes.find(
        l => l.id === this.lawTypeId
      );
      const params = {
        from: (p.dateRange && p.dateRange.start) || this.dateRange.start,
        to: (p.dateRange && p.dateRange.end) || this.dateRange.end,
        lawType:
          (p.lawType && p.lawType.name) ||
          (lawTypeFromStore && lawTypeFromStore.name)
      };
      console.log("fetchData with params: ", params);
      store.setLoading(true);
      return api
        .get("/data")
        .then(r => {
          store.setData(r.data.data);
        })
        .finally(() => store.setLoading(false));
    },
    fetchLawTypes: function() {
      console.log("fetchLawTypes");
      store.setLoading(true);
      return api
        .get("/law_types")
        .then(r => {
          store.setLawTypes(r.data.data);
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
