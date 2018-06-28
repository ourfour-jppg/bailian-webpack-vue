import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import item from '@/components/item/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path: '/item',
      name: 'item',
      component:item
    }
  ]
})
