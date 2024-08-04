import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@views/HomeView.vue')
  },
  {
    path: '/muska-ami-network',
    component: () => import('@views/MuskaAmiNetwork.vue')
  },
  {
    path: '/dn42-network',
    component: () => import('@views/DN42Network.vue')
  },
  {
    path: '/global-network',
    component: () => import('@views/GlobalNetwork.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
