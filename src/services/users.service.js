import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/users"

class EndpointsUsers {
  constructor() {}

  async getUsers() {
    const response = await axios.get(API_URL)
    return response
  }

  async createUser(user) {
    const response = await axios.post(API_URL, user)
    return response
  }
}

export default EndpointsUsers
