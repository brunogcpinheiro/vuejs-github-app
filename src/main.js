// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'vue-sweetalert2'
import store from './store'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(swal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
