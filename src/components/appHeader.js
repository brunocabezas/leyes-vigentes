import Vue from "vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import { Range } from "../models";
import store from "../store";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.min.css";

Vue.component("vue-ctk-date-time-picker", VueCtkDateTimePicker);

export default {
  name: "AppHeader",
  computed: {
    dateRange: {
      set: range => store.setDateRange(range),
      get: function() {
        return this.range;
      }
    },
    activeLawType: {
      get: function() {
        return this.$root.$data.store.filters.type;
      },
      set: function(lawId) {
        return store.setType(lawId);
      }
    },
    lawTypes: function() {
      const lawTypes = this.$root.$data.store.lawTypes;
      return Array.isArray(lawTypes)
        ? [{ name: "Select one type", id: null }, ...lawTypes]
        : [{ name: "Select one type", id: null }];
    },
    label: {
      get: function() {
        return "Choose a range";
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
      return new Date(1818, 1, 1).toISOString();
    }
  },
  props: {
    range: {
      type: Range,
      required: true,
      validator: prop => {
        return (
          (typeof prop.start === "string" || prop.start === null) &&
          (typeof prop.end === "string" || prop.end === null)
        );
      }
    }
  },
  methods: {
    changeRange(e) {
      // return store.setDateRange({ start: null, end: null });
    },
    clearRange() {
      return store.setDateRange({ start: null, end: null });
    }
  }
};
