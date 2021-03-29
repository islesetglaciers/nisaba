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
          @click="changerFiltre('Livre', 'type')" 
          :class="{ actif: courant === 'Livre' }">Livres</li>
          <li
          @click="changerFiltre('Fanfiction', 'type')" 
          :class="{ actif: courant === 'Fanfiction' }">Fanfiction</li>
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
        <p>Classement</p>
        <ul>
          <li
          v-for="rating in ratings"
          :key="rating">{{ rating }}</li>
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
      <div class="categorie" v-if="relations.length">
        <p>Relations</p>
        <ul>
          <li
          v-for="pair in relations"
          :key="pair">{{ pair }}</li>
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
  props: ['courant', 'genres', 'fandoms', 'relations', 'tags', 'ratings'],
  methods: {
    changerFiltre(par) {
      // console.log('Emitting changementFiltre par :', par, categorie)
      this.$emit('changementFiltre', par)
    }
  }

}
</script>

<style>
  .filtres {
    min-width: 250px;
    max-width: 300px;
    margin: 0 50px 100px 50px;
    position: fixed;
  }

  .categories {
    margin-top: 15%;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    border-top: 5px solid #a5a58d;
    border-bottom: 5px solid #a5a58d;
    text-align: left;
    font-size: 0.9em;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    max-height: 450px;
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

  .categories li::before {
    /* content: '\00BB'; */
    content: '\2027';
    margin-right: 5px;
    color: #6b705c;
    font-weight: 400;
  }

  .categories li::before:hover {
    font-weight: 400;
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