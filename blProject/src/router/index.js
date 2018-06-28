import Vue from 'vue'
import Router from 'vue-router'
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
Vue.use(Router)
// Vue.use(Mint);
>>>>>>> 1d86703b8eafd33bc987c256bc39cddb58bcf8a8

export default new Router({
  routes: [
    {
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
    }
  ]
})
