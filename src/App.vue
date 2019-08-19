<template>
  <div id="app">
    <Header :range="rangeToTimeline()" />
    <div class="app__content">
      <Tabs>
        <Tab name="List" :selected="true">
          <List :laws="listData" :loading="loading" />
        </Tab>
        <Tab name="Timeline">
          <Timeline :range="rangeToTimeline()" />
        </Tab>
        <Tab name="Statistics">
          <DayCounter />
        </Tab>
      </Tabs>
      <Explorer />
    </div>
  </div>
</template>

<script src='./app.js'></script>
<style lang="stylus">
* {
  box-sizing: border-box;
}

html, body {
  max-height: 100%;
  height: 100%;
  margin: 0;
}

body {
  padding: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top 60px
  width: 100%;
  height: 100%;
  max-height: 100%;

  .app__content {
    padding: 0 1em;
  }
}
</style>
