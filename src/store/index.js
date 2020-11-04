import Vue from 'vue';
import Vuex from 'vuex';
import teacher from './modules/teacher';
import courses from './modules/subject';

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
    courses,
  },
});
