import Vue from 'vue';
import axios from 'axios';
import urls from '@/utils/constants/api';

const HEADER_TOKEN = (token) => ({ 'x-auth-token': token }); // replace to mixins

const getAllCoursesFromAPI = ({ commit }) => new Promise((resolve, reject) => {
  const token = Vue.cookie.get('token');
  console.log(urls.COURSES_URL);
  axios.get(urls.COURSES_URL, { headers: HEADER_TOKEN(token) })
    .then((resp) => {
      commit('setAllCourses', resp.data);
      resolve(reject);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
});

const postCourseToAPI = ({ commit }, courseName) => new Promise((resolve, reject) => {
  const token = Vue.cookie.get('token');
  axios.post(urls.COURSES_URL, courseName, { headers: HEADER_TOKEN(token) })
    .then((resp) => {
      commit('addCourse', courseName);
      resolve(resp);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});

const deleteCourseFormAPI = ({ commit }, id) => new Promise(() => {
  const token = Vue.cookie.get('token');
  axios.delete(`${urls.COURSES_URL}/${+id}`, { headers: HEADER_TOKEN(token) })
    .then(() => {
      commit('deleteCourse', id);
    })
    .catch((error) => {
      console.error(error);
    });
});

const putCourseNameInAPI = ({ commit }, courseName, id) => new Promise(() => {
  console.log(`in put courseName : ${courseName} | id: ${id}`);
  const token = Vue.cookie.get('token');
  const data = {
    name: courseName,
  };
  axios.put(`${urls.COURSES_URL}/${id}`, data, { headers: HEADER_TOKEN(token) })
    .then(() => {
      commit('updateCourseName', courseName, id);
    });
});

export default {
  getAllCoursesFromAPI,
  postCourseToAPI,
  deleteCourseFormAPI,
  putCourseNameInAPI,
};
