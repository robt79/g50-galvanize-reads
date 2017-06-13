'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id');
    table.string('auth1_firstname').notNullable().defaultTo('');
    table.string('auth1_lastname').notNullable().defaultTo('');
    table.string('auth1_bio').notNullable().defaultTo('');
    table.text('auth1_portrait').notNullable().defaultTo('');
    table.increments('id');
    table.string('auth2_firstname').notNullable().defaultTo('');
    table.string('auth2_lastname').notNullable().defaultTo('');
    table.string('auth2_bio').notNullable().defaultTo('');
    table.text('auth2_portrait').notNullable().defaultTo('');
    table.increments('id');
    table.string('auth3_firstname').notNullable().defaultTo('');
    table.string('auth3_lastname').notNullable().defaultTo('');
    table.string('auth3_bio').notNullable().defaultTo('');
    table.text('auth3_portrait').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors');
};
