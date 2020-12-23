import Vue from 'vue'

import { createApp } from 'vue';
import App from '@/App.vue'
import store from '@/store'
import routers from '@/router'

createApp(App).use(routers).use(store).mount('#app')

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

const c = document.createElement('div')
c.id = 'app'

document.body.appendChild(c)
window.Tracert = {
  info() {},
  time() {},
  logPerf() {},
  call() {},
  config() {},
  logPv() {},
  _initPageId() {},
}


