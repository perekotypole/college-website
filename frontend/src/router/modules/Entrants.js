export default [
  {
    name: 'entrants',
    path: '/entrants',
    component: () => import('@/views/entrants/Entrants'),
  },
  {
    name: 'courses',
    path: '/entrants/courses',
    component: () => import('@/views/entrants/Courses'),
  },
  {
    name: 'entrance',
    path: '/entrants/entrance',
    component: () => import('@/views/entrants/Entrance'),
  },
]
