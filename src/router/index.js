import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/views/Game.vue'
import History from '@/views/History.vue'
import Home from '@/views/Home.vue'
import Instructions from '@/views/Instructions.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game/:name/:shots',
    name: 'Game',
    component: Game,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/settings/:name/:shots',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions,
  },
]

const router = new VueRouter({
  routes,
})

export default router
