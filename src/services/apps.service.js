import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/apps'

class EndpointsApps {
  constructor() {}

  async getApps() {
    const response = await axios.get(API_URL)
    return response
  }

  async getAppById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response
  }

  async createApp(app) {
    const response = await axios.post(API_URL, app)
    return response
  }
}

export default EndpointsApps
