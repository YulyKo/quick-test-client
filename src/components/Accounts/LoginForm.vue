<template>
  <form @submit.prevent="login" method="post" class="form">
    <div class="form__container">
      <label for="email"
             class="text form__container_label">Пошта</label>
      <div class="input_wrapper">
        <input v-model="email"
               type="text"
               id="email"
               class="text form__container_input"
               @focusout="checkEmail"
               autocomplete="on"
               :class="{'form__container_input--error': !this.checkErrorsOfEmail}"
               autofocus>
      </div>
      <span v-if="errors.email" class="error-container text text--error">{{ errors.email }}</span>
    </div>
    <div class="form__container">
      <label for="password"
             class="text form__container_label">Пароль</label>
      <div class="input_wrapper">
        <input v-model="password"
               :type="passwordFieldType"
               id="password"
               class="text form__container_input"
               :class="{'form__container_input--error': !this.checkErrorsOfForm}">
        <button
          class="text input_wrapper__visibility"
          @click="switchVisibility">Показати/Сховати</button>
      </div>
      <span v-if="errors.form" class="error-container text text--error">{{ errors.form }}</span>
    </div>
    <button type="submit"
            class="text form__button-submit"
            :disabled="!checkErrorsOfEmail">Увійти</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import {
  ERROR_MESSAGE_FOR_LOGIN_FORM,
  ERROR_MESSAGE_FOR_INVALID_EMAIL,
} from '@/utils/index';
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
      passwordFieldType: 'password',
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
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
  },
  computed: {
    checkErrorsOfEmail() {
      return this.errors.email.length === 0;
    },
    checkErrorsOfForm() {
      return this.errors.form.length === 0;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../../main.sass'
</style>
