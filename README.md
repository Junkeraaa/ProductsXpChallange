## Documentação da API REST desafio 1 XP (v1) ##

### 1. Endpoint Base
Todas as requisições devem ser feitas para o prefixo:

BASE_URL/api/v1

Exemplo de Acesso Local: http://localhost:3000/api/v1

### 2. Endpoints Disponíveis (Recurso: Produtos)

| Funcionalidade | Método | URI | Descrição |
| :--- | :--- | :--- | :--- |
| **Listar Tudo** | `GET` | `/products` | Retorna todos os produtos ativos. |
| **Buscar por Nome** | `GET` | `/products?name=termo` | Busca produtos que contenham o termo no nome. |
| **Contagem** | `GET` | `/products/count` | Retorna o número total de produtos registrados. |
| **Buscar por ID** | `GET` | `/products/:id` | Retorna um produto específico. |
| **Criar Novo** | `POST` | `/products` | Cria um novo produto no catálogo. |
| **Atualizar** | `PUT` | `/products/:id` | Atualiza completamente um produto existente. |
| **Excluir** | `DELETE` | `/products/:id` | Remove um produto do catálogo. |

### 3. Detalhes dos Endpoints

## A) Criar Produto (POST) ##
Cria um novo registro de produto.

URI: /products

Método: POST

Corpo da Requisição (JSON):

```json
{
  "name": "Smartphone Pro X",
  "description": "Telefone de última geração com câmera avançada.",
  "price": 4999.90,
  "stock": 100
}
```

Respostas Possíveis:

201 Created: Retorna o objeto do produto criado (incluindo o id).

400 Bad Request: Erro de validação (ex: preço negativo).

## B) Listar Todos e Buscar por Nome (GET) ##
Retorna uma lista de produtos.

URI: /products

Método: GET

Parâmetros de Query (Opcional):

name: Filtra produtos cujo nome contenha o valor fornecido.

Exemplo de Busca: GET /api/v1/products?name=Mouse

Resposta (Exemplo de Sucesso - 200 OK):

```json
[
  {
    "id": "e6f24d1a-...",
    "name": "Notebook X",
    "price": 5000.00,
    "stock": 15
  },
]
```

## C) Buscar por ID (GET) ##
Retorna detalhes de um produto específico.

URI: /products/:id

Método: GET

Respostas Possíveis:

200 OK: Retorna o objeto do produto.

404 Not Found: Produto com o ID fornecido não existe.

## D) Atualizar Produto (PUT) ##
Atualiza os dados de um produto específico.

URI: /products/:id

Método: PUT

Corpo da Requisição (JSON): Deve incluir todos os campos, mas os campos faltantes não serão alterados se o Service estiver configurado para Partial<Product>.

Respostas Possíveis:

200 OK: Retorna o objeto do produto atualizado.

404 Not Found: ID não encontrado.

400 Bad Request: Erro de validação.

## E) Excluir Produto (DELETE) ##
Remove um produto do catálogo.

URI: /products/:id

Método: DELETE

Respostas Possíveis:

204 No Content: Exclusão bem-sucedida (não retorna corpo).

404 Not Found: ID não encontrado.

## F) Contagem (GET) ##
Retorna o número total de registros de produtos.

URI: /products/count

Método: GET

Resposta (Exemplo de Sucesso - 200 OK):
```json
{
  "total": 65
}
```

### 4. Códigos de Status HTTP
A API adota os seguintes códigos de status para indicar o resultado da requisição:

| Código | Descrição | Uso Típico |
| :--- | :--- | :--- |
| `200 OK` | Sucesso Geral | Retorno de leitura (`GET`) ou atualização (`PUT`). |
| `201 Created` | Criação Bem-Sucedida | Retorno de criação (`POST`). |
| `204 No Content` | Exclusão Bem-Sucedida | Retorno de exclusão (`DELETE` sem corpo). |
| `400 Bad Request` | Requisição Inválida | Erro de validação de dados do corpo ou query, ou falha na regra de negócio. |
| `404 Not Found` | Recurso Não Encontrado | O ID fornecido não existe ou a URI está incorreta. |
| `500 Internal Server Error` | Erro do Servidor | Erro inesperado no processamento interno da lógica. |

