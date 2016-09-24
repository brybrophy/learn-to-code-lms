/* eslint-disable camelcase */
'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../knex');

suite('Users Seeds', () => {
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

  test('Users rows seed', (done) => {
    knex('users').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          name: 'Bryan Brophy',
          email: 'brybrophy@gmail.com',
          meetup_username: '123',
          replit_hash: 'qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc= ',
          replit_time: '1474689904921',
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
