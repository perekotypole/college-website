import Departments from '../../../models/structure/departments'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.post('/department', verifyUser, async (req, res) => {
    Departments.create(req.body)
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

  router.delete('/department', verifyUser, async (req, res) => {
    Departments.findByIdAndRemove(req.body.id)
      .then((deleted) => {
        res.json({
          deleted: !!deleted,
          department: deleted,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.put('/department', verifyUser, async (req, res) => {
    Departments.findByIdAndUpdate(req.body.id,
      {
        name: req.body.name,
        description: req.body.description,
        leader: req.body.leader,
        specialties: req.body.members,
      })
      .then((updated) => {
        res.json({
          updated: !!updated,
          department: updated,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
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
