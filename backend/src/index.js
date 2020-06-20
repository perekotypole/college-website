import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import { production, development } from './configs/db'

import structure from './modules/structure'
import news from './modules/news'
import auth from './modules/auth'
import files from './modules/files'

const app = express()
const port = process.env.PORT || 4000
const database = process.env.NODE_ENV === 'production' ? production : development

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/public/`))

  app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`))
}

mongoose
  .connect(database.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

auth(app)
structure(app)
news(app)
files(app)

app.listen(port)
