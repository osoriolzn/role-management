import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsRolesApp from '../../services/roles.app.service'
import './roles.app.css'

const API_URL = 'http://localhost:3000/api/v1/roles-app'
const service = new EndpointsRolesApp()

function RolesApp() {
  const [rolesApp, setRolesApp] = useState([])
  
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
          <Formik
            initialValues={{
              nombre: '',
              estado: ''
            }}
            onSubmit={async (values) => {
              try {
                await service.createRolApp(values)
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Roles por App</label>
                <input
                  name='nombre'
                  id='nombre'
                  autoComplete='true'
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='estado'>Estado</label>
                <input
                  name='estado'
                  id='estado'
                  autoComplete='true'
                  type='text'
                  onChange={handleChange}
                />
              </div>
              <button
                className='access'
                type='submit'
              >
                GUARDAR
              </button>
            </Form>
          )}
          </Formik>
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
