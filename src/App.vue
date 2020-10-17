<template>
  <div id="app" class="page grid-container">
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  methods: {},
  created() {},
};
</script>

<style lang="sass">
@import 'main.sass'
body
  background-color: $white

.grid-container
  display: grid
  grid-template-columns: .5fr 2.7fr .5fr
  grid-template-rows: 1fr
  gap: 0 0
  grid-template-areas: '. main-container .'

.main-container
  grid-area: main-container
  transition: all 0.3s ease
  -webkit-transition: all 0.3s ease
  -moz-transition: all 0.3s ease
  -o-transition: all 0.3s ease

</style>
