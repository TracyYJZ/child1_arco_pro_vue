import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const VUECHILD: AppRouteRecordRaw = {
  path: '/child',
  name: 'child',
  component: DEFAULT_LAYOUT,
  meta: {
    icon: 'icon-command',
    locale: 'menu.child',
    requiresAuth: true,
    order: 1,
  },
  children: [
    {
      path: 'vue',
      name: 'vue',
      component: () => import('@/views/vuechild/index.vue'),
      meta: {
        locale: 'menu.vue',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};

export default VUECHILD;
