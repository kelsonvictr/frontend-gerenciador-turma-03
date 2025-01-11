import React from 'react'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import Navbar from './components/Navbar'
import ProdutoForm from './pages/Produto/ProdutoForm'
import ProdutoList from './pages/Produto/ProdutoList'
import ClienteForm from './pages/Cliente/ClienteForm'
import ClienteList from './pages/Cliente/ClienteList'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/listar-fornecedores" element={<FornecedorList />} />
          <Route path="/add-fornecedores" element={<FornecedorForm />} />
          <Route path="/edit-fornecedores/:id" element={<FornecedorForm />} />
          <Route path="/add-produtos" element={<ProdutoForm />} />
          <Route path="/listar-produtos" element={<ProdutoList />} />
          <Route path="/edit-produtos/:id" element={<ProdutoForm />} />
          <Route path="/add-clientes" element={<ClienteForm />} />
          <Route path="/edit-clientes/:id" element={<ClienteForm/>} />
          <Route path="/listar-clientes" element={<ClienteList />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App