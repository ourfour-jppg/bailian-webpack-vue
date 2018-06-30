import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/Login'
import Reg from '@/components/Reg'
import GoodsList from '../components/GoodsList'
import Me from '../components/Me'

Vue.use(Router)



// import home from '@/components/home/home'


// import Details from '@/components/details/details'
import GoodsCar from '@/components/goodsCar'
import address from '@/components/address.vue'

import myCollection from '@/components/myCollection.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {

    //   path: '/home',
    //   name: 'home',
    //   component:home
    // },
    
    // {
    //   path: '/details',
    //   name: 'Details',
    //   component: Details
		// },
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

      path:'/goodslist',
      name:'GoodsList',
      component: GoodsList
    },
    {
      path:'/address',
      name:'address',
      component: address

    },{
      path:'/myCollection',
      name:'myCollection',
      component: myCollection
    },{
      path:'/me',
      name:'Me',
      component: Me
    }
  ]
})
