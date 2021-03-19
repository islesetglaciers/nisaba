<template>
  <div class="index">
    <Filtres />
    <ListeOeuvres :oeuvres="oeuvres" />
  </div>
</template>

<script>
import ListeOeuvres from '../components/ListeOeuvres.vue'
import Filtres from '../components/Filtres.vue'
// import donneesOeuvres from '../assests/data.json'

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
                fav: false,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: [],
                eval: 4
              },
              {
                id: 2,
                type: 'Livre',
                auteur: 'Chuck Palahniuk',
                titre: 'Rant',
                genre: 'Fiction',
                resume: 'Buster “Rant” Casey just may be the most efficient serial killer of our time. A high school rebel, Rant Casey escapes from his small town home for the big city where he becomes the leader of an urban demolition derby called Party Crashing. Rant Casey will die a spectacular highway death, after which his friends gather the testimony needed to build an oral history of his short, violent life.',
                lien: 'https://www.goodreads.com/book/show/22285.Rant',
                nomLien: 'Goodreads',
                fav: true,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: ['Fave Palahniuk novel'],
                eval: 5
              },
              {
                id: 3,
                type: 'Livre',
                auteur: 'Doug Dorst, J.J Abrams',
                titre: 'S.',
                genre: 'Metafiction',
                resume: 'A young woman picks up a book left behind by a stranger. Inside it are his margin notes, which reveal a reader entranced by the story and by its mysterious author. She responds with notes of her own, leaving the book for the stranger, and so begins an unlikely conversation that plunges them both into the unknown.',
                lien: 'https://whoisstraka.wordpress.com/',
                nomLien: 'whoisstraka',
                fav: true,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: ['Fave. Book. EVER', 'Ergodic'],
                eval: 5
              },
              {
                id: 4,
                type: 'Livre',
                auteur: 'Mark Z. Danielewski',
                titre: 'House of Leaves',
                genre: 'Metafiction',
                resume: 'The plot is centered on a (possibly fictional) documentary about a family whose house is impossibly larger on the inside than the outside. The format and structure of House of Leaves is unconventional, with unusual page layout and style, making it a prime example of ergodic literature.',
                lien: 'https://en.wikipedia.org/wiki/House_of_Leaves',
                nomLien: 'Wikipedia',
                fav: true,
                pairing: '',
                fandom: '',
                nbMots: '',
                tags: ['Ergodic', 'Comment avoir peur du noir pendant deux semaines 101'],
                eval: 5
              },
              {
                id: 5,
                type: 'Fanfiction',
                auteur: 'idiopathicsmile',
                titre: 'Mistake on the Part of Nature',
                genre: 'Fiction',
                resume: 'In which an American icon is mourned. But probably not the one you\'re thinking of.',
                lien: 'https://archiveofourown.org/works/1488142',
                nomLien: 'ao3',
                fav: false,
                pairing: '',
                fandom: 'Captain America (Movies)',
                nbMots: '1274',
                tags: ['Bonanes !!!'],
                eval: 4
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
