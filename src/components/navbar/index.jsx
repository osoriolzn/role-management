import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>Soft-ID</div>
      <div className='container-menu'>
        <ul className='menu'>
          <li className='menu-item'>
            Configuración
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/roles'>
                  -Roles
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/funciones'>
                  -Funciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/apps'>
                  -Aplicaciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/gerencia'>
                  -Gerencias
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/direccion'>
                  -Direcciones
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/usuario'>
                  -Usuarios
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='menu-item'>
            RRHH
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/empleado'>
                  -Empleados
                </NavLink>
              </li>
            </ul>
          </li>
          <li className='menu-item'>
            Reportes
            <ul className='dropdown'>
              <li className='dropdown-item'>
                <NavLink to='/reporte'>
                  -Generador de informes
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar