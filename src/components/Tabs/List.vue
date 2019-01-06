<template>
  <div class="list-of-laws__container">
    <ul class="list-of-laws">
      <li v-bind:class="{ 'list-of-laws__law--active': activeItem && activeItem==law.id }" v-on:click="lawClick" :id="law.id" :title="law.start" :key="law.id" class="list-of-laws__law" v-for="law in laws">{{law.title}} </li>
    </ul>
  </div>
</template>
<script lang="">
import store from '../../store';

  export default {
    name: "list",
    props: {
      laws: Array,
      loading: Boolean
    },
    computed: {
      activeItem: {
        get: function() {
          return store.state.activeLaw;
        }
      }
    },
    methods: {
      lawClick: function(e) {
        const id = e.target.id;
        store.setActiveLaw(id);
      }
    }
  }
</script>
<style lang="stylus" scoped>
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
