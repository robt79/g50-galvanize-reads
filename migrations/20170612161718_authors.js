'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('firstname').notNullable().defaultTo('');
    table.string('lastname').notNullable().defaultTo('');
    table.string('bio').notNullable().defaultTo('');
    table.text('portrait').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors');
};
