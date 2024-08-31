import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsManagers from '../../services/managers.service'
import './managers.css'

const service = new EndpointsManagers()

function Managers() {
  const [managers, setManagers] = useState([])
  
  useEffect(() => {
    const loadManagers = async () => {
      const response = await service.getManagers()
      setManagers(response.data)
    }
    loadManagers()
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='managers-img'
              src='src/assets/img/gerencia.webp'
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
                await service.createManager(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Nombre Gerencia</label>
                <input
                  name='nombre'
                  id='nombre'
                  autoComplete='true'
                  type='text'
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
