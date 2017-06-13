'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('booksandauthors', (table) => {
    table.increments('id');
    table.integer('book_id');
    table.integer('auth_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('booksandauthors');
};
