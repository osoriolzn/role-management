/* eslint-disable no-undef */
const { Sequelize } = require('sequelize')
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const connString = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(connString, {
  dialect: 'mysql',
  logging: true,
})

module.exports = sequelize