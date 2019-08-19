<template>
  <div class="list-of-laws__container">
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
        ley Nº {{ law.TIPOS_NUMEROS && law.TIPOS_NUMEROS.TIPO_NUMERO && law.TIPOS_NUMEROS.TIPO_NUMERO.NUMERO }} -
        <tag field="department" :value="law.Organismo"></tag>
        <tag field="type" :value="law.tipoNorma"></tag>
      </li>
    </virtual-list>
  </div>
</template>
<script src="./lawTabsList.js"></script>
<style lang="stylus" scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.list-of-laws__container {
  border: 1px solid #ddd;
}

.list-of-laws {
  list-style-type: none;
  margin: 0;
}

.list-of-laws__law {
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
</style>
