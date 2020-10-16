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
  background-color: $blue

.page
  background-color: $white

.grid-container
  display: grid
  grid-template-columns: .5fr 2.7fr .5fr
  grid-template-rows: 100vh
  gap: 0 0
  grid-template-areas: '. main-container .'
  background-color: $white

.main-container
  grid-area: main-container

</style>
