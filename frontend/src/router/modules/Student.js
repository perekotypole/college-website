export default [
  {
    name: 'student',
    path: '/student',
    meta: {
      title: 'Студенту',
    },
    component: () => import('@/views/student/Student'),
  },
  {
    name: 'schedule',
    path: '/student/schedule/',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'Розклад навчання',
    },
    component: () => import('@/views/student/Schedule'),
  },
  {
    name: 'exam',
    path: '/student/exam',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'Екзамени',
    },
    component: () => import('@/views/student/Exam'),
  },
  {
    name: 'practice',
    path: '/student/practice',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'Практика',
    },
    component: () => import('@/views/student/Practice'),
  },
  {
    name: 'consultation',
    path: '/student/consultation',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'Консультації',
    },
    component: () => import('@/views/student/Сonsultation'),
  },
  {
    name: 'zno',
    path: '/student/zno',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'ЗНО',
    },
    component: () => import('@/views/student/ZNO'),
  },
  {
    name: 'scholarship',
    path: '/student/scholarship',
    meta: {
      parents: [
        {
          title: 'Студенту',
          link: '/student',
        },
      ],
      title: 'Стипендіальне забезпечення',
    },
    component: () => import('@/views/student/Scholarship'),
  },
]
