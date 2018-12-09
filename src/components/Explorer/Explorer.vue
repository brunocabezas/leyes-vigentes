<template >
  <div id="tabs-root" class="container">
explorer

  </div>
</template>
<script >
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
  components: {},
  name: "Explorer"
};
</script>
