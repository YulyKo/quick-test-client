<template>
  <main>
    <img src="@/assets/images/logo.png"
         alt="Quick Test logo"
        class="page__logo">
    <loginForm/>
    <navbar :linkData="this.linkData" />
  </main>
</template>

<script>
import LoginFrom from '@/components/Accounts/LoginForm.vue';
import NavbarVue from '../../components/Accounts/Navbar.vue';

export default {
  name: 'LoginPage',
  components: {
    loginForm: LoginFrom,
    navbar: NavbarVue,
  },
  data() {
    return {
      linkData: {
        routLink: 'registration',
        name: 'Реєстрація',
      },
    };
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
