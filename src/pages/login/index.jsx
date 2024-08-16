import { useState, useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import responseMock from '../../mocks/response.api.json'
import './login.css'

// const URL = 'https//url-del-api.com/user'

function Login() {
  const [users, setUsers] = useState({})
  const [userIsLogin, setUserIsLogin] = useState(false)
  const form = useRef(null)

  useEffect(() => {
    setUsers(responseMock)
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(data => setUsers(data))
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()
    const formOfData = new FormData(form.current)
    const data = {
      userName: formOfData.get('username'),
      password: formOfData.get('userpass')
    }
    userIsValid(data)
  }

  const userIsValid = (loginData) => {
    const user = users.find((u) => u.usuario === loginData.userName && u.password === loginData.password)

    if (user) {
      const stringifiedLogin = JSON.stringify(true)
      localStorage.setItem('login', stringifiedLogin)
      setUserIsLogin(true)
    } else {
      console.log('Usuario o contraseña no validos')
    }
  }

  if (userIsLogin) {
    return <Navigate replace to='/' />
  }

  return (
    <>
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
