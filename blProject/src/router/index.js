import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/components/details/details'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import GoodsList from '../components/GoodsList'
import Me from '../components/Me'
import home from '@/components/home/home'
import GoodsCar from '@/components/goodsCar'
import address from '@/components/address.vue'
import myCollection from '@/components/myCollection.vue'
import classification from '@/components/classification/classification'
import fen from '@/components/fen.vue'
import indent from '@/components/indent/indent'

Vue.use(Router)

Vue.use(Router)

export default new Router({
  routes: [
    // {

    //   path: '/home',
    //   name: 'home',
    //   component:home
    // },
    
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
      path:'/classification',
      name:'classification',
      component: classification
    },
	{
      path:'/me',
      name:'Me',
      component: Me
    },
    {
      path:'/fen',
      name:'Fen',
      component: fen
	},
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/indent',
      name: 'indent',
      component:indent
    }
  ]
})
