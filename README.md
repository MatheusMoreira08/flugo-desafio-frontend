# Desafio Frontend - Flugo 🚀

## 💻 Sobre o Projeto
Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Desenvolvedor Frontend na Flugo. A aplicação consiste em um formulário de cadastro de funcionários em múltiplas etapas (multi-step form), projetado com foco em usabilidade, validação de dados eficiente e persistência em nuvem.

## 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes ferramentas:
* **ReactJS** com **TypeScript** (inicializado via Vite)
* **Material UI (MUI)** para estilização e componentes de interface (incluindo o Stepper vertical)
* **Firebase** para a persistência e armazenamento dos dados
* **React Hook Form** integrado com **Zod** para o gerenciamento de estados e validação estruturada do formulário

## ✨ Funcionalidades
* Interface limpa e dividida em etapas claras para facilitar o preenchimento.
* Validação de dados em tempo real.
* Integração direta com o Firebase para salvar os registros dos funcionários.
* Componentização e temas customizados utilizando as diretrizes do Material UI.

## 🚀 Como Executar o Projeto Localmente

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd NOME_DO_REPOSITORIO
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configuração do Firebase:**
   Crie um arquivo `.env` na raiz do projeto e adicione as suas credenciais do Firebase:
   ```env
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
   VITE_FIREBASE_PROJECT_ID=seu_project_id
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 📄 Licença
Este projeto foi desenvolvido para fins de avaliação técnica.
