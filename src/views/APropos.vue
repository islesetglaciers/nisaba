<template>
  <div class="a-propos">
    <h1>À Propos</h1>
    <div class="contenu">
      <img src="../assets/nisaba.png" alt="">
      <div class="description">
          <p class="definition">Nisaba est la déesse sumérienne de l'écriture, de l'apprentissage et des récoltes. Elle était considérée la patronne des scribes sumériens et la scribe des dieux.</p>
          <p class="explications">Nisaba est une app Web (toujours en développement) qui permet à un.e utilisateur.ice de sauvegarder une liste de livres et fanfiction qu'iel a lu ! Développée dans le cadre d'un projet de recherche sur Vue.JS, elle permet à l'utilisateur.ice de classifier chaque oeuvre selon plusieurs catégories et d'ensuite filtrer toutes les oeuvres entrées dans la page selon ces catégories.</p>
      </div>
    </div>
  </div>
</template>

<style>
.a-propos h1 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 3em;
  color: #e07a5f;
  padding-bottom: 20px;
  width: 75%;
  margin: 30px auto 0;
  border-bottom: 1px solid #6b705c;
}
.contenu {
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 75%;
  margin: 50px auto 0;
}

.contenu img {
  margin-right: 50px;
}
.definition {
  /* width: 75%; */
  border-left: 5px solid #a5a58d;
  margin: 0 auto;
  padding: 20px;
  background-color: #eee;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-style: italic;
  font-size: 1.5em;
}

.explications {
  margin: 50px auto;
  font-weight: 400;
  text-align: left;
}

</style>
