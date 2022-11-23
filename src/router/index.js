import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MainView from '@/views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  }, {
    path: '/register',
    name: 'Register',
    component: RegisterView
  }, {
    path: '/home',
    name: 'Home',
    component: HelloWorld
  }, {
    path: '/main',
    name: 'Main',
    component: MainView,
    children: [
      {
        path: '',
        name: 'DashBoard',
        component: () => import('@/components/DashBoard.vue')
      },
      {
        path: ':cid',
        name: 'ChatRoom',
        component: () => import('@/components/ChatRoom.vue')
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
