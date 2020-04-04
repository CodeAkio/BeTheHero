<h1 align="center">
  <img alt="BeTheHero" title="BeTheHero" src="https://github.com/Rocketseat/semana-omnistack-11/blob/master/.github/bethehero.svg" width="200px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CodeAkio/BeTheHero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CodeAkio/BeTheHero">

  <a href="https://github.com/Rocketseat/semana-omnistack-10/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CodeAkio/BeTheHero">
  </a>
</p>

<h3 align="center">
  Sistema de doação para ONGs
</h3>

<p align="center">
  <a href="#demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#utilização">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#teste">Teste</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## Demonstração

#### Mobile

<p align="center">
  <img alt="web" src="https://github.com/CodeAkio/BeTheHero/blob/master/.github/bth_mobile.gif" width="100%">
</p>

<br>

#### Web

<p align="center">
  <img alt="web" src="https://github.com/CodeAkio/BeTheHero/blob/master/.github/bth_web.gif" width="100%">
</p>

<br>

## Tecnologias

### Backend

* [Node.js](https://nodejs.org/pt-br/)
* [Express.js](https://www.npmjs.com/package/express)
* [CORS](https://www.npmjs.com/package/cors)
* [Cross Env](https://www.npmjs.com/package/cross-env)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [celebrate](https://www.npmjs.com/package/celebrate)
* [sqlite3](https://www.npmjs.com/package/sqlite3)
* [Knex.js](https://www.npmjs.com/package/knex)
* [Jest](https://www.npmjs.com/package/jest)
* [Supertest](https://www.npmjs.com/package/supertest)


### Web

* [React.js](https://reactjs.org/)
* [React Icons](https://www.npmjs.com/package/react-icons)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [History](https://www.npmjs.com/package/history)
* [Axios](https://www.npmjs.com/package/axios)
* [React Toastify](https://www.npmjs.com/package/react-toastify)

### Mobile

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.io/)
* [React Navigation 5](https://reactnavigation.org/)
* [React Navigation Stack](https://www.npmjs.com/package/react-navigation-stack)
* [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)
* [Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
* [Constants](https://docs.expo.io/versions/latest/sdk/constants/)
* [intl.js](https://www.npmjs.com/package/intl)
* [Axios](https://www.npmjs.com/package/axios)


## Utilização

Após baixar o projeto pelo **git clone**, realize os seguintes passos:

### Backend

1. Instale o [node.js](https://nodejs.org/en/download/) e [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/);

2. Instale e configure o **Sqlite3**;

3. Execute os comandos abaixo:

```console
cd BeTheHero/backend
yarn install
npx knex migrate:latest
yarn dev
```

### Web

1. Realize os passos do back-end;

2. Execute os comandos abaixo:

```console
cd BeTheHero/web
yarn install
yarn start
```

### Mobile

1. Realize os passos do back-end;

2. [Instale o expo](https://expo.io/learn);

3. Execute os comandos abaixo:

```console
cd BeTheHero/mobile
yarn install
expo start
```

## Teste

O back-end inclui testes de integração e de unidade .

```console
cd BeTheHero/backend
yarn test
```
