import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const ProdutoForm = () => {

    const [produto, setProduto] = useState({
        nome: '',
        preco: '',
        descricao: '',
        quantidadeEstoque: '',
        fornecedorId: ''
    })
    const [fornecedores, setFornecedores] = useState([])
    const [modalAberto, setModalAberto] = useState(false)
    const [modalErroAberto, setModalErroAberto] = useState(false)
    const [mensagensErro, setMensagensErro] = useState([])
    const [tooltipAberto, setTooltipAberto] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get('/fornecedores')
        .then(response => setFornecedores(response.data))
        .catch(error => console.error("Erro ao buscar fornecedor", error))

        //Se houver um ID, significa que vai editar, preciso buscar o produto a ser editado
        if (id) {
            axios.get(`/produtos/${id}`)
            .then(response => setProduto({
                ...response.data,
                fornecedorId: response.data.fornecedor ? response.data.fornecedor.id : ''
            }))
            .catch(error => console.error("Ocorreu um erro: ", error))
        } else {
            setProduto({
                nome: '',
                preco: '',
                descricao: '',
                quantidadeEstoque: '',
                fornecedorId: ''
            })
        }

    }, [id])

  return (
    <div>ProdutoForm</div>
  )
}

export default ProdutoForm