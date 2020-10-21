<template>
  <form @submit.prevent="register" class="form">
    <div class="form__container">
      <label for="firstName"
             class="text form__container_label">First Name</label>
      <div class="input_wrapper">
        <input id="firstName"
               type="text"
               v-model.trim="firstName"
               @focusout="checkFirstName"
               class="text form__container_input"
               required>
      </div>
      <ul v-if="errors">
        <li v-for="(error, id) in errors.firstName" :key="id">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="lastName"
             class="text form__container_label">Last Name</label>
      <div class="input_wrapper">
        <input id="lastName"
               type="text"
               v-model.trim="lastName"
               @focusout="checkLastName"
               class="text form__container_input"
               required>
      </div>
      <ul v-if="errors">
        <li v-for="(error, id) in errors.lastName" :key="id">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="email"
             class="text form__container_label">E-Mail Address</label>
      <div class="input_wrapper">
        <input v-model.trim="email"
               type="email"
               id="email"
               @focusout="checkEmail"
               class="text form__container_input"
               autocomplete="on"
               required>
      </div>
      <ul v-if="errors">
        <li>{{ errors.email }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="password"
             class="text form__container_label">Password</label>
      <div class="input_wrapper">
        <input v-model.trim="password"
               type="password"
               id="password"
               class="text form__container_input"
               @focusout="checkPassword"
               required>
      </div>
      <ul v-if="errors">
        <li v-for="(error, id) in errors.password" :key="id">{{ error }}</li>
      </ul>
    </div>
    <div class="form__container">
      <label for="password-confirm"
             class="text form__container_label">Confirm Password</label>
      <div class="input_wrapper">
        <input id="password-confirm"
               type="password"
               v-model.trim="passwordConfirmation"
               @focusout="checkPasswordEquals"
               class="text form__container_input"
               required>
      </div>
      <ul v-if="errors">
        <li v-for="(error, id) in errors.passwordConfirmation" :key="id">{{ error }}</li>
      </ul>
    </div>
    <div>
      <button type="submit"
              class="text form__button-submit"
      >Sign up</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import {
  setMessage,
  validEmail,
  validName,
  validPassword,
} from '@/utils/validations';
//  ERROR_MESSAGE_FOR_EXISTED_EMAIL,

import {
  ERROR_MASSAGE_FOR_INVALID_PASSWORD,
  ERROR_MASSAGE_FOR_NO_EQUALS_PASSWORDS,
  ERROR_MESSAGE_FOR_INVALID_EMAIL,
  ERROR_MESSAGE_FOR_INVALID_NAME,
} from '@/utils/constants';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      firstName: 'Addel',
      lastName: 'Polxvgh',
      email: '',
      password: '1qASDFGHJKL',
      passwordConfirmation: '1qASDFGHJKL',
      errors: {
        firstName: [],
        lastName: [],
        email: null,
        password: [],
        passwordConfirmation: [],
      },
      count: 0,
    };
  },
  computed: {
    ...mapGetters({
      getExistEmail: 'getExistEmail',
    }),
    getExistEmailMessage() {
      return this.getExistEmail.message;
    },
    getExistEmailStatus() {
      return this.getExistEmail.status;
    },
    checkErrors() {
      const lengthOfFirstNameErrors = this.errors.firstName.length;
      const lengthIfLastNAmeErrors = this.errors.lastName.length;
      const lengthOfEmailErrors = this.errors.email.length;
      const lengthOfPasswordErrors = this.errors.password.length;
      const lengthOfConfirmPasswordErrors = this.errors.passwordConfirmation.length;
      return ((lengthOfConfirmPasswordErrors === 0
        && lengthOfPasswordErrors === 0
        && lengthOfEmailErrors === 0
        && lengthIfLastNAmeErrors === 0
        && lengthOfFirstNameErrors === 0));
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
      this.count += 1;
    },

    async localCheckExistEmail() {
      if (validEmail(this.email)) {
        const thisEmail = this.email;
        await this.checkExistEmail(thisEmail);
        this.errors.email = this.getExistEmailMessage;
      }
    },

    // localCheckExistEmail() {
    //   const errorsArray = this.errors.email;
    //   this.checkExistEmail(this.email);
    //   const status = this.getExistEmail;
    //   const isFree = status.status === 'free';
    //   setMessage(errorsArray, ERROR_MESSAGE_FOR_EXISTED_EMAIL, isFree);
    // },

    checkFormBeforeSendingNewTeacherToAPI() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      if (this.checkErrors) console.log(`Send data to API ${data}`);
      // this.sendNewTeacherToAPI(data);
    },

    async sendNewTeacherToAPI(data) {
      try {
        await this.registration(data).then(() => {
          this.$router.push('/home').then();
        }).catch((error) => { console.log(error); });
      } catch (error) {
        if (error) {
          await this.$router.push('/').then();
        }
      }
    },

    checkFirstName() {
      const errorsArrayFirstName = this.errors.firstName;
      const validate = validName(this.firstName);
      setMessage(errorsArrayFirstName, ERROR_MESSAGE_FOR_INVALID_NAME, validate);
    },

    checkLastName() {
      const errorsArraySecondName = this.errors.lastName;
      const validate = validName(this.lastName);
      setMessage(errorsArraySecondName, ERROR_MESSAGE_FOR_INVALID_NAME, validate);
    },

    checkEmail() {
      const validate = validEmail(this.email);
      if (!validate) this.errors.email = ERROR_MESSAGE_FOR_INVALID_EMAIL;
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

    cleanErrorArray(errors, message) {
      const index = errors.indexOf(message);
      errors.splice(index, 1);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../main.sass'

.button--submit
  background: #2ce971

.disabled
  background-color: #ef5b5b
</style>
