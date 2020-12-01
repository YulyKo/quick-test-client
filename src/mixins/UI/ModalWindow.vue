<template>
  <section id="modalWindow">
    <button  @click="showModal=true" class="button-add text title">{{ buttonName }}</button>
    <Modal v-model="showModal"
           title="Pollhgjh Jgyufh"
           modalClass="modal-window">
           <slot></slot>
    </Modal>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    title: String,
    buttonName: String,
  },
  data() {
    return {
      showModal: false,
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
