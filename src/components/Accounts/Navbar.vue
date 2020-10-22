<template>
  <nav class="page__nav">
    <router-link
      class="page__nav_link link text"
      tag="a" :to="linkData.routLink">{{ linkData.name }}</router-link>
    <router-link class="page__nav_link link text" tag="a" to="/">Home</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['linkData'],
};
</script>

<style lang="sass" scoped>
  .page__nav
    margin-bottom: 4vh
    width: 100%
    display: flex
    justify-content: space-around
    &_link
      padding: 2vh
</style>
