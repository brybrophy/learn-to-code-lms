
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('identities');
};
