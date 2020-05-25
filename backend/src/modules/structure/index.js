import { Router } from 'express'

import departments from './router/departments'
import specialties from './router/specialties'
import commissions from './router/commissions'
import employees from './router/employees'

const router = Router()

departments(router)
specialties(router)
commissions(router)
employees(router)

export default (app) => {
  app.use('/structure', router)
}
