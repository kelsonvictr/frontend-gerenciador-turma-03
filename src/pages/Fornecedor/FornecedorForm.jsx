import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../api'
import { FaQuestionCircle } from 'react-icons/fa'
import InputMask from 'react-input-mask'

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

    const handleCepChange = (e) => {
        const cep = e.target.value.replace(/\D/g, '') //Remove caracteres não númericos do cep.

        setFornecedor({
            ...fornecedor,
            endereco: {...fornecedor.endereco, cep: e.target.value }
        })

        if (cep.length === 8) {
            // Buscar o endereço com a API ViaCEP se o CEP tiver 8 dígitos.
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                if (!response.data.erro) {
                    setFornecedor(prevFornecedor => ({
                        ...prevFornecedor,
                        endereco: {
                            ...prevFornecedor.endereco,
                            logradouro: response.data.logradouro,
                            bairro: response.data.bairro,
                            cidade: response.data.localidade,
                            estado: response.data.uf
                        }
                    }))
                }
            })
            .catch(error => console.error("Erro ao buscar CEP: ", error))
        }
    }

  return (
    <div className="form-container">
        <h2 style={{ position: 'relative' }}>
            { id ? 'Editar Fornecedor' : 'Adicionar Fornecedor' }
            {' '}
            <FaQuestionCircle
                className="tooltip-icon"
                onMouseOver={toggleTooltip}
                onMouseOut={toggleTooltip}
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

        <form className="fornecedor-form">
                <div className="form-group">
                    <label htmlFor="nome">Nome do fornecedor</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={fornecedor.nome}
                        onChange={e => setFornecedor({ ...fornecedor, nome: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cnpj">CNPJ do fornecedor</label>
                    <InputMask
                        mask="99.999.999/9999-99"
                        className="form-control"
                        id="cnpj"
                        name="cnpj"
                        value={fornecedor.cnpj}
                        onChange={e => setFornecedor({ ...fornecedor, cnpj: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email do fornecedor</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Digite um email válido"
                        value={fornecedor.email}
                        onChange={e => setFornecedor({ ...fornecedor, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipoFornecedor">Tipo de Fornecedor</label>
                    <select
                        className="form-control"
                        id="tipoFornecedor"
                        name="tipoFornecedor"
                        value={fornecedor.tipoFornecedor}
                        onChange={e => setFornecedor({ ...fornecedor, tipoFornecedor: e.target.value })}
                        required
                    >
                        <option value="COMUM">COMUM</option>
                        <option value="PREMIUM">PREMIUM</option>
                    </select>
                </div>

                {/* Campos de endereço */}
                <div className="form-group">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                        mask="99999-999"
                        className="form-control"
                        id="cep"
                        name="cep"
                        value={fornecedor.endereco.cep}
                        onChange={handleCepChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="logradouro">Logradouro</label>
                    <input
                        type="text"
                        className="form-control"
                        id="logradouro"
                        name="logradouro"
                        value={fornecedor.endereco.logradouro}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, logradouro: e.target.value }
                        })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        className="form-control"
                        id="numero"
                        name="numero"
                        value={fornecedor.endereco.numero}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, numero: e.target.value }
                        })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="complemento"
                        name="complemento"
                        value={fornecedor.endereco.complemento}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, complemento: e.target.value }
                        })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bairro">Bairro</label>
                    <input
                        type="text"
                        className="form-control"
                        id="bairro"
                        name="bairro"
                        value={fornecedor.endereco.bairro}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, bairro: e.target.value }
                        })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        name="cidade"
                        value={fornecedor.endereco.cidade}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, cidade: e.target.value }
                        })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="estado">Estado</label>
                    <input
                        type="text"
                        className="form-control"
                        id="estado"
                        name="estado"
                        value={fornecedor.endereco.estado}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, estado: e.target.value }
                        })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pais">País</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pais"
                        name="pais"
                        value={fornecedor.endereco.pais}
                        onChange={e => setFornecedor({
                            ...fornecedor,
                            endereco: { ...fornecedor.endereco, pais: e.target.value }
                        })}
                        required
                    />
                </div>

                <button type="submit" className="btn-success">
                    {id ? 'Editar' : 'Adicionar'}
                </button>
            </form>
    </div>
  )
}

export default FornecedorForm