# API de Gerenciamento de Usuários e Documentos

Este projeto consiste em uma API com funcionalidades de CRUD para usuários e documentos. O objetivo é simular um sistema de gerenciamento de documentos vinculados a usuários, com as operações de CRUD sendo simuladas em memória sem persistência em um banco de dados real.

## Funcionalidades

### CRUD de Usuários
- **Criar Usuário**: Criação de novos usuários.
- **Ler Usuário**: Listagem de todos os usuários ou busca por um usuário específico.
- **Atualizar Usuário**: Edição das informações de um usuário.
- **Deletar Usuário**: Remoção de usuários.

### CRUD de Documentos
- **Criar Documento**: Criação de novos documentos vinculados a usuários.
- **Ler Documento**: Listagem de todos os documentos ou busca por um documento específico.
- **Atualizar Documento**: Edição das informações de um documento.
- **Deletar Documento**: Remoção de documentos.

## Dados

### Usuário (User)
- **Campos**:
  - `id`: Identificador único do usuário (UUID).
  - `name`: Nome do usuário.
  - `email`: Email do usuário.
- **Relacionamento**: Um usuário pode ter vários documentos.

### Documento (Document)
- **Campos**:
  - `id`: Identificador único do documento (UUID).
  - `name`: Nome do documento.
  - `status`: Status do documento.
  - `userId`: ID do usuário ao qual o documento está vinculado.

## Como Rodar o Projeto Localmente

1. **Clone o Repositório**
```bash
   git clone https://github.com/felipems1/teste-tecnico-api.git
```

2. **Navegue até o Diretório do Projeto**

```bash
  cd teste-tecnico-api
```
3. **Instale as Dependências**
```bash
   npm install
```
4. **Inicie o Servidor de Desenvolvimento**
```bash
   npm run dev
```
5. A API estará disponível em http://localhost:3333

## Rotas e Controllers

As operações de CRUD foram implementadas com Express e TypeScript e organizadas em controllers separados para seguir boas práticas de desenvolvimento. As respostas das rotas são simuladas em memória, sem persistência em banco de dados.

### Endpoints da API

#### Usuários

- **POST /users**
  - Criação de um novo usuário.
  - **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **GET /users**
  - Retorna a lista de todos os usuários.
  - **Resposta**:
    ```json
    [
      {
        "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
        "name": "John Doe",
        "email": "john@example.com"
      }
    ]
    ```

- **GET /users/:id**
  - Busca um usuário específico pelo ID.
  - **Parâmetro na URL**:
    - `:id` - ID do usuário a ser retornado.
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **PUT /users/:id**
  - Atualiza as informações de um usuário.
  - **Parâmetro na URL**:
    - `:id` - ID do usuário a ser atualizado.
  - **Body**:
    ```json
    {
      "name": "John Doe Updated",
      "email": "john.updated@example.com"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "John Doe Updated",
      "email": "john.updated@example.com"
    }
    ```

- **DELETE /users/:id**
  - Remove um usuário pelo ID.
  - **Parâmetro na URL**:
    - `:id` - ID do usuário a ser removido.
  - **Resposta**: Status 204 (No Content).

#### Documentos

- **POST /documents**
  - Cria um novo documento vinculado a um usuário.
  - **Body**:
    ```json
    {
      "name": "Document",
      "status": "ativo",
      "userId": "763ec55e-b5e9-444e-8d17-f748e71908a9"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "Document 1",
      "status": "ativo",
      "userId": "763ec55e-b5e9-444e-8d17-f748e71908a9"
    }
    ```

- **GET /documents**
  - Retorna a lista de todos os documentos.
  - **Resposta**:
    ```json
    [
      {
        "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
        "name": "Document 1",
        "status": "ativo",
        "userId": "763ec55e-b5e9-444e-8d17-f748e71908a91"
      }
    ]
    ```

- **GET /documents/:id**
  - Busca um documento específico pelo ID.
  - **Parâmetro na URL**:
    - `:id` - ID do documento a ser retornado.
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "Document 1",
      "status": "ativo",
      "userId": "763ec55e-b5e9-444e-8d17-f748e71908a9"
    }
    ```

- **PUT /documents/:id**
  - Atualiza as informações de um documento.
  - **Parâmetro na URL**:
    - `:id` - ID do documento a ser atualizado.
  - **Body**:
    ```json
    {
      "name": "Document 1 Updated",
      "status": "inativo"
    }
    ```
  - **Resposta**:
    ```json
    {
      "id": "763ec55e-b5e9-444e-8d17-f748e71908a9",
      "name": "Document 1 Updated",
      "status": "inativo",
      "userId": "763ec55e-b5e9-444e-8d17-f748e71908a9"
    }
    ```

- **DELETE /documents/:id**
  - Remove um documento pelo ID.
  - **Parâmetro na URL**:
    - `:id` - ID do documento a ser removido.
  - **Resposta**: Status 204 (No Content).


