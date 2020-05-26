import News from '../../../models/news/news'
import Tag from '../../../models/news/tags'
import Image from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/list', async (req, res) => {
    try {
      const query = News.find().sort('-publicationDate')

      if (req.body.tag) query.where({ mainTag: req.body.tag })
      if (req.body.date) {
        query.$where(`
          this.publicationDate >= ${req.body.date.from ? Date.parse(req.body.date.from) : Date.parse('2000-01-01')} &&
          this.publicationDate <= ${req.body.date.to ? Date.parse(req.body.date.to) : Date.now()}
        `)
      }

      const result = await query
        .skip((req.body.page - 1) * req.body.number)
        .limit(req.body.number)
        .populate({ path: 'mainTag', model: Tag })
        .populate({ path: 'mainImage', model: Image })
        .select('-text -imagesList -documentsList')

      return res.json({
        finded: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.get('/slider', async (req, res) => {
    const { number } = req.body

    try {
      const result = await News.find()
        .sort('-publicationDate')
        .limit(number)
        .populate({ path: 'mainTag', model: Tag })
        .populate({ path: 'mainImage', model: Image })
        .select('-text -imagesList -documentsList')

      return res.json({
        finded: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.get('/events', async (req, res) => {
    const date = new Date(req.body.date)

    try {
      const result = await News.find({ eventDate: { $exists: true } })
        .sort('-eventDate')
        .$where(`
          this.eventDate.getFullYear() === ${date.getFullYear()} &&
          this.eventDate.getMonth() === ${date.getMonth()}
        `)
        .populate({ path: 'mainTag', model: Tag })
        .populate({ path: 'mainImage', model: Image })
        .select('-text -imagesList -documentsList')

      return res.json({
        finded: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.get('/:id', async (req, res) => {
    const { id } = req.params.id

    try {
      const result = await News.findById(id)
        .populate({ path: 'mainTag', model: Tag })
        .populate({ path: 'mainImage', model: Image })
        .populate({ path: 'imageList', model: Image })
        .populate('documentList')

      return res.json({
        finded: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.get('/byOptionalTags', async (req, res) => {
    const { tags, page, number } = req.body

    try {
      const result = await News.find({ optionalTags: { $in: tags } })
        .sort('-publicationDate')
        .skip((page - 1) * number)
        .limit(number)
        .populate({ path: 'mainTag', model: Tag })
        .populate({ path: 'mainImage', model: Image })
        .select('-text -imagesList -documentsList')

      return res.json({
        finded: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/', verifyUser, async (req, res) => {
    const news = req.body

    try {
      const result = await News.create(news)

      return res.json({
        created: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.delete('/', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = News.findById(id)

    try {
      if (!await query) throw { msg: 'News is not found' }

      const result = await query.findOneAndRemove({})

      return res.json({
        deleted: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.put('/', verifyUser, async (req, res) => {
    const news = req.body

    const query = News.findById(news.id)

    try {
      if (!await query) throw { msg: 'News is not found' }

      const result = await query.findOneAndUpdate({}, news)

      return res.json({
        updated: !!result,
        news: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })
}
