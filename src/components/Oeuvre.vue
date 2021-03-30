<template>
  <div class="oeuvre">
      <div class="titres" :class="{ fav: oeuvre.fav }">
          <h3>{{ oeuvre.titre }}</h3>
          <p>{{ oeuvre.auteur }}</p>
      </div>
      <div class="details">
        <p class="resume">{{ oeuvre.resume }}</p>
        <div class="acces">
          <a :href="oeuvre.lien" target="_blank" class="lien" v-if="oeuvre.lien">{{ oeuvre.nomLien }}</a>
          <span v-if="oeuvre.lien"> | </span>
          <span class="note" v-if="oeuvre.eval">
            <i class="fas fa-star" v-for="i in oeuvre.eval"></i>
            <i class="far fa-star" v-for="i in (5 - oeuvre.eval)"></i>
          </span>
        </div>
        <div class="tags">
            <span class="tag">{{ oeuvre.type }}</span>
            <span class="tag">{{ oeuvre.genre }}</span>
            <span class="tag" v-if="oeuvre.rating">{{ oeuvre.rating }}</span>
            <span class="tag" v-if="oeuvre.nbMots">{{ oeuvre.nbMots }} mots</span>
            <span class="tag" v-if="oeuvre.fandom">{{ oeuvre.fandom }}</span>
            <span class="tag" v-if="oeuvre.pairings" v-for="pair in oeuvre.pairings">{{ pair }}</span>
            <span class="tag" v-if="oeuvre.tags" v-for="tag in oeuvre.tags" :key="tag">{{ tag }}</span>
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['oeuvre']
}
</script>

<style>
    .oeuvre {
        width: 300px;
        padding: 10px;
        margin: 10px;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .titres {
        background: #f7f7f7;
        padding: 10px;
        border-radius: 3px;
    }

    .titres.fav {
        background: #ffe8d6; 
    }

    .titres h3 {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 700;
        font-style: italic;
        margin: 5px 0;
        padding-bottom: 5px;
        font-size: 1.5em;
        border-bottom: 1px solid #6b705c;
        transition: 0.3s;
    }

    .titres p {
        margin: 5px 0;
        font-size: 0.75em;
        text-transform: uppercase;
        letter-spacing: .3em;
    }

    .details {
        height: 200px;
        overflow-y: scroll;
    }

    .resume {
        font-size: .75em;
        color: #a3a3a3;
        padding: 0 10px;
        text-align: justify;
    }

    .acces {
        padding: 5px 0;
        border-radius: 3px;
        border: 1px solid #eee;
        margin-bottom: 10px;
    }

    .acces a,
    .acces .note {
        margin-right: 10px;
        text-decoration: none;
        color: #cb997e;
        font-family: 'Cormorant Garamond', serif;
        font-weight: 700;
        padding: 3px;
        transition: 0.3s;
    }

    .acces a {
        text-transform: lowercase;
        font-style: italic;
        font-size: 1.1em;
    }

    .acces .note {
        margin-right: 0;
        margin-left: 10px;
        color: #ddbea9;
    }
    .acces .note .far {
        color: #ffe8d6;
    }

    .acces a:hover {
        color: #e07a5f;
    }

    .tags {
        padding: 5px;
        font-size: 0.7em;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .details::-webkit-scrollbar {
        width: 2px;
    }

    .tag {
        margin: 3px 5px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #a5a58d;
        color: white;
    }
</style>