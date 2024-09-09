export const AuthRouter = [
  {
    path: '/auth/login',
    name: 'auth-login',
    component: () => import('./p-login.vue')
  }
]
