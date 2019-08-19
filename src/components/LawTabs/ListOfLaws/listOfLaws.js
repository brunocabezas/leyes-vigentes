import Vue from "vue";
import Component from "vue-class-component";
import virtualList from "vue-virtual-scroll-list";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import store from "../../../store";
import Tag from "../../Base/BaseTag.vue";
import { Law } from "../../../models";

@Component({
  props: {
    laws: Array,
    validator: function(laws) {
      return !laws.find(law => !law instanceof Law);
    }
  },
  components: {
    ClipLoader: ClipLoader,
    tag: Tag,
    "virtual-list": virtualList
  }
})
export default class ListOfLaws extends Vue {
  get activeItem() {
    return store.state.activeLaw;
  }
  get loading() {
    return store.state.loading;
  }

  lawClick(e) {
    const id = e.target.id;
    store.setActiveLaw(id);
  }
}
