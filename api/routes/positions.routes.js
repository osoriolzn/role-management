/* eslint-disable no-undef */
const { Router } = require('express')
const PositionsServices = require('../services/positions.service')

const router = Router()
const service = new PositionsServices()

router.get('/', async (req, res) => {
  const positions = await service.find()
  res.status(200).json(positions)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const position = await service.findOne(id)
  res.status(200).json(position)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newPosition = await service.create(body)
  res.status(201).json(newPosition)
})

module.exports = router
