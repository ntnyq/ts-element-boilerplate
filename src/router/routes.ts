import Layout from '@/views/layouts/default/index.vue'
import { AppRouteConfig } from '@/typings'

const routes: AppRouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login/index.vue'),
  },

  {
    path: '/',
    redirect: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/index.vue'),
        meta: { icon: 'dashboard', title: 'Dashboard' },
      },
    ],
  },

  {
    path: '/guide',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/Guide/index.vue'),
        meta: { icon: 'guide', title: 'Guide' },
      },
    ],
  },

  {
    path: '/icons',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        name: 'Icons',
        component: () => import(/* webpackChunkName: "icons" */ '@/views/Icons/index.vue'),
        meta: { icon: 'icon', title: 'Icons' },
      },
    ],
  },

  {
    path: '/home',
    component: Layout,
    redirect: 'index',
    meta: { icon: 'example', title: 'Example' },
    children: [
      {
        path: 'index',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
        meta: { title: 'HomePage' },
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '@/views/Home/test.vue'),
        meta: { title: 'Test' },
      },
    ],
  },

  {
    path: '*',
    redirect: '/dashboard',
  },
]

export default routes
