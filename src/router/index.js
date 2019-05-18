import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/Login.vue'
import routerMap from './router.config.js'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  ...routerMap,
  {
    path: '*',
    redirect: '/login'
  }
  ]
})
