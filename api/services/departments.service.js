/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class DepartmentsServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM direcciones'
      
      const [data] = await sequelize.query(query)
      return data
    }

    async create(data) {
      const { nombre } = data
      const estado = '1'
      
      const queryRes = await sequelize.query(
        'INSERT INTO direcciones (nombre, estado) VALUES(:nombre, :estado)',
        {
          replacements: { nombre, estado }
        }
      )
      return queryRes
    }
  }
  
  module.exports = DepartmentsServices
