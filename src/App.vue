<template>
  <div id="nav">
    <span>Nisaba</span>
    <div class="liens-nav">
      <router-link to="/">Index</router-link>
      <router-link to="/about">À Propos</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,700&family=Fira+Sans:wght@300;400&display=swap');
  font-family: 'Fira sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #737373;
  background-color: #f4f1de;
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
  font-size: 2em;
  color: #6b705c;
  transition: 0.5s;
}

#nav span:hover {
  letter-spacing: .1em;
}

#nav a {
  font-weight: bold;
  color: #cb997e;
  text-decoration: none;
  margin: 0 10px;
  text-transform: lowercase;
  font-weight: 400;
  height: 2em;
  line-height: 2em;
  padding-bottom: 5px;
}

#nav a.router-link-exact-active {
  color: #e07a5f;
  font-weight: 700;
  border-bottom: 1px solid #e07a5f;
  font-style: italic;
}
</style>
