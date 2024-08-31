import { useRoutes, Navigate, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Applications from '../applications'
import Departments from '../departments'
import Employees from '../employees'
import Functions from '../functions'
import Managers from '../managers'
import Positions from '../positions'
import RolesApp from '../roles-app'
import Roles from '../roles'
import Users from '../users'
import NotFound from '../not-found'

const AppRoutes = () => {
  const userIsLogin = JSON.parse(localStorage.getItem('login'))
  
  let route = useRoutes([
    { path: '/', element: userIsLogin ? <Navigate replace to={'/home'} /> : <Navigate replace to={'/acceso'} /> },
    { path: '/home', element: userIsLogin ? <Home /> : <Navigate replace to={'/acceso'} /> },
    { path: '/acceso', element: userIsLogin ? <Navigate replace to={'/home'} /> : <Login /> },
    { path: '/apps', element: userIsLogin ? <Applications /> : <Login /> },
    { path: '/direcciones', element: userIsLogin ? <Departments /> : <Login /> },
    { path: '/empleados', element: userIsLogin ? <Employees /> : <Login /> },
    { path: '/funciones', element: userIsLogin ? <Functions /> : <Login /> },
    { path: '/gerencias', element: userIsLogin ? <Managers /> : <Login /> },
    { path: '/cargos', element: userIsLogin ? <Positions /> : <Login /> },
    { path: '/roles-app', element: userIsLogin ? <RolesApp /> : <Login /> },
    { path: '/roles', element: userIsLogin ? <Roles /> : <Login /> },
    { path: '/usuarios', element: userIsLogin ? <Users /> : <Login /> },
    { path: '/*', element: <NotFound /> },
  ])
  return route
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
