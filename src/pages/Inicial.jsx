// src/pages/Inicial.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import api from '../api'
import '../index.css'

// Registrar componentes do ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Inicial = () => {
  const [estatisticas, setEstatisticas] = useState({
    totalFornecedores: 0,
    totalProdutos: 0,
    totalClientes: 0
  })

  useEffect(() => {
    api.get('/estatisticas')
      .then(res => setEstatisticas(res.data))
      .catch(err => console.error("Erro ao buscar estatísticas", err))
  }, [])

  const vendasData = {
    labels: ['Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Quantidade de Vendas',
        data: [30, 45, 60],
        backgroundColor: '#fd7e14',
      },
    ],
  }

  const clientesData = {
    labels: ['Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Novos Clientes',
        data: [20, 35, 50],
        backgroundColor: '#28a745',
      },
    ],
  }

  return (
    <div className="inicial-container">
      <Link to="/listar-fornecedores" className="stat-box stat-box-blue">
        <h3>Fornecedores</h3>
        <p>{estatisticas.totalFornecedores}</p>
      </Link>
      <Link to="/listar-clientes" className="stat-box stat-box-green">
        <h3>Clientes</h3>
        <p>{estatisticas.totalClientes}</p>
      </Link>
      <Link to="/listar-produtos" className="stat-box stat-box-orange">
        <h3>Produtos</h3>
        <p>{estatisticas.totalProdutos}</p>
      </Link>
      <div className="charts-container">
        <div className="chart">
          <h3>Vendas de Produtos (Últimos 3 meses)</h3>
          <Bar data={vendasData} />
        </div>
        <div className="chart">
          <h3>Novos Clientes (Últimos 3 meses)</h3>
          <Bar data={clientesData} />
        </div>
      </div>
    </div>
  )
}

export default Inicial
