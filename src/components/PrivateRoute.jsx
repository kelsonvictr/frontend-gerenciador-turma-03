import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

// Este componente garante que apenas usuários autenticados acessem determinadas rotas.
// Se não estiver logado, o usuário é redirecionado automaticamente para a página de login.

const PrivateRoute = ({ children }) => {
  const { usuario } = useContext(AuthContext) // Acessa o usuário atual através do Context

  // Se o usuário estiver autenticado (token válido), mostra o conteúdo da rota (children).
  // Caso contrário, redireciona para a tela de login.
  return usuario ? children : <Navigate to="/login" />
}

export default PrivateRoute
