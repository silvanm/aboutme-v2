// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueLazyload from 'vue-lazyload'
import Lightbox from 'vue-pure-lightbox'

Vue.config.productionTip = false

let VueMoment = require('vue-moment')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueMoment)
Vue.use(VueLazyload)
Vue.use(Lightbox)
