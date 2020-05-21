import Tag from '../../../models/news/tags'

export default (router) => {
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

  // router.post('/tag/create', async (req, res) => {
  //   Tag.create(req.body)
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
