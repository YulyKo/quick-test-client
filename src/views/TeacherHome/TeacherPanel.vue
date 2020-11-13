<template>
  <main>
    <header class="header">
      <add-course modalWindowTitle='Введіть назву курсу'>
        <adding-form
                      actionName='postCourseToAPI'
                      labelName="ім'я"></adding-form>
      </add-course>
      <logoutButton/>
    </header>
    <h1>Welcome to teacher panel!</h1>
    <coursesList />
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';
import CoursesListVue from '@/components/Lists/CoursesList.vue';
import OpenModalWindowButtonVue from '@/mixins/UI/OpenModalWindowButton.vue';
import AddingForm from '@/components/Forms/AddingForm.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
    coursesList: CoursesListVue,
    addCourse: OpenModalWindowButtonVue,
    addingForm: AddingForm,
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
