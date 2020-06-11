import store from '../../store'

export default async (to, from, next) => {
  if (to.matched.some((route) => route.meta && route.meta.requiresAuth)) {
    if (store.getters['authorization/authorized']) {
      next()
    } else {
      next({ name: 'signIn' })
    }
  } else if (to.matched.some((route) => route.name === 'signIn')) {
    if (store.getters['authorization/authorized']) {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
}
