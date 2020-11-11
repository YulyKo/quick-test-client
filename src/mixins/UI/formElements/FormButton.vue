<template>
  <button :type="type">
    {{ textButton }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    type: String,
    textButton: String,
  },
};
</script>
