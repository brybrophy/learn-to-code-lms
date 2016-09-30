'use strict';

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\//,
        'vendor.js': /^node_modules\//
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^app\//
      }
    }
  },

  paths: {
   watched: ['app', 'vendor']
 },

  plugins: {
    babel: {
      plugins: [
        "transform-decorators-legacy",
        "transform-class-properties"
      ],
      presets: ['es2015', 'es2016', 'react']
    }
  },

  server: {
    command: 'nodemon --ignore app --ignore public server.js'
  }
};
