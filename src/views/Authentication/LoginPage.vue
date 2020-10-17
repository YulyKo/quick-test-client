<template>
  <main class="page">
    <img src="@/assets/images/logo.png" alt="Quick Test logo">
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

<style lang="sass" scoped>
</style>
