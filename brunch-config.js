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
      presets: ['es2015', 'react']
    }
  },

  server: {
    port: Number.parseInt(process.env.PORT) || 8000
  }
};
