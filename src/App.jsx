import React from 'react'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/listar-fornecedores" element={<FornecedorList />} />
          <Route path="/add-fornecedores" element={<FornecedorForm />} />
          <Route path="/edit-fornecedores/:id" element={<FornecedorForm />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App