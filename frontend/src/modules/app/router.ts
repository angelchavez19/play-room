import IndexPage from './p-index.vue'

export const AppRouter = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]
