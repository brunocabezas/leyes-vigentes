<template id>
  <div class="wrapper">
    <vis-timeline
      ref="timeline"
      :options="options"
      :groups="timelineGroups"
      :items="computedData"
      :events="['changed', 'click']"
      @changed="myChangedCallback($event)"
      @click="handleClick($event)"
    ></vis-timeline>
  </div>
</template>
<script src="./lawTabsTimeline.js"></script>
<style lang="stylus" scoped>
.wrapper {
  padding: 20px 0px;
  text-align: center;
  max-width: 100%;
  height: 300px;
  box-sizing: content-box;
}

.events {
  text-align: left;
  height: 70px;
}
</style>
