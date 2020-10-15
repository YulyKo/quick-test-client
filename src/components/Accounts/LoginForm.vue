<template>
  <form @submit.prevent="login" method="post">
    <label for="email">Email</label>
    <input v-model="email"
           type="text"
           id="email">
    <label for="password">Password</label>
    <input v-model="password"
           type="password"
           id="password">
    <button type="submit"
            class="text button--submit">Login</button>
    <router-link tag="a" to="/registration">Sign up</router-link>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions({
      loginAction: 'login',
    }),
    async login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.loginAction(data).then(() => {
          this.$router.push('/home');
        }).catch((error) => { console.log(error); });
      } catch (error) {
        if (error) {
          await this.$router.push('/');
        }
        console.log(error);
      }
    },
  },
};
</script>

<style>

</style>
