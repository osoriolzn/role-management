/* eslint-disable no-undef */
const { Router } = require('express')

const usersRouter = require('./users.routes')

function routerApi(app) {
    const router = Router()
    
    app.use('/api/v1', router)
    
    router.use('/users', usersRouter)
}

module.exports = routerApi
