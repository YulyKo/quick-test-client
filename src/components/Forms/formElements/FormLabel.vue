<template>
  <label :for="labelFor"
         class="text form__container_label">{{ labelName }}</label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: ['labelFor', 'labelName'],
};
</script>
