/* eslint-disable no-undef */
const { Router } = require('express')
const RolesAppsServices = require('../services/roles.app.service')

const router = Router()
const service = new RolesAppsServices()

router.get('/', async (req, res) => {
  const rolApps = await service.find()
  res.status(200).json(rolApps)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newRolApp = await service.create(body)

  res.status(201).json(newRolApp)
})

module.exports = router
