<template>
  <div class="input_wrapper">
    <input
          v-model="inputData"
          :type="this.inputFieldType"
          class="text form__container_input"
          :class="{'form__container_input--error': !this.valid}"
          required>
  </div>
</template>

<script>

export default {
  name: 'FormTextInput',
  props: ['value', 'inputFieldType', 'valid'],
  computed: {
    inputData: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
