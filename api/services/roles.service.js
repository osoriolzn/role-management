/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class RolesServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM roles'
      
      const [data] = await sequelize.query(query)
      return data
    }
    
    async create(data) {
      const { nombre, id_aplicacion } = data
      const estado = '1'
      
      const queryRes = await sequelize.query(
        'INSERT INTO roles (nombre, estado, id_aplicacion) VALUES(:nombre, :estado, :id_aplicacion)',
        {
          replacements: { nombre, estado, id_aplicacion}
        }
      )
      return queryRes
    }
  }
  
  module.exports = RolesServices
