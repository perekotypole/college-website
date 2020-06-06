import News from '../../../models/news/news'
import Tag from '../../../models/news/tags'
import Image from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.post('/list', async (req, res) => {
    const {
      tag, date, number, page, sort,
    } = req.body


    try {
      const query = News.find().sort({ publicationDate: -sort })

      if (tag) query.where({ mainTag: tag })
      if (date) {
        query.$where(`
          this.publicationDate >= ${date.from ? Date.parse(date.from) : Date.parse('2000-01-01')} &&
          this.publicationDate <= ${date.to ? Date.parse(date.to) : Date.now()}
        `)
      }

      const result = await query
        .skip((page - 1) * number)
        .limit(Number(number))
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

  router.get('/number', async (req, res) => {
    try {
      const result = await News.find().count()

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

  router.get('/slider/:number', async (req, res) => {
    const { number } = req.params

    try {
      const result = await News.find()
        .sort('-publicationDate')
        .limit(Number(number))
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

  router.post('/byTag', async (req, res) => {
    const { tag, page, number } = req.body

    try {
      const result = await News.find({ mainTag: tag })
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

  router.post('/byOptionalTags', async (req, res) => {
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
