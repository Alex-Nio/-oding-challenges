import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Auth',
      path: '/',
      component: () => import('@/pages/AuthPage.vue'),
    },
  ],
});

export default router;
