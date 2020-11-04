import Vue from 'vue';
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

router.afterEach((to, from, next) => {
  const token = Vue.cookie.get('token');
  if (to.matched.some((record) => record.meta.auth)) {
    if (token) {
      next({ name: 'teacherPanel' });
    } else if (!token || '') {
      next({ name: 'home' }).then();
    }
  }
});

export default router;
