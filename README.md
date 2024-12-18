# Ecommerce Cart

Projeto desenvolvido com **ReactJS** para a criação de um carrinho de ecommerce funcional. Este projeto utiliza as melhores práticas de desenvolvimento, incluindo o uso de **TypeScript**, **Tailwind CSS** para estilização e bibliotecas como **Axios** e **React Router Dom** para comunicação e roteamento.

---

## Funcionalidades

- **Listagem de Produtos**: Os produtos são carregados dinamicamente de uma API local.
- **Carrinho de Compras**: Adicione, visualize e remova produtos do carrinho.
- **Interface Responsiva**: Adaptável para diferentes dispositivos, graças ao Tailwind CSS.
- **Backend Simulado**: Utiliza `json-server` para simular a API REST.

---

## Tecnologias Utilizadas

- **ReactJS**: Framework principal para a construção da interface.
- **TypeScript**: Tipagem estática para maior segurança no código.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **Tailwind CSS**: Estilização simples e altamente customizável.
- **Axios**: Comunicação eficiente com a API.
- **Json-server**: Simula um backend local para os dados de produtos.
- **React Icons**: Conjunto de ícones utilizados na interface.

---

## Pré-requisitos

- **Node.js**: Recomendado v16 ou superior.
- **npm** ou **yarn**: Gerenciador de pacotes.

---

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lucasdefreitasroberto/ReactJS-EcommerceCart.git
   cd ReactJS-EcommerceCart

2. Instale as dependências:
    ```bash
   npm install
   # ou
   yarn install

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev

4. Inicie o json-server: Certifique-se de que está na pasta correta com o arquivo db.json e execute:
   ```bash
   npx json-server --watch db.json --port 3000

