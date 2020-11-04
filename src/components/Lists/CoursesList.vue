<template>
  <section>
    <h1>List</h1>
    <ul v-for="(course, id) in courses" :key="id">
      <li><router-link tag="a" to="/" class="link text">{{ course.name }}</router-link></li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      courses: 'getCoursesFromState',
    }),
  },
  methods: {
    ...mapActions({
      getAllCoursesAction: 'getAllCoursesFromAPI',
    }),
  },
  beforeCreate() {
    this.$store.dispatch('getAllCoursesFromAPI');
  },
};
</script>

<style>

</style>
