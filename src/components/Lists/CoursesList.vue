<template>
  <section class="list list-courses">
    <div v-for="(course, id) in courses" :key="id"
        class="list__card">
      <div class="list__card_nav">
        <!-- <form-button type="button" classes="button">Редагувати</form-button> -->
        <delete-button
          classes="button button-del"
          type="button"
          :id="course.id"
          actionName="deleteCourse">Видалити</delete-button>
      </div>
      <router-link tag="a" to="/"
          class="link link-course"
        >{{ course.name }}</router-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import DeleteButtonVue from '../../mixins/UI/formElements/DeleteButton.vue';

export default {
  components: {
    deleteButton: DeleteButtonVue,
  },
  computed: {
    ...mapGetters({
      courses: 'getCoursesFromState',
    }),
  },
  methods: {
  },
  beforeCreate() {
    this.$store.dispatch('getAllCoursesFromAPI');
  },
};
</script>
