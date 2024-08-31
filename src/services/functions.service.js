import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/funciones'

class EndpointsFunctions {
  constructor() {}

  async getFunctions() {
    const response = await axios.get(API_URL)
    return response
  }
  
  async getFunctionById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response
  }

  async createFunction(func) {
    const response = await axios.post(API_URL, func)
    return response
  }
}

export default EndpointsFunctions
