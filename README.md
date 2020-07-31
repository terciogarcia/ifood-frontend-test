# Spotifood

Part of IFood's Frontend Test as described [here](DESCRIPTION.md).

# Installing

  - Clone this repo
  - Run `yarn` or `npm install`
  - Set the [environment](#environment) variables

# Architecture details
  - [Create React App](https://github.com/facebook/create-react-app) - Simple React boilerplate mantained by Facebook. It is a good option for applications based on a single page like this one, not being necessary features like server-side rendering.
  - [Eslint](https://eslint.org/) - Tool to standardize code style.
    - Plugins: eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react, eslint-plugin-react-hooks
    - Configs: eslint-config-airbnb, eslint-config-airbnb-typescript
  - [TypeScript](https://www.typescriptlang.org/): JavaScript superset that helps to build more scalable and maintainable applications by describind types of variables, objects and functions.
  - [Material-ui](https://material-ui.com/): A very popular UI framework based on Google's Material Design. As the interface of this project is based on the visual identity of IFood, that was a very helpful tool to reach the expected result.

# Environment
You can define the environment variables by creating an `.env.local` at the project root direction. You can also create a specific env file for each env, such as: `.env.test.local`,
`.env.development.local`, `.env.production.local`.

| Variable                        | Example                                         | Description                                                 |
|---------------------------------|-------------------------------------------------|-------------------------------------------------------------|
| REACT_APP_SPOTIFY_REDIRECT_URL  | http://localhost:3000/                          | URL to be redirected after authenticated by the Spotify API |
| REACT_APP_SPOTIFY_CLIENT_ID     | 621aa8682f6c482ab164c98fccaed764                | Application identifier at the Spotify API                   |
| REACT_APP_FILTER_FIELD_ENDPOINT | http://www.mocky.io/v2/5a25fade2e0000213aa90776 | Endpoint that returns filter options to search playlists.   |

# Scripts
This projects contains npm scripts that can be executed with `npm run {script-name}` or `yarn {script-name}` as following:
  - **start** - Run the application for development
  - **lint** - Perform styleguide checking
  - **lint:fix** - Perform styleguide checking and fix some errors automatically
  - **build** - Create a productions build
  - **eject** - Eject project from create-react-app
  - **test** - Run tests with jest

