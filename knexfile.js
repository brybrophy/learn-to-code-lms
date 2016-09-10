'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/workflow_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/workflow_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
