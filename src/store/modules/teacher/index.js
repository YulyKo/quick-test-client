import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  token: '',
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
