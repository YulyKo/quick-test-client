<template>
  <main>
    <logoutButton/>
    <h1>Welcome to teacher panel!</h1>
    <add-course>
      <adding-form actionName='postCourseToAPI'></adding-form>
    </add-course>
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

<style scoped>

</style>
