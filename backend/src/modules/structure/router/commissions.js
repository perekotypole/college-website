import Commission from '../../../models/structure/commissions'

export default (router) => {
  router.post('/commission/create', async (req, res) => {
    Commission.create(req.body)
      .then((created) => {
        res.json({
          created: !!created,
          department: created,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  // router.post('/commission', async (req, res) => {
  //   Commission.findById(req.body.id)
  //     .populate('leader')
  //     .populate({ path: 'members' })
  //     .then((finded) => {
  //       res.json({
  //         finded: !!finded,
  //         commission: finded,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })

  router.post('/commissions', async (req, res) => {
    Commission.find()
      .populate('leader')
      .populate('members')
      .then((finded) => {
        res.json({
          finded: !!finded,
          commissions: finded,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })
}
