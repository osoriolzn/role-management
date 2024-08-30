import { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  const [userIsLogin, setUserIsLogin] = useState()

  const handleLogout = () => {
    const stringifiedLogin = JSON.stringify(false)
    localStorage.setItem('login', stringifiedLogin)
    logout()
  }

  const logout = () => {
    const isLogin = JSON.parse(localStorage.getItem('login'))
    setUserIsLogin(isLogin)
  }
  
  if (userIsLogin === false) {
    return <Navigate replace to='/acceso' />
  }
  return (
    <nav className='navbar'>
      <NavLink className='logo' to='/home'>
        Soft-ID
      </NavLink>
      <div className='container-menu'>
        <ul className='menu'>
          <li className='menu-item'>
            Configuración
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/apps'>
                  -Aplicaciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/cargos'>
                  -Cargos
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/direcciones'>
                  -Direcciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/funciones'>
                  -Funciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/funciones-rol'>
                  -Funciones por rol
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/gerencias'>
                  -Gerencias
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/roles'>
                  -Roles
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/roles-cargo'>
                  -Roles por cargo
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/roles-app'>
                  -Roles app Soft-ID
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/usuarios'>
                  -Usuarios Soft-ID
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='menu-item'>
            RRHH
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/empleados'>
                  -Empleados
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='menu-item'>
            Reportes
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/reportes'>
                  -Generador de informes
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button
        className='logout'
        onClick={handleLogout}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M9 12h12l-3 -3" />
          <path d="M18 15l3 -3" />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar