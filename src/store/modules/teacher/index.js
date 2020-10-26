import Vue from 'vue';
import axios from 'axios';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(axios);

const state = {
  token: localStorage.getItem('token') || '',
  status: '',
  existEmail: {
    status: '',
    message: '',
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
