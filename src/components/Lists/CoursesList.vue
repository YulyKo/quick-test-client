<template>
  <section class="list list-courses">
    <div v-for="(course, id) in courses" :key="id"
        class="list__card">
      <div class="list__card_nav">
        <form-button type="button" classes="button">Редагувати</form-button>
        <form-button textButton="Видалити" classes="button button-del"></form-button>
      </div>
      <router-link tag="a" to="/"
          class="link link-course"
        >{{ course.name }}</router-link>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FormButtonVue from '@/mixins/UI/formElements/FormButton.vue';

export default {
  components: {
    formButton: FormButtonVue,
  },
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
