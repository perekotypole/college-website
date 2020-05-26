import Departments from '../../../models/structure/departments'
import Specialties from '../../../models/structure/specialties'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/specialties', async (req, res) => {
    try {
      const result = await Departments.find()
        .populate({ path: 'leader' })
        .populate({ path: 'specialties', model: Specialties })

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

  router.post('/specialty', verifyUser, async (req, res) => {
    const specialty = req.body

    try {
      const result = await Specialties.create(specialty)

      if (result) {
        Departments.findByIdAndUpdate(specialty.department,
          { $push: { specialties: specialty.id } }).exec()
      }

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

  router.delete('/specialty', verifyUser, async (req, res) => {
    const { id } = req.body

    const specialtyQuery = Specialties.findById(id)

    try {
      if (!await specialtyQuery) throw { msg: 'Specialty is not found' }

      const specialty = await specialtyQuery

      if (specialty.department) {
        const departmentQuery = Departments.findById(specialty.department)

        if (!await departmentQuery) throw { msg: 'Department is not found' }

        if (!await departmentQuery.findOneAndUpdate({}, { $pull: { specialties: id } })) {
          throw { msg: 'Specialty cannot be deleted' }
        }
      }

      const result = await specialtyQuery.findOneAndRemove({})

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

  router.put('/specialty', verifyUser, async (req, res) => {
    const specialty = req.body

    const specialtyQuery = Specialties.findById(specialty.id)

    try {
      if (!await specialtyQuery) throw { msg: 'Specialty is not found' }

      const oldSpecialty = await specialtyQuery

      if (specialty.department) {
        const departmentQuery = Departments.findById(specialty.department)

        if (!await departmentQuery) throw { msg: 'Department is not found' }

        await departmentQuery.findOneAndUpdate({},
          { $push: { specialties: specialty.id } })
        await Departments.findByIdAndUpdate(oldSpecialty.department,
          { $pull: { specialties: specialty.id } })
      }

      const result = await specialtyQuery.findOneAndUpdate({}, specialty)

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
