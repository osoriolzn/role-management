import { useRoutes, Navigate, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import Login from '../login'
import NotFound from '../not-found'

const AppRoutes = () => {
  let route = useRoutes([
    { path: '/', element: <Navigate to='/acceso' replace /> },
    { path: '/home', element: <Home /> },
    { path: '/acceso', element: <Login /> },
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
