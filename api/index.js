/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')

const app = express()
const PORT = 3000

const corsOptions = {
  origin: 'http://localhost:5173'
}
app.use(cors(corsOptions))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API working correctly')
})

routerApi(app)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
