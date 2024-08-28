/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class DepartmentsServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM direcciones'
      
      const [data] = await sequelize.query(query)
      return data
    }
  }
  
  module.exports = DepartmentsServices
