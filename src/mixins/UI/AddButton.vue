<template>
  <button class="button text title"
          @click="addData()">+</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'buttonAdd',
  props: {
    name: String,
  },
  computed: {
    getDataName() { return this.name; },
  },
  methods: {
    ...mapActions({
      addCourse: 'postCourseToAPI',
    }),
    addData() {
      const data = {
        name: this.getDataName,
      };
      this.addCourse(data);
    },
  },
};
</script>

<style>

</style>
