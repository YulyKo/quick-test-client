<template>
  <section class="list list-courses">
    <div v-for="(course, id) in courses" :key="id"
        class="list__card">
      <div class="list__card_nav">
        <modal-button
          modalWindowTitle='Введіть нову назву курсу'
          classesForButton="button"
          >
          <template #buttonName>Редагувати</template>
          <editing-form
            actionName='updateCourseNameInAPI'
            labelName="ім'я"></editing-form>
        </modal-button>
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
import OpenModalWindowButtonVue from '../../mixins/UI/OpenModalWindowButton.vue';
import EditingFormVue from '../Forms/EditingForm.vue';

export default {
  components: {
    deleteButton: DeleteButtonVue,
    editingForm: EditingFormVue,
    modalButton: OpenModalWindowButtonVue,
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
