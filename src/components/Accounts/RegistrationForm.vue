<template>
  <form @submit.prevent="register" class="form">
    <div class="form__container">
      <label for="firstName"
             class="text form__container_label">Ім'я *</label>
      <div class="input_wrapper">
        <input id="firstName"
               type="text"
               v-model.trim="firstName"
               @focusout="checkFirstName"
               class="text form__container_input"
               :class="{'form__container_input--error': !this.getLengthOfFirstNameErrors}"
               required
               autofocus>
      </div>
      <ul v-if="errors.firstName" class="error-container">
        <li v-for="(error, id) in errors.firstName"
            :key="id"
            class="text text--error">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="lastName"
             class="text form__container_label">Прізвище *</label>
      <div class="input_wrapper">
        <input id="lastName"
               type="text"
               v-model.trim="lastName"
               @focusout="checkLastName"
               class="text form__container_input"
               :class="{'form__container_input--error': !this.getLengthOfLastNameErrors}"
               required>
      </div>
      <ul v-if="errors.lastName" class="error-container">
        <li v-for="(error, id) in errors.lastName"
            :key="id"
            class="text text--error">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="email"
             class="text form__container_label">Пошта *</label>
      <div class="input_wrapper">
        <input v-model.trim="email"
               type="email"
               id="email"
               @focusout="checkEmail"
               class="text form__container_input"
               autocomplete="on"
               :class="{'form__container_input--error': !this.getErrorMessageForEmail}"
               required>
      </div>
      <ul v-if="errors.email" class="error-container">
        <li class="text text--error">{{ errors.email }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="password"
             class="text form__container_label">Пароль *</label>
      <div class="input_wrapper">
        <input v-model.trim="password"
               :type="this.passwordFieldType"
               id="password"
               class="text form__container_input"
               @focusout="checkPassword"
               :class="{'form__container_input--error': !this.getLengthOfPasswordErrors}"
               required>
        <button
          type="button"
          class="text input_wrapper__visibility"
          @click.stop="switchVisibility">Показати/Сховати</button>
      </div>
      <ul v-if="errors.password" class="error-container">
        <li v-for="(error, id) in errors.password"
            :key="id"
            class="text text--error">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="password-confirm"
             class="text form__container_label">Підтвердження пароля *</label>
      <div class="input_wrapper">
        <input id="password-confirm"
               :type="this.passwordConfirmationFieldType"
               v-model.trim="passwordConfirmation"
               @focusout="checkPasswordEquals"
               class="text form__container_input"
               :class="{'form__container_input--error': !this.getLengthOfConfirmPasswordErrors}"
               required>
        <button
          type="button"
          class="text input_wrapper__visibility"
          @click.stop="switchVisibilityForConfirmation">Показати/Сховати</button>
      </div>
      <ul v-if="errors.passwordConfirmation" class="error-container">
        <li v-for="(error, id) in errors.passwordConfirmation"
            :key="id"
            class="text text--error">{{ error }}</li>
      </ul>
    </div>
    <div>
      <button type="submit"
              class="text form__button-submit"
              :disabled="!getExisitingErrors"
      >Зареєструватися</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import {
  setMessage,
  validEmail,
  validPassword,
  validTeacherName,
} from '@/utils/validations';

import {
  ERROR_MASSAGE_FOR_INVALID_PASSWORD,
  ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS,
  ERROR_MESSAGE_FOR_INVALID_EMAIL,
  ERROR_MESSAGE_FOR_INVALID_TEACHER_NAME,
  ERROR_MESSAGE_FOR_EXISTED_EMAIL,
} from '@/utils/index';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {
        firstName: [],
        lastName: [],
        email: '',
        password: [],
        passwordConfirmation: [],
      },
      passwordFieldType: 'password',
      passwordConfirmationFieldType: 'password',
    };
  },
  computed: {
    ...mapGetters({
      getExistEmail: 'getExistEmail',
    }),
    getExistEmailStatus() {
      return this.getExistEmail.status;
    },
    getLengthOfFirstNameErrors() {
      return this.errors.firstName.length === 0;
    },
    getLengthOfLastNameErrors() {
      return this.errors.lastName.length === 0;
    },
    getErrorMessageForEmail() {
      return this.errors.email.length === 0;
    },
    getLengthOfPasswordErrors() {
      return this.errors.password.length === 0;
    },
    getLengthOfConfirmPasswordErrors() {
      return this.errors.passwordConfirmation.length === 0;
    },
    getExisitingErrors() {
      return (this.getLengthOfFirstNameErrors
      && this.getLengthOfLastNameErrors
      && this.getErrorMessageForEmail
      && this.getLengthOfPasswordErrors
      && this.getLengthOfConfirmPasswordErrors);
    },
  },
  methods: {
    ...mapActions({
      registration: 'registration',
      checkExistEmail: 'checkExistEmail',
    }),

    register() {
      this.localCheckExistEmail();
      this.checkFormBeforeSendingNewTeacherToAPI();
    },

    async localCheckExistEmail() {
      const validate = this.checkEmail();
      if (validate) {
        const thisEmail = this.email;
        await this.checkExistEmail(thisEmail);
        const status = this.getExistEmailStatus;
        this.setStautusForEmail(status);
      }
    },

    setStautusForEmail(status) {
      if (status === 'exist') this.errors.email = ERROR_MESSAGE_FOR_EXISTED_EMAIL;
      else this.errors.email = '';
    },

    checkFormBeforeSendingNewTeacherToAPI() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      const errors = this.getExisitingErrors;
      if (errors) {
        this.sendNewTeacherToAPI(data);
      }
    },

    async sendNewTeacherToAPI(data) {
      try {
        await this.registration(data);
        this.$router.push('/home');
      } catch (error) {
        if (error) {
          console.error(error.message);
        }
      }
    },

    checkFirstName() {
      const errorsArrayFirstName = this.errors.firstName;
      const validate = validTeacherName(this.firstName);
      setMessage(errorsArrayFirstName, ERROR_MESSAGE_FOR_INVALID_TEACHER_NAME, validate);
    },

    checkLastName() {
      const errorsArraySecondName = this.errors.lastName;
      const validate = validTeacherName(this.lastName);
      setMessage(errorsArraySecondName, ERROR_MESSAGE_FOR_INVALID_TEACHER_NAME, validate);
    },

    checkEmail() {
      const validate = validEmail(this.email);
      if (!validate) this.errors.email = ERROR_MESSAGE_FOR_INVALID_EMAIL;
      else this.errors.email = '';
      return validate;
    },

    checkPassword() {
      const errorsArray = this.errors.password;
      const validate = validPassword(this.password);
      this.errors.password = setMessage(errorsArray, ERROR_MASSAGE_FOR_INVALID_PASSWORD, validate);
    },

    checkPasswordEquals() {
      const errorsArray = this.errors.passwordConfirmation;
      const isValid = this.password === this.passwordConfirmation;
      const errorMessage = ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS;
      this.errors.passwordConfirmation = setMessage(errorsArray, errorMessage, isValid);
    },

    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },

    switchVisibilityForConfirmation() {
      this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../main.sass'

</style>
