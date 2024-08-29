/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class ManagersServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM gerencias'
      
      const [data] = await sequelize.query(query)
      return data
    }

    async create(data) {
      const { nombre, estado } = data
      
      const queryRes = await sequelize.query(
        'INSERT INTO app_roles(nombre, estado) VALUES(:nombre, :estado)',
        {
          replacements: { nombre, estado }
        }
      )
      return queryRes
    }
  }
  
  module.exports = ManagersServices
