<template>
  <section>
    <h2 class="text title">{{ title }}</h2>
    <h2>Create User Form</h2>
    <UserForm />
    <button @click="$emit('close')">
            OK
    </button>
  </section>
</template>

<script>
import UserFromVue from '@/components/Forms/UserFrom.vue';

export default {
  props: ['title', 'visible'],
  components: {
    UserForm: UserFromVue,
  },
};
</script>

<style lang="sass" scoped>
.display
  display: block
.undisplay
  display: none
</style>
