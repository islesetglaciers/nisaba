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
    display: flex;
    align-items: center;
    flex-direction: row;
  }
</style>
