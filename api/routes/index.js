/* eslint-disable no-undef */
const { Router } = require('express')

const PositionsRouter = require('./positions.routes')
const rolesAppRouter = require('./roles.app.routes')
const usersRouter = require('./users.routes')

function routerApi(app) {
    const router = Router()
    
    app.use('/api/v1', router)
    
    router.use('/cargos', PositionsRouter)
    router.use('/roles-app', rolesAppRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi
