<template>
  <div>
    <input class="text" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: ['name', 'labelName'],
};
</script>

<style>

</style>
