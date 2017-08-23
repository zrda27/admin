// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Vuex)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'yellow',
  background: 'grey'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
