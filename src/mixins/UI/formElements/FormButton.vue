<template>
  <button :type="type" :class="classes">
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
    classes: String,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'
</style>
