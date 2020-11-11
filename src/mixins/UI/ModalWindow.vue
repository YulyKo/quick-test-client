<template>
  <section id="modalWindow">
    <h2 class="text title">{{ title }}</h2>
    <slot></slot>
    <button @click="closeWindow">X</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    title: String,
  },
  data() {
    return {
      actionName: 'postCourseToAPI',
    };
  },
  methods: {
    ...mapMutations({
      closeWindow: 'hideModalWindow',
    }),
  },
};
</script>
