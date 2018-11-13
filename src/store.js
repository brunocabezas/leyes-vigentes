var date3MonthsAgo = new Date();
date3MonthsAgo.setMonth(date3MonthsAgo.getMonth() - 3);
export default {
  debug: false,
  state: {
    dateRange: {
      start: date3MonthsAgo.toLocaleDateString(),
      end: new Date().toLocaleDateString()
    }
  },
  setDateRange(newValue) {
    if (this.debug) console.log("setDateRange triggered with", newValue);
    this.state.dateRange = newValue;
  }
};
