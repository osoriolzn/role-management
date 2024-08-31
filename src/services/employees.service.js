import axios from "axios"

const API_URL = "http://localhost:3000/api/v1/empleados"

class EndpointsEmployees {
  constructor() {}

  async getEmployees() {
    const response = await axios.get(API_URL)
    return response
  }

  async getEmployeeById(id) {
    const response = await axios.get(`${API_URL}/${id}`)
    return response
  }

  async createEmployees(employee) {
    const response = await axios.post(API_URL, employee)
    return response
  }
}

export default EndpointsEmployees
