import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'Home',
    path: '/portflio/',
    component: () => import('@/pages/Home'),
  },
  {
    name: 'Prev',
    path: '/portflio/prev',
    component: () => import('@/pages/Prev'),
  },
  // {
  //   name: '404',
  //   path: '/404',
  //   meta: {
  //     footer: false,
  //     header: false,
  //     unauthorized: true
  //   },
  //   component: NotFound,
  // },
  // { path: '*', redirect: '/404' }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
