import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss';
import router from './router';
import VModal from 'vue-js-modal';
import vbclass from 'vue-body-class';


Vue.config.productionTip = false

Vue.use(VModal);
Vue.use(vbclass, router);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')


