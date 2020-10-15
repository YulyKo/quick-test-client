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

const setExistEmail = (state, data) => {
  state.existEmail.status = data.status;
  state.existEmail.message = data.message;
};

export default {
  authError,
  authRequest,
  authSuccess,
  logout,
  setExistEmail,
};
