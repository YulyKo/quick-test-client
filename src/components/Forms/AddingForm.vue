<template>
  <form @submit.prevent="submit">
    <label for="name" class="text">Name</label>
    <div class="input_wrapper">
      <input v-model="name"
        type="text" name="name"
        id="name" class="text">
    </div>
    <button type="submit">Додати</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddingForm',
  props: ['actionName'],
  computed: {
    getActionName() {
      return this.actionName;
    },
    getName() {
      return {
        name: this.name,
      };
    },
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapMutations({
      closeWindow: 'hideModalWindow',
    }),
    submit() {
      const action = this.getActionName;
      const data = {
        name: this.name,
      };
      this.$store.dispatch(action, data);
      this.closeWindow();
    },
  },
};
</script>
