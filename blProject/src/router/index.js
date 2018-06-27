import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui';
import Details from '@/components/details/details'
import Login from '@/components/Login'
<<<<<<< HEAD
=======
import Reg from '@/components/Reg'

>>>>>>> f1ecf8abdac45feeb849c19359b514fa8824f9d5
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
