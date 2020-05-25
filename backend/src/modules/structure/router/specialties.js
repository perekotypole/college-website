import Departments from '../../../models/structure/departments'
import Specialties from '../../../models/structure/specialties'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/specialties', async (req, res) => {
    Departments.find()
      .populate({ path: 'leader' })
      .populate({ path: 'specialties', model: Specialties })
      .then((finded) => {
        res.json({
          finded: !!finded,
          departments: finded,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.post('/specialty', verifyUser, async (req, res) => {
    Specialties.deleteMany({}).exec()

    Specialties.create(req.body)
      .then((created) => {
        Departments.findByIdAndUpdate(created.department,
          { $push: { specialties: created.id } }).exec()

        return res.json({
          created: !!created,
          specialty: created,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.delete('/specialty', verifyUser, async (req, res) => {
    Specialties.findByIdAndRemove(req.body.id)
      .then((deleted) => {
        Departments.findByIdAndUpdate(deleted.department,
          { $pull: { specialties: deleted.id } }).exec()

        return res.json({
          deleted: !!deleted,
          specialty: deleted,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.put('/specialty', verifyUser, async (req, res) => {
    Specialties.findByIdAndUpdate(req.body.id,
      {
        code: req.body.code,
        name: req.body.name,
        icon: req.body.icon,
        department: req.body.department,
        qualification: req.body.qualification,
        // terms: {
        //   full: req.body.terms.full,
        //   basic: req.body.terms.basic,
        // },
        // forms: {
        //   fulltime: req.body.forms.fulltime,
        //   external: req.body.forms.external,
        // },
        professions: req.body.professions,
        description: req.body.description,
      })
      .then((updated) => {
        if (req.body.department && !(updated.department.equals(req.body.department))) {
          Departments.findByIdAndUpdate(req.body.department,
            { $push: { specialties: updated.id } }).exec()

          Departments.findByIdAndUpdate(updated.department,
            { $pull: { specialties: updated.id } }).exec()
        }

        return res.json({
          updated: !!updated,
          specialty: updated,
          check: (updated.department.equals(req.body.department)),
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })
}
