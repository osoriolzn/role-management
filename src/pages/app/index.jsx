import { useRoutes, Navigate, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import Departments from '../departments'
import Managers from '../managers'
import Positions from '../positions'
import RolesApp from '../roles-app'
import Users from '../users'
import NotFound from '../not-found'

const AppRoutes = () => {
  const userIsLogin = JSON.parse(localStorage.getItem('login'))
  
  let route = useRoutes([
    { path: '/', element: userIsLogin ? <Navigate replace to={'/home'} /> : <Navigate replace to={'/acceso'} /> },
    { path: '/home', element: userIsLogin ? <Home /> : <Navigate replace to={'/acceso'} /> },
    { path: '/acceso', element: userIsLogin ? <Navigate replace to={'/home'} /> : <Login /> },
    { path: '/direcciones', element: userIsLogin ? <Departments /> : <Login /> },
    { path: '/gerencias', element: userIsLogin ? <Managers /> : <Login /> },
    { path: '/cargos', element: userIsLogin ? <Positions /> : <Login /> },
    { path: '/roles-app', element: userIsLogin ? <RolesApp /> : <Login /> },
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
