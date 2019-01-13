<template>
  <div class="explorer">
    <div v-if="activeLaw">
      <ClipLoader v-if="loading" color="#47c9af"></ClipLoader>
      <div v-if="!loading && detail.idNorma" class="item">
        <h3>Nº {{ detail.idNorma }}, {{ detail.TituloNorma }}</h3>
        <p>Publicada en {{ detail.fechaPublicacion }}</p>
        <p>{{ detail.tipoNorma }} | {{ detail.Organismo }}</p>
        <p>
          <a
            :href="'https://www.leychile.cl/Navegar?idNorma=' + detail.idNorma"
            target="_blank"
          >
            detalles
          </a>
          <span v-if="detail.HistoriaDeLaLey.length > 0">
            | <a :href="detail.HistoriaDeLaLey">historia</a>
          </span>
        </p>
      </div>
    </div>

    <h1 v-else>No law selected</h1>
  </div>
</template>
<script>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import { Law, LawDetail } from "../../models";
import store from "../../store";
import api from "../../api";

export default {
  name: "LawExplorer",
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
        return store.state.detail;
      }
    },
    loading: {
      get: function() {
        return store.state.detailLoading;
      }
    },
    activeLaw: {
      get: function() {
        return store.state.data.find(
          l => parseInt(l.idNorma, 10) === parseInt(store.state.activeLaw, 10)
        );
      }
    }
  },
  watch: {
    activeLaw: function(newValue) {
      this.fetchDetail(newValue.idNorma);
    },
    lawDetail: function(newValue) {
      return newValue;
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
          const laws = r.data.data;
          const detail = laws.find(l => l.idNorma == id);
          if (detail) store.setDetail(new LawDetail(detail));
        })
        .finally(() => store.setDetailLoading(false));
    }
  }
};
</script>
