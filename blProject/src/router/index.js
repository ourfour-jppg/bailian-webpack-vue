import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
//import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
import GoodsCar from '@/components/goodsCar'
import address from '@/components/address.vue'
import myCollection from '@/components/myCollection.vue'
import Reg from '@/components/Reg.vue'
import classification from '@/components/classification/classification'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
   {
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
    },{
      path:'/myCollection',
      name:'myCollection',
      component: myCollection
    },{
    	path:'/classification',
      name:'classification',
      component: classification
    }
  ]
})
