/* eslint-disable no-undef */
const { Router } = require('express')

const AppsRouter = require('./apps.routes')
const DepartmentsRouter = require('./departments.routes')
const FunctionsRouter = require('./functions.routes')
const ManagersRouter = require('./managers.routes')
const PositionsRouter = require('./positions.routes')
const rolesAppsRouter = require('./roles.app.routes')
const rolesRouter = require('./roles.routes')
const usersRouter = require('./users.routes')

function routerApi(app) {
    const router = Router()
    
    app.use('/api/v1', router)
    
    router.use('/apps', AppsRouter)
    router.use('/direcciones', DepartmentsRouter)
    router.use('/funciones', FunctionsRouter)
    router.use('/gerencias', ManagersRouter)
    router.use('/cargos', PositionsRouter)
    router.use('/roles-app', rolesAppsRouter)
    router.use('/roles', rolesRouter)
    router.use('/users', usersRouter)
}

module.exports = routerApi
