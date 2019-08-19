<template>
  <div class="explorer">
    <div v-if="activeLaw">
      <ClipLoader v-if="loading" color="#47c9af"></ClipLoader>
      <div v-if="!loading && detail.idNorma" class="item">
        <h3>Nº {{ detail.idNorma }}, {{ detail.TituloNorma }}</h3>
        <p>Publicada en {{ detail.fechaPublicacion }}</p>
        <div>
          <tag field="department" :value="detail.Organismo"></tag>|
          <tag field="type" :value="detail.tipoNorma"></tag>
        </div>
        <p>
          <a
            :href="'https://www.leychile.cl/Navegar?idNorma=' + detail.idNorma"
            target="_blank"
          >detalles</a>
          <span v-if="detail.HistoriaDeLaLey.length > 0">
            |
            <a :href="detail.HistoriaDeLaLey">historia</a>
          </span>
        </p>
      </div>
    </div>

    <h1 v-else>No law selected</h1>
  </div>
</template>
<script src="./lawExplorer.js"></script>
