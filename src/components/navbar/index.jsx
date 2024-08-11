import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>Soft-ID</div>
      <ul className='menu'>
        <li className='menu-item'>
          Configuración
          <ul className='dropdown'>
            <li className='dropdown-item'> -Roles </li>
            <li className='dropdown-item'> -Funciones </li>
            <li className='dropdown-item'> -Aplicaciones </li>
            <li className='dropdown-item'> -Gerencias </li>
            <li className='dropdown-item'> -Direcciones </li>
            <li className='dropdown-item'> -Usuarios </li>
          </ul>
        </li>
        <li className='menu-item'>
          RRHH
          <ul className='dropdown'>
            <li className='dropdown-item'> -Empleados </li>
          </ul>
        </li>
        <li className='menu-item'>
          Reportes
          <ul className='dropdown'>
            <li className='dropdown-item'> -Generador de informes </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar