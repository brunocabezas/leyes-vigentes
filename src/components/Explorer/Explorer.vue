<template >
  <div id="tabs-root" class="container">

    <Tabs>
      <Tab name="Services" :selected="true">
        <h1>What we do</h1>
      </Tab>
      <Tab name="Pricing">
        <h1>How much we do it for</h1>
      </Tab>
    </Tabs>

  </div>
</template>
<script >
import Tabs from "./Tabs";
import Tab from "./Tab";

export default {
  data() {
    return {};
  },
  props: [],
  computed: {
    dayCount: {
      get: function() {
        const {
          dateRange: { start, end }
        } = this.$root.$data.store;
        if (!start || !end) return "-";
        var date1 = new Date(start);
        var date2 = new Date(end);

        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      }
    }
  },
  methods: {},
  components: {
    Tabs,
    Tab
  },
  name: "Explorer"
};
</script>
