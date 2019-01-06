<template id>
  <div class="wrapper">
    <vis-timeline
      ref="timeline"
      :options="options"
      :groups="timelineGroups"
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

const group = {
  id: 0,
  content: "Leyes"
};

export default {
  name: "timeline",
  data: function() {
    return {
      timelineGroups: [group]
    };
  },
  components: {
    VisTimeline
  },
  props: { range: { type: Range } },
  computed: {
    data: {
      get: function() {
        return this.$root.$data.store.data.map(r => ({
          id: parseInt(r.id, 10),
          content: "ley " + r.id,
          group: 0,
          start: r.date
        }));
      }
    },
    options: {
      get: function() {
        return {
          start: this.range.start,
          end: this.range.end || new Date().toISOString(),
          height: 400,
          maxHeight: 400,
          zoomMin: 3600000,
          zoomMax: 9461000000000,
          max: new Date(),
          onInitialDrawComplete: function() {
            store.setTimelineInit(true);
          },
          editable: {
            updateTime: true
          }
        };
      }
    }
  },
  mounted() {
    this.$watch(
      function() {
        return this.$root.$data.store.activeLaw;
      },
      (newVal, oldVal) => {
        const timeline = this.$refs.timeline;
        let selection = [];
        if (timeline && newVal) {
          console.log(timeline);
          console.log("setting focus on ", newVal);
          selection = [parseInt(newVal, 10)];
        }
        console.log(
          this.$root.$data.store.timelineInit,
          store.state.timelineInit
        );
        if (this.$root.$data.store.timelineInit) {
          timeline.setSelection(selection, { focus: true });
        }
      }
    );
    this.$watch(
      function() {
        return this.$root.$data.store.timelineInit;
      },
      (newVal, oldVal) => {
        const timeline = this.$refs.timeline;
        let selection = [];
        if (timeline && newVal) {
          console.log(timeline);
          console.log("setting focus on ", newVal);
          selection = [parseInt(newVal, 10)];
        }
        if (timeline && newVal)
          timeline.setSelection(selection, { focus: true });
      }
    );
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
  width: 100%;
  height: 400px;
  box-sizing: content-box;
  border: 1px solid lightgrey;

.events
  text-align: left;
  height: 70px;

</style>
