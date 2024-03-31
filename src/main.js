import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/indexStore';
import '@mdi/font/css/materialdesignicons.min.css';
import moment from 'moment';

Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')