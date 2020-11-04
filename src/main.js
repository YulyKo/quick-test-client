import VueCookie from 'vue-cookie';
import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './main.sass';

Vue.use(Axios);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.prototype.$ajax = Axios;
Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$app = app;
