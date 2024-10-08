/* eslint-disable no-undef */
const { Router } = require('express')
const DepartmentsServices = require('../services/departments.service')

const router = Router()
const service = new DepartmentsServices()

router.get('/', async (req, res) => {
  const departments = await service.find()
  res.status(200).json(departments)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const department = await service.findOne(id)
  res.status(200).json(department)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newDepartment = await service.create(body)
  res.status(201).json(newDepartment)
})

module.exports = router
