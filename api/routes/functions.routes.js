/* eslint-disable no-undef */
const { Router } = require('express')
const FunctionsServices = require('../services/functions.service')

const router = Router()
const service = new FunctionsServices()

router.get('/', async (req, res) => {
  const functions = await service.find()
  res.status(200).json(functions)
})

// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const func = await service.findOne(id)
//   res.status(200).json(func)
// })

router.post('/', async (req, res) => {
  const body = req.body
  const newApp = await service.create(body)
  res.status(201).json(newApp)
})

module.exports = router
