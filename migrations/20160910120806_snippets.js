'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('snippets', (table) => {
    table.increments();
    table.integer('lesson_id')
      .notNullable()
      .references('id')
      .inTable('lessons')
      .onDelete('CASCADE')
      .index();
    table.text('code').notNullable().defaultTo('');
    table.string('type').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('snippets');
};
