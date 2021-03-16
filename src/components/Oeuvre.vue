<template>
  <div class="oeuvre">
      <div class="titres">
          <h3>Titre de l'oeuvre</h3>
          <p>Nom de l'auteur.ice</p>
      </div>
      <div class="details">
        <p class="resume">Résumé de l'histoire... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vitae fugiat officiis excepturi magni et cupiditate pariatur asperiores velit. Delectus mollitia ducimus blanditiis modi debitis.</p>
        <div class="acces">
          <a href="#" class="lien">Lien</a> |
          <span class="note">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </span>
        </div>
        <div class="tags">
            <span class="tag">Genre</span><span class="tag"># Mots</span><span class="tag">Type</span><span class="tag">Fandom</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            afficherDetails: false
        }
        
    }
}
</script>

<style>
    .oeuvre {
        width: 300px;
        padding: 10px;
        margin: 10px;
        background-color: #fff;
        border-radius: 3px;
        /* border: 1px solid #aaa; */
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .titres {
        cursor: pointer;
        background: #f7f7f7;
        padding: 10px;
        border-radius: 3px;
    }

    .titres.fav {
        background: #ffe8d6; 
        /* color: white; */
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

    .titres h3:hover {
        color: #e07a5f;
    }

    .titres p {
        margin: 5px 0;
        /* padding: 5px 0; */
        font-size: 0.75em;
        text-transform: uppercase;
        letter-spacing: .3em;
    }

    .resume {
        font-size: .75em;
        color: #a3a3a3;
        padding: 0 10px;
        text-align: justify;
        /* font-style: italic; */
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
        /* border-bottom: 1px solid #cb997e; */
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
        justify-content: center;
        /* align-items: center; */
        /* flex-wrap: wrap; */
    }

    .tag {
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #a5a58d;
        /* cursor: pointer; */
        color: white;
    }


</style>