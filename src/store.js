/* eslint no-console: ["error", { allow: ["log"] }] */
import { LawDetail } from "./models";

const detail = new LawDetail();
var date3MonthsAgo = new Date();
date3MonthsAgo.setMonth(date3MonthsAgo.getMonth() - 3);
export default {
  debug: true,
  state: {
    loading: false, // loader indicator for dataº
    detailLoading: false,
    filters: {
      dateRange: {
        start: date3MonthsAgo.toLocaleDateString(),
        end: new Date().toLocaleDateString()
      },
      type: null
    },
    data: [],
    detail,
    // Boolean to see if vis.js timeline component is already initialized
    timelineInit: false,
    // holds data from law used on <Explore/>
    activeLaw: null
  },
  setDateRange(newValue) {
    if (this.debug) console.log("setDateRange triggered with", newValue);
    this.state.filters.dateRange = newValue;
  },
  setType(newValue) {
    if (this.debug) console.log("setType triggered with", newValue);
    this.state.filters.type = newValue;
  },
  setLoading(newValue) {
    if (this.debug) console.log("setLoading triggered with", newValue);
    this.state.loading = newValue;
  },
  setDetailLoading(newValue) {
    if (this.debug) console.log("setDetailLoading triggered with", newValue);
    this.state.detailLoading = newValue;
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
  },
  setDetail(newValue) {
    if (this.debug) console.log("setDetail triggered with", newValue);
    this.state.detail = newValue;
  },
  setLawTypes(newValue) {
    if (this.debug) console.log("setLawTypes triggered with", newValue);
    this.state.lawTypes = newValue;
  }
};
