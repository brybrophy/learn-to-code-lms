# with-react-material

Ryan Sobol's React and Material skeleton for Brunch

## Dependencies

Install the [Brunch](http://brunch.io) package globally with NPM.

```shell
npm install -g brunch
```

## Usage

Create a new React application based on this Brunch skeleton and install its dependencies.

```shell
brunch new path/to/app --skeleton ryansobol/with-react-material
```

The application's code lives in the `app` directory.

```shell
la app
```

Static files are placed in the `app/assets` directory and are copied to the `public` directory on build.

```shell
la app/assets
```

React components are placed in the `app/components` directory and are combined into the `public/app.js` file on build.

**NOTE:** Each React component lives in a module so can be shared with other modules using [ES6 module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) syntax.

```shell
la app/components
```

CSS stylesheets are placed in the `app/styles` directory and are combined into the `public/app.css` file on build.

```shell
la app/styles
```

On each build, the application's files are saved to the `public` directory and served by the HTTP server.

```shell
la public
```

Watch the project for changes and launch an HTTP server.

**NOTE:** Press `Ctrl + C` to quit.

```shell
npm start
```

In a new Terminal tab, navigate back the the project directory.

```shell
cd path/to/app
```

Take a look at the `public` directory to see what Brunch created.

```shell
la public
```

Open the application in your default browser.

```shell
open http://localhost:8000/
```

## Resources

- [Brunch](http://brunch.io)
- [Material-UI](http://www.material-ui.com/)
- [React](https://facebook.github.io/react/)
