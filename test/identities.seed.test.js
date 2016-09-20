/* eslint-disable camelcase */
'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../knex');

suite('Identities Seeds', () => {
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

  test('Identities rows seed', (done) => {
    knex('identities').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          user_id: 1,
          provider_id: 'abc123',
          provider_token: 'rockin_robin',
          provider_ref_token: 'free_willy',
          provider_type: 'meetup',
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
