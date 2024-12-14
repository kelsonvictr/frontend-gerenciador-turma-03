
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

4. Adicione o script no arquivo `package.json` para rodar o json-server:
   ```json
   "server": "json-server --watch data/db.json"
   ```

5. Para iniciar o servidor, execute:
   ```bash
   npm run server
   ```

## Utilizando o React Router DOM

O **React Router DOM** é uma biblioteca essencial para gerenciamento de rotas em aplicações React. Ele permite a criação de uma navegação fluida entre diferentes páginas e componentes, além de possibilitar a construção de Single Page Applications (SPAs). 

Para instalar o React Router DOM, utilize o comando:

```bash
npm install react-router-dom
```

Com ele, será possível criar uma navegação organizada entre as páginas do sistema.

## Arquitetura de Pastas

Organizamos o projeto de forma modular para facilitar a escalabilidade e a manutenção do código. Abaixo está a estrutura inicial do projeto:

```
src/
├── components/
├── pages/
│   ├── Fornecedor/
│   ├── Produto/
│   ├── Cliente/
```

### Descrição das Pastas
- **components**: Contém os componentes reutilizáveis, como botões, cabeçalhos e rodapés.
- **pages**: Armazena as páginas principais do sistema.
  - **Fornecedor**: Páginas relacionadas à gestão de fornecedores.
  - **Produto**: Páginas relacionadas à gestão de produtos.
  - **Cliente**: Páginas relacionadas à gestão de clientes.
