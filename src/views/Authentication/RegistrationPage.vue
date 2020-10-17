<template>
  <main class="">
    <img class="page__logo"
         src="@/assets/images/logo.png"
         alt="Quick Test logo">
    <registerForm></registerForm>
    <nav class="page__nav">
      <router-link class="page__nav_link link text" tag="a" to="/login">Login</router-link>
      <router-link class="page__nav_link link text" tag="a" to="/">Home</router-link>
    </nav>
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

<style lang="sass" scoped>
@import '../../main.sass'

.page
  &__nav
    margin-bottom: 4vh
    width: 100%
    display: flex
    justify-content: space-around
    &_link
      padding: 2vh
</style>
