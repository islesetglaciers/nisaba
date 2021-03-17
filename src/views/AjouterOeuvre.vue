<template>
    <form @submit.prevent="ajouterOeuvre">
        <label>Titre de l'oeuvre :</label>
        <input type="text" required v-model="titre">

        <label>Auteur.ice : </label>
        <input type="text" required v-model="auteur">

        <label>Résumé :</label>
        <textarea v-model="resume"></textarea>

        <label>Genre :</label>
        <input type="text" v-model="genre">

        <label>Lien :</label>
        <input type="url" v-model="lien">

        <label>Nom du lien :</label>
        <input type="text" v-model="nomLien">

        <input type="checkbox" v-model="fav">
        <label>Favori</label>

        <label>Type d'oeuvre :</label>
        <select v-model="type" required>
            <option value="livre">Livre</option>
            <option value="fanfic">Fanfiction</option>
        </select>

        <div class="categories-fanfic">
            <label>Pairing :</label>
            <input type="text" v-model="pairing">

            <label>Fandom :</label>
            <input type="text" v-model="fandom">

            <label>Nombre de mots :</label>
            <input type="number" v-model="fandom">
        </div>

        <label>Tags additionnels :</label>
        <input type="text" v-model="tempTag">

        <label>Évaluation (sur 5) :</label>
        <input type="number" v-model="eval">  

        <div class="soumettre">
            <button>Ajouter l'oeuvre</button>
        </div>      
    </form>  
</template>

<script>
export default {

}
</script>

<style>

</style>