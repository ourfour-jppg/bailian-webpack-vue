import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import home from '@/components/home/home'
import item from '@/components/item/item'

=======
<<<<<<< HEAD
>>>>>>> e541395a3731b94dc81502c812ceefade91c81e7
//import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
import GoodsCar from '@/components/goodsCar'
import address from '@/components/address.vue'
<<<<<<< HEAD
import myCollection from '@/components/myCollection.vue'
import Reg from '@/components/Reg.vue'
=======
>>>>>>> 68a3ae7981b4b0ea9cd350b9e43dd469be362006
>>>>>>> e541395a3731b94dc81502c812ceefade91c81e7
Vue.use(Router)
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
    },
    {
      path:'/goodsCar',
      name:'goodsCar',
      component: GoodsCar
    },{
      path:'/reg',
      name:'Reg',
      component: Reg
    },{
      path:'/address',
      name:'address',
      component: address
<<<<<<< HEAD
    },{
      path:'/myCollection',
      name:'myCollection',
      component: myCollection
=======
>>>>>>> 1d86703b8eafd33bc987c256bc39cddb58bcf8a8
>>>>>>> 68a3ae7981b4b0ea9cd350b9e43dd469be362006
>>>>>>> e541395a3731b94dc81502c812ceefade91c81e7
    }
  ]
})
