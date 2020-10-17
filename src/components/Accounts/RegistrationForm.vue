<template>
  <form @submit.prevent="register" class="form">
    <div class="form__container">
      <label for="firstName"
             class="text form__container_label">First Name</label>
      <div class="link_wrapper">
        <input id="firstName"
               type="text"
               v-model="firstName"
               class="text form__container_input"
               required
               autofocus>
      </div>
    </div>
    <div class="form__container">
      <label for="lastName"
             class="text form__container_label">Last Name</label>
      <div class="link_wrapper">
        <input id="lastName"
               type="text"
               v-model="lastName"
               class="text form__container_input"
               required
               autofocus>
      </div>
    </div>
    <div class="form__container">
      <label for="email"
             class="text form__container_label">E-Mail Address</label>
      <div class="link_wrapper">
        <input v-model.lazy="email"
               @focusout="checkEmail"
               type="text"
               id="email"
               class="text form__container_input"
               required>
      </div>
    </div>
    <div class="form__container">
      <label for="password"
             class="text form__container_label">Password</label>
      <div class="link_wrapper">
        <input v-model="password"
               type="password"
               id="password"
               class="text form__container_input"
               required>
      </div>
    </div>
    <div class="form__container">
      <label for="password-confirm"
             class="text form__container_label">Confirm Password</label>
      <div class="link_wrapper">
        <input id="password-confirm"
               type="password"
               v-model="password_confirmation"
               class="text form__container_input"
               required>
      </div>
    </div>
    <div v-if="isFree">
      {{ getExistEmailMessage }}
    </div>
    <div>
      <button type="submit"
              :disabled="isFree"
              class="text form__button-submit"
      >Sign up</button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { validEmail } from '@/utils/validations';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@admin.com',
      password: 'Adm1nadmin!',
      password_confirmation: 'Adm1nadmin!',
      isExistEmailMessage: '',
      isFree: false,
    };
  },
  computed: {
    ...mapGetters(['getExistEmail']),
    getExistEmailMessage() {
      return this.getExistEmail.message;
    },
    getExistEmailStatus() {
      return this.getExistEmail.status;
    },
  },
  methods: {
    ...mapActions({
      registration: 'registration',
      checkExistEmail: 'checkExistEmail',
    }),
    async register() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      try {
        await this.registration(data).then(() => {
          this.$router.push('/home').then();
        }).catch((error) => { console.log(error); });
      } catch (error) {
        if (error) {
          await this.$router.push('/').then();
        }
        console.log(error);
      }
    },
    checkEmail() {
      const data = {
        email: this.email,
      };
      if (validEmail(this.email)) {
        this.checkExistEmail(data);
      }
      this.isExistEmailMessage = this.getExistEmailMessage;
      this.isFree = this.getExistEmailStatus === 'free';
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
