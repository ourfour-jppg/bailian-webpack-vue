// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Weui from 'weui'
import BaseCss from './css/base.css'
Vue.use(Mint);
Vue.use(Weui);
import 'mint-ui/lib/style.css';
import baseCss from './css/base.css'

import weui from './css/weui.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { },
  template: '<router-view></router-view>'
})
