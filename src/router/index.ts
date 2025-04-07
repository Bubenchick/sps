import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/tos',
    name: 'tos',
    component: () => () => import('../pages/TosPage.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/OrderPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
