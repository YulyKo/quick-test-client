<template>
  <form @submit.prevent="submit">
    <label for="name"
         class="text form__container_label">Введіть назву</label>
    <form-text-input id="name" inputFieldType="text" :valid="this.validNameInput"
            v-model="name"></form-text-input>
    <p>{{ errors }}</p>
    <ul v-for="(error, id) in errors" :key="id"
       class="error-container">
      <li class="text text--error">{{ error }}</li>
    </ul>
    <button type="submit">Додати</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import {
  validName,
  setMessage,
} from '@/utils/validations';
import {
  ERROR_MESSAGE_FOR_VERY_SHOT_NAME,
  ERROR_MESSAGE_FOR_VERY_LONG_NAME,
  ERROR_MESSAGE_FOR_INVALID_NAME,
} from '@/utils/constants/formErrorMessages';
import FormTextInputVue from './formElements/FormTextInput.vue';

export default {
  name: 'AddingForm',
  props: ['actionName'],
  components: {
    formTextInput: FormTextInputVue,
  },
  computed: {
    getActionName() {
      return this.actionName;
    },
    getName() {
      return {
        name: this.name,
      };
    },
    checkErrors() {
      return this.errors.length === 0;
    },
  },
  data() {
    return {
      name: '',
      errors: [],
      validNameInput: true,
    };
  },
  methods: {
    ...mapMutations({
      closeWindow: 'hideModalWindow',
    }),
    checkName() {
      const errorsArray = this.errors;
      const validate = validName(this.name);
      // set invalid for input
      if (!validate || this.name.length < 3 || this.name.length > 10) {
        this.validNameInput = false;
      } else this.validNameInput = true;
      // check length and valid of input value
      setMessage(errorsArray, ERROR_MESSAGE_FOR_INVALID_NAME, validate);
      if (this.name.length < 3) {
        setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_SHOT_NAME, false);
      } else setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_SHOT_NAME, true);
      if (this.name.length > 10) {
        setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_LONG_NAME, false);
      } else setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_LONG_NAME, true);
    },
    submit() {
      this.checkName();
      if (this.validNameInput) this.saveDataToState();
    },
    saveDataToState() {
      const action = this.getActionName;
      const data = {
        name: this.name,
      };
      this.$store.dispatch(action, data);
      this.closeWindow();
    },
  },
};
</script>
