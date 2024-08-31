/* eslint-disable no-undef */
const { Router } = require('express')
const RolesAppsServices = require('../services/roles.app.service')

const router = Router()
const service = new RolesAppsServices()

router.get('/', async (req, res) => {
  const rolApps = await service.find()
  res.status(200).json(rolApps)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const rolApp = await service.findOne(id)
  res.status(200).json(rolApp)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newRolApp = await service.create(body)
  res.status(201).json(newRolApp)
})

module.exports = router
