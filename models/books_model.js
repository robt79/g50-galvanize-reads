const knex = require('../knex');

var bookModel = {
  getBook: function(bookId) {
    return knex('books').where(id, bookId);
  },
  getBooks: function() {
    return knex('books');
  },
  createBook: function(bookObj) {
    return knex('books').insert(bookObj);
  }
}
module.exports = bookModel;
