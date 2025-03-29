import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    senha: '',
    role: 'ADMIN'
  })

  const [erro, setErro] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro(null)
    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erro ao registrar')
      }

      navigate('/login')
    } catch (error) {
      setErro('Erro ao registrar usuário')
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src="./PRODUCT-manager-logo.png" />
        <input
          type="text"
          placeholder="Usuário"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="ADMIN">ADMIN</option>
          <option value="USER">USER</option>
        </select>
        {erro && <p className="error-message">{erro}</p>}
        <button type="submit">Registrar</button>
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
