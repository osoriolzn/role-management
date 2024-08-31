import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsRolesApp from '../../services/roles.app.service'
import './roles.app.css'

const service = new EndpointsRolesApp()

function RolesApp() {
  const [rolesApp, setRolesApp] = useState([])
  
  useEffect(() => {
    const loadRolesApp = async () => {
      const response = await service.getRolesApp()
      setRolesApp(response.data)
    }
    loadRolesApp()
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
              nombre: ''
            }}
            onSubmit={async (values, actions) => {
              try {
                await service.createRolApp(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Roles App</label>
                <input
                  name='nombre'
                  id='nombre'
                  autoComplete='true'
                  type="text"
                  value={values.nombre}
                  onChange={handleChange}
                />
              </div>
              <button
                className='access'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Guardando...' : 'GUARDAR'}
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
