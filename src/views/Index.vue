<template>
  <div class="index">
    <Filtres @changementFiltre="courant = $event" :courant="courant"  :genres="genres" :relations="relations" :fandoms="fandoms" :tags="tags" />
    <ListeOeuvres :oeuvres="oeuvresFiltrees" />
  </div>
  <Footer />
</template>

<script>
import ListeOeuvres from '../components/ListeOeuvres.vue'
import Filtres from '../components/Filtres.vue'
import donneesOeuvres from '../assets/data.json'
import Footer from '../components/Footer.vue'

export default {
  name: 'Index',
  components: { ListeOeuvres, Filtres, Footer },
  data() {
    return {
      courant: 'tous',
      catFiltre: ''
    }
  },
  computed: {
    oeuvres() {
      return donneesOeuvres.oeuvres
    },
    oeuvresFiltrees() {
      if (this.courant === 'favoris') {
        return this.oeuvres.filter(oeuvre => oeuvre.fav)
      }
      if (this.courant === 'Livre') {
        return this.oeuvres.filter(oeuvre => oeuvre.type === this.courant)
      }
      if (this.courant === 'Fanfiction') {
        return this.oeuvres.filter(oeuvre => oeuvre.type === this.courant)
      }
      return this.oeuvres
    },
    genres() {
      var genres = []
      this.oeuvres.forEach(oeuvre => {
        if (!genres.includes(oeuvre.genre) && oeuvre.genre !== '') {
          genres.push(oeuvre.genre)
        }
      });
      return genres
    },
    relations() {
      var relations = []
      this.oeuvres.forEach(oeuvre => {
        oeuvre.pairings.forEach(pair => {
          if (!relations.includes(pair) && pair !== '') {
            relations.push(pair)
          }
        })
      });
      return relations
    },
    fandoms() {
      var fandoms = []
      this.oeuvres.forEach(oeuvre => {
        if (!fandoms.includes(oeuvre.fandom) && oeuvre.fandom !== '') {
          fandoms.push(oeuvre.fandom)
        }
      });
      return fandoms
    },
    tags() {
      var tags = []
      this.oeuvres.forEach(oeuvre => {
        oeuvre.tags.forEach(tag => {
          if (!tags.includes(tag) && tag !== '' && tag.length <= 15) {
            tags.push(tag)
          }
        })
      });
      return tags
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

  footer {
    flex-direction: column;
  }
</style>
