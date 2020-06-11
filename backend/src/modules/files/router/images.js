import Images from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/image/:id', async (req, res) => {
    const { id } = req.params
    try {
      const result = await Images.findById(id)

      return res.json({
        finded: !!result,
        image: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/images', verifyUser, async (req, res) => {
    const { ids } = req.body

    try {
      const result = await Images.find({ _id: { $in: ids } })

      return res.json({
        finded: !!result,
        images: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/image', verifyUser, async (req, res) => {
    const image = req.body

    try {
      const result = await Images.create(image)

      return res.json({
        created: !!result,
        image: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.delete('/image', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Images.findById(id)

    try {
      if (!await query) throw { msg: 'Image is not found' }

      const result = await query.findOneAndRemove({})

      return res.json({
        deleted: !!result,
        image: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.put('/image', verifyUser, async (req, res) => {
    const image = req.body

    const query = Images.findById(image.id)

    try {
      if (!await query) throw { msg: 'Image is not found' }

      const result = await query.findOneAndUpdate({}, image)

      return res.json({
        updated: !!result,
        image: result,
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
