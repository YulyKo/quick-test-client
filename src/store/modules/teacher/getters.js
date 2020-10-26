const isLoggedIn = (state) => !!state.token;
const authStatus = (state) => state.status;
const getToken = (state) => state.token;
const getExistEmail = (state) => state.existEmail;

export default {
  isLoggedIn,
  authStatus,
  getToken,
  getExistEmail,
};
