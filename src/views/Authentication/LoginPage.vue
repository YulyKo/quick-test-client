<template>
  <main>
    <loginForm/>
  </main>
</template>

<script>
import LoginFrom from '@/components/Accounts/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    loginForm: LoginFrom,
  },
};
</script>

<style scoped>

</style>
