import React from 'react'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import { BrowserRouter } from 'react-router-dom'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'

const App = () => {
  return (
      <BrowserRouter>
        <FornecedorList />
      </BrowserRouter>
    
  )
}

export default App