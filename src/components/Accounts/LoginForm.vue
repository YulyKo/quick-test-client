<template>
  <form @submit.prevent="login" method="post" class="form">
    <div class="form__container">
      <label for="email"
             class="text form__container_label">Email</label>
      <div class="input_wrapper">
        <input v-model="email"
               type="text"
               id="email"
               class="text form__container_input">
      </div>
    </div>
    <div class="form__container">
      <label for="password"
             class="text form__container_label">Password</label>
      <div class="input_wrapper">
        <input v-model="password"
               type="password"
               id="password"
               class="text form__container_input">
      </div>
    </div>
    <button type="submit"
            class="text form__button-submit">Login</button>
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
