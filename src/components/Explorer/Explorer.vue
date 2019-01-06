<template >
  <div class="explorer">
    <div v-if="activeLaw">
      <ClipLoader v-if="loading" color="#47c9af" ></ClipLoader>
      <div v-if="!loading && detail.$.idNorma" class="item">
          <h3>Nº {{detail.$.idNorma}}, {{detail.TituloNorma[0]}} </h3>
          <p>Publicada en {{detail.$.fechaPublicacion}}</p>
          <p>{{detail.$.tipoNorma}} | {{detail.Organismo[0]}}</p>
      </div>
    </div>

    <h1 v-else>No law selected</h1>

  </div>
</template>
<script >
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import { Law } from "../../models";
import store from "../../store";
import api from "../../api";

export default {
  name: "Explorer",
  data() {
    return {};
  },
  props: [],
  components: {
    ClipLoader: ClipLoader
  },
  computed: {
    detail: {
      get: function() {
        return (
          store.state.detail || {
            $: {},
            TituloNorma: [],
            Organismo: [],
            IdentificacionNorma: []
          }
        );
      }
    },
    loading: {
      get: function() {
        return store.state.detailLoading;
      }
    },
    activeLaw: {
      get: function() {
        const { activeLaw } = this.$root.$data.store;
        return this.$root.$data.store.data.find(
          l => parseInt(l.id, 10) === parseInt(activeLaw, 10)
        );
      }
    }
  },
  watch: {
    // watch changes here
    activeLaw: function(newValue, oldValue) {
      // apply your logic here, e.g. invoke your listener function
      this.fetchDetail(newValue.id);
    }
  },
  methods: {
    fetchDetail: function(id) {
      if (!id) return console.error("error fetching data");
      store.setDetailLoading(true);
      return api
        .get("/detail")
        .then(r => {
          // Finding corresponding detail
          const laws = r.data.data[0].Normas.Norma;
          const detail = laws.find(l => l.$.idNorma == id);
          if (detail.$.idNorma) store.setDetail(detail);
          console.log(detail, id);
        })
        .finally(() => store.setDetailLoading(false));
    }
  }
};
</script>
