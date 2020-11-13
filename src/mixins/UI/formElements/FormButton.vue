<template>
  <button :type="type" :class="clases">
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
    clases: String,
  },
};
</script>
