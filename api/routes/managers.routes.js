/* eslint-disable no-undef */
const { Router } = require('express')
const ManagersServices = require('../services/managers.service')

const router = Router()
const service = new ManagersServices()

router.get('/', async (req, res) => {
  const managers = await service.find()
  res.status(200).json(managers)
})

module.exports = router
