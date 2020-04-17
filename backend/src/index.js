import express from 'express'
import mongoose from 'mongoose'

import { production, development } from './configs/db'

import structure from './modules/structure'
import news from './modules/news'

const app = express()
const port = process.env.PORT || 4000
const database = process.env.NODE_ENV === 'production' ? production : development

app.use(express.json())

mongoose
  .connect(database.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

structure(app)
news(app)

app.listen(port)
