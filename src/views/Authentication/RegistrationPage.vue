<template>
  <main class="">
    <img class="page__logo"
         src="@/assets/images/logo.png"
         alt="Quick Test logo">
    <registerForm></registerForm>
    <navbar :linkData="this.linkData" />
  </main>
</template>

<script>
import RegistrationForm from '@/components/Accounts/RegistrationForm.vue';
import NavbarVue from '../../components/Accounts/Navbar.vue';

export default {
  name: 'RegistrationPage',
  components: {
    registerForm: RegistrationForm,
    navbar: NavbarVue,
  },
  data() {
    return {
      linkData: {
        routLink: 'login',
        name: 'Вхід',
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
