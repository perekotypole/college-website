import Docs from '../../../models/documents'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/doc:id', async (req, res) => {
    const { id } = req.params

    try {
      const result = await Docs.findById(id)

      return res.json({
        finded: !!result,
        doc: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/docs', async (req, res) => {
    const { ids } = req.body

    try {
      const result = await Docs.find({ _id: { $in: ids } })

      return res.json({
        finded: !!result,
        documents: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/doc', async (req, res) => {
    const doc = req.body

    try {
      const result = await Docs.create(doc)

      return res.json({
        created: !!result,
        doc: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.delete('/doc', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Docs.findById(id)

    try {
      if (!await query) throw { msg: 'Document is not found' }

      const result = await query.findOneAndRemove({})

      return res.json({
        deleted: !!result,
        doc: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.put('/doc', verifyUser, async (req, res) => {
    const doc = req.body

    const query = Docs.findById(doc.id)

    try {
      if (!await query) throw { msg: 'Document is not found' }

      const result = await query.findOneAndUpdate({}, doc)

      return res.json({
        updated: !!result,
        doc: result,
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
