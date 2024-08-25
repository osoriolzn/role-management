/* eslint-disable no-undef */
const mockUsers = [
    {
      id: '1',
      usuario: '159753',
      contrasena: 'test',
      estado: '1',
      id_app_rol: 1,
      id_empleado: 3
    },
    {
      id: '2',
      usuario: '456852',
      contrasena: 'test',
      estado: '1',
      id_app_rol: 2,
      id_empleado: 2
    }
  ]
  
  class UsersServices {
    constructor() {
      this.users = []
      this.generate()
    }
  
    generate() {
      this.users = mockUsers
    }
  
    async create(data) {
      const newUser = {
        ...data
      }
  
      this.users.push(newUser)
      return newUser
    }
  
    async find() {
      return this.users
    }
  
    async findOne(id) {
      return this.users.find(item => item.id === id)
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
