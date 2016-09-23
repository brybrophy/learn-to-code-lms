'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.get('/snippets/:userId', (req, res, next) => {
  const { userId } = req.params;

  knex('snippets')
    .where('user_id', userId)
    .then((results) => {
      const snippets = {};
      for (const result of results) {
        const snippet = camelizeKeys(result);
        delete snippet.createdAt;
        delete snippet.updatedAt;
        delete snippet.userId;
        delete snippet.id;

        const name = snippet.snippetName;
        delete snippet.snippetName;
        snippets[name] = snippet;
      }

      res.send(snippets);
    })
    .catch((err) => {
      next(err);
    })
});

module.exports = router;
