const setAllCourses = (state, courses) => { state.courses = courses; };
const addCourse = (state, course) => { state.courses.push(course); };
const deleteCourse = (state, id) => {
  const { courses } = state;
  for (let index = 0; index < courses.length; index += 1) {
    const course = courses[index];
    if (course.id === +id) courses.splice(index, 1);
  }
};
const updateCourseName = (state, courseName, id) => {
  const { courses } = state;
  console.log(courses);
  for (let index = 0; index < courses.length; index += 1) {
    const course = courses[index];
    if (course.id === +id) {
      course.id = +id;
      course.name = courseName;
    }
  }
};

export default {
  setAllCourses,
  addCourse,
  deleteCourse,
  updateCourseName,
};
