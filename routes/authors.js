const express = require('express');
const ejs = require('ejs');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');

const app = express();

app.set('view engine', 'ejs');

// functions to be used in GET requests
function getAuthor(id) {
  return knex('authors')
    .where('authors.id', id);
}

function getBooksForAuthor(authorId) {
  return knex('books')
    .join('booksandauthors', 'books.id', 'booksandauthors.book_id')
    .where('booksandauthors.auth_id', authorId);
}

function getAuthorWithBooks(authorId) {
  return Promise.all([
    getAuthor(authorId),
    getBooksForAuthor(authorId),
  ]).then((results) => {
    const [author, books] = results;
    author.books = books;
    return author;
  });
}

// GET request for all books from our database
router.get('/authors', (_req, res, next) => {
  knex('authors')
    .then((authors) => {
      res.render('authors', {
        authors: authors
      });
    })
    .catch((err) => {
      next(err);
    });
});

// GET request
// for individual book with author info
router.get('/authors/:id', (_req, res, next) => {
  const id = Number.parseInt(_req.params.id);

  getAuthorWithBooks(id)

    .then((authors) => {
      console.log('author profile', authors);
      res.render('authors_profile', {
        authors,
      });
    })

    .catch((err) => {
      next(err);
    });
});


function createAuthor(authorObj) {

  return knex('authors').insert(authorObj)

}

module.exports = router;
