import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/gerencias'

class EndpointsManagers {
  constructor() {}

  async getManagers() {
    const response = await axios.get(API_URL)
    return response
  }

  async createManager(manager) {
    const response = await axios.post(API_URL, manager)
    return response
  }
}

export default EndpointsManagers
