export default [
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About'),
  },
  {
    name: 'administration',
    path: '/about/administration',
    component: () => import('@/views/Administration'),
  },
]
