export default [
  {
    name: 'study',
    path: '/study',
    meta: {
      title: 'Навчання',
    },
    component: () => import('@/views/study/Study'),
  },
  {
    name: 'commissions',
    path: '/study/commissions',
    meta: {
      parents: [
        {
          title: 'Навчання',
          link: '/study',
        },
      ],
      title: 'Циклові комісії',
    },
    component: () => import('@/views/study/Commissions'),
  },
  {
    name: 'specialties',
    path: '/study/specialties',
    meta: {
      parents: [
        {
          title: 'Навчання',
          link: '/study',
        },
      ],
      title: 'Спеціальності',
    },
    component: () => import('@/views/study/Specialties'),
  },
  {
    name: 'program',
    path: '/study/program',
    meta: {
      parents: [
        {
          title: 'Навчання',
          link: '/study',
        },
      ],
      title: 'Освітня програма',
    },
    component: () => import('@/views/study/Program'),
  },
]
