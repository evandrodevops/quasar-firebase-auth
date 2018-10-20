import AuthChecker from './auth-checker'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'sign-in',
        component: () => import('pages/SignIn.vue')
      },
      {
        path: 'sign-up',
        component: () => import('pages/SignUp.vue')
      },
      {
        path: '',
        component: () => import('pages/Index.vue')
      }
    ],
    mode: 'history',
    beforeEnter: AuthChecker
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
