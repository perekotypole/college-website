export default [
  {
    name: 'student',
    path: '/student',
    component: () => import('@/views/student/Student'),
  },
  {
    name: 'schedule',
    path: '/student/schedule/',
    component: () => import('@/views/student/Schedule'),
  },
  {
    name: 'exam',
    path: '/student/exam',
    component: () => import('@/views/student/Exam'),
  },
  {
    name: 'practice',
    path: '/student/practice',
    component: () => import('@/views/student/Practice'),
  },
  {
    name: 'consultation',
    path: '/student/consultation',
    component: () => import('@/views/student/Сonsultation'),
  },
  {
    name: 'zno',
    path: '/student/zno',
    component: () => import('@/views/student/ZNO'),
  },
  {
    name: 'scholarship',
    path: '/student/scholarship',
    component: () => import('@/views/student/Scholarship'),
  },
]
