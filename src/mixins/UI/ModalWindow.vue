<template>
  <section id="modalWindow" class="modal-window">
    <button @click="closeWindow" class="button-close">Скасувати</button>
    <h2 class="text title title--modal">{{ title }}</h2>
    <slot></slot>
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

<style lang="sass" scoped>
@import '@/main'

.modal
  display: block
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  &-window
    @extend .modal
    width: 60%
    height: 20rem
    z-index: 2
    padding: 2rem
    background-color: $gray-light
    border: 3px solid $gray
    border-radius: $card-border-radius

.title--modal
  margin: 2.5rem 0 2.5rem
</style>
