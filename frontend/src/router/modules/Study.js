export default [
  {
    name: 'study',
    path: '/study',
    component: () => import('@/views/study/Study'),
  },
  {
    name: 'commissions',
    path: '/study/commissions',
    component: () => import('@/views/study/Commissions'),
  },
  {
    name: 'specialties',
    path: '/study/specialties',
    component: () => import('@/views/study/Specialties'),
  },
  {
    name: 'program',
    path: '/study/program',
    component: () => import('@/views/study/Program'),
  },
]
