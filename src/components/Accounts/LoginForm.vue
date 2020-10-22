<template>
  <form @submit.prevent="login" method="post" class="form">
    <div class="form__container">
      <label for="email"
             class="text form__container_label">Email</label>
      <div class="input_wrapper">
        <input v-model="email"
               type="text"
               id="email"
               class="text form__container_input"
               @focusout="checkEmail"
               autocomplete="on">
      </div>
      <span v-if="errors.email">{{ errors.email }}</span>
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
      <span v-if="errors.form">{{ errors.form }}</span>
    </div>
    <button type="submit"
            class="text form__button-submit"
            :disabled="!checkErrorsOfEmail">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import {
  ERROR_MESSAGE_FOR_LOGIN_FORM,
  ERROR_MESSAGE_FOR_INVALID_EMAIL,
} from '@/utils/constants';
import { validEmail } from '@/utils/validations';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        form: '',
      },
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
        }).catch((error) => { this.setError(error); });
      } catch (error) { console.error(error); }
    },
    setError(error) {
      if (error) this.errors.form = ERROR_MESSAGE_FOR_LOGIN_FORM;
      else this.errors.form = '';
    },
    checkEmail() {
      const validate = validEmail(this.email);
      if (!validate) this.errors.email = ERROR_MESSAGE_FOR_INVALID_EMAIL;
      else this.errors.email = '';
    },
  },
  computed: {
    checkErrorsOfEmail() {
      return this.errors.email.length === 0;
    },
    checkErrorsOfForm() {
      return this.errors.form.length === 0;
    },
    checkValidForm() {
      return !(this.checkErrorsOfEmail && this.checkErrorsOfForm);
    },
  },
};
</script>

<style>

</style>
