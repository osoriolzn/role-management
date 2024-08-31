import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/roles'

class EndpointsRoles {
  constructor() {}

  async getRoles() {
    const response = await axios.get(API_URL)
    return response
  }

  async createRol(rol) {
    const response = await axios.post(API_URL, rol)
    return response
  }
}

export default EndpointsRoles