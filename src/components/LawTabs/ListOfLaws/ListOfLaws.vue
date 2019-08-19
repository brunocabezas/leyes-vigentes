<template>
  <div class="listOfLaws__container">
    <div v-if="loading" class="loading-container">
      <clip-loader :loading="loading" color="#47c9af"></clip-loader>
    </div>
    <virtual-list class="listOfLaws" :size="40" :remain="8">
      <li
        v-bind:class="{
          'listOfLaws__law--active': activeItem && activeItem == law.id
        }"
        v-on:click="lawClick"
        :id="law.id"
        :title="`Publicada on ${law.date}`"
        class="listOfLaws__law"
        v-for="(law, index) of laws"
        :key="index"
      >
        ley Nº {{ law.number }} -
        <tag field="department" :value="law.organism"></tag>
        <tag field="type" :value="law.type"></tag>
      </li>
    </virtual-list>
  </div>
</template>
<script src="./listOfLaws.js"></script>
<style lang="stylus" scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.listOfLaws {
  list-style-type: none;
  margin: 0;

  &__container {
    border: 1px solid #ddd;
  }

  &__law {
    transition: background-color 0.3s;
    text-align: left;
    padding: 0.5em;
    border-bottom: 1px solid #eee;

    &:hover {
      background-color: #eee;
      cursor: pointer;
      opacity: 0.7;
    }

    &--active {
      background-color: #eee;
    }
  }
}
</style>
