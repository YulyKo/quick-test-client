import Vue from 'vue';
import axios from 'axios';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(axios);

const state = {
  token: localStorage.getItem('token') || '',
  teacher: {},
  status: '',
};

export default {
  state,
  getters,
  mutations,
  actions,
};
