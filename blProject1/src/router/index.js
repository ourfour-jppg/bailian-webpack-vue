import Vue from 'vue'
import Router from 'vue-router'
// import like from '../components/like.vue'
import fen from '../components/fen.vue'
import banner from '../components/banner.vue'
import address from '../components/address.vue'
// import H from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'address',
      component: address
     },
     {
      path: '/i',
      name: 'fden',
      component: fen
     }
    // },
    // {
    //   path: '/i',
    //   name: 'h',
    //   component: H
    // }
  ]
})
