<template>
  <div class="oeuvres" v-for="oeuvre in oeuvres" :key="oeuvre.id">
      <Oeuvre :oeuvre="oeuvre" />
  </div>
</template>

<script>
import Oeuvre from './Oeuvre.vue'

export default {
    components: { Oeuvre },
    props: ['oeuvres']
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