import Vue from "vue";
import Component from "vue-class-component";
import { Timeline as VisTimeline } from "vue2vis";
import { Range } from "../../../models";
import store from "../../../store";
import { parseLawsToHistoricView } from "../../../helpers/apiHelpers";

const group = {
  id: 0,
  content: "Leyes"
};

const DEFAULT_OPTIONS = {
  height: 300,
  width: "100%",
  maxHeight: 300,
  zoomMin: 3600000,
  zoomMax: 9461000000000,
  max: new Date(),
  editable: {
    updateTime: true
  }
};

@Component({
  components: {
    VisTimeline
  },
  props: { range: { type: Range } }
})
class LawTabsTimeline extends Vue {
  timelineGroups = [group];

  get computedData() {
    return parseLawsToHistoricView(store.state.data);
  }

  get options() {
    return {
      start: this.range.start,
      end: this.range.end || new Date().toISOString(),
      ...DEFAULT_OPTIONS
    };
  }

  mounted() {
    this.$watch(
      function() {
        return this.$root.$data.store.activeLaw;
      },
      newVal => {
        const timeline = this.$refs.timeline;
        let selection = [];
        if (timeline && newVal) {
          // console.log(timeline);
          // console.log("setting focus on ", newVal);
          selection = [parseInt(newVal, 10)];
        }
        if (this.$root.$data.store.timelineInit) {
          timeline.setSelection(selection, { focus: true });
        }
      }
    );
    this.$watch(
      function() {
        return this.$root.$data.store.timelineInit;
      },
      newVal => {
        const timeline = this.$refs.timeline;
        let selection = [];
        if (timeline && newVal) {
          // console.log(timeline);
          // console.log("setting focus on ", newVal);
          selection = [parseInt(newVal, 10)];
        }
        if (timeline && newVal)
          timeline.setSelection(selection, { focus: true });
      }
    );
  }

  timelineEvent(eventName) {
    if (this.timelineEvents.length > 500) this.timelineEvents = "";
    this.timelineEvents += `${eventName}, `;
  }

  graph2dEvent(eventName) {
    if (this.graph2dEvents.length > 500) this.graph2dEvents = "";
    this.graph2dEvents += `${eventName}, `;
  }

  addNode() {
    const id = new Date().getTime();
    this.network.nodes.push({ id, label: "New node" });
  }

  addEdge() {
    const n1 = Math.floor(Math.random() * this.network.nodes.length);
    const n2 = Math.floor(Math.random() * this.network.nodes.length);
    this.network.edges.push({
      id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
      from: this.network.nodes[n1].id,
      to: this.network.nodes[n2].id
    });
  }

  handleClick(e) {
    store.setActiveLaw(e.item);
  }

  myChangedCallback(e) {
    this.$emit("changeRangeTimeline", e);
  }
}
export default LawTabsTimeline;
