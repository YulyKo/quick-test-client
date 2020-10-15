<template>
  <main>
    <registerForm></registerForm>
    <router-link class="link text" tag="a" to="/login">Login</router-link>
  </main>
</template>

<script>
import RegistrationForm from '@/components/Accounts/RegistrationForm.vue';

export default {
  name: 'RegistrationPage',
  components: {
    registerForm: RegistrationForm,
  },
};
</script>

<style scoped>

</style>
