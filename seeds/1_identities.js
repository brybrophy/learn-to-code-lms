'use strict';

exports.seed = function(knex) {
  return knex('identities').del()
    .then(() => {
      return knex('identities').insert([{
        id: 1,
        user_id: 1,
        provider_id: 'abc123',
        provider_token: 'rockin_robin',
        provider_type: 'meetup',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('identities_id_seq', (SELECT MAX(id) FROM identities));"
      );
    });
};
