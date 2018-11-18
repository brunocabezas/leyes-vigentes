<template >
  <div class="app-header">
    <h1 class="app-header-title">Leyes Vigentes</h1>
    <vue-ctk-date-time-picker auto-close v-model="dateRange" range-mode />
  </div>
</template>
<script >
import Vue from "vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import { Range } from "../models";
import store from "../store";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";

Vue.component("vue-ctk-date-time-picker", VueCtkDateTimePicker);
export default {
  // Options / Data
  name: "Header",
  data() {
    return {};
  },
  computed: {
    // a computed getter
    dateRange: {
      set: range => store.setDateRange(range),
      get: function() {
        // `this` points to the vm instance
        return this.range;
      }
    }
  },
  props: { range: { type: Range } },
  methods: {}
};
</script>

<style lang="stylus" scoped>
  .app-header
    width 100%
    display flex
    align-items center
    justify-content center
    .app-header-title
      flex 2
      text-align left
      padding 1em
      margin 0
    .ctk-date-time-picker
      flex 1

</style>
