// O Context API permite compartilhar dados entre componentes sem precisar passar props manualmente
// Isso evita o "prop drilling" — passar props de pai para filho até chegar onde precisa.

import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

// 1. Criamos o Context: uma "caixa global" para guardar e compartilhar informações (como o token e o usuário logado)
export const AuthContext = createContext()

// 2. Criamos o Provider: componente que envolve a aplicação e fornece os dados do Context para todos os filhos
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token')) // Pega token do localStorage ao carregar
  const [usuario, setUsuario] = useState(null) // Estado para armazenar dados do usuário logado
  const navigate = useNavigate() // Para redirecionar de forma programática

  // 3. Quando o token mudar, decodifica o token e define o usuário logado
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token) // Decodifica o token JWT para obter os dados do usuário
        setUsuario(decoded)
      } catch (err) {
        console.error("Token inválido", err)
        logout() // Se o token for inválido, faz logout automático
      }
    }
  }, [token])

  // Função para fazer login e armazenar o token
  const login = async (username, senha) => {
    try {
      const response = await fetch('https://gp-prof-api.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, senha })
      })

      if (!response.ok) throw new Error('Usuário ou senha inválidos')

      const data = await response.json()
      const novoToken = data.token

      localStorage.setItem('token', novoToken) // Salva o token no navegador
      setToken(novoToken)
      navigate('/') // Redireciona para a página inicial
    } catch (error) {
      throw error // Para o componente de login tratar
    }
  }

  // Função de logout: limpa o token e o usuário, e redireciona para login
  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUsuario(null)
    navigate('/login')
  }

  // 4. O Provider torna o token, usuário e funções disponíveis para toda a aplicação
  return (
    <AuthContext.Provider value={{ token, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
