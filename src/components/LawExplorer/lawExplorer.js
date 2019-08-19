import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import { LawDetail } from "../../models";
import store from "../../store";
import api from "../../../api/client";
import apiRoutes from "../../../api/routes";
import Tag from "../Base/BaseTag.vue";

@Component({
  components: {
    ClipLoader: ClipLoader,
    tag: Tag
  }
})
export default class LawExplorer extends Vue {
  get detail() {
    return store.state.detail;
  }

  get loading() {
    return store.state.detailLoading;
  }

  get activeLaw() {
    return store.state.data.find(
      l => parseInt(l.idNorma, 10) === parseInt(store.state.activeLaw, 10)
    );
  }

  @Watch("activeLaw")
  onActiveLawChanged(value) {
    this.fetchDetail(value.idNorma);
  }

  fetchDetail(id) {
    if (!id) return console.error("error fetching data");
    store.setDetailLoading(true);
    return api
      .get(apiRoutes.law(id))
      .then(({ data }) => {
        // Finding corresponding detail
        console.log(data.data);
        // const detail = laws.find(l => l.idNorma == data.idNorma);
        store.setDetailLoading(false);
        store.setDetail(new LawDetail(data.data));
      })
      .catch(err => {
        console.log(err);
        return store.setDetailLoading(false);
      });
  }
}
