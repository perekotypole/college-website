export default [
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/About'),
  },
  {
    name: 'history',
    path: '/about/history',
    component: () => import('@/views/about/History'),
  },
  {
    name: 'administration',
    path: '/about/administration',
    component: () => import('@/views/about/Administration'),
  },
  {
    name: 'documentation',
    path: '/about/documentation',
    component: () => import('@/views/about/Documentation'),
  },
  {
    name: 'activity',
    path: '/about/activity',
    component: () => import('@/views/about/Activity'),
  },
  {
    name: 'chummer',
    path: '/about/chummer',
    component: () => import('@/views/about/Chummer'),
  },
]
