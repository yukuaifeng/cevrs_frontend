import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Result from '@/components/main/Result'

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
    }
  ]
})
