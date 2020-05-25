import { Router } from 'express'

import auth from './router'

const router = Router()

auth(router)

export default (app) => {
  app.use('/auth', router)
}
