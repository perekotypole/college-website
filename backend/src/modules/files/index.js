import { Router } from 'express'

import docs from './router/docs'
import images from './router/images'

const router = Router()

docs(router)
images(router)

export default (app) => {
  app.use('/files', router)
}
