/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class PositionsServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM cargos'
      
      const [data] = await sequelize.query(query)
      return data
    }

    async create(data) {
      const { nombre,  estado, id_gerencia, id_direccion } = data
      
      const queryRes = await sequelize.query(
        'INSERT INTO cargos (nombre,  estado, id_gerencia, id_direccion) VALUES(:nombre, :estado, :id_gerencia, :id_direccion)',
        {
          replacements: { nombre,  estado, id_gerencia, id_direccion }
        }
      )
      return queryRes
    }
  }
  
  module.exports = PositionsServices
