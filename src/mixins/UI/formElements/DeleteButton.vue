<template>
  <button :type="type" :class="classes" @click="remove">
    <slot></slot>
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DeleteButton',
  props: {
    type: String,
    classes: String,
    id: Number,
    actionName: String,
  },
  methods: {
    ...mapActions({
      deleteCourse: 'deleteCourseFormAPI',
    }),
    remove() {
      switch (this.actionName) {
        case 'deleteCourse':
          this.deleteCourse(this.id);
          break;
        default:
          console.log('default');
      }
    },
  },
};
</script>
