/* eslint-disable no-undef */
const { Router } = require('express')
const RolesAppsServices = require('../services/roles.app.service')

const router = Router()
const service = new RolesAppsServices()

router.get('/', async (req, res) => {
  const rolApps = await service.find()
  res.status(200).json(rolApps)
})

module.exports = router
