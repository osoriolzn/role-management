/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

class RolesAppServices {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM app_roles'

    const [data] = await sequelize.query(query)
    return data
  }

  async findOne(id) {
    const query = `SELECT * FROM app_roles WHERE id_app_rol = ${id}`

    const [data] = await sequelize.query(query)
    return data
  }

  async create(data) {
    const { nombre } = data
    const estado = '1'

    const queryRes = await sequelize.query(
      'INSERT INTO app_roles (nombre, estado) VALUES(:nombre, :estado)',
      {
        replacements: { nombre, estado },
      }
    )
    return queryRes
  }
}

module.exports = RolesAppServices
