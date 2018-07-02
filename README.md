# DATA4SDGs-Highways-Examples

## Technology

#### Frontend

We're using `vue ^2.0.1` as our frontend framework, `vue-router ^2.0.2` for internal routing, and `vuex ^2.0.0` for application state management.
For the application's http request console we're using `httpsnippet ^1.16.5` and for the maps visualisations we use `leaflet ^1.0.2`. Finally for the application styles we use the node implementation of sass: `node-sass ^4.2.0`.

#### Code Quality

For javascript code quality we depend on Eslint. We're using `eslint^3.7.1`  and you can find our eslint config in the `.eslintrc.js` file.

#### Tooling

This project is built on top of ES6 javascript, which means we're using ES6 modules and the latest syntax. For this to be able to run on a browser we need a module bundler and a transpiler. We're using `webpack ^1.13.2` as a module bundler and `babel ^6.0.0` as a transpiler.

## Requirements

- Node 7.4+
- NPM

## Installation

First install dependencies running in your projects folder inside the terminal:

```

npm install

````
After the installation is completed, create a new file and name it `.env`. Copy the content of the project's `.env.sample` file in it. And fill in the blanks with the appropriate values. The values correspond to the following things:
* API_BASE_URL - Map layers + datasets api base url. This should point to the _data-highways_ api.

## Usage
To run the project in development mode you need to execute the following command on your terminal:
```

npm run dev

```
This will run the project on `127.0.0.1:3000`  on your browsers window, with hot-reload activated.
To run the project in production mode you need to:
First, build the project for production with the following command:
```

 npm run build

 ```
 This will build the project in production mode with minification.

 Afterwards you'll need to run the production server with the following command:
 ```

 npm start

 ```
 This will run the project on `127.0.0.1:5000`  on your browser's window on production mode.

### Deploy
The app is using github-pages to show the examples availables. To make those public just run:

 ```

npm run publish

```

## Contributing
1. Fork it!

2. Create your feature branch: git checkout -b feature/my-new-feature

3. Commit your changes: git commit -am 'Add some feature'

4. Push to the branch: git push origin feature/my-new-feature

5. Submit a pull request :D

