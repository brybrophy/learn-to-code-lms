/* eslint-disable camelcase */
'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../knex');

suite('Lessons Seeds', () => {
  before((done) => { // eslint-disable-line no-undef
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => { // eslint-disable-line no-undef
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('Lessons rows seed', (done) => {
    knex('lessons').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          user_id: 1,
          type: 'javascript',
          created_at: new Date('2016-07-23 14:26:16 UTC'),
          updated_at: new Date('2016-07-23 14:26:16 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            'Rows are not the same'
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
