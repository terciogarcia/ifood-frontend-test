# Spotifood

IFood's Frontend Test as described [here](DESCRIPTION.md).

## Setup and Quick Start

1. Clone this repo.

```bash
git clone git@github.com:terciogarcia/ifood-frontend-test.git
```

2. Install dependencies.

```bash
# Via yarn

yarn

# Via npm

npm install

```

3. Setup the [environment](#environment) variables.

4. Run the desired [script](#scripts) at the root directory. To start the app:

```bash
# Start in the development mode
npm start
```

## Architecture details

- [Create React App](https://github.com/facebook/create-react-app) was used as a React boilerplate. It is a good option for single page applications like this one. It was not necessary to implement a server-side rendering feature.
- [Eslint](https://eslint.org/) was used to check syntax, find problems and enforce the code style
  - Plugins: eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks
  - Configs: eslint-config-airbnb, eslint-config-airbnb-typescript
- [TypeScript](https://www.typescriptlang.org/) is being used in this project for a better code consistency and a better error checking. Typescript enables this project to be scalable and easier maintainable by other software engineers.
- [Material-ui](https://material-ui.com/) is used as UI framework for this project. Material UI is integrated to the interface based on the visual identity of IFood.

## Environment

You can define the environment variables by creating an `.env.local` file at the project root directory. You can also create a specific .env file for each environment variable, such as: `.env.test.local`,
`.env.development.local`, `.env.production.local`.

| Variable                        | Example                                         | Description                                              |
| ------------------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| REACT_APP_SPOTIFY_REDIRECT_URL  | http://localhost:3000/                          | URL to redirect to after authentication on Spotify API   |
| REACT_APP_SPOTIFY_CLIENT_ID     | 621aa8682f6c482ab164c98fccaed764                | Application identifier at the Spotify API                |
| REACT_APP_FILTER_FIELD_ENDPOINT | http://www.mocky.io/v2/5a25fade2e0000213aa90776 | Endpoint that returns filter options to search playlists |

## Scripts

This projects contains npm scripts that can be executed with `npm run {script-name}` or `yarn {script-name}` as following:

- **start** - Run the application in development mode
- **lint** - Analyze and point out inconsistencies in the code style
- **lint:fix** - Perform styleguide checking and fix some errors automatically
- **build** - Build the project for production
- **eject** - Eject project from create-react-app
- **test** - Run tests with the jest framework
