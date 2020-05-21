import Departments from '../../../models/structure/departments'

export default (router) => {
  // router.post('/department/create', async (req, res) => {
  //   Departments.create(req.body)
  //     .then((created) => {
  //       res.json({
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

  // router.post('/department', async (req, res) => {
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

  router.post('/departments', async (req, res) => {
    Departments.find()
      .populate('leader')
      .populate('specialties')
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
