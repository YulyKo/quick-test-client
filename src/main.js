import Vue from 'vue';
import VueCookie from 'vue-cookie';
import axios from 'axios';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import VueModal from '@kouts/vue-modal';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './main.sass';

Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueAxios, axios);
Vue.component('Modal', VueModal);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$app = app;
