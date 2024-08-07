import { createWebHistory, createRouter } from 'vue-router'
import progressbar from '@scripts/progressbar'

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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  progressbar.start()
  next()
})

router.afterEach(() => {
  progressbar.end()
})

export default router
