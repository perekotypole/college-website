import { Router } from 'express'

import news from './router/news'
import tags from './router/tags'

const router = Router()

tags(router)
news(router)

export default (app) => {
  app.use('/news', router)
}
