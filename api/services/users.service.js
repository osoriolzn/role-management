/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class UsersServices {
    constructor() {}
  
    async find() {
      const query = 'SELECT * FROM app_usuarios'
      
      const [data] = await sequelize.query(query)
      return data
    }
  
    async findOne(id) {
      return this.users.find(item => item.id === id)
    }

    async create(data) {
      const { usuario, contrasena, id_app_rol, id_empleado } = data
      const estado = '1'
      
      const queryRes = await sequelize.query(
        'INSERT INTO app_usuarios (usuario, contrasena, estado, id_app_rol, id_empleado) VALUES(:usuario, :contrasena, :estado, :id_app_rol, :id_empleado)',
        {
          replacements: { usuario, contrasena, estado, id_app_rol, id_empleado }
        }
      )
      return queryRes
    }
  
    async update(id, changes) {
      const index = this.users.findIndex(item => item.id === id)
  
      if (index === -1) {
        throw new Error('User not found')
      }
  
      const user = this.users[index]
      this.users[index] = {
        ...user,
        ...changes
      }
      return this.users[index]
    }
  
    async delete(id) {
      const index = this.users.findIndex(item => item.id === id)
  
      if (index === -1) {
        throw new Error('User not found')
      }
      
      const user = this.users[index]
      this.users.splice(index, 1)
      return {
        message: 'User delete',
        user
      }
    }
  }
  
  module.exports = UsersServices
