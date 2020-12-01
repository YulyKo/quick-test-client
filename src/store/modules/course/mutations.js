const setAllCourses = (state, courses) => { state.courses = courses; };
const addCourse = (state, course) => { state.courses.push(course); };

export default {
  setAllCourses,
  addCourse,
};
