<template >
  <div class="app-header">
    <h1 class="app-header-title">Leyes Vigentes</h1>
    <vue-ctk-date-time-picker
      v-bind:min-date="minDate"
      v-bind:max-date="now"
      v-bind:disabled="loading"
      locale="es"
      v-on:input="changeRange($event)"
            formatted="ddd D MMM YYYY"

      auto-close

       v-model="dateRange"

        range-mode
    />
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
  name: "Header",
  data() {
    return {};
  },
  computed: {
    dateRange: {
      set: range => store.setDateRange(range),
      get: function() {
        return this.range;
      }
    },
    loading: function() {
      return this.$root.$data.store.loading;
    },
    now: function() {
      return new Date().toISOString();
    },
    minDate: function() {
      // set with the lowest date law
      return new Date("01-01-1818").toISOString();
    }
  },
  props: { range: { type: Range } },
  methods: {
    changeRange(a) {
      this.$emit("changeRangePicker", a);
    }
  }
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
