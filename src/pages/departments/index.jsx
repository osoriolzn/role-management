import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsDepartments from '../../services/departments.service'
import './departments.css'

const service = new EndpointsDepartments()

function Departments() {
  const [departments, setDepartments] = useState([])
  
  useEffect(() => {
    const loadDepartments = async () => {
      const response = await service.getDepartments()
      setDepartments(response.data)
    }
    loadDepartments()
  }, [])

  const addDepartments = (newDepartment) => {
    setDepartments([...departments, newDepartment[0]])
  }

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='departments-img'
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
                const response = await service.createDepartment(values)
                const newDepartment = await service.getDepartmentById(response.data[0])
                addDepartments(newDepartment.data)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit,values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre'>Nombre Dirección</label>
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
                <th>Nombre Dirección</th>
                <th>F. Creación</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{departments.map(department => (
              <tr key={department.id_direccion}>
                <td>{department.id_direccion}</td>
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
