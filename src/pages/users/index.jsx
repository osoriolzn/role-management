import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import EndpointsUsers from '../../services/users.service'
import './user.css'

const service = new EndpointsUsers()

function Users() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const loadUsers = async () => {
      const response = await service.getUsers()
      setUsers(response.data)
    }
    loadUsers()
  }, [])

  return (
    <>
      <Navbar />
      <Layout
        image={
          <figure>
            <img
              className='user-img'
              src='src/assets/img/users.webp'
              alt='logo de la página'
            />
          </figure>
        }
        form={
          <Formik
            initialValues={{
              usuario: '',
              contrasena: '',
              estado: '',
              id_app_rol: '',
              id_empleado: ''
            }}
            onSubmit={async (values, actions) => {
              try {
                await service.createUser(values)
                actions.resetForm()
              } catch (error) {
                console.log(error)
              }
            }}
          >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <div className='input-group'>
                <label htmlFor='usuario'>Usuario</label>
                <input
                  name='usuario'
                  id='usuario'
                  autoComplete='true'
                  type='text'
                  value={values.usuario}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='contrasena'>Contraseña</label>
                <input
                  name='contrasena'
                  id='contrasena'
                  autoComplete='true'
                  type='password'
                  value={values.contrasena}
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
              <div className='input-group'>
                <label htmlFor='id_app_rol'>App Rol Asociado</label>
                <input
                  name='id_app_rol'
                  id='id_app_rol'
                  autoComplete='true'
                  type='text'
                  value={values.id_app_rol}
                  onChange={handleChange}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='id_empleado'>Empleado Asociado</label>
                <input
                  name='id_empleado'
                  id='id_empleado'
                  autoComplete='true'
                  type='text'
                  value={values.id_empleado}
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
                <th>Usuario</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{users.map(user => (
              <tr key={user.id_usuario}>
                <td>{user.id_usuario}</td>
                <td>{user.usuario}</td>
                <td>{user.estado}</td>
              </tr>
            ))}</tbody>
          </table>
        }
      />
    </>
  )
}

export default Users
