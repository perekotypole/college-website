import { Router } from 'express'

import News from '../../models/news'
import Tag from '../../models/tags'

const router = Router()

router.post('/list', async (req, res) => {
  News.find()
    .populate({ path: 'tagList', model: Tag })
    // .populate('mainImage')
    // .populate('imageList')
    .populate('documentList')
    .sort('-publicationDate')
    .then((finded) => {
      res.json({
        finded: !!finded,
        news: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/create', async (req, res) => {
  News.create(req.body)
    .then((created) => {
      res.json({
        created: !!created,
        news: created,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/events', async (req, res) => {
  News.find()
    .populate('tagList')
    // .populate('mainImage')
    // .populate('imageList')
    .populate('documentList')
    .$where('this.eventDate !== undefined')
    .sort('-eventDate')
    .then((finded) => {
      res.json({
        finded: !!finded,
        news: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/', async (req, res) => {
  News.findById(req.body.id)
    .populate({ path: 'tagList', model: Tag })
    // .populate('mainImage')
    // .populate('imageList')
    .populate('documentList')
    .then((finded) => {
      res.json({
        finded: !!finded,
        news: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/byTags', async (req, res) => {
  News.find({ tagList: { $all: req.body.tags } })
    .populate({ path: 'tagList', model: Tag })
    // .populate('mainImage')
    // .populate('imageList')
    .populate('documentList')
    .then((finded) => {
      res.json({
        finded: !!finded,
        news: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/tags', async (req, res) => {
  Tag.find()
    .then((finded) => {
      res.json({
        finded: !!finded,
        tags: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/tag', async (req, res) => {
  Tag.findById(req.body.id)
    .then((finded) => {
      res.json({
        finded: !!finded,
        tag: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/tag/create', async (req, res) => {
  Tag.create(req.body)
    .then((finded) => {
      res.json({
        finded: !!finded,
        tag: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

export default router
