<template>
  <div id="nav">
    <span>Nisaba</span>
    <div class="liens-nav">
      <router-link to="/">Index</router-link>
      <router-link to="/ajouter">Ajouter une oeuvre</router-link>
      <router-link to="/a-propos">À Propos</router-link>
    </div>
  </div>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  components: { Footer }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,700&family=Fira+Sans:wght@300;400;500&display=swap');

  body {
    margin: 0 auto;
  }
  
  html {
    background: #f4f1de;
  }

  #app {  
    font-family: 'Fira sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #737373;
    /* background-color: #f4f1de; */
    min-height: 100vh;
  }

  #nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 50px;
    font-family: 'Cormorant Garamond', serif;
    background-color: white;
    box-shadow: 0 0 3px 0 #737373;
  }

  #nav span {
    text-transform: lowercase;
    font-weight: 700;
    font-style: italic;
    font-size: 2.5em;
    color: #6b705c;
    transition: 0.5s;
  }

  #nav span:hover {
    letter-spacing: .1em;
  }

  #nav a {
    font-size: 1.2em;
    font-weight: bold;
    color: #cb997e;
    text-decoration: none;
    margin: 0 10px;
    text-transform: lowercase;
    font-weight: 400;
    height: 2.5em;
    line-height: 2.5em;
    padding-bottom: 5px;
  }

  #nav a:hover {
    color: #e07a5f;
    transition: .5s;
  }

  #nav a.router-link-exact-active {
    color: #e07a5f;
    font-weight: 700;
    border-bottom: 1px solid #e07a5f;
    font-style: italic;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cb997e; 
  }
</style>
