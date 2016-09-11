/* eslint-disable arrow-body-style, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('snippets').del()
    .then(() => {
      return knex('snippets').insert([{
        id: 1,
        lesson_id: 1,
        code: '["sample code here"]',
        type: 'javascript',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('snippets_id_seq', (SELECT MAX(id) FROM snippets));"
      );
    });
};
