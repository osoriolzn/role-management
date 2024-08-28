import axios from 'axios'

class EndpointsRolesApp {
  constructor() {}

  async createRolApp(rolApp) {
    const response = await axios.post('http://localhost:3000/api/v1/roles-app', rolApp)
    return response
  }
}

export default EndpointsRolesApp