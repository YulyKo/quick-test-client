import Vue from 'vue';
import axios from 'axios';
import urls from '@/utils/constants/api';

const getAllCoursesFromAPI = ({ commit }) => new Promise((resolve, reject) => {
  const token = Vue.cookie.get('token');
  console.log(urls.COURSES_URL);
  axios.get(urls.COURSES_URL, {
    headers:
    {
      'x-auth-token': token,
    },
  })
    .then((resp) => {
      commit('setAllCourses', resp.data);
      resolve(reject);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
});

export default {
  getAllCoursesFromAPI,
};
