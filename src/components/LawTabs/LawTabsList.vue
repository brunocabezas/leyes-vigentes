<template>
  <div>
    <div v-if="loading" class="loading-container">
      <clip-loader :loading="loading" color="#47c9af"></clip-loader>
    </div>
    <virtual-list class="list-of-laws" :size="40" :remain="8">
      <li
        v-bind:class="{
          'list-of-laws__law--active': activeItem && activeItem == law.idNorma
        }"
        v-on:click="lawClick"
        :id="law.idNorma"
        :title="'Started on ' + law.fechaPublicacion"
        class="list-of-laws__law"
        v-for="(law, index) of laws"
        :key="index"
      >
        ley Nº {{ law.numeroNorma }} -
        <tag field="department" :value="law.Organismo"></tag>
        <tag field="type" :value="law.tipoNorma"></tag>
      </li>
    </virtual-list>
  </div>
</template>
<script lang="">
import virtualList from "vue-virtual-scroll-list";
import store from "../../store";
import Tag from "../Base/BaseTag.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

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
</script>
<style lang="stylus" scoped>
.loading-container
  display flex
  align-items center
  justify-content center
  height 300px
.list-of-laws__container
  max-height 300px
  overflow-y auto

.list-of-laws
  list-style-type none
  padding 0
  margin 0

.list-of-laws__law
  transition background-color 0.3s
  text-align left
  padding 0.5em

  &:hover
    background-color gray
    cursor pointer
    opacity 0.7

  &--active
    background-color gray
</style>
