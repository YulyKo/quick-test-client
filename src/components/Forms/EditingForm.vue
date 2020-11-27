<template>
  <form @submit.prevent="submit">
    <form-label :labelFor="name"
                :labelName="this.labelName"></form-label>
    <form-input
            id="name"
            inputFieldType="text"
            :valid="this.validNameInput"
            v-model="name">
    </form-input>
    <form-error-messages
                  :errors="this.errors"
                  classes="text form__button-submit"></form-error-messages>
    <form-button type="submit"
                  textButton="Додати"
                  classes="text form__button-submit"></form-button>
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
import FormErrorMessagesVue from '@/mixins/UI/formElements/FormErrorMessages.vue';
import FormInputVue from '@/mixins/UI/formElements/FormInput.vue';
import FormButtonVue from '@/mixins/UI/formElements/FormButton.vue';
import FormLabelVue from '@/mixins/UI/formElements/FormLabel.vue';

export default {
  name: 'EditingForm',
  components: {
    formLabel: FormLabelVue,
    formInput: FormInputVue,
    formButton: FormButtonVue,
    formErrorMessages: FormErrorMessagesVue,
  },
  props: {
    labelName: String,
    actionName: String,
    oldName: String,
    id: Number,
  },
  data() {
    return {
      name: this.oldName,
      errors: [],
      validNameInput: true,
    };
  },
  computed: {
    getActionName() {
      return this.actionName;
    },
    getId() {
      return this.id;
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
      const id = this.getId;
      this.$store.dispatch(action, this.name, id);
      console.log(`aftter dispatch : id | ${id}`);
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

<style>

</style>
