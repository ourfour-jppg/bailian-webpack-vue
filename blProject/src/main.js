// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
import router from './router'
import VantCss from './css/vant.css'
import baseCss from './css/base.css'
import weui from 'weui'
import $ from 'jquery'
//状态
import store from './store/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './css/swiper.css'
Vue.use(VueAwesomeSwiper)
=======

import App from './App'
// import $ from 'jquery'
import router from './router'
import css from './css/base.css'
import fonts from '../static/fonts/iconfont.css'

// import App from './App'

//import Mint from 'mint-ui'
//import Weui from 'weui'
import BaseCss from './css/base.css'
import VantCss from './css/vant.css'
//Vue.use(Mint);
//Vue.use(Weui);
//import baseCss from './css/base.css'

// import Mint from 'mint-ui'
// import Weui from 'weui'
// import BaseCss from './css/base.css'
// Vue.use(Mint);
// Vue.use(Weui);
// import 'mint-ui/lib/style.css';
import baseCss from './css/base.css'

import weui from './css/weui.css'


>>>>>>> e541395a3731b94dc81502c812ceefade91c81e7
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  store,
  components: { },
  template: '<router-view></router-view>'
=======

  // components: { App },
  template: `<router-view></router-view>`,
>>>>>>> e541395a3731b94dc81502c812ceefade91c81e7
})
