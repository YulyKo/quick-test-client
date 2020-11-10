<template>
  <div>
    <div class="input_wrapper">
      <input
            v-model="inputData"
            :type="this.inputFieldType"
            class="text form__container_input"
            :class="{'form__container_input--error': !this.valid}"
            required>
    </div>
    <form-error-messages :errors="this.errors"></form-error-messages>
  </div>
</template>

<script>
// import {
//   validName,
//   setMessage,
//   ERROR_MESSAGE_FOR_SO_LONG_NAME,
// } from '@/utils/index';
import FormErrorMessagesVue from './FormErrorMessages.vue';

// ERROR_MESSAGE_FOR_INVALID_NAME,

export default {
  name: 'FormTextInput',
  props: ['value', 'inputFieldType', 'valid'],
  components: {
    formErrorMessages: FormErrorMessagesVue,
  },
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    getLengthOfErrors() {
      return true;
    },
    inputData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('focusout', val);
      },
    },
  },
  methods: {
    validate() {
      return 0;
    },
  },
};
</script>
