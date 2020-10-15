import axios from 'axios';
import { API_URL } from '@/utils';

const login = ({ commit }, loggedTeacher) => new Promise((resolve, reject) => {
  const URL = `${API_URL}/api/v1/auth/login`;
  commit('authRequest');
  axios.post(URL, loggedTeacher)
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
  const URL = `${API_URL}/api/v1/auth/registration`;
  commit('authRequest');
  axios.post(URL, registerTeacher).then((response) => {
    console.log(response);
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
    url: `${API_URL}/auth/refresh`,
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

export default {
  login,
  logout,
  registration,
  refreshToken,
};
