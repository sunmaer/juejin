import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './modules/mock';
import 'intersection-observer'

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
