export default [
  {
    name: 'dashboard',
    path: '/',
    component: () => import('@/views/admin/Dashboard'),
  },
  {
    name: 'admin-news',
    path: '/admin/news',
    component: () => import('@/views/admin/News'),
  },
  {
    name: 'news-creator',
    path: '/admin/news/create',
    component: () => import('@/views/admin/NewsCreator'),
  },
  {
    name: 'edit-data',
    path: '/admin/edit',
    component: () => import('@/views/admin/EditData'),
  },
]
