const authRequest = (state) => {
  state.status = 'loading';
};

const authSuccess = (state, token) => {
  state.status = 'success';
  state.token = token;
};

const authError = (state) => {
  state.status = 'error';
};

const logout = (state) => {
  state.status = '';
  state.token = '';
};

export default {
  authError,
  authRequest,
  authSuccess,
  logout,
};
