<div align="center">

 <h1>💰 Refund API - Sistema de Reembolso</h1>
 <p>O <strong>Refund API</strong> é um sistema completo de gerenciamento de reembolsos desenvolvido com Node.js e TypeScript.</p>
</div>

</br>

> [!IMPORTANT]
> Essa aplicação é o **Back-end** da aplicação `Refund-2.0` que está nesse repositório [Refund-v2.0](https://github.com/emmanuelmarcosdeoliveira/refund-v2.0)

## 📋 Índice

- [🚀 Tecnologias](#-tecnologias)
- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [🏗️ Arquitetura](#️-arquitetura)
- [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
- [🎯 Funcionalidades](#-funcionalidades)
- [📊 Estrutura do Banco](#-estrutura-do-banco)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)

## 🚀 Tecnologias

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=plastic&logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=plastic&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=plastic&logo=jsonwebtoken&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=plastic&logo=zod&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-000000?style=plastic&logo=bcrypt&logoColor=white)

</div>

## 📖 Sobre o Projeto

O projeto oferece uma API robusta para gerenciar solicitações de reembolso de funcionários, com sistema de autenticação, autorização por roles e upload de comprovantes.

### 🎓 Fonte de Estudo

Este projeto foi desenvolvido seguindo as melhores práticas aprendidas na **[RocketSeat](https://rocketseat.com.br/)**

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e bem estruturada:

```
src/
├── configs/          # Configurações da aplicação
├── controllers/      # Lógica de negócio dos endpoints
├── database/         # Configuração do Prisma
├── middleware/       # Middlewares customizados
├── providers/        # Provedores de serviços
├── routes/           # Definição das rotas
├── types/            # Definições de tipos TypeScript
├── utils/            # Funções utilitárias
├── app.ts            # Configuração do Express
└── server.ts         # Ponto de entrada da aplicação
```

### 📋 Padrões Utilizados

- **MVC (Model-View-Controller)**: Separação clara entre lógica de negócio, dados e apresentação
- **Repository Pattern**: Abstração da camada de dados
- **Middleware Pattern**: Interceptação e processamento de requisições
- **Dependency Injection**: Injeção de dependências para melhor testabilidade

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Git

### 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/refund-api.git
cd refund-api
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o banco de dados**

```bash
# Gere o cliente Prisma
npx prisma generate

# Execute as migrações
npx prisma migrate dev
```

4. **Execute o projeto**

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 🎯 Funcionalidades

- ✅ **Autenticação JWT**: Sistema seguro de login e autenticação
- ✅ **Autorização por Roles**: Diferentes permissões para funcionários e gerentes
- ✅ **Upload de Arquivos**: Upload de comprovantes de reembolso
- ✅ **Validação de Dados**: Validação robusta com Zod
- ✅ **Hash de Senhas**: Segurança com bcrypt
- ✅ **CORS Configurado**: Suporte para requisições cross-origin

## 📊 Estrutura do Banco

### Usuários (Users)

- **Roles**: `employee` | `manager`
- Campos: id, name, email, password, role, timestamps

### Reembolsos (Refunds)

- **Categorias**: `food` | `transport` | `accommodation` | `services` | `others`
- Campos: id, name, amount, category, userId, filename, timestamps

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor em modo de desenvolvimento

# Banco de dados
npx prisma generate  # Gera o cliente Prisma
npx prisma migrate   # Executa migrações do banco
npx prisma studio    # Interface visual do banco de dados
```

## 📚 Bibliotecas Principais

| Biblioteca         | Versão  | Descrição                  |
| ------------------ | ------- | -------------------------- |
| **express**        | ^4.19.2 | Framework web para Node.js |
| **@prisma/client** | ^6.2.1  | ORM para banco de dados    |
| **typescript**     | ^5.7.3  | Superset do JavaScript     |
| **zod**            | ^3.24.1 | Validação de schemas       |
| **jsonwebtoken**   | ^9.0.2  | Autenticação JWT           |
| **bcrypt**         | ^5.1.1  | Hash de senhas             |
| **multer**         | ^1.4.5  | Upload de arquivos         |
| **cors**           | ^2.8.5  | Configuração CORS          |

---

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>

<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)<br>
&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 - Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
- Explore o código do projeto para entender sua estrutura e funcionamento.
- <br>

**Faça um Fork**

- Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

- Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

- Crie uma nova branch para isolar suas alterações.<br>
- Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

- Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

- Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
- Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
  - <br>

**Revise e Responda a Feedback:**

- Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/oliveira-emmanuel/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2025 This project is under the **MIT license**<br>
<br>

<div align="center">
**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

[Voltar ao Topo](#-índice)

</div>
