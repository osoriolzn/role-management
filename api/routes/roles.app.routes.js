/* eslint-disable no-undef */
const { Router } = require('express')
const AppRolesServices = require('../services/roles.app.service')

const router = Router()
const service = new AppRolesServices()

router.get('/', async (req, res) => {
  const users = await service.find()
  res.status(200).json(users)
})

module.exports = router
