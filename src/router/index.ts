import { createRouter, createWebHistory } from 'vue-router';
import { useLanguageStore } from '@/stores/useLanguageStore';
import type { AvailableLangs } from '@/stores/useLanguageStore';

// TODO по хорошему не дублировать бы конечно карту
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { lang: 'en' },
  },
  {
    path: '/tos',
    name: 'tos',
    component: () => import('@/pages/TosPage.vue'),
    meta: { lang: 'en' },
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/pages/OrderPage.vue'),
    meta: { lang: 'en' },
  },

  {
    path: '/ru/',
    name: 'home-ru',
    component: () => import('@/pages/HomePage.vue'),
    meta: { lang: 'ru' },
  },
  {
    path: '/ru/tos',
    name: 'tos-ru',
    component: () => import('@/pages/TosPage.vue'),
    meta: { lang: 'ru' },
  },
  {
    path: '/ru/order',
    name: 'order-ru',
    component: () => import('@/pages/OrderPage.vue'),
    meta: { lang: 'ru' },
  },

  { path: '/ru', redirect: '/ru/' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to, _, next) => {
  const langStore = useLanguageStore();
  const lang = (to.meta.lang as AvailableLangs) || 'en';

  if (langStore.language !== lang) {
    langStore.language = lang;
  }

  next();
});

export default router;
