/* eslint-disable no-undef */
const { Router } = require('express')
const DepartmentsServices = require('../services/departments.service')

const router = Router()
const service = new DepartmentsServices()

router.get('/', async (req, res) => {
  const departments = await service.find()
  res.status(200).json(departments)
})

module.exports = router
