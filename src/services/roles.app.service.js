import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/roles-app'

class EndpointsRolesApp {
  constructor() {}

  async getRolesApp() {
    const response = await axios.get(API_URL)
    return response
  }

  async createRolApp(rolApp) {
    const response = await axios.post(API_URL, rolApp)
    return response
  }
}

export default EndpointsRolesApp