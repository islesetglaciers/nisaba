<template>
<div class="filtres">
  <div class="categories">
    <h3>Filtres</h3>
      <div class="categorie">
        <p>Catégorie</p>
        <ul>
          <li>Option</li>
          <li>Option</li>
        </ul>
      </div>
      <div class="categorie">
        <p>Catégorie</p>
        <ul>
          <li>Option</li>
          <li>Option</li>
        </ul>
      </div>
      <div class="categorie">
        <p>Catégorie</p>
        <ul>
          <li>Option</li>
          <li>Option</li>
        </ul>
      </div>
      <div class="categorie">
        <p>Catégorie</p>
        <ul>
          <li>Option</li>
          <li>Option</li>
        </ul>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      
    }
  }

}
</script>

<style>
  .filtres {
    min-width: 250px;
    margin: 0 auto;
  }

  .categories {
    margin-top: 50%;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    border-top: 5px solid #a5a58d;
    border-bottom: 5px solid #a5a58d;
    text-align: left;
    font-size: 0.9em;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
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
  }

  
</style>