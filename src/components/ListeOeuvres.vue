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
        max-width: 70%;
        padding-bottom: 20px;
        margin: 0 auto;
        /* border-bottom: 1px solid #6b705c; */
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>