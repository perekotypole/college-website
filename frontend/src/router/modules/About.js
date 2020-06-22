export default [
  {
    name: 'about',
    path: '/about',
    meta: {
      title: 'Про коледж',
    },
    component: () => import('@/views/about/About'),
  },
  {
    name: 'history',
    path: '/about/history',
    meta: {
      parents: [
        {
          title: 'Про коледж',
          link: '/about',
        },
      ],
      title: 'Історія',
    },
    component: () => import('@/views/about/History'),
  },
  {
    name: 'administration',
    path: '/about/administration',
    meta: {
      parents: [
        {
          title: 'Про коледж',
          link: '/about',
        },
      ],
      title: 'Адміністрація',
    },
    component: () => import('@/views/about/Administration'),
  },
  {
    name: 'documentation',
    path: '/about/documentation',
    meta: {
      parents: [
        {
          title: 'Про коледж',
          link: '/about',
        },
      ],
      title: 'Документація',
    },
    component: () => import('@/views/about/Documentation'),
  },
  {
    name: 'activity',
    path: '/about/activity',
    meta: {
      parents: [
        {
          title: 'Про коледж',
          link: '/about',
        },
      ],
      title: 'Діяльність',
    },
    component: () => import('@/views/about/Activity'),
  },
  {
    name: 'chummer',
    path: '/about/chummer',
    meta: {
      parents: [
        {
          title: 'Про коледж',
          link: '/about',
        },
      ],
      title: 'Гуртожиток',
    },
    component: () => import('@/views/about/Chummer'),
  },
]
