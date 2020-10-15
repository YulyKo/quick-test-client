<template>
  <main>
    <logoutButton/>
    <h1>Welcome to teacher panel!</h1>
  </main>
</template>

<script>
import LogOut from '@/components/Accounts/LogOut.vue';

export default {
  name: 'TeacherPanel',
  components: {
    logoutButton: LogOut,
  },
};
</script>

<style scoped>

</style>
