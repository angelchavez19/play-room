export const AuthRouter = [
  {
    path: '/auth/register',
    name: 'auth-register',
    component: () => import('./p-register.vue')
  },
  {
    path: '/auth/login',
    name: 'auth-login',
    component: () => import('./p-login.vue')
  }
]
