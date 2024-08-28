/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class PositionsServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM cargos'
      
      const [data] = await sequelize.query(query)
      return data
    }
  }
  
  module.exports = PositionsServices
