
# Projeto Gerenciador de Produtos Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=black&style=flat)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=black&style=flat)

## Descrição

Frontend de um sistema para gerenciar produtos, desenvolvido com ReactJS e Vite.

## Tecnologias Utilizadas
- **ReactJS**
- **Vite**
- **JavaScript**

## Criação do Projeto

Para iniciar o projeto, utilize os seguintes comandos:

```bash
npm create vite@latest
# Escolha [React/JavaScript] como template
npm install
```

## Configuração do Backend Mockado

Durante o desenvolvimento das telas, será utilizado um backend mockado com o **json-server**. Para configurar, siga os passos abaixo:

1. Instale o json-server:
   ```bash
   npm install json-server@0.16.3
   ```

2. Crie uma pasta chamada `data` no projeto.

3. Dentro da pasta `data`, crie um arquivo chamado `db.json` para armazenar os dados mockados.

```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Produto Exemplo",
      "preco": 100,
      "descricao": "Descrição do produto exemplo"
    }
  ]
}
```
