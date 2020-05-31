import Commission from '../../../models/structure/commissions'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/commissions', async (req, res) => {
    try {
      const result = await Commission.find()
        .populate('leader')
        .populate('members')

      return res.json({
        finded: !!result,
        commissions: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.post('/commission', verifyUser, async (req, res) => {
    const commission = req.body

    try {
      const result = await Commission.create(commission)

      return res.json({
        created: !!result,
        commission: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.delete('/commission', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Commission.findById(id)

    try {
      if (!await query) throw { msg: 'Commission is not found' }

      const result = await query.findOneAndRemove({})

      return res.json({
        deleted: !!result,
        commission: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
  })

  router.put('/commission', verifyUser, async (req, res) => {
    const commission = req.body

    const query = Commission.findById(commission.id)

    try {
      if (!await query) throw { msg: 'Commission is not found' }

      const result = await query.findOneAndUpdate({}, commission)

      return res.json({
        updated: !!result,
        commission: result,
      })
    } catch (error) {
      return res.json({
        errors: [
          error || { msg: 'Undefined error' },
        ],
      })
    }
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
