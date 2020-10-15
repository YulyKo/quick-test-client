<template>
  <form @submit.prevent="register">
    <label for="firstName"
           class="text label">First Name</label>
    <div>
      <input id="firstName"
             type="text"
             v-model="firstName"
             class="text input"
             required
             autofocus>
    </div>
    <label for="lastName"
           class="text label">Last Name</label>
    <div>
      <input id="lastName"
             type="text"
             v-model="lastName"
             class="text input"
             required
             autofocus>
    </div>

    <label for="email"
           class="text label">E-Mail Address</label>
    <div>
      <input v-model.lazy="email"
             @focusout="checkEmail"
             type="text"
             id="email"
             class="text input"
             required>
    </div>

    <label for="password"
           class="text label">Password</label>
    <div>
      <input v-model="password"
             type="password"
             id="password"
             class="text input"
             required>
    </div>

    <label for="password-confirm"
           class="text label">Confirm Password</label>
    <div>
      <input id="password-confirm"
             type="password"
             v-model="password_confirmation"
             class="text input"
             required>
    </div>
    <div v-if="isFree">
      {{ getExistEmailMessage }}
    </div>
    <div>
      <button type="submit"
              :disabled="isFree"
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
.button--submit
  background: #2ce971

.disabled
  background-color: #ef5b5b
</style>
