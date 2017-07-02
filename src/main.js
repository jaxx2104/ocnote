// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Material from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'nouislider/distribute/nouislider.min.css'
import 'materialize-css/extras/noUiSlider/nouislider.css'

global.events = new Vue()

Vue.use(Material)
Vue.material.registerTheme('default', {
  primary: { color: 'pink', hue: '600' },
  accent: 'red',
  warn: 'red',
  background: { color: 'blue-gray', hue: '800' }
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
