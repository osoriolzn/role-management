/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class ManagersServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM gerencias'
      
      const [data] = await sequelize.query(query)
      return data
    }
  }
  
  module.exports = ManagersServices
