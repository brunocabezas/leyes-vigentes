<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  computed: {
    href: {
      get: function() {
        return "#" + this.name.toLowerCase().replace(/ /g, "-");
      }
    }
  },
  mounted() {
    this.isActive = this.selected;
  },
  props: { name: String, selected: Boolean },
  name: "Tab"
};
</script>
