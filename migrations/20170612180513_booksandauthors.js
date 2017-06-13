'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('booksandauthors', (table) => {
    table.increments('id');
    table.integer('books_id').notNullable();
    table.integer('auth_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('booksandauthors');
};
