<template id>
  <div id="visNetwork"
       ref="mynetwork"
       style="width: 100%; height: 100vh; border: 1px solid lightgrey"></div>
</template>

<script>
import vis from "vis";

export default {
  name: "Timeline",
  props: {
    msg: String
  },
  mounted() {
    this.container = this.$refs.mynetwork;
    const data = new vis.DataSet([
      { id: 1, content: "item 1", start: "2014-04-20" },
      { id: 2, content: "item 2", start: "2014-04-14" },
      { id: 3, content: "item 3", start: "2014-04-18" },
      { id: 4, content: "item 4", start: "2014-04-16", end: "2014-04-19" },
      { id: 5, content: "item 5", start: "2014-04-25" },
      { id: 6, content: "item 6", start: "2014-04-27", type: "point" }
    ]);
    this.histogram = new vis.Timeline(this.container, data, {});
  },
  created() {
    this.histogram = null;
  }
};
</script>

<style scoped>
</style>
