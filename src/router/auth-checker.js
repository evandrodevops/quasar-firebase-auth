import store from '../store'

export default (to, from, next) => {
  if (store.getters.user) {
    if (to.path === '/sign-in' || to.path === '/sign-up') {
      next('/')
    } else {
      next()
    }
  } else {
    next('/sign-in')
  }
}
