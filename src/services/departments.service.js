import axios from 'axios'

const API_URL = 'http://localhost:3000/api/v1/direcciones'

class EndpointsDepartments {
    constructor() {}
  
    async getDepartments() {
      const response = await axios.get(API_URL)
      return response
    }
  
    async createDepartment(department) {
      const response = await axios.post(API_URL, department)
      return response
    }
  }
  
  export default EndpointsDepartments
