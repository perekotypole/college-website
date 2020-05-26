import Departments from '../../../models/structure/departments'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.post('/department', verifyUser, async (req, res) => {
    const department = req.body

    try {
      const result = await Departments.create(department)

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

  router.delete('/department', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Departments.findById(id)

    try {
      if (!await query) throw { msg: 'Department is not found' }

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

  router.put('/department', verifyUser, async (req, res) => {
    const department = req.body

    const query = Departments.findById(department.id)

    try {
      if (!await query) throw { msg: 'Department is not found' }

      const result = await query.findOneAndUpdate({}, department)

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

  // router.get('/department', async (req, res) => {
  //   Departments.findById(req.body.id)
  //     .populate('leader')
  //     .populate('specialties')
  //     .then((finded) => {
  //       res.json({
  //         finded: !!finded,
  //         department: finded,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })

  // router.get('/departments', async (req, res) => {
  //   Departments.find()
  //     .populate('leader')
  //     .populate('specialties')
  //     .then((finded) => {
  //       res.json({
  //         finded: !!finded,
  //         departments: finded,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })
}
