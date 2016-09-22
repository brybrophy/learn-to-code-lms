'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
const validations = require('../validations/users');

router.get('/users/:id', (req, res, next) => {
  const { id } = req.params;

  return knex('users')
    .innerJoin('identities', 'identities.user_id', 'users.id')
    .where('users.id', id)
    .first()
    .then((result) => {
      if (!result) {
        throw boom.create(404, 'User not found');
      }

      const user = camelizeKeys(result);

      delete user.createdAt;
      delete user.updatedAt;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/users', ev(validations.post), (req, res, next) => {
  const { name, email, meetupUsername } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('meetup_username', meetupUsername)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'User already exists');
      }

      return decamelizeKeys({ name, email, meetupUsername });
    })
    .then((row) => knex('users').insert(row, '*'))
    .then((results) => {
      const newUser = camelizeKeys(results[0]);

      delete newUser.createdAt;
      delete newUser.updatedAt;

      res.send(newUser);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
