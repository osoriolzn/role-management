/* eslint-disable no-undef */
const { Router } = require('express')
const PositionsServices = require('../services/positions.service')

const router = Router()
const service = new PositionsServices()

router.get('/', async (req, res) => {
  const users = await service.find()
  res.status(200).json(users)
})

module.exports = router
