<template>
  <section>
    <h2 class="text title">{{ title }}</h2>
    <h2>Create User Form</h2>
    <adding-form :actionName="actionName"></adding-form>
    <button @click="$emit('close')">X</button>
  </section>
</template>

<script>
import AddingFormVue from '@/components/Forms/AddingForm.vue';

export default {
  props: ['title', 'visible'],
  components: {
    addingForm: AddingFormVue,
  },
  data() {
    return {
      actionName: 'postCourseToAPI',
    };
  },
};
</script>
