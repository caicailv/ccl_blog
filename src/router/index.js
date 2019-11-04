import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import Home from '@/components/nav/home'
import Notepad from '@/components/nav/notepad'
import Album from '@/components/nav/album'
import About from '@/components/nav/about'
import Skill from '@/components/nav/skill'
import Newlyadd from '@/components/newlyadd'
Vue.use(Router)
/* 

*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'skill', 
          component: Skill
        },
        {
          path: 'notepad',
          component: Notepad
        },
        {
          path: 'album',
          component: Album
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'newlyadd',
          component: Newlyadd
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
