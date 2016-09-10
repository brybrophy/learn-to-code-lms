'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ltc_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/ltc_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
