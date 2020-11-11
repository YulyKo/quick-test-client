<template>
  <label :for="labelFor"
         class="text form__container_label">
      {{ labelName }}
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    labelFor: String,
    labelName: String,
  },
};
</script>
