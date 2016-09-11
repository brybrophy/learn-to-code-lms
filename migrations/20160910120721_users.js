'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.text('bio').notNullable().defaultTo('');
    table.string('avatar_url').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
