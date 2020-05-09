export default [
  {
    name: 'library',
    path: '/library',
    component: () => import('@/views/library/Library'),
  },
  {
    name: 'aboutLibrary',
    path: '/library/about',
    component: () => import('@/views/library/About'),
  },
  {
    name: 'principle',
    path: '/library/principle',
    component: () => import('@/views/library/Principle'),
  },
  {
    name: 'rules',
    path: '/library/rules',
    component: () => import('@/views/library/Rules'),
  },
  {
    name: 'ebooks',
    path: '/library/ebooks',
    component: () => import('@/views/library/Ebooks'),
  },
]
