# Desafio | Frontend Developer

Projeto construído como desafio para processo de seleção da [Linx Impulse](https://www.linx.com.br/). Desenvolvimento de uma landing page com uma grade de produtos + form e uma página de e-mail (Newsletter).

## Preview

Um live preview do projeto pode ser consultado através destes links:
- **Home page:** https://dev-challenge-linx-davischoll.vercel.app/
- **Email page:** https://dev-challenge-linx-davischoll.vercel.app/email 

## Funcionalidade

**Link do layout:** [Mock Layout](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)

**Endpoint da API:** [API](https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1)

Para preencher a página com as informações dos produtos, é realizada uma consulta à API de forma paginada, em que cada página consultada retorna as informações de __8 produtos__ e um link para a __próxima página__.

Ao obter os dados os seguintes pontos são implementados:

- Para cada produto retornado pela API, um card de produto com as respectivas informações deve é criado no grid de produtos;
- Ao clicar no botão *"Ainda mais produtos aqui!"* a próxima página da API é consultada, trazendo mais 8 produtos para o grid existente, imediatamente abaixo dos produtos já carregados pela primeira requisição;
- O formulário de newsletter com o título "Compartilhe a novidade" tem os seus campos de input validados pelo html de acordo com o conteúdo.

## Pré-requisitos:

Para rodar a aplicação na máquina com um servidor local, é necessário o NodeJS e NPM.

```
$ git clone https://github.com/davischoll/frontend-dev-challenge-linx.git
$ npm install
$ npm run dev
```

Pode-se então, visualizar o conteúdo pelo browser, através da porta 3000.
```
http://localhost:3000/
```

## Colocando em produção:

Este projeto já está com o arquivo de configuração do deploy e pode ser colocado em produção utilizando o [Vercel](http://vercel.com/).

## Construído com:

* [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Nunjucks](https://mozilla.github.io/nunjucks/) - A rich and powerful templating language for JavaScript.
* [Adobe XD](https://www.adobe.com/products/xd.html) - Design like you always imagined.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.

## Autor:

* **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davischoll/)


## Licença

Licenciado sob a licença MIT - veja [LICENSE](LICENSE) para mais informações.
