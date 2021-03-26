<template>
    <form @submit.prevent="ajouterOeuvre">
        <h1>Ajouter une oeuvre</h1>

        <label for="titre-oeuvre">Titre de l'oeuvre :</label>
        <input type="text" required v-model="titre" id="titre-oeuvre" autocomplete="off">

        <label for="nom-auteur">Auteur.ice : </label>
        <input type="text" required v-model="auteur" id="nom-auteur">

        <label for="resume-txt">Résumé :</label>
        <textarea v-model.lazy="resume" id="resume-txt"></textarea>

        <label for="genre-oeuvre">Genre :</label>
        <input type="text" v-model="genre" id="genre-oeuvre">
        <div class="input-liens">
            <div class="input-lien">
                <label for="lien-oeuvre">Lien :</label>
                <input type="url" v-model="lien" id="lien-oeuvre" autocomplete="off">
            </div>
            <div class="input-lien">
                <label for="nom-lien">Nom du lien :</label>
                <input type="text" v-model="nomLien" id="nom-lien">
            </div>
        </div>

        <div class="evals">
            <div class="input-eval">
                <label for="eval-oeuvre">Évaluation (sur 5) :</label>
                <input type="number" v-model.number="eval" id="eval-oeuvre" min="0" max="5" step="1">
            </div>

            <div class="input-eval">
                <input type="checkbox" v-model="fav" id="favori">
                <label for="favori">Fait partie de mes favoris</label>
            </div>
        </div>

        <label for="type-oeuvre">Type d'oeuvre :</label>
        <select v-model="type" required id="type-oeuvre">
            <option value="livre">Livre</option>
            <option value="fanfic">Fanfiction</option>
        </select>

        <div class="categories-fanfic" v-if="type === 'fanfic'">
            <label for="pairing-fic">Pairing :</label>
            <input type="text" v-model="pairing" id="pairing-fic">

            <label for="fandom-fic">Fandom :</label>
            <input type="text" v-model="fandom" id="fandom-fic">

            <label for="nb-mots">Nombre de mots :</label>
            <input type="text" v-model.number="nbMots" id="nb-mots" autocomplete="off">
        </div>

        <label for="tags">Tags additionnels :</label>
        <input type="text" v-model="tempTag" id="tags" @keyup="ajouterTag">
        <div class="spec-tags">Séparer chaque "tag" par des virgules</div>
        <div class="les-tags" v-for="tag in tags" :key="tag">
            <span @click="enleverTag(tag)">{{ tag }}</span>
        </div>  
        <div class="soumettre">
            <button>Ajouter</button>
        </div>      
    </form>
</template>

<script>

export default {
    data() {
        return {
            titre: '',
            auteur: '',
            resume: '',
            genre: '',
            lien: '',
            nomLien: '',
            fav: false,
            type: '',
            pairing: '',
            fandom: '',
            nbMots: '',
            tempTag: '',
            tags: [],
            eval: 0
        }
    },
    methods: {
        ajouterOeuvre() {
            // console.log("Je veux ajouter l'oeuvre !")
            this.$router.push('/')
        },
        ajouterTag(e) {
            if (e.key === ',' && this.tempTag) {
                this.tempTag = this.tempTag.slice(0, this.tempTag.indexOf(','))
                if (!this.tags.includes(this.tempTag)) {
                    this.tags.push(this.tempTag)
                    // console.log(this.tags)
                }
                this.tempTag = '' 
            }
        },
        enleverTag(tag) {
            this.tags = this.tags.filter((item) => {
                return tag !== item
            })
        }
    }

}
</script>

<style>
form {
    width: 60%;
    margin: 50px auto;
    background: white;
    text-align: left;
    padding: 30px;
    border-radius: 10px;
    border-top: 10px solid #a5a58d;
    border-bottom: 10px solid #a5a58d;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

form h1 {
    font-family: 'Cormorant Garamond', serif;
    text-align: center;
    color: #e07a5f;
    font-weight: 700;
    font-style: italic;
    margin: 0;
    padding: 0;
    font-size: 2.5em;
}
label {
    color: #888;
    display: inline-block;
    margin: 25px 0 0;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 500;
    width: 80%;
}
input, select, textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    outline: none;
}
textarea {
    resize: none;
    height: 100px;
}
input:focus, textarea:focus {
    border-bottom: 1px solid #a5a58d;
    transition: 0.2s;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.evals, .input-liens {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}
.input-eval, .input-lien {
    width: 100%;
}

.input-eval:last-of-type, .input-lien:last-of-type {
    margin-left: 50px;
}

.spec-tags {
    font-size: .6em;
    text-transform: uppercase;
    color: #ddd;
    margin-top: 5px;
}

.les-tags {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #a5a58d;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
}
.soumettre {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

button {
    background: #e07a5f;
    border: 2px solid #e07a5f;
    padding: 10px 20px;
    margin-top: 30px;
    color: white;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    font-size: 1.3em;
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700;
    font-style: italic;

}

button:hover {
    background: white;
    /* border: 2px solid #e07a5f; */
    color: #e07a5f;
    transition: .5s;
}
.submit {
    text-align: center;
}
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>