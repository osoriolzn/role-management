import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsEmployee from '../../services/employees.service'
import './employees.css'

const service = new EndpointsEmployee()

function Employees() {
  const [employees, setEmployees] = useState([])
  
  useEffect(() => {
    const loadEmployees = async () => {
      const response = await service.getEmployees()
      setEmployees(response.data)
    }
    loadEmployees()
  }, [])

  const addEmployees = (newEmployee) => {
    console.log(newEmployee)
    setEmployees([...employees, newEmployee[0]])
  }

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='employees-img'
              src='src/assets/img/users.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <Formik
            initialValues={{
              nombre1: '',
              nombre2: '',
              apellido1: '',
              apellido2: '',
              correo: '',
              estado: '',
              id_cargo: ''
            }}
            onSubmit={async (values, actions) => {
              try {
                const response = await service.createEmployees(values)
                const newEmployee = await service.getEmployeeById(response.data[0])
                addEmployees(newEmployee.data)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='nombre1'>Primer Nombre</label>
                <input
                  name='nombre1'
                  id='nombre1'
                  autoComplete='true'
                  type='text'
                  value={values.nombre1}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='nombre2'>Segundo Nombre</label>
                <input
                  name='nombre2'
                  id='nombre2'
                  autoComplete='true'
                  type='text'
                  value={values.nombre2}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='apellido1'>Primer Apellido</label>
                <input
                  name='apellido1'
                  id='apellido1'
                  autoComplete='true'
                  type='text'
                  value={values.apellido1}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='apellido2'>Segundo Apellido</label>
                <input
                  name='apellido2'
                  id='apellido2'
                  autoComplete='true'
                  type='text'
                  value={values.apellido2}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='correo'>Correo</label>
                <input
                  name='correo'
                  id='correo'
                  autoComplete='true'
                  type='email'
                  value={values.correo}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='id_cargo'>Cargo</label>
                <input
                  name='id_cargo'
                  id='id_cargo'
                  autoComplete='true'
                  type='text'
                  value={values.id_cargo}
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
                <th>Primer Nombre</th>
                <th>Segundo Nombre</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Correo</th>
                <th>F. Ingreso</th>
                <th>Estado</th>
                <th>Id Cargo</th>
              </tr>
            </thead>
            <tbody>{employees.map(employee => (
              <tr key={employee.id_empleado}>
                <td>{employee.id_empleado}</td>
                <td>{employee.nombre1}</td>
                <td>{employee.nombre2}</td>
                <td>{employee.apellido1}</td>
                <td>{employee.apellido2}</td>
                <td>{employee.correo}</td>
                <td>{employee.fecha_ingreso}</td>
                <td>{employee.estado}</td>
                <td>{employee.id_cargo}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Employees
