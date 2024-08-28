import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import './departments.css'

const API_URL = 'http://localhost:3000/api/v1/direcciones'

function Departments() {
  const [departments, setDepartments] = useState([])
  const form = useRef(null)
  
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setDepartments(data))
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='departments-img'
              src='src/assets/img/roles.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <form ref={form}>
            <div className='input-group'>
              <label htmlFor='departments'>Nombre Dirección</label>
              <input
                name='departments'
                id='departments'
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
                <th>Nombre Dirección</th>
                <th>F. Creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{departments.map(department => (
              <tr key={department.id_department}>
                <td>{department.id_department}</td>
                <td>{department.nombre}</td>
                <td>{department.fecha_creacion}</td>
                <td>{department.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Departments
