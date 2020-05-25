import Tag from '../../../models/news/tags'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/tags', async (req, res) => {
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

  router.post('/tag', verifyUser, async (req, res) => {
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

  router.put('/tag', verifyUser, async (req, res) => {
    Tag.findByIdAndUpdate(req.body.id,
      {
        name: req.body.name,
      })
      .then((updated) => {
        res.json({
          updated: !!updated,
          tag: updated,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
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
