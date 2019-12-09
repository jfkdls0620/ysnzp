import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index'
import VueCropper from "vue-cropperjs/VueCropper";

import '@/assets/css/style.css';

Vue.component(VueCropper);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
