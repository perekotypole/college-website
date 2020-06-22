export default [
  {
    name: 'library',
    path: '/library',
    meta: {
      title: 'Бібліотека',
    },
    component: () => import('@/views/library/Library'),
  },
  {
    name: 'aboutLibrary',
    path: '/library/about',
    meta: {
      parents: [
        {
          title: 'Бібліотека',
          link: '/library',
        },
      ],
      title: 'Про бібліотеку',
    },
    component: () => import('@/views/library/About'),
  },
  {
    name: 'principle',
    path: '/library/principle',
    meta: {
      parents: [
        {
          title: 'Бібліотека',
          link: '/library',
        },
      ],
      title: 'Положення',
    },
    component: () => import('@/views/library/Principle'),
  },
  {
    name: 'rules',
    path: '/library/rules',
    meta: {
      parents: [
        {
          title: 'Бібліотека',
          link: '/library',
        },
      ],
      title: 'Правила користування',
    },
    component: () => import('@/views/library/Rules'),
  },
  {
    name: 'ebooks',
    path: '/library/ebooks',
    meta: {
      parents: [
        {
          title: 'Бібліотека',
          link: '/library',
        },
      ],
      title: 'Електронні підручники',
    },
    component: () => import('@/views/library/Ebooks'),
  },
]
