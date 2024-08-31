import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/cargos'

class EndpointsPositions {
  constructor() {}

  async getPositions() {
    const response = await axios.get(API_URL)
    return response
  }

  async getPositionById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response
  }

  async createPosition(position) {
    const response = await axios.post(API_URL, position)
    return response
  }
}

export default EndpointsPositions