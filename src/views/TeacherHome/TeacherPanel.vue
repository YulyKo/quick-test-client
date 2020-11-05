<template>
  <main>
    <logoutButton/>
    <h1>Welcome to teacher panel!</h1>
    <addButton dataType="course" name="test" />
    <coursesList />
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';
import CoursesListVue from '@/components/Lists/CoursesList.vue';
import AddButtonVue from '@/mixins/UI/AddButton.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
    coursesList: CoursesListVue,
    addButton: AddButtonVue,
  },
};
</script>

<style scoped>

</style>
