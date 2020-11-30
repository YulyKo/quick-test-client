<template>
  <main>
    <header class="header">
      <modalWindow buttonName="+ курс" title="Введіть назву нового курсу">
        <adding-form></adding-form>
      </modalWindow>
      <logoutButton/>
    </header>
    <h1>Welcome to teacher panel!</h1>
    <coursesList />
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';
import CoursesListVue from '@/components/Lists/CoursesList.vue';
import ModalWindowVue from '../../mixins/UI/ModalWindow.vue';
import AddingFormVue from '../../components/Forms/AddingForm.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
    coursesList: CoursesListVue,
    modalWindow: ModalWindowVue,
    addingForm: AddingFormVue,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main'

.header
  margin-bottom: 2em
  height: $header-height
  width: 100%
  display: flex
  justify-content: space-between
</style>
