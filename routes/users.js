'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const ev = require('express-validation');
// const validations = require('../validations/users');

router.get('/users/:id', (req, res, next) => {
  const { id } = req.params;

  return knex('users')
    .where('id', id)
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

router.post('/users', (req, res, next) => {
  const { name, email, bio, avatarUrl } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Email already exists');
      }

      return decamelizeKeys({ name, email, bio, avatarUrl });
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
