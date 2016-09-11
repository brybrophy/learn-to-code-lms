'use strict';

exports.seed = function(knex) {
  return knex('lessons').del()
    .then(() => {
      return knex('lessons').insert([{
        id: 1,
        user_id: 1,
        type: 'javascript',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));"
      );
    });
};
