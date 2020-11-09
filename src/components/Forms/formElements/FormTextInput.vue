<template>
  <div class="input_wrapper">
    <input id="password-confirm"
           v-model="inputData"
           :type="this.inputFieldType"
           class="text form__container_input"
           :class="{'form__container_input--error': !this.getLengthOfErrors}"
           required>
  </div>
</template>

<script>
export default {
  name: 'FormTextInput',
  props: ['value'],
  data() {
    return {
      inputFieldType: 'text',
      errors: [],
    };
  },
  computed: {
    getLengthOfErrors() {
      return true;
    },
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
    inputData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
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

<style>

</style>
