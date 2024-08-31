import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsApps from '../../services/apps.service'
import './apps.css'

const service = new EndpointsApps()

function Apps() {
  const [apps, setApps] = useState([])
  
  useEffect(() => {
    const loadApps = async () => {
      const response = await service.getApps()
      setApps(response.data)
    }
    loadApps()
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='applications-img'
              src='src/assets/img/app.webp'
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
                await service.createApp(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit,values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Nombre App</label>
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
                {isSubmitting ? 'Guardando...' :'GUARDAR'}
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
                <th>Nombre App</th>
                <th>F. Creación</th>
              </tr>
            </thead>
            <tbody>{apps.map(app => (
              <tr key={app.id_aplicacion}>
                <td>{app.id_aplicacion}</td>
                <td>{app.nombre}</td>
                <td>{app.fecha_creacion}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Apps
