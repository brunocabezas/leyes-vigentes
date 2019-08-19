<template>
  <div class="app-header">
    <h1 class="app-header-title">Leyes Vigentes</h1>
    <select v-model="activeLawType">
      <option v-for="item in lawTypes" :value="item.id" :key="item.id">{{ item.name }}</option>
    </select>
    <vue-ctk-date-time-picker
      v-bind:min-date="minDate"
      v-bind:max-date="now"
      v-bind:disabled="loading"
      locale="es"
      v-on:input="changeRange($event)"
      formatted="ddd D MMM YYYY"
      auto-close
      v-model="dateRange"
      range-mode
    />
    <button v-if="dateRange.start && dateRange.end" @click="clearRange()" name="button">x</button>
  </div>
</template>
<script src="./appHeader.js"></script>
<style lang="stylus" scoped>
.app-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .app-header-title {
    flex: 2;
    text-align: left;
    padding: 0.5rem 0.5rem 1.5rem 0.5rem;
    margin: 0;
  }

  .ctk-date-time-picker {
    flex: 1;
  }
}
</style>
