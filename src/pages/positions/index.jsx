import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsPositions from '../../services/positions.service'
import './positions.css'

const service = new EndpointsPositions()

function Positions() {
  const [positions, setPositions] = useState([])
  
  useEffect(() => {
    const loadPositions = async () => {
      const response = await service.getPositions()
      setPositions(response.data)
    }
    loadPositions()
  }, [])

  const addPositions = (newPosition) => {
    setPositions([...positions, newPosition[0]])
  }

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
          <Formik
            initialValues={{
              nombre: '',
              id_gerencia: '',
              id_direccion: ''
            }}
            onSubmit={async (values, actions) => {
              try {
                const response = await service.createPosition(values)
                const newPosition = await service.getPositionById(response.data[0])
                addPositions(newPosition.data)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
              <Form onSubmit={handleSubmit}>
                <div className='input-group'>
                  <label htmlFor='nombre'>Nombre Cargo</label>
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
                  <label htmlFor='id_gerencia'>Gerencia</label>
                  <input
                    name='id_gerencia'
                    id='id_gerencia'
                    autoComplete='true'
                    type='text'
                    value={values.id_gerencia}
                    onChange={handleChange}
                  />
                </div>
                <div className='input-group'>
                  <label htmlFor='id_direccion'>Dirección</label>
                  <input
                    name='id_direccion'
                    id='id_direccion'
                    autoComplete='true'
                    type='text'
                    value={values.id_direccion}
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
