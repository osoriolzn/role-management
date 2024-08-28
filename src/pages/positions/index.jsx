import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import './positions.css'

const API_URL = 'http://localhost:3000/api/v1/cargos'

function Positions() {
  const [positions, setPositions] = useState([])
  const form = useRef(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPositions(data))
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='cargo-img'
              src='src/assets/img/roles.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <form ref={form}>
            <div className='input-group'>
              <label htmlFor='cargo'>Nombre del Cargo</label>
              <input
                name='cargo'
                id='cargo'
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
            <div className='input-group'>
              <label htmlFor='manager-id'>Gerencia</label>
              <input
                name='manager-id'
                id='manager-id'
                autoComplete='true'
                type='text'
              />
            </div>
            <div className='input-group'>
              <label htmlFor='department-id'>Dirección</label>
              <input
                name='department-id'
                id='department-id'
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
                <th>Nombre Cargo</th>
                <th>F. Creación</th>
                <th>Estado</th>
                <th>Gerencia</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>{positions.map(position => (
              <tr key={position.id_cargo}>
                <td>{position.id_cargo}</td>
                <td>{position.nombre}</td>
                <td>{position.fecha_creacion}</td>
                <td>{position.estado}</td>
                <td>{position.id_gerencia}</td>
                <td>{position.id_direccion}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Positions
