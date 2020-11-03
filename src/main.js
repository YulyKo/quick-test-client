import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './main.sass';

Vue.use(VueAxios, axios);
// Vue.prototype.$ajax = Axios;
// Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.prototype.$app = app;
