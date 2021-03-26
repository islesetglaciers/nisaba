<template>
  <div class="index">
    <Filtres />
    <ListeOeuvres :oeuvres="oeuvres" />
  </div>
</template>

<script>
import ListeOeuvres from '../components/ListeOeuvres.vue'
import Filtres from '../components/Filtres.vue'
import donneesOeuvres from '../assets/data.json'

export default {
  name: 'Index',
  components: { ListeOeuvres, Filtres },
  computed: {
    oeuvres() {
      return donneesOeuvres.oeuvres
    }
  }
}
</script>

<style>
  .index {
    min-height: 80vh;
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
</style>
