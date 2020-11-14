import Vue from 'vue';
import Vuex from 'vuex';
import teacher from './modules/teacher';
import course from './modules/course';
import modalWindow from './modules/modalWindow';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    teacher,
    course,
    modalWindow,
  },
});
