<template>
  <div>
    <button id="show-modal" @click="showModal = true">+</button>
    <modal v-if="showModal" title="Hello" @close="showModal = false">
    </modal>
  </div>
</template>

<script>
import ModalWindowVue from './ModalWindow.vue';

export default {
  components: {
    modal: ModalWindowVue,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style>

</style>
