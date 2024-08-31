import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsRoles from '../../services/roles.service'
import './roles.css'

const service = new EndpointsRoles()

function RolesApp() {
  const [roles, setRoles] = useState([])
  
  useEffect(() => {
    const loadRoles = async () => {
      const response = await service.getRoles()
      setRoles(response.data)
    }
    loadRoles()
  }, [])
  
  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='roles-img'
              src='src/assets/img/users.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <Formik
            initialValues={{
              nombre: '',
              id_aplicacion: ''
            }}
            onSubmit={async (values, actions) => {
              try {
                await service.createRol(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Nombre Rol</label>
                <input
                  name='nombre'
                  id='nombre'
                  autoComplete='true'
                  type="text"
                  value={values.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='id_aplicacion'>Id App</label>
                <input
                  name='id_aplicacion'
                  id='id_aplicacion'
                  autoComplete='true'
                  type='text'
                  value={values.id_aplicacion}
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
                <th>Nombre Rol</th>
                <th>estado</th>
                <th>Id App</th>
                <th>F. Creación</th>
              </tr>
            </thead>
            <tbody>{roles.map(rol => (
              <tr key={rol.id_rol}>
                <td>{rol.id_rol}</td>
                <td>{rol.nombre}</td>
                <td>{rol.estado}</td>
                <td>{rol.id_aplicacion}</td>
                <td>{rol.fecha_creacion}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default RolesApp
