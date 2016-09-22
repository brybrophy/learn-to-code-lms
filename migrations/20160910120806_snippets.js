'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('snippets', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.text('snippet').notNullable().defaultTo('');
    table.string('snippet_type').notNullable().defaultTo('');
    table.string('snippet_name').notNullable().defaultTo('');
    table.string('lesson_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('snippets');
};
