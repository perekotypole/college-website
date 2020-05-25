import News from '../../../models/news/news'
import Tag from '../../../models/news/tags'
import Image from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/list', async (req, res) => {
    const query = News.find().sort('-publicationDate')

    if (req.body.tag) query.where({ mainTag: req.body.tag })
    if (req.body.date) {
      query.$where(`
        this.publicationDate >= ${req.body.date.from ? Date.parse(req.body.date.from) : Date.parse('2000-01-01')} &&
        this.publicationDate <= ${req.body.date.to ? Date.parse(req.body.date.to) : Date.now()}
      `)
    }

    query
      .skip((req.body.page - 1) * req.body.number)
      .limit(req.body.number)
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .select('-text -imagesList -documentsList')
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

  router.get('/slider', async (req, res) => {
    News.find()
      .sort('-publicationDate')
      .limit(req.body.number)
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .select('-text -imagesList -documentsList')
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

  router.get('/events', async (req, res) => {
    const date = new Date(req.body.date)

    News.find({ eventDate: { $exists: true } })
      .sort('-eventDate')
      .$where(`
        this.eventDate.getFullYear() === ${date.getFullYear()} &&
        this.eventDate.getMonth() === ${date.getMonth()}
      `)
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .select('-text -imagesList -documentsList')
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

  router.get('/:id', async (req, res) => {
    News.findById(req.params.id)
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .populate({ path: 'imageList', model: Image })
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

  router.get('/byOptionalTags', async (req, res) => {
    News.find({ optionalTags: { $in: req.body.tags } })
      .sort('-publicationDate')
      .skip((req.body.page - 1) * req.body.number)
      .limit(req.body.number)
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .select('-text -imagesList -documentsList')
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

  router.post('/', verifyUser, async (req, res) => {
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

  router.delete('/', verifyUser, async (req, res) => {
    News.findOneAndDelete(req.body.id)
      .then((deleted) => {
        res.json({
          deleted: !!deleted,
          news: deleted,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.put('/', verifyUser, async (req, res) => {
    News.findOneAndUpdate(req.body.id,
      {
        title: req.body.title,
        description: req.body.description,
        mainTag: req.body.mainTag,
        optionalTags: req.body.optionalTags,
        mainImage: req.body.mainImage,
        imagesList: req.body.imagesList,
        eventDate: req.body.eventDate,
        avdert: req.body.avdert,
        text: req.body.text,
        documentsList: req.body.documentsList,
      })
      .then((updated) => {
        res.json({
          updated: !!updated,
          news: updated,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })
}
