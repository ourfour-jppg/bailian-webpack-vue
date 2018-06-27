import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
Vue.use(Router)
Vue.use(Mint);

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
    }
  ]
})
