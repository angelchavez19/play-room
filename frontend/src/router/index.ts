import { createRouter, createWebHistory } from 'vue-router'
import { AppRouter } from '@/modules/app/router'
import { AuthRouter } from '@/modules/auth/router'
import { UserRouter } from '@/modules/user/router'
import { GamesRouter } from '@/modules/games/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AppRouter, ...AuthRouter, ...UserRouter, ...GamesRouter]
})

export default router
