<template>
  <div id="app" class="grid-container">
    <div class="page">
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
  grid-template-columns: .5fr 3.7fr .5fr
  grid-template-rows: 1fr
  gap: 0 0
  grid-template-areas: '. page .'

.page
  grid-area: page

</style>
