<template>
  <main>
    <img src="@/assets/images/logo.png"
         alt="Quick Test logo"
        class="page__logo">
    <loginForm/>
    <nav class="page__nav">
      <router-link
        class="page__nav_link link text"
        tag="a"
        to="/registration">Register</router-link>
      <router-link class="page__nav_link link text" tag="a" to="/">Home</router-link>
    </nav>
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
