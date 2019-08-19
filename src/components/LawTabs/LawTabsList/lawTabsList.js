import virtualList from "vue-virtual-scroll-list";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import store from "../../../store";
import Tag from "../../Base/BaseTag.vue";

export default {
  name: "LawTabsList",
  props: {
    laws: Array
  },
  components: {
    ClipLoader: ClipLoader,
    tag: Tag,
    "virtual-list": virtualList
  },
  computed: {
    activeItem: {
      get: function() {
        return store.state.activeLaw;
      }
    },
    loading: {
      get: function() {
        return store.state.loading;
      }
    }
  },
  methods: {
    lawClick: function(e) {
      const id = e.target.id;
      store.setActiveLaw(id);
    }
  }
};
