import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import './managers.css'

const API_URL = 'http://localhost:3000/api/v1/gerencias'

function Managers() {
  const [managers, setManagers] = useState([])
  const form = useRef(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setManagers(data))
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='managers-img'
              src='src/assets/img/roles.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <form ref={form}>
            <div className='input-group'>
              <label htmlFor='managers'>Nombre Gerencia</label>
              <input
                name='managers'
                id='managers'
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
                <th>Nombre Gerencia</th>
                <th>F. Creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{managers.map(manager => (
              <tr key={manager.id_gerencia}>
                <td>{manager.id_gerencia}</td>
                <td>{manager.nombre}</td>
                <td>{manager.fecha_creacion}</td>
                <td>{manager.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Managers
