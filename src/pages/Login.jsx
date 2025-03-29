import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(username, password)
    } catch (error) {
      setErro('Usuário ou senha inválidos')
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src='./PRODUCT-manager-logo.png' />
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {erro && <p className="error-message">{erro}</p>}
        <button type="submit">Entrar</button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
            Não tem conta? <Link to="/register">Registrar</Link>
        </p>

      </form>
    </div>
  )
}

export default Login
