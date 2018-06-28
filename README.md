# vacanthomes_website

Vacant Homes - Frontend for the the web

## Requirements

- [Node.js](https://nodejs.org/) 8+
- [Yarn](https://yarnpkg.com) (an alternative to NPM with very similar syntax and certain advantages)
- [Visual Studio Code](https://code.visualstudio.com/) (optional - for debugging)

## Technologies used

- [React.js](https://reactjs.org/) JavaScript Single Page Application
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Using [Material-UI](https://material-ui.com/) component library

## Development

### Installation

To install necessary dependencies, run
`yarn`
in the project folder. Once all libraries are installed, run
`yarn start`
to start local dev server and have a new browser window opened with the application loaded from the below URL:
`http://localhost:3000/`

### API connection

Client is currently paired with a mock API (i.e. without proper auth flow). To make it work, one needs to add 'token' key to browser's localStorage.

## Build

To generate a set of static files that can be uploaded to a http server, run
`yarn build`

## Screenshots

Are saved in [/screenshots](https://github.com/codeforireland2/vacanthomes_website/tree/master/screenshots)
