// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { },
  template: '<router-view></router-view>'
})
