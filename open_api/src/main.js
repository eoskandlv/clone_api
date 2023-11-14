import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import store from "./store";
import AOS from 'aos';
import "aos/dist/aos.css";


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created() {
      AOS.init();
  },
  render: h => h(App)
}).$mount('#app')
