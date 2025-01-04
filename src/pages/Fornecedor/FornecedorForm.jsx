import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../api'
import { FaQuestionCircle } from 'react-icons/fa'

const FornecedorForm = () => {

    const [fornecedor, setFornecedor] = useState({
        nome: '',
        cnpj: '',
        email: '',
        tipoFornecedor: 'COMUM', // Valor padrão inicial
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            pais: 'Brasil' // Valor padrão inicial
        }
    })
    const [tooltipAberto, setTooltipAberto] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            // Preparando a edição, ontendo o fornecedor que eu quero editar.
            axios.get(`/fornecedores/${id}`)
            .then(response => setFornecedor(response.data))
            .catch(error => console.error("Ocorreu um erro: ", error))
        } else {
            // Se não houver id, redefine o estado para adicionar um NOVO fornecedor.
            setFornecedor({
                nome: '',
                cnpj: '',
                email: '',
                tipoFornecedor: 'COMUM', // Valor padrão inicial
                endereco: {
                    cep: '',
                    logradouro: '',
                    numero: '',
                    complemento: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    pais: 'Brasil' // Valor padrão inicial
                }
            })
        }
    }, [id])

    const toggleTooltip = () => {
        setTooltipAberto(!tooltipAberto)
    }

  return (
    <div className="form-container">
        <h2 style={{ position: 'relative' }}>
            { id ? 'Editar Fornecedor' : 'Adicionar Fornecedor' }
            {' '}
            <FaQuestionCircle
                className="tooltip-icon"
                onClick={toggleTooltip}
            />
            {tooltipAberto && (
                <div className="tooltip">
                    {
                        id ? 'Nesta tela, você pode editar as informações de um fornecedor existente.'
                        : 'Nesta tela, você pode adicionar um novo fornecedor ao sistema.'
                    }
                </div>
            )}
        </h2>
    </div>
  )
}

export default FornecedorForm