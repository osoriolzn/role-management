/* eslint-disable no-undef */
const { Router } = require('express')
const RolesServices = require('../services/roles.service')

const router = Router()
const service = new RolesServices()

router.get('/', async (req, res) => {
  const roles = await service.find()
  res.status(200).json(roles)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const rol = await service.findOne(id)
  res.status(200).json(rol)
})

router.post('/', async (req, res) => {
  const body = req.body
  const newRol = await service.create(body)
  res.status(201).json(newRol)
})

module.exports = router
