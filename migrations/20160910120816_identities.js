'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('identities', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('provider_id').notNullable().defaultTo('');
    table.string('provider_token').notNullable().defaultTo('');
    table.string('provider_ref_token').notNullable().defaultTo('');
    table.string('provider_type').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('identities');
};
