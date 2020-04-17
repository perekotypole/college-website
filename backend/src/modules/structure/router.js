import { Router } from 'express'

import Departments from '../../models/departments'
import Commission from '../../models/commissions'
import Employee from '../../models/employees'
import Specialties from '../../models/specialties'

const router = Router()

router.post('/department/create', async (req, res) => {
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

router.post('/department', async (req, res) => {
  Departments.findById(req.body.id)
    .populate('leader')
    .populate('specialties')
    .then((finded) => {
      res.json({
        finded: !!finded,
        department: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

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

router.post('/commission/create', async (req, res) => {
  Commission.create(req.body)
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

router.post('/commission', async (req, res) => {
  Commission.findById(req.body.id)
    .populate('leader')
    .populate({ path: 'members', model: Employee })
    .then((finded) => {
      res.json({
        finded: !!finded,
        commission: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/commissions', async (req, res) => {
  Commission.find()
    .populate('leader')
    .populate({ path: 'members', model: Employee })
    .then((finded) => {
      res.json({
        finded: !!finded,
        commissions: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/teacher/create', async (req, res) => {
  Employee.create(req.body)
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

router.post('/teacher', async (req, res) => {
  Employee.findById(req.body.id)
    .populate('commission', 'name')
    .then((finded) => {
      res.json({
        finded: !!finded,
        teacher: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/teachers', async (req, res) => {
  Employee.find()
    .populate('commission', 'name')
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

router.post('/specialty/create', async (req, res) => {
  Specialties.create(req.body)
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

router.post('/specialty', async (req, res) => {
  Specialties.findById(req.body.id)
    .populate('department', 'name')
    .then((finded) => {
      res.json({
        finded: !!finded,
        specialty: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

router.post('/specialties', async (req, res) => {
  Specialties.find()
    .populate('department', 'name')
    .then((finded) => {
      res.json({
        finded: !!finded,
        specialties: finded,
      })
    })
    .catch((error) => {
      res.json({
        error,
      })
    })
})

export default router
