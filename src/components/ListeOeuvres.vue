<template>
  <div class="oeuvres">
      <Oeuvre :oeuvre="oeuvre" v-for="oeuvre in oeuvres" :key="oeuvre.id" />
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
        padding-bottom: 50px;
        margin-left: 25%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>