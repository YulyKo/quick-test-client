import Vue from 'vue';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  token: Vue.$cookies.get('token') || '',
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
