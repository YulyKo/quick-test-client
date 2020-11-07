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
    submit() {
      const action = this.getActionName;
      const data = {
        name: this.name,
      };
      this.$store.dispatch(action, data);
    },
    closeWindow() {
      const modalWindowDOM = document.getElementById('modalWindow');
      modalWindowDOM.style.display = 'none';
    },
  },
};
</script>
