<template>
  <div class="index">
    <Filtres />
    <ListeOeuvres />
  </div>
</template>

<script>
import ListeOeuvres from '../components/ListeOeuvres.vue'
import Filtres from '../components/Filtres.vue'

export default {
  name: 'Index',
  components: { ListeOeuvres, Filtres }
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
