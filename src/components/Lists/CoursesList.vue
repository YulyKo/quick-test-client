<template>
  <section class="list list-courses">
    <div v-for="(course, id) in courses" :key="id"
        class="list__card">
      <div class="list__card_nav">
        <modal-window title="Введіть нову назву курсу" buttonName="Редагувати">
          <editing-form></editing-form>
        </modal-window>
        <!-- <edit-button
        buttonClasses="button button-edit">
          <template v-slot:buttonName>Редагувати</template>
        </edit-button> -->
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
import DeleteButtonVue from '@/mixins/UI/formElements/DeleteButton.vue';
import ModalWindowVue from '../../mixins/UI/ModalWindow.vue';
import FormVue from '../Forms/Form.vue';

export default {
  components: {
    deleteButton: DeleteButtonVue,
    modalWindow: ModalWindowVue,
    editingForm: FormVue,
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
