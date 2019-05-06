import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/home/Index.vue'),
      children: [
        { path: 'home', component: () => import('./views/home/Home.vue') },
        { path: 'list', component: () => import('./views/home/List.vue') },
        { path: 'see', component: () => import('./views/home/See.vue') },
        { path: 'cat', component: () => import('./views/home/Cat.vue') },
        { path: 'center', component: () => import('./views/home/Center.vue') }
      ]
    },
    { path: '/detail/:id', component: () => import('./views/detail/detail.vue') },
    { path: '', redirect: '/home' }
  ]
})
