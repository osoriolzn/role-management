/* eslint-disable no-undef */
const { Router } = require('express')
const ManagersServices = require('../services/managers.service')

const router = Router()
const service = new ManagersServices()

router.get('/', async (req, res) => {
  const managers = await service.find()
  res.status(200).json(managers)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const manager = await service.findOne(id)
  res.status(200).json(manager)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newManager = await service.create(body)
  res.status(201).json(newManager)
})

module.exports = router
