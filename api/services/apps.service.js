/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

class AppsServices {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM aplicaciones'

    const [data] = await sequelize.query(query)
    return data
  }

  async findOne(id) {
    const query = `SELECT * FROM aplicaciones WHERE id_aplicacion = ${id}`

    const [data] = await sequelize.query(query)
    return data
  }

  async create(data) {
    const { nombre } = data

    const queryRes = await sequelize.query(
      'INSERT INTO aplicaciones (nombre) VALUES(:nombre)',
      {
        replacements: { nombre },
      }
    )
    return queryRes
  }
}

module.exports = AppsServices
