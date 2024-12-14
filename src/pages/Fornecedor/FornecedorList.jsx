import React, { useEffect, useState } from 'react'
import axios from '../../api'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FornecedorList = () => {

    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        axios.get("/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao carregar fornecedores: ", error))
    }, [])

  return (
    <div className="container mt-5">
        <h2 className="mb-4" style={{ position: 'relative' }}>Lista de Fornecedores</h2>

        <Link to="/add-fornecedores" className="btn btn-primary mb-2"> <FaPlus className="icon" /> Adicionar Fornecedor</Link>

        <table className="table">
            <thead>
                <th>Nome:</th>
                <th>CNPJ:</th>
                <th>Email:</th>
                <th>Ações:</th>
            </thead>
            <tbody>
                {
                    fornecedores.map(fornecedor => (
                        <tr key={fornecedor.id}>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.cnpj}</td>
                            <td>{fornecedor.email}</td>
                            <td>
                                <Link to={`/edit-fornecedores/${fornecedor.id}`} className="btn btn-sm btn-warning"><FaEdit className="icon icon-btn" /> Editar</Link>
                                <button className="btn btn-sm btn-danger">
                                   <FaTrash className="icon icon-btn" /> Excluir
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    </div>
  )
}

export default FornecedorList