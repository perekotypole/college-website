import Commission from '../../../models/structure/commissions'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/commissions', async (req, res) => {
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

  router.post('/commission', verifyUser, async (req, res) => {
    Commission.create(req.body)
      .then((created) => {
        res.json({
          created: !!created,
          commission: created,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.delete('/commission', verifyUser, async (req, res) => {
    Commission.findByIdAndRemove(req.body.id)
      .then((deleted) => {
        res.json({
          deleted: !!deleted,
          commission: deleted,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.put('/commission', verifyUser, async (req, res) => {
    Commission.findByIdAndUpdate(req.body.id,
      {
        name: req.body.name,
        icon: req.body.icon,
        description: req.body.description,
        leader: req.body.leader,
        members: req.body.members,
      })
      .then((updated) => {
        res.json({
          updated: !!updated,
          commission: updated,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  // router.get('/commission', async (req, res) => {
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
}
