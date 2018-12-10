<template >
  <div class="explorer">

    <h1 v-if="activeLaw">law {{activeLaw.id}}, created on {{activeLaw.date}} </h1>
    <h1 v-else>No law selected</h1>

  </div>
</template>
<script >
import { Law } from "../../models";

export default {
  name: "Explorer",
  data() {
    return {};
  },
  props: [],
  computed: {
    activeLaw: {
      get: function() {
        const { activeLaw } = this.$root.$data.store;
        console.log();
        return this.$root.$data.store.data.find(
          l => parseInt(l.id, 10) === parseInt(activeLaw, 10)
        );
      }
    }
  },
  methods: {},
  components: {}
};
</script>
