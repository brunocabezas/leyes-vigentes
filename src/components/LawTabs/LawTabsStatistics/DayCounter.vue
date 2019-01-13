<template >
  <div class="">
    {{dayCount}}
  </div>
</template>
<script >
export default {
  // Options / Data
  data() {
    return {};
  },
  props: [],
  computed: {
    dayCount: {
      get: function() {
        const {
          dateRange: { start, end }
        } = this.$root.$data.store.filters;
        if (!start || !end) return "-";
        var date1 = new Date(start);
        var date2 = new Date(end);

        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      }
    }
  },
  methods: {}, // ,
  // watch: {},
  // Options / DOM
  // el () {},
  // replace: true,
  // template: '',
  // Options / Lifecycle Hooks
  // init () {},
  // crated () {},
  // beforeCompile () {},
  // compiled () {},
  // ready () {},
  // attached () {},
  // detached () {},
  // beforeDestroy () {},
  // destroyed () {},
  // Options / Assets
  // directives: {},
  // elementDirectives: {},
  // filters: {},
  // components: {},
  // transitions: {},
  // partials: {},
  // Options / Misc
  // parent: null,
  // events: {},
  // mixins: [],
  name: "day-counter"
};
</script>
