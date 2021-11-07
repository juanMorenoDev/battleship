import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/views/Game.vue'
import History from '@/views/History.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
]

const router = new VueRouter({
  routes,
})

export default router
