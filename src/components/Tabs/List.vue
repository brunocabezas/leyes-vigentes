<template>
  <div class="list-of-laws__container">
    <ul class="list-of-laws">
      <li v-on:click="lawClick" :id="law.id" :key="law.id" class="list-of-laws__law" v-for="law in timelineData">{{law.title}} </li>
    </ul>
  </div>
</template>
<script lang="">
import store from '../../store';

  export default {
    name: "list",
    // Options / Data
    props: {
      laws: Array
    },
    computed: {
      timelineData: function() {
        console.log(this.$root.$data.store, this.$root.$data.store.data);
        return this.$root.$data.store.data.map(r => ({
          ...r,
          id: parseInt(r.id, 10),
          title: "ley " + r.id,
          start: r.date
        }));
      },
    },
    methods: {
      lawClick: function(e) {
        const id = e.target.id;
        store.setActiveLaw(id);
      }
    }// ,
    // watch: {},
    // Options / DOM
    // el () {},
    // replace: true,
    // template: '',
    // Options / Lifecycle Hooks
    // init () {},
    // crated () {},
    // beforeCompile () {},
    // compiled () {},
    // ready () {},
    // attached () {},
    // detached () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    // directives: {},
    // elementDirectives: {},
    // filters: {},
    // components: {},
    // transitions: {},
    // partials: {},
    // Options / Misc
    // parent: null,
    // events: {},
    // mixins: [],
    // name: ''
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
  padding 1em
  &:hover
  background-color gray
    cursor pointer
    opacity 0.7
</style>
