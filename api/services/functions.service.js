/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

class FunctionsServices {
  constructor() {}

  async find() {
    const query = 'SELECT * FROM funciones'

    const [data] = await sequelize.query(query)
    return data
  }

  async findOne(id) {
    const query = `SELECT * FROM funciones WHERE id_funcion = ${id}`

    const [data] = await sequelize.query(query)
    return data
  }

  async create(data) {
    const { nombre } = data
    const estado = '1'

    const queryRes = await sequelize.query(
      'INSERT INTO funciones (nombre, estado) VALUES(:nombre, :estado)',
      {
        replacements: { nombre, estado },
      }
    )
    return queryRes
  }
}

module.exports = FunctionsServices
