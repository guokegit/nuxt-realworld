import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ccf72da = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _d327f2f0 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _374d12e0 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _717aab60 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _4f1ad14c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _b46d2654 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _5844eead = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _9ccf72da,
    children: [{
      path: "",
      component: _d327f2f0,
      name: "home"
    }, {
      path: "login",
      component: _374d12e0,
      name: "login"
    }, {
      path: "register",
      component: _374d12e0,
      name: "register"
    }, {
      path: "profile/:username",
      component: _717aab60,
      name: "profile"
    }, {
      path: "settings",
      component: _4f1ad14c,
      name: "settings"
    }, {
      path: "editor",
      component: _b46d2654,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _5844eead,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
