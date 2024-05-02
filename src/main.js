import Vue from 'vue';
import App from './pages/pruductos.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const vuetify = new Vuetify();

export default new Vue({
  vuetify,
  render: h => h(App)
  // ...otros componentes y configuraciones
}).$mount('#app');
