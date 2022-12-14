// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/fontAwesome.js'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.config.productionTip = false
VTooltip.options.autoHide = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
