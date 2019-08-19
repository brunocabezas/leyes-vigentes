import Header from "./components/AppHeader.vue";
import Explorer from "./components/LawExplorer/LawExplorer.vue";
import api from "../api/client";
import store from "./store";
import Tabs from "./components/Base/BaseTabs.vue";
import Tab from "./components/Base/BaseTab.vue";
import Timeline from "./components/LawTabs/LawTabsTimeline.vue";
import List from "./components/LawTabs/LawTabsList.vue";
import DayCounter from "./components/LawTabs/LawTabsStatistics/DayCounter.vue";
import routes from "../api/routes.js";
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
    this.fetchData({ start: new Date(), end: new Date() });
    this.fetchLawTypes();
  },
  watch: {
    dateRange: function(newVal) {
      this.fetchData({ dateRange: newVal });
    },
    lawTypeId: function(newVal) {
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
      store.setLoading(true);
      return api
        .get(routes.laws)
        .then(r => {
          console.log(r.data.data);
          store.setData(r.data.data);
        })
        .finally(() => store.setLoading(false));
    },
    fetchLawTypes: function() {
      console.log("fetchLawTypes");
      store.setLoading(true);
      return api
        .get(routes.lawTypes)
        .then(r => {
          store.setLawTypes(r.data.data);
        })
        .finally(() => store.setLoading(false));
    }
  }
};
