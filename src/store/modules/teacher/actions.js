import axios from 'axios';
import {
  CHECK_EMAIL_URL,
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  REGISTRATION_URL,
} from '@/utils/constants';

const login = ({ commit }, loggedTeacher) => new Promise((resolve, reject) => {
  commit('authRequest');
  axios.post(LOGIN_URL, loggedTeacher)
    .then((resp) => {
      const { token } = resp.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = token;
      commit('authSuccess', token);
      resolve(resp);
    }).catch((error) => {
      commit('authError');
      localStorage.removeItem('token');
      reject(error);
    });
});

const logout = ({ commit }) => new Promise((resolve) => {
  commit('logout');
  localStorage.removeItem('token');
  delete axios.defaults.headers.common.Authorization;
  resolve();
});

const registration = ({ commit }, registerTeacher) => new Promise((resolve, reject) => {
  commit('authRequest');
  axios.post(REGISTRATION_URL, registerTeacher).then((response) => {
    const { token } = response.data;
    localStorage.setItem('token', token);
    commit('authSuccess', token);
    resolve(response);
  }).catch((error) => {
    commit('authError', error);
    localStorage.removeItem('token');
    reject(error);
  });
});

const getNewToken = ({ commit }, oldToken, originalRequest) => new Promise(() => {
  const thisOriginalRequest = originalRequest;
  commit('authRequest');
  axios({
    url: REFRESH_TOKEN_URL,
    data: oldToken,
    method: 'POST',
  }).then((response) => {
    const { token } = response.data;
    commit('AuthSuccess', token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = token;
    thisOriginalRequest.headers.Authorization = token;
    return axios(thisOriginalRequest);
  });
});

const refreshToken = ({ commit }, token) => {
  axios.interceptors.response.use((response) => response, (error) => {
    const originalRequest = error.config;
    /* eslint no-underscore-dangle: 0 */
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      getNewToken({ commit }, token, originalRequest).then(() => {});
    }
    return Promise.reject(error);
  });
};

const checkExistEmail = ({ commit }, userEmail) => new Promise((resolve, reject) => {
  const data = {
    email: userEmail,
  };
  axios.post(CHECK_EMAIL_URL, data)
    .then((response) => {
      commit('setExistEmail', response.data);
      resolve(response);
    }).catch((err) => reject(err));
});

export default {
  login,
  logout,
  registration,
  refreshToken,
  checkExistEmail,
};
