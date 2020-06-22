export default [
  {
    name: 'entrants',
    path: '/entrants',
    meta: {
      title: 'Абітурієнту',
    },
    component: () => import('@/views/entrants/Entrants'),
  },
  {
    name: 'courses',
    path: '/entrants/courses',
    meta: {
      parents: [
        {
          title: 'Абітурієнту',
          link: '/entrants',
        },
      ],
      title: 'Підготовчі курси',
    },
    component: () => import('@/views/entrants/Courses'),
  },
  {
    name: 'entrance',
    path: '/entrants/entrance',
    meta: {
      parents: [
        {
          title: 'Абітурієнту',
          link: '/entrants',
        },
      ],
      title: 'Вступна кампанія',
    },
    component: () => import('@/views/entrants/Entrance'),
  },
]
