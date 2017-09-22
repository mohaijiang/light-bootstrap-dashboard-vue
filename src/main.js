// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.config.productionTip = false
//  http request plugin
Vue.prototype.$axios = axios
// date format plugin
Vue.filter('formatDate', value => {
  if (value) {
    return moment(value).format('YYYY-MM-DD hh:mm:ss')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
