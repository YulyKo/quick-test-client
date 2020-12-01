import VueRouter from 'vue-router';
import HomePage from '@/views/Home/HomePage.vue';
import TeacherPanel from '@/views/TeacherHome/TeacherPanel.vue';
import RegistrationPage from '@/views/Authentication/RegistrationPage.vue';
import LoginPage from '@/views/Authentication/LoginPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/registration',
    component: RegistrationPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/home',
    component: TeacherPanel,
    name: 'teacherPanel',
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
