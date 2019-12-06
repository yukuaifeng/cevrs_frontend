import Vue from 'vue'
import Router from 'vue-router'
import Navi from '@/components/Navi'
import Foot from '@/components/Foot'
import Home from '@/components/main/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Navi',
      name: 'Navi',
      component: Navi
    },
    {
      path: '/',
      name: 'Foot',
      component: Foot
    }
  ]
})
