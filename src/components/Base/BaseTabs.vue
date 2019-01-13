<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          title="add as filter"
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: tab.isActive }"
        >
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "BaseTabs",
  data: function() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabs
  width: auto;
  border-bottom: 3px solid #47c9af;
  font-family: Raleway, sans-serif;
  line-height: 1;
  height: 40px;

  ul
    list-style-type: none;
    display block
    height: 40px;
    display flex
    li
      cursor pointer;
      color: #444444;
      height: 40px;
      flex: 1
      display flex
      align-items center
      justify-content center
      a
        width: 100%;
        cursor pointer;
        font-size: 15px;
        font-weight: 400;
        color inherit
        text-decoration: none;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -ms-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
        margin-right: -4px;
    li.active, li:hover
      color: #ffffff;
      background-color #47c9af

  ul, li, a
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    position: relative;
</style>
