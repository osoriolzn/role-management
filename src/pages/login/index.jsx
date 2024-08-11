import { useState } from 'react'
import './login.css'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    // TODO: Lógica de Autenticación
    console.log('Usuario: ', userName)
    console.log('Password: ', password)
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <div className='input-group'>
          <label>Usuario</label>
          <input
            type='text'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className='input-group'>
          <label>Contraseña</label>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type='submit'>
          ACCEDER
        </button>
      </form>
    </div>
  )
}

export default Login
