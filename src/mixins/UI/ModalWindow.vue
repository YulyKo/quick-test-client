<template>
  <section>
    <h2 class="text title">{{ title }}</h2>
    <!-- here use component with slot logic. to inclute form stucture like switch case  -->
    <!-- OR -->
    <!-- add name to html-structure and call them in parrent component like: -->
    <!-- <temlplate v-slot:name_of_slot> -->
    <button @click="$emit('close')">
            OK
    </button>
  </section>
</template>

<script>
export default {
  props: ['title', 'visible'],
};
</script>

<style lang="sass" scoped>
.display
  display: block
.undisplay
  display: none
</style>
