import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  return (
    <div>ProdutoForm</div>
  )
}

export default ProdutoForm