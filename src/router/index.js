import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=> import("@/components/index"),
      redirect:'/about',
      children: [
        {
          path: 'home',
          component: ()=> import('@/components/nav/home'),
        },
        {
          path: 'skill', 
          component: ()=> import('@/components/nav/skill'),
        },
        {
          path: 'notepad',
          component: ()=> import('@/components/nav/notepad'),
        },
        {
          path: 'album',
          component: ()=> import('@/components/nav/album'),
        },
        {
          path: 'about',
          component: ()=> import('@/components/nav/about'),
        },
        {
          path: 'detail',
          component: ()=> import('@/components/detail'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import("@/components/login")
    }
  ]
})
