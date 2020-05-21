import Employee from '../../../models/structure/employees'
import Image from '../../../models/images'

export default (router) => {
  // router.post('/teacher/create', async (req, res) => {
  //   Employee.create(req.body)
  //     .then((created) => {
  //       res.json({
  //         created: !!created,
  //         teacher: created,
  //       })
  //     })
  //     .catch((error) => {
  //       res.json({
  //         error,
  //       })
  //     })
  // })

  router.post('/admins', async (req, res) => {
    Employee.find({ administration: true })
      .populate({ path: 'photo', model: Image })
      .then((finded) => {
        res.json({
          finded: !!finded,
          teachers: finded,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })
}
