import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsFunctions from '../../services/functions.service'
import './functions.css'

const service = new EndpointsFunctions()

function Functions() {
  const [funcs, setFunc] = useState([])
  
  useEffect(() => {
    const loadFunctions = async () => {
      const response = await service.getFunctions()
      setFunc(response.data)
    }
    loadFunctions()
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='functions-img'
              src='src/assets/img/roles.webp'
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
            onSubmit={async (values, actions) => {
              try {
                await service.createFunction(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Nombre Función</label>
                <input
                  name='nombre'
                  id='nombre'
                  autoComplete='true'
                  type='text'
                  value={values.nombre}
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
                  value={values.estado}
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
                <th>Nombre Función</th>
                <th>F. Creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{funcs.map(func => (
              <tr key={func.id_funcion}>
                <td>{func.id_funcion}</td>
                <td>{func.nombre}</td>
                <td>{func.fecha_creacion}</td>
                <td>{func.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Functions
