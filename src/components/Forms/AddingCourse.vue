<template>
  <form @submit.prevent="add">
    <label for="name" class="text">Name</label>
    <div>
      <input type="text" name="name" id="name" class="text" v-model="name">
    </div>
    <button type="submit" @click="$emit('close')">Додати</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
    };
  },
  props: {
  },
  methods: {
    ...mapActions({
      postCourse: 'postCourseToAPI',
    }),
    add() {
      const data = {
        name: this.name,
      };
      this.postCourse(data);
      this.props.callbackModal();
    },
  },
};
</script>

<style>

</style>
