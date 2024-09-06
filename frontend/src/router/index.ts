import { createRouter, createWebHistory } from 'vue-router'
import { AppRouter } from '@/modules/app/router'
import { AuthRouter } from '@/modules/auth/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AppRouter, ...AuthRouter]
})

export default router
