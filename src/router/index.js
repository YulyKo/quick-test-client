import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/Home/HomePage.vue';
import TeacherPanel from '@/views/TeacherHome/TeacherPanel.vue';
import RegistrationPage from '@/views/Authentication/RegistrationPage.vue';
import LoginPage from '@/views/Authentication/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/registration',
    component: RegistrationPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/home',
    component: TeacherPanel,
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

const token = Vue.$cookies.get('token');
if (token) {
  router.push('/home').then();
} else {
  router.push('/').then();
}

export default router;
