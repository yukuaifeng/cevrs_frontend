import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Result from '@/components/main/Result'
import GradeLine from '@/components/main/GradeLine'
import SchoolTable from '@/components/main/SchoolTable'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import SchoolDetail from '@/components/main/SchoolDetail'
import MajorTable from '@/components/main/MajorTable'
import MajorDetail from '@/components/main/MajorDetail'

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
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/SchoolTable',
      name: 'SchoolTable',
      component: SchoolTable
    },
    {
      path: '/SchoolDetail',
      name: 'SchoolDetail',
      component: SchoolDetail
    },
    {
      path: '/MajorTable',
      name: 'MajorTable',
      component: MajorTable
    },
    {
      path: '/MajorDetail',
      name: 'MajorDetail',
      component: MajorDetail
    }
  ]
})
