import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import './user.css'

const API_URL = 'http://localhost:3000/api/v1/users'

function Users() {
  const [users, setUsers] = useState([])
  const form = useRef(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='user-img'
              src='src/assets/img/users.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <form ref={form}>
            <div className='input-group'>
              <label htmlFor='username'>Usuario</label>
              <input
                name='username'
                id='username'
                autoComplete='true'
                type='text'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='userpass'>Contraseña</label>
              <input
                name='userpass'
                id='userpass'
                autoComplete='true'
                type='password'
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
            <div className='input-group'>
              <label htmlFor='app-role'>App Rol Asociado</label>
              <input
                name='app-role'
                id='app-role'
                autoComplete='true'
                type='text'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='employee'>Empleado Asociado</label>
              <input
                name='employee'
                id='employee'
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
                <th>Usuario</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{users.map(user => (
              <tr key={user.id_usuario}>
                <td>{user.id_usuario}</td>
                <td>{user.usuario}</td>
                <td>{user.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Users
