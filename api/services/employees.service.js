/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class EmployeesServices {
    constructor() {}
    
    async find() {
      const query = 'SELECT * FROM empleados'
      
      const [data] = await sequelize.query(query)
      return data
    }

    async findOne(id) {
      const query = `SELECT * FROM empleados WHERE id_empleado = ${id}`
      
      const [data] = await sequelize.query(query)
      return data
    }

    async create(data) {
      const { nombre1, nombre2, apellido1, apellido2, correo, id_cargo } = data
      const estado = '1'

      const queryRes = await sequelize.query(
        'INSERT INTO empleados (nombre1, nombre2, apellido1, apellido2, correo, estado, id_cargo) VALUES(:nombre1, :nombre2, :apellido1, :apellido2, :correo, :estado, :id_cargo)',
        {
          replacements: { nombre1, nombre2, apellido1, apellido2, correo, estado, id_cargo }
        }
      )
      return queryRes
    }
  }
  
  module.exports = EmployeesServices
