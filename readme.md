# Sobre o Projeto


## Fundamentos Estudados
- Pascal Case para declaração de funções

## Stacks Envolvidas
- Postgres
- Postman
- Node.js

## Setup Inicial
npm install -D typescript prisma ts-node @types/node nodemon
npx tsc --init
npm install @prisma/client
npx prisma init (Pelo menos 1 tabela precisa ter sido criada)
npx prisma generate

## Gestão do Banco de Dados
Toda a gestão dos dados é feita através do comando:
npx prisma migrate dev

Ou seja, toda alteração que é feita no seu "schema.prisma", necessita do comando
migrate para fazer a atualização das alterações no banco

## Criação dos Relacionamentos de Banco de Dados Através do Prisma
- No exemplo abaixo, a sintaxe para criar a relação entre as tabelas é iniciado com o termo "@relation" que recebe 2 parâmetros, os campos "fields" que desejamos criar a relação, e suas referências "id".
- Importante que ao definir a FK, seja avaliado se ele será "@unique", estabelece relação 1:1. Ou sem o termo "@unique", onde seria estabelecido a relação de 1:N.

```
// Tabela Movie
details     MovieDetail @relation(fields: [detailId], references: [id])
  detailId    Int         @unique // Se fosse para 1:1
  __________________________________________________________

Tabela MovieDetail

Movie Movie[] // Criado automaticamente ao salvar, no caso de uma relação 1:N
Movie Movie? // Criado automaticamente ao salvar, no caso de uma relação 1:1

```
Ao final dos ajustes é necessário dar o comando para migrar as alterações
 - npx prisma migrate dev

## Observações Importantes
Necessário durante as trocas de exemplos de tabela, que você altere no arquivo .env o nome da nova tabela, para não sobrepor as existentes.

EX:
```
// Dentro do Arquivo .env

DATABASE_URL="postgresql://postgres:admin123@localhost:5432/movies?schema=public"


```
