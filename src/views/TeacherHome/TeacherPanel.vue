<template>
  <main>
    <header class="header">
      <logoutButton/>
    </header>
    <h1>Welcome to teacher panel!</h1>
    <coursesList />
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';
import CoursesListVue from '@/components/Lists/CoursesList.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
    coursesList: CoursesListVue,
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
