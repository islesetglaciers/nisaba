<template>
<div class="filtres">
  <div class="categories">
    <h3>Filtres</h3>
      <div class="categorie">
        <p>Type d'oeuvre</p>
        <ul>
          <li
          @click="changerFiltre('tous')" 
          :class="{ actif: courant === 'tous' }">Tous</li>
          <li
          @click="changerFiltre('Livre')" 
          :class="{ actif: courant === 'Livre' }">Livre</li>
          <li
          @click="changerFiltre('Fanfiction')" 
          :class="{ actif: courant === 'Fanfiction' }">Fanfic</li>
        </ul>
      </div>
      <div class="categorie">
        <p>Favoris</p>
        <ul>
          <li 
          @click="changerFiltre('favoris')" 
          :class="{ actif: courant === 'favoris' }">oeuvres favorites</li>
        </ul>
      </div>
      <div class="categorie">
        <p>Genre</p>
        <ul>
          <li
          v-for="genre in genres"
          :key="genre">{{ genre }}</li>
        </ul>
      </div>
      <div class="categorie" v-if="fandoms.length">
        <p>Fandoms</p>
        <ul>
          <li
          v-for="fandom in fandoms"
          :key="fandom">{{ fandom }}</li>
        </ul>
      </div>
      <div class="categorie" v-if="pairings.length">
        <p>Pairings</p>
        <ul>
          <li
          v-for="pairing in pairings"
          :key="pairing">{{ pairing }}</li>
        </ul>
      </div>
      <div class="categorie" v-if="tags.length">
        <p>Tags additionnels</p>
        <ul>
          <li
          v-for="tag in tags"
          :key="tag">{{ tag }}</li>
        </ul>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
  props: ['courant', 'genres', 'fandoms', 'pairings', 'tags'],
  methods: {
    changerFiltre(par, categorie = '') {
      console.log('Emitting changementFiltre par :', par, categorie)
      this.$emit('changementFiltre', par, categorie)
    }
  }

}
</script>

<style>
  .filtres {
    min-width: 250px;
    max-width: 300px;
    margin: 0 auto;
  }

  .categories {
    margin-top: 40%;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    border-top: 5px solid #a5a58d;
    border-bottom: 5px solid #a5a58d;
    text-align: left;
    font-size: 0.9em;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    max-height: 500px;
    overflow-y: scroll;
  }

  .categories::-webkit-scrollbar {
    width: 2px;
  }

  .categories h3 {
    font-family: 'Cormorant Garamond', serif;
    color: #6b705c;
    font-weight: 700;
    font-style: italic;
    margin: 0 0 20px 0;
    padding-bottom: 5px;
    font-size: 2em;
    border-bottom: 1px solid #6b705c;
    
  }

  .categories p {
    font-weight: 500;
    margin-bottom: 4px;
    padding-bottom: 3px;
    border-bottom: 1px solid #eee;
    color: #888;
    letter-spacing: 0.2em;
  }

  .categories ul {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  .categories li {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    text-transform: lowercase;
    color: #cb977e;
    margin: 3px;
  }

  .categories li:hover {
    color: #e07a5f;
    font-weight: 500;
    transform: .2s;
  }

  .categories li.actif {
    color: #e07a5f;
    font-weight: 500;
    padding-bottom: 2px;
    border-bottom: 1px solid #e07a5f;
    /* border-radius: 3px; */
  }
  
</style>