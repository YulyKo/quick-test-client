<template>
<div>
  <ul v-for="(error, id) in errors" :key="id"
       class="error-container">
    <li class="text text--error">{{ error }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'FormErrorMessages',
  props: ['errors'],
};
</script>

<style>
.form-inline-message {
  font-size: smaller;
  color: red;
}
</style>
