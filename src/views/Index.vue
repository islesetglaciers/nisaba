<template>
  <div class="index">
    <Filtres />
    <ListeOeuvres :oeuvres="oeuvres" />
  </div>
</template>

<script>
import ListeOeuvres from '../components/ListeOeuvres.vue'
import Filtres from '../components/Filtres.vue'

export default {
  name: 'Index',
  components: { ListeOeuvres, Filtres },
  data() {
      return {
          oeuvres: [
              {
                id: 1,
                type: 'Livre',
                auteur: 'Chuck Palahniuk',
                titre: 'Fight Club',
                genre: 'Fiction',
                resume: 'Fight Club’s estranged narrator leaves his lackluster job when he comes under the thrall of Tyler Durden, an enigmatic young man who holds secret after-hours boxing matches in the basement of bars.',
                lien: 'https://www.goodreads.com/book/show/36236124-fight-club',
                nomLien: 'Goodreads',
                fav: true,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: ['I LOVE THIS BOOK SO MUCH UGH'],
                eval: 4
              },
              {
                id: 2,
                type: 'Livre',
                auteur: 'Chuck Palahniuk',
                titre: 'Rant',
                genre: 'Fiction',
                resume: '',
                lien: '',
                nomLien: '',
                fav: true,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: [],
                eval: 5
              }
          ]
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
