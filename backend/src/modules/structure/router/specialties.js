import Departments from '../../../models/structure/departments'
import Specialties from '../../../models/structure/specialties'

export default (router) => {
  // router.post('/specialty/create', async (req, res) => {
  //   Specialties.create(req.body)
  //     .then((created) => {
  //       Departments.findOneAndUpdate({ _id: created.department },
  //         { $push: { specialties: created.id } })

  //       return res.json({
  //         created: !!created,
  //         department: created,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })

  router.post('/specialties', async (req, res) => {
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
}
