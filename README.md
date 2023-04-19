# CarSales

Este projeto consiste em uma aplicação web para gerenciamento de revendas de carros, com um frontend AngularJS e uma API em Node.js e Express. O banco de dados utilizado é o MongoDB.

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado os seguintes programas:

Node.js
MongoDB

## Como executar o projeto

1. Como executar o projeto: 

2. Acesse a pasta do projeto:
   
  ```
  cd carsales-manager
  ```

3. Instale as dependências do frontend e do backend:

  ```
  cd ./backend
  npm install
  ```

4. Configure o MongoDG

***Crie um arquivo .ENV na raiz do backend***
 ```
 cd ./backend
 echo > .env
  ```

**Edite o arquivo .ENV e adicione a url de conexão ao MongoDB**
```
MONGODB_CON = 'mongodb+srv://<user-name>:<pass-wd>@<db-name>.lrl427l.mongodb.net/?retryWrites=true&w=majority'
```

