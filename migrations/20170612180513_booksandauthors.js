'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('booksandauthors', (table) => {
    table.increments('id');
    table.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE');
    table.integer('auth_id').notNullable().references('id').inTable('authors').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('booksandauthors');
};
