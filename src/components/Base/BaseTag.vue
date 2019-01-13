<template>
  <div class="tag" :title="title">
    <span v-if="value">{{ value }}</span
    ><slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "BaseTag",
  data: function() {
    return {
      isActive: false
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    field: {
      type: String,
      required: true,
      validator: function(value) {
        // The value must match one of these strings
        return ["department", "type"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    title: {
      get: function() {
        return "add as filter";
      }
    },
    href: {
      get: function() {
        return "#" + this.name.toLowerCase().replace(/ /g, "-");
      }
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>
<style lang="stylus" scoped>
.tag
  border 2px solid black
  border-radius 4px
  background-color black
  color white
  transition all .3s
  display inline-block
  margin 0 5px
  font-size 14
  text-transform: lowercase;
  padding 3px
  cursor pointer
  &:hover
    color black
    background-color: white;
</style>
