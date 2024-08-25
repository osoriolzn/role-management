/* eslint-disable no-undef */
const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5050,
    password: 'Zareth2015',
    database: 'role-management'
  })
  await client.connect()
  return client
}

module.exports = getConnection
