/* eslint-disable no-undef */
const { Router } = require('express')
const DepartmentsServices = require('../services/departments.service')

const router = Router()
const service = new DepartmentsServices()

router.get('/', async (req, res) => {
  const departments = await service.find()
  res.status(200).json(departments)
})

router.post('/', async (req, res) => {
  const body = req.body
  const departments = await service.create(body)
  res.status(201).json(departments)
})

module.exports = router
