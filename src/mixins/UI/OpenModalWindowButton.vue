<template>
  <div class="header__modal">
    <button id="show-modal"
            type="button"
            @click="showWindow"
            class="text button-add header__modal_button">
            <slot name="buttonName"></slot>
            </button>
    <div class="header__modal_background-block"></div>
      <modal v-if="getModalWindowState" :title="this.modalWindowTitle">
        <slot></slot>
      </modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ModalWindowVue from './ModalWindow.vue';

export default {
  props: {
    modalWindowTitle: String,
  },
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

<style lang="sass" scoped>
@import '@/main'

.header__modal
  &_button
    margin-left: -1rem
    padding-right: 2rem
    height: 7vh
    width: 12vh
    border-bottom-left-radius: 100px
    border-top-left-radius: 100px
    -webkit-transform: rotate(270deg)
    -moz-transform: rotate(270deg)
    -ms-transform: rotate(270deg)
    -o-transform: rotate(270deg)
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=18)
  // &_background-block
  //   position: fixed
  //   top: 0
  //   left: 0
  //   width: 100vw
  //   height: 100vh
  //   background-color: rgba(128,128,128,0.5)
  //   display: none

</style>
