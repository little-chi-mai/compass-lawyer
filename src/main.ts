import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css';
// import i18n from '@/plugins/i18n.ts';

Vue.config.productionTip = false

new Vue({
  router,
  // i18n,
  render: h => h(App)
}).$mount('#app')
