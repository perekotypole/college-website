export default [
  {
    name: 'dashboard',
    path: '/',
    component: () => import('@/views/admin/Dashboard'),
  },
  {
    name: 'news',
    path: '/admin/news',
    component: () => import('@/views/admin/News'),
  },
]
