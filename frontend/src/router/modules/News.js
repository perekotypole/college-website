export default [
  {
    name: 'news',
    path: '/news',
    meta: {
      title: 'Новини',
    },
    component: () => import('@/views/news/News'),
  },
  {
    name: 'newsDetails',
    path: '/news/:id',
    component: () => import('@/views/news/NewsDetails'),
  },
]
