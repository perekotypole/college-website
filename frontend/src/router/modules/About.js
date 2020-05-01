export default [
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/About'),
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
]
