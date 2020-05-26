import Employee from '../../../models/structure/employees'
import Image from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/admins', async (req, res) => {
    try {
      const result = await Employee.find({ administration: true })
        .populate({ path: 'photo', model: Image })

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

  router.post('/teacher', verifyUser, async (req, res) => {
    const teacher = req.body

    try {
      const result = await Employee.create(teacher)

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

  router.delete('/teacher', verifyUser, async (req, res) => {
    const { id } = req.body

    const query = Employee.findById(id)

    try {
      if (!await query) throw { msg: 'Teacher is not found' }

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

  router.put('/teacher', verifyUser, async (req, res) => {
    const teacher = req.body

    const query = Employee.findById(teacher.id)

    try {
      if (!await query) throw { msg: 'Teacher is not found' }

      const result = await query.findOneAndUpdate({}, teacher)

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
