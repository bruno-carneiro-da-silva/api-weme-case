## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Stacks](#stacks)
* [Iniciando o projeto](#iniciando-o-projeto)
* [Docker](#docker)



## Sobre a aplicação
O repositório foi para desenvolvimento de uma API with Node, Express, Typeorm e Typescript, no qual, tem como objetivo de gerenciar as senhas que os usuários irão inserir. <br>
Será integrada com o front-end que vai ser feito em React.<br />

## Stacks: 
* Back-end
  * __Node__ + __Express__ + __Typescript__
  * __Postgresql__ Para gerenciar o banco de dados 
* Front-end
  * __React__ + __Vite__ + __JS__
  * __CSS e Sass__ 
  * __Axios__ para fazer as requisições da API
<br />

## Iniciando o projeto
Faça o download do repositório e após is entre na pasta.<br/>
Altere no no arquivo _.env da pasta _api_ e configure com as informações do banco de dados criado por você API.<br/>
```bash
$ git clone https://github.com/bruno-carneiro-da-silva/api-weme-case
```

* Back-end
```bash
$ cd api-weme-case
$ yarn install
```

## Docker

Caso você queira usar docker, tem um exemplo de arquivo docker no repositório apenas substitua com os dados que você criará do seu banco de dados local.

Existem várias formas de se instalar o docker, a usada neste projeto foi o docker desktop, mas há possibilidade de instalar via linha de comando também. 

- Entre no SGDB de sua preferência e crie um banco de dados com as informações que você quer inserir, algumas coisas já serão preenchidas dependendo do seu SGDB como localhost, porta <br/>
Mas pode ser alterado conforme você desejar.
- Após criar o banco insira as informações no arquivo docker-compose.yml e rode:

```bash
$ docker compose up -d
$ docker compose ps //para checar o container rodando
```

Após realizar os comandos acima digite dentro da pasta do projeto: 

```bash
$ yarn dev //para rodar a api 
```







