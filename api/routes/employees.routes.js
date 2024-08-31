/* eslint-disable no-undef */
const { Router } = require('express')
const EmployeesServices = require('../services/employees.service')

const router = Router()
const service = new EmployeesServices()

router.get('/', async (req, res) => {
  const employees = await service.find()
  res.status(200).json(employees)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const employee = await service.findOne(id)
  res.status(200).json(employee)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newEmployee = await service.create(body)
  res.status(201).json(newEmployee)
})

module.exports = router
