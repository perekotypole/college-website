import { Router } from 'express'

import news from './router/news'
import tags from './router/tags'

const router = Router()

news(router)
tags(router)

export default (app) => {
  app.use('/news', router)
}
