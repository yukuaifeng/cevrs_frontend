import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Result from '@/components/main/Result'
import GradeLine from '@/components/main/GradeLine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
    {
      path: '/GradeLine',
      name: 'GradeLine',
      component: GradeLine
    }
  ]
})
