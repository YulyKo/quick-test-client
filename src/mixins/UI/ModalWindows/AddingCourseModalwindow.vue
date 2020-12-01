<template>
  <section id="modalWindow">
    <button  @click="showModal=true" class="button-add text title">+ курс</button>
    <Modal v-model="showModal"
           @close="closeWindow()"
           :title="title"
           modalClass="modal-window">
           
    </Modal>
  </section>
</template>

<script>

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
    closeWindow() {
      this.showModal = false;
      console.log('hid');
    },
  },
};
</script>
