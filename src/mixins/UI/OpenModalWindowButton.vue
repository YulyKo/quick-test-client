<template>
  <div>
    <button id="show-modal" @click="showWindow">+</button>
    <modal v-if="getModalWindowState" title="Hello">
      <slot></slot>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
// import AddingCourseVue from '../../components/Forms/AddingCourse.vue';
import ModalWindowVue from './ModalWindow.vue';

export default {
  props: ['Component'],
  components: {
    modal: ModalWindowVue,
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapGetters({
      getModalWindowState: 'getModalWindowState',
    }),
  },
  methods: {
    ...mapMutations(['showModalWindow']),
    showWindow() {
      this.showModalWindow();
    },
  },
};
</script>
