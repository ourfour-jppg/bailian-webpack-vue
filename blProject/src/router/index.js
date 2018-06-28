import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import home from '@/components/home/home'
import item from '@/components/item/item'

=======
<<<<<<< HEAD
//import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
import GoodsCar from '@/components/goodsCar'
Vue.use(Router)
//Vue.use(Mint);
=======
// import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import address from '@/components/address.vue'
>>>>>>> 68a3ae7981b4b0ea9cd350b9e43dd469be362006
Vue.use(Router)
// Vue.use(Mint);
>>>>>>> 1d86703b8eafd33bc987c256bc39cddb58bcf8a8

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/item',
      name: 'item',
      component:item
=======
      path: '/details',
      name: 'Details',
      component: Details
		},
    {
      path:'/login',
      name:'login',
      component: Login
<<<<<<< HEAD
    },
    {
      path:'/goodsCar',
      name:'goodsCar',
      component: GoodsCar
=======
    },{
      path:'/reg',
      name:'Reg',
      component: Reg
    },{
      path:'/address',
      name:'address',
      component: address
>>>>>>> 1d86703b8eafd33bc987c256bc39cddb58bcf8a8
>>>>>>> 68a3ae7981b4b0ea9cd350b9e43dd469be362006
    }
  ]
})
