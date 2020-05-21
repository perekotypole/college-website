import News from '../../../models/news/news'
import Tag from '../../../models/news/tags'
import Image from '../../../models/images'

export default (router) => {
  router.post('/list', async (req, res) => {
    News.find()
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
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

  router.post('/slider', async (req, res) => {
    News.find()
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
      .sort('-publicationDate')
      .limit(3)
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

  router.post('/events', async (req, res) => {
    News.find({ eventDate: { $exists: true } })
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
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

  router.post('/get', async (req, res) => {
    News.findById(req.body.id)
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

  router.post('/byTag', async (req, res) => {
    News.find({ mainTag: req.body.tag })
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
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

  router.post('/byOptionalTags', async (req, res) => {
    News.find({ optionalTags: { $in: req.body.tags } })
      .populate({ path: 'mainTag', model: Tag })
      .populate({ path: 'mainImage', model: Image })
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

  // router.post('/create', async (req, res) => {
  //   News.create(req.body)
  //     .then((created) => {
  //       res.json({
  //         created: !!created,
  //         news: created,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })
}
