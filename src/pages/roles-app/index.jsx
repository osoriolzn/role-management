import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import './roles.app.css'

const API_URL = 'http://localhost:3000/api/v1/roles-app'

function RolesApp() {
  const [rolesApp, setRolesApp] = useState([])
  const form = useRef(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setRolesApp(data))
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='rolapp-img'
              src='src/assets/img/users.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <form ref={form}>
            <div className='input-group'>
              <label htmlFor='approl'>Roles por App</label>
              <input
                name='approl'
                id='approl'
                autoComplete='true'
                type='text'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='status'>Estado</label>
              <input
                name='status'
                id='status'
                autoComplete='true'
                type='text'
              />
            </div>
            <button className='access'>GUARDAR</button>
          </form>
        }
        data={
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Roles por App</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{rolesApp.map(rol => (
              <tr key={rol.id_app_rol}>
                <td>{rol.id_app_rol}</td>
                <td>{rol.nombre}</td>
                <td>{rol.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default RolesApp
