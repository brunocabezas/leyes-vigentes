<template id>
  <div class="wrapper"  style="width: 100%; height: 100%; border: 1px solid lightgrey">
  <vis-timeline
    ref="timeline"
    :options="options"
    :groups="timeline.groups"
    :items="data"
    :events="['changed', 'click']"
    @changed="myChangedCallback($event)"
    @click="handleClick($event)">
  </vis-timeline>
  </div>
</template>

<script>
import { Timeline as VisTimeline } from "vue2vis";
import { Range } from "../../models";
import store from "../../store";

export default {
  name: "timeline",
  data: function() {
    return {
      timelineEvents: "",
      timeline: {
        groups: [
          {
            id: 0,
            content: "Leyes"
          }
        ],
        items: []
      }
    };
  },
  components: {
    VisTimeline
  },
  props: { range: { type: Range } },
  computed: {
    data: function() {
      return this.$root.$data.store.data.map(r => ({
        id: parseInt(r.id, 10),
        content: "ley " + r.id,
        group: 0,
        start: r.date
      }));
    },
    options: {
      get: function() {
        return {
          start: this.range.start,
          end: this.range.end || new Date().toISOString()
        };
      }
    }
  },
  methods: {
    timelineEvent(eventName) {
      if (this.timelineEvents.length > 500) this.timelineEvents = "";
      this.timelineEvents += `${eventName}, `;
    },
    graph2dEvent(eventName) {
      if (this.graph2dEvents.length > 500) this.graph2dEvents = "";
      this.graph2dEvents += `${eventName}, `;
    },
    addNode() {
      const id = new Date().getTime();
      this.network.nodes.push({ id, label: "New node" });
    },
    addEdge() {
      const n1 = Math.floor(Math.random() * this.network.nodes.length);
      const n2 = Math.floor(Math.random() * this.network.nodes.length);
      this.network.edges.push({
        id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
        from: this.network.nodes[n1].id,
        to: this.network.nodes[n2].id
      });
    },
    handleClick(e) {
      store.setActiveLaw(e.item);
    },
    myChangedCallback(e) {
      this.$emit("changeRangeTimeline", e);
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  padding: 20px 50px;
  text-align: center;

.events
  text-align: left;
  height: 70px;

</style>
