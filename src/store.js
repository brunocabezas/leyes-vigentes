var date3MonthsAgo = new Date();
date3MonthsAgo.setMonth(date3MonthsAgo.getMonth() - 3);
export default {
  debug: false,
  state: {
    loading: false,
    dateRange: {
      start: date3MonthsAgo.toLocaleDateString(),
      end: new Date().toLocaleDateString()
    },
    data: [],
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
  }
};
