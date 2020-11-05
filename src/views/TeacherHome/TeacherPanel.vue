<template>
  <main>
    <logoutButton/>
    <h1>Welcome to teacher panel!</h1>
    <add-course />
    <coursesList />
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';
import CoursesListVue from '@/components/Lists/CoursesList.vue';
import OpenModalWindowButtonVue from '../../mixins/UI/OpenModalWindowButton.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
    coursesList: CoursesListVue,
    addCourse: OpenModalWindowButtonVue,
  },
};
</script>

<style scoped>

</style>
