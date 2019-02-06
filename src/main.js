import Vue from 'vue'
import VueAnalytics from 'vue-analytics';

import App from './App.vue'
import router from './router';
import 'web-animations-js';

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-121353729-1',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
