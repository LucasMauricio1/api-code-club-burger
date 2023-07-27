<h1 align="center">API Code Burguer 🍔</h1>

![foto do Teste](./src/assets/print-project.png)


## :page_facing_up: Descrição

A API do Code Burguer é um CRUD onde os usuários vão poder criar, editar e atualizar informações como de registro, login, produtos, categorias e pedidos e salvá-las diretamente no banco de dados <br/> Code Burguer é construído usando React, Node.js, Express, PostgreSQL e MongoDB, tornando-o escalável e eficiente.


## Tabelas

Foram criadas 3 tabelas no `PostgreSQL` por meio de migrations, sendo elas `Categories`, `Products` e `Users`.
Dentro dessas tabelas existem varias colunas como `id`, `name`, `price`, `email`, `password_hash`, `createdAt`, `updatedAt` entre diversas outras.

Foi criada uma tabela no `MongoDB` por meio também de migrations que vai conter todas as informações do produto como `id` `name`, `quantity`, `foto`, `status`, `data do pedido` e `data da atualização do status` e também informações do cliente, sendo elas `id` e `name`


## Rotas

- `POST /users`: Essa rota cria um novo usuário no sistema. Você precisara passar informações no request body em formato JSON como `name`, `email` e `password`.

- `POST /sessions`: Essa rota é responsável por fazer o login do usuário, dando acesso a todas as demais rotas. Você precisara passar informações no request body em formato JSON como `email` e `password`.

- A partir daqui TODAS as rotas vão precisar passar também o `Bearer Token` que será retornado no body após fazer o login.

- `GET /products`: Essa rota é responsável por listar todos os produtos já criados. Você precisara passar somente o `Bearer Token`.

- `POST /products`: Essa rota cria novos produtos no sistema. Você precisara passar no form-data informações como `name`, `price`, `category_id`, `file` (opcional) e `offer` (opcional).

- `PUT /products/:id`: Essa rota atualiza um produto específico no sistema. Você precisara passar nos params o `id` do produto e no form-data todas as informações são opcionais, sendo elas: `name`, `price`, `category_id`, `file` e `offer`.

- `GET /categories`: Essa rota é responsável por listar todas as categorias já criadas no sistema. Você precisara passar somente o `Bearer Token`.

- `POST /categories`: Essa rota cria novas categorias no sistema. Você precisara passar no form-data informações como `name` e `file` (opcional).

- `PUT /categories/:id`: Essa rota atualiza uma categoria específica no sistema. Você precisara passar nos params o `id` do produto e no form-data informações opcionais como `name` e `file`.

- `GET /orders`: Essa rota é responsável por listar todos os pedidos registrados no sistema. Você precisara passar somente o `Bearer Token`.

- `POST /orders`: Essa rota cria novos pedidos no sistema. Você precisara passar em formato JSON um array `products` e dentro desse array um objeto com o `id` do produto e a `quantity`.

- `PUT /orders/:id`: Essa rota atualiza o status de um pedido específico no sistema. Você precisara passar nos params o `id` do pedido e em formato JSON o `status` com o status desejado.


## Exemplo

Se eu chamar a rota `POST /users` passando `{ "name": "Lucas", "email": "lucas@teste.com", "password": "123456" }`, deve retornar as seguintes informações no body:

```js
{
    "id": "15325da4-8bd8-4f52-9ec5-ae8baba5d129",
    "name": "Lucas",
    "email": "lucas@teste.com"
}
```

Se eu chamar a rota `POST /sessions` passando `{ "email": "lucas@teste.com", "password": "123456" }`, deve retornar as seguintes informações no body:

```js
{
    "id": "15325da4-8bd8-4f52-9ec5-ae8baba5d129",
    "email": "lucas@teste1.com",
    "name": "Lucas",
    "admin": false,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MzI1ZGE0LThiZDgtNGY1Mi05ZWM1LWFlOGJhYmE1ZDEyOSIsIm5hbWUiOiJMdWNhcyIsImlhdCI6MTY5MDQ3MTQ2OSwiZXhwIjoxNjkwOTAzNDY5fQ.DsW7vHNnFdkkYQ00slTdIqERODQVez9gokzxOayvD9g"
}
```

Se eu chamar a rota `GET /products` e já tiver produtos registrados e passar o `Bearer Token` na parte de Authorization, deve retornar as seguintes informações no body:

```js
[
    {
        "url": "https://localhost:3002/product-file/d1658d75-d2e0-45e3-becf-1636274497d6.jpg",
        "id": 1,
        "name": "X-Burguer",
        "price": 12,
        "path": "d1658d75-d2e0-45e3-becf-1636274497d6.jpg",
        "offer": false,
        "createdAt": "2023-07-19T23:25:49.970Z",
        "updatedAt": "2023-07-20T00:15:25.769Z",
        "category_id": 2,
        "category": {
            "id": 2,
            "name": "Hamburgueres"
        }
    }
]
```


## :rocket: Tecnologias

As seguintes ferramentas foram utilizadas neste projeto:

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [JWT](https://auth0.com/docs/secure/tokens/json-web-tokens)
- [Docker](https://hub.docker.com/)
- [PostgreSQL](https://hub.docker.com/_/postgres)  
- [MongoDB](https://hub.docker.com/_/mongo)
- [MVC](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308#:~:text=banco%20de%20dados.-,O%20Padr%C3%A3o%20MVC%20(Model%2DView%2DController),nada%20mais%20do%20que%20isso.)


## :closed_book: Requisitos

Antes de começar, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados em seu computador.

## :checkered_flag: Getting Started ##

```bash
# Clone o projeto
$ git clone https://github.com/Dev-LucasM/api-code-club-burguer
# Accesso
$ cd api-code-club-burguer
# Instalando dependencias
$ yarn ou npm
# Instalando dependencias
$ yarn ou npm
# Rodando o projeto
$ yarn dev ou npm run dev
# O servidor iniciará na porta: <http://localhost:3002>
```
## 🤝 Contribuidores

Queremos agradecer às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/122059282?s=400&u=96bc9300d660f1b489efcfb0a557ab08a6298c99&v=4" width="100px;" alt="Lucas Mauricio"/><br>
        <sub>
          <b>Lucas Maurício</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
