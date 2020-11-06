<script>
import { mapActions, mapGetters } from 'vuex';

const COURSE = {};

export default {
  name: 'CoursesProvider',
  methods: {
    ...mapActions({
      addCourse: 'postCourseToAPI',
    }),
  },
  computed: {
    ...mapGetters({
      courses: 'getCoursesFromState',
    }),
  },
  provide: {
    fetch: (id) => Promise.resolve(this.courses.find((course) => course.id === id)),
    post: (course) => COURSE = course && Promise.resolve({ success: true }),
  },
  render() {
    return this.$slots.default;
  },
};
</script>
