import { createRouter, createWebHistory } from 'vue-router'
import { AppRouter } from '@/modules/app/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AppRouter]
})

export default router
