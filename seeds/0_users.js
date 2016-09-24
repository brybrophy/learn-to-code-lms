/* eslint-disable arrow-body-style, camelcase */
'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        name: 'Bryan Brophy',
        email: 'brybrophy@gmail.com',
        meetup_username: '123',
        replit_hash: 'qnR8UCqJggD55PohusaBNviGoOJ67HC6Btry4qXLVZc= ',
        replit_time: '1474689904921',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
