const isLoggedIn = (state) => !!state.token;
const authStatus = (state) => state.status;
const getToken = (state) => state.token;

export default {
  isLoggedIn,
  authStatus,
  getToken,
};
