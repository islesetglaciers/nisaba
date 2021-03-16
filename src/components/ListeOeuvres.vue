<template>
  <div class="oeuvres">
      <Oeuvre />
      <Oeuvre />
      <Oeuvre />
      <Oeuvre />
  </div>
</template>

<script>
import Oeuvre from './Oeuvre.vue'

export default {
    components: { Oeuvre }
}
</script>

<style>
    .oeuvres {
        max-width: 80%;
        padding-bottom: 20px;
        margin: 50px auto;
        /* border-bottom: 1px solid #6b705c; */
        display: flex;
        justify-items: space-around;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>