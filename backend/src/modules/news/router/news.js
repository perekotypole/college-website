import News from '../../../models/news/news'
import Tag from '../../../models/news/tags'
import Image from '../../../models/images'
import Documents from '../../../models/documents'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.post('/list', async (req, res) => {
    const {
      tag, date, number, page, sort,
    } = req.body

    try {
      const query = News.find({
        publicationDate: {
          $gte: date && date.from ? Date.parse(date.from) : Date.parse('2000-01-01'),
          $lte: date && date.to ? Date.parse(date.to) : Date.now(),
        },
      }).sort({ publicationDate: -sort })

      if (tag) query.where({ mainTag: tag })

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
      const news = await News.find().countDocuments()
      const views = await News.aggregate([{
        $group: {
          _id: null,
          number: {
            $sum: '$views',
          },
        },
      }])

      return res.json({
        finded: !!news,
        news,
        views: views[0].number,
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

  router.post('/events', async (req, res) => {
    const { date } = req.body

    try {
      const result = await News.find(
        {
          eventDate: {
            $gte: date && date.from ? Date.parse(date.from) : Date.parse('2000-01-01'),
            $lte: date && date.to ? Date.parse(date.to) : Date.now(),
          },
        },
      )
        .sort('-eventDate')
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

  router.get('/:id/:viewsIncrement', async (req, res) => {
    const { id, viewsIncrement } = req.params

    try {
      if (viewsIncrement === 'true') {
        await News.findOneAndUpdate({ _id: id }, {
          $inc: { views: 1 },
        })
      }

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

    news.mainImage = (await Image.create({ path: news.mainImage }))._id

    try {
      if (news.images) {
        news.imagesList = []

        await Promise.all(news.images.map(
          async (value) => news.imagesList.push(
            (await Image.create({ path: value }))._id,
          ),
        ))
      }

      if (news.documents) {
        news.documentsList = []

        await Promise.all(news.documents.map(
          async (value) => news.documentsList.push(
            (await Documents.create({ path: value }))._id,
          ),
        ))
      }

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
