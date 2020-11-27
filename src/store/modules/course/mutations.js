const setAllCourses = (state, courses) => { state.courses = courses; };
const addCourse = (state, course) => { state.courses.unshift(course); };
const deleteCourse = (state, id) => {
  const { courses } = state;
  for (let index = 0; index < courses.length; index += 1) {
    const course = courses[index];
    if (course.id === +id) courses.splice(index, 1);
  }
};

export default {
  setAllCourses,
  addCourse,
  deleteCourse,
};
