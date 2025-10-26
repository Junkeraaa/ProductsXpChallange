## Documentação da API REST de Dados Públicos (v1) ##
Esta API permite que parceiros consultem e gerenciem dados de Produtos da nossa plataforma de vendas online.

1. Endpoint Base
Todas as requisições devem ser feitas para o prefixo:

BASE_URL/api/v1

Exemplo de Acesso Local: http://localhost:3000/api/v1Documentação da API REST de Dados Públicos (v1)
Esta API permite que parceiros consultem e gerenciem dados de Produtos da nossa plataforma de vendas online.

1. Endpoint Base
Todas as requisições devem ser feitas para o prefixo:

BASE_URL/api/v1

Exemplo de Acesso Local: http://localhost:3000/api/v1

### Endpoints Disponíveis (Recurso: Produtos)

| Funcionalidade | Método | URI | Descrição |
| :--- | :--- | :--- | :--- |
| **Listar Tudo** | `GET` | `/products` | Retorna todos os produtos ativos. |
| **Buscar por Nome** | `GET` | `/products?name=termo` | Busca produtos que contenham o termo no nome. |
| **Contagem** | `GET` | `/products/count` | Retorna o número total de produtos registrados. |
| **Buscar por ID** | `GET` | `/products/:id` | Retorna um produto específico. |
| **Criar Novo** | `POST` | `/products` | Cria um novo produto no catálogo. |
| **Atualizar** | `PUT` | `/products/:id` | Atualiza completamente um produto existente. |
| **Excluir** | `DELETE` | `/products/:id` | Remove um produto do catálogo. |