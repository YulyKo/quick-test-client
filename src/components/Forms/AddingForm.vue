<template>
  <form @submit.prevent="submit">
    <label for="name"
         class="text form__container_label">Введіть назву</label>
    <form-text-input id="name"
            v-model="name"></form-text-input>
    <button type="submit">Додати</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import FormTextInputVue from './formElements/FormTextInput.vue';

export default {
  name: 'AddingForm',
  props: ['actionName'],
  components: {
    formTextInput: FormTextInputVue,
  },
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
