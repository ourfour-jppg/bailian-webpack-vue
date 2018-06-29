import Vue from 'vue'
import Router from 'vue-router'

import Details from '@/components/details/details'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import GoodsList from '../components/GoodsList'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/details',
      name: 'Details',
      component: Details
		},
    {
      path:'/login',
      name:'Login',
      component: Login
    },{
      path:'/reg',
      name:'Reg',
      component: Reg
    },{
      path:'/goodslist',
      name:'GoodsList',
      component: GoodsList
    }
  ]
})
