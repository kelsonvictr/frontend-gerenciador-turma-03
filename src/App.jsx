import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Inicial from './pages/Inicial'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import ProdutoForm from './pages/Produto/ProdutoForm'
import ProdutoList from './pages/Produto/ProdutoList'
import ClienteForm from './pages/Cliente/ClienteForm'
import ClienteList from './pages/Cliente/ClienteList'
import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={
        <PrivateRoute>
          <>
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
              <Route path="/edit-clientes/:id" element={<ClienteForm />} />
              <Route path="/listar-clientes" element={<ClienteList />} />
            </Routes>
          </>
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App
