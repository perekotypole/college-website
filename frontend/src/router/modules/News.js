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
    meta: {
      parents: [
        {
          title: 'Новини',
          link: '/news',
        },
      ],
      title: 'Детальніше',
    },
    component: () => import('@/views/news/NewsDetails'),
  },
]
