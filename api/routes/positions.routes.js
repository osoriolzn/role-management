/* eslint-disable no-undef */
const { Router } = require('express')
const PositionsServices = require('../services/positions.service')

const router = Router()
const service = new PositionsServices()

router.get('/', async (req, res) => {
  const positions = await service.find()
  res.status(200).json(positions)
})

module.exports = router
