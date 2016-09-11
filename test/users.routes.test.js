'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const knex = require('../knex');
const supertest = require('supertest');

suite('Users Routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /api/users/1', (done) => {
    supertest(app)
      .get('/api/users/1')
      .set('Accept', 'application/json')
      .expect(200, {
        id: 1,
        name: 'Bryan Brophy',
        email: 'brybrophy@gmail.com',
        bio: 'The man with the plan.',
        avatarUrl: 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/8/1/d/9/highres_19053241.jpeg' // eslint-disable-line max-len
      })
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('POST /api/users', (done) => {
    supertest(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send({
        id: 2,
        name: 'Amber Brophy',
        email: 'amberb37@gmail.com',
        bio: 'The woman with the plan.',
        avatarUrl: 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/8/1/d/9/highres_19053241.jpeg' // eslint-disable-line max-len
      })
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        name: 'Amber Brophy',
        email: 'amberb37@gmail.com',
        bio: 'The woman with the plan.',
        avatarUrl: 'https://a248.e.akamai.net/secure.meetupstatic.com/photos/member/8/1/d/9/highres_19053241.jpeg' // eslint-disable-line max-len
      })
      .expect('Content-Type', /json/)
      .end(done);
  });
});