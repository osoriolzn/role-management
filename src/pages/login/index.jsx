import { useState, useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import	{ Toaster, toast } from 'sonner'
// import responseMock from '../../mocks/response.api.json'
import './login.css'

const API_URL = 'http://localhost:3000/api/v1/users'

function Login() {
  const [users, setUsers] = useState({})
  const [userIsLogin, setUserIsLogin] = useState(false)
  const form = useRef(null)
  
  useEffect(() => {
    // setUsers(responseMock)
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()
    
    const formOfData = new FormData(form.current)
    const data = {
      userName: formOfData.get('username'),
      password: formOfData.get('userpass')
    }

    if (data.userName.length < 1) {
      toast.info('Debe ingresar un usuario')
      return
    } else if (data.password.length < 1) {
      toast.info('Debe ingresar una contraseña')
      return
    }

    userIsValid(data)
  }

  const userIsValid = (loginData) => {
    const user = users.find((u) => u.usuario === loginData.userName && u.contrasena === loginData.password)

    if (user) {
      const stringifiedLogin = JSON.stringify(true)
      localStorage.setItem('login', stringifiedLogin)
      setUserIsLogin(true)
    } else {
      toast.error('Usuario o contraseña no validos')
      return
    }
  }

  if (userIsLogin) {
    return <Navigate replace to='/' />
  }

  return (
    <>
      <Toaster className='toast' position='top-right' expand={true} />
      <img className='background-image' src='src/assets/img/login.webp' alt='Imagen de fondo'/>
      <div className='container'>
        <form ref={form}>
          <div className='input-group'>
            <label htmlFor='username'>Usuario</label>
            <input
              name='username'
              id='username'
              autoComplete='true'
              type='text'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='userpass'>Contraseña</label>
            <input
              name='userpass'
              id='userpass'
              autoComplete='true'
              type='password'
            />
          </div>
          <button
            className='access'
            onClick={handleLogin}
          >
            ACCEDER
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
