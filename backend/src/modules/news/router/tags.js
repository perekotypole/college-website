import Tag from '../../../models/news/tags'
import News from '../../../models/news/news'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/tags', async (req, res) => {
    try {
      const result = await Tag.find()

      return res.json({
        finded: !!result,
        tags: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/tag', verifyUser, async (req, res) => {
    const tag = req.body

    try {
      const result = await Tag.create(tag)

      return res.json({
        created: !!result,
        tag: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.delete('/tag', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Tag.findById(id)

    try {
      if (!await query) throw { msg: 'Tag is not found' }

      if (await News.findOne({ mainTag: id })) throw { msg: 'Tag cannot be deleted' }

      const result = await query.findOneAndRemove({})

      return res.json({
        deleted: !!result,
        tag: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.put('/tag', verifyUser, async (req, res) => {
    const tag = req.body

    const query = Tag.findById(tag.id)

    try {
      if (!await query) throw { msg: 'Tag is not found' }

      const result = await query.findOneAndUpdate({}, tag)

      return res.json({
        updated: !!result,
        tag: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  // router.post('/tag', async (req, res) => {
  //   Tag.findById(req.body.id)
  //     .then((finded) => {
  //       res.json({
  //         finded: !!finded,
  //         tag: finded,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })
}
