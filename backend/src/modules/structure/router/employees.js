import Employee from '../../../models/structure/employees'
import Image from '../../../models/images'

import verifyUser from '../../../middlewares/verifyUser'

export default (router) => {
  router.get('/admins', async (req, res) => {
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

  router.post('/teacher', verifyUser, async (req, res) => {
    Employee.create(req.body)
      .then((created) => {
        res.json({
          created: !!created,
          teacher: created,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.delete('/teacher', verifyUser, async (req, res) => {
    Employee.findByIdAndRemove(req.body.id)
      .then((deleted) => {
        res.json({
          deleted: !!deleted,
          teacher: deleted,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })

  router.put('/teacher', verifyUser, async (req, res) => {
    Employee.findByIdAndUpdate(req.body.id,
      {
        name: req.body.name,
        works: req.body.works,
        administration: req.body.administration,
        contacts: {
          phone: req.body.contacts.phone,
          email: req.body.contacts.email,
        },
        achievement: req.body.achievement,
        photo: req.body.photo,
      })
      .then((updated) => {
        res.json({
          updated: !!updated,
          teacher: updated,
        })
      })
      .catch((error) => {
        res.json({
          error,
        })
      })
  })
}
