<template>
  <form @submit.prevent="submit">
    <form-label :labelFor="name" :labelName="this.labelName"></form-label>
    <form-text-input
            id="name"
            inputFieldType="text"
            :valid="this.validNameInput"
            v-model="name">
    </form-text-input>
    <form-button type="submit" textButton="Додати"></form-button>
    <form-error-messages :errors="this.errors"></form-error-messages>
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
import {
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
} from '@/utils/constants/index';
import FormTextInputVue from '@/mixins/UI/formElements/FormTextInput.vue';
import FormErrorMessagesVue from '@/mixins/UI/formElements/FormErrorMessages.vue';
import FormLabelVue from '@/mixins/UI/formElements/FormLabel.vue';
import FormButtonVue from '@/mixins/UI/formElements/FormButton.vue';

export default {
  name: 'AddingForm',
  props: ['actionName', 'labelName'],
  components: {
    formTextInput: FormTextInputVue,
    formErrorMessages: FormErrorMessagesVue,
    formLabel: FormLabelVue,
    formButton: FormButtonVue,
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
      this.checkInvalidInputName(validate);
      setMessage(errorsArray, ERROR_MESSAGE_FOR_INVALID_NAME, validate);
      this.checkLengthInputName(errorsArray);
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
    checkInvalidInputName(validate) {
      if (!validate || this.name.length < MIN_NAME_LENGTH
                    || this.name.length > MAX_NAME_LENGTH) {
        this.validNameInput = false;
      } else this.validNameInput = true;
    },
    checkLengthInputName(errorsArray) {
      if (this.name.length < MIN_NAME_LENGTH) {
        setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_SHOT_NAME, false);
      } else setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_SHOT_NAME, true);
      if (this.name.length > MAX_NAME_LENGTH) {
        setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_LONG_NAME, false);
      } else setMessage(errorsArray, ERROR_MESSAGE_FOR_VERY_LONG_NAME, true);
    },
  },
};
</script>
