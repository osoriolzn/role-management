/* eslint-disable no-undef */
const { Router } = require('express')
const AppsServices = require('../services/apps.service')

const router = Router()
const service = new AppsServices()

router.get('/', async (req, res) => {
  const apps = await service.find()
  res.status(200).json(apps)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newApp = await service.create(body)
  res.status(201).json(newApp)
})

module.exports = router
