/* eslint no-console: ["error", { allow: ["log"] }] */

var date3MonthsAgo = new Date();
date3MonthsAgo.setMonth(date3MonthsAgo.getMonth() - 3);
export default {
  state: {
    loading: false,
    dateRange: {
      start: date3MonthsAgo.toLocaleDateString(),
      end: new Date().toLocaleDateString()
    },
    data: [],
    // Boolean to see if vis.js timeline component is already initialized
    timelineInit: false,
    // holds data from law used on <Explore/>
    activeLaw: null
  },
  setDateRange(newValue) {
    if (this.debug) console.log("setDateRange triggered with", newValue);
    this.state.dateRange = newValue;
  },
  setLoading(newValue) {
    if (this.debug) console.log("setLoading triggered with", newValue);
    this.state.loading = newValue;
  },
  setData(newValue) {
    if (this.debug) console.log("setData triggered with", newValue);
    this.state.data = newValue;
  },
  setActiveLaw(newValue) {
    if (this.debug) console.log("setActiveLaw triggered with", newValue);
    this.state.activeLaw = newValue;
  },
  setTimelineInit(newValue) {
    if (this.debug) console.log("setTimelineInit triggered with", newValue);
    this.state.timelineInit = newValue;
  }
};
