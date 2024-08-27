/* eslint-disable no-undef */
const sequelize = require('../libs/sequelize')

  class UsersServices {
    constructor() {}
    
    async create(data) {
      const newUser = {
        ...data
      }
      
      this.users.push(newUser)
      return newUser
    }
  
    async find() {
      const query = 'SELECT * FROM app_usuarios'
      
      const [data] = await sequelize.query(query)
      return data
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
