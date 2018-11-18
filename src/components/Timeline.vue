<template id>
  <div class="wrapper"  style="width: 100%; height: 100%; border: 1px solid lightgrey">
<vis-timeline
  ref="timeline"
  :options="options"
  :groups="timeline.groups"
  :items="timeline.items" />
  </div>
</template>

<script>
import { Timeline as VisTimeline } from "vue2vis";
import { Range } from "../models";

export default {
  name: "timeline",
  data: function() {
    return {
      timelineEvents: "",
      timeline: {
        groups: [
          {
            id: 0,
            content: "Group 1"
          }
        ],
        items: [
          { id: 2, group: 0, content: "item 2", start: "2014-04-14" },
          { id: 3, group: 0, content: "item 3", start: "2014-04-18" },
          { id: 1, group: 0, content: "item 1", start: "2014-04-20" },
          {
            id: 4,
            group: 0,
            content: "item 4",
            start: "2014-04-16",
            end: "2014-04-19"
          },
          { id: 5, group: 0, content: "item 5", start: "2014-04-25" },
          {
            id: 6,
            group: 0,
            content: "item 6",
            start: "2014-04-27",
            type: "point"
          }
        ]
      }
    };
  },
  components: {
    VisTimeline
  },
  props: { range: { type: Range } },
  computed: {
    options: function() {
      return {
        start: this.range.start,
        end: this.range.end,
        editable: true
      };
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
