/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class RolesAppServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM app_roles'
      
      const [data] = await sequelize.query(query)
      return data
    }
  }
  
  module.exports = RolesAppServices
