const express = require('express');
const ejs = require('ejs');
const bookModel = require('../models/books_model');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');

const app = express();

app.set('view engine', 'ejs');

// functions to be used in GET requests
function getBook(id) {
  return knex('books')
    .where('books.id', id);
}

function getAuthorsForBook(bookId) {
  return knex('authors')
    .join('booksandauthors', 'authors.id', 'booksandauthors.auth_id')
    .where('booksandauthors.book_id', bookId);
}

// //Get book info
// function getBook(description) {
//   return knex('books')
//     .where('books.description', description;
//     }

function getBookWithAuthors(bookId) {
  return Promise.all([
    getBook(bookId),
    getAuthorsForBook(bookId),
  ]).then((results) => {
    console.log('book results', JSON.stringify(results));
    const [book, authors] = results;
    // const book = results.book;
    // const authors = results.authors;
    book.authors = authors;
    return book;
  });
}





// GET request for all books from our database
router.get('/books', (_req, res, next) => {
  knex('books')
    .then((books) => {
      res.render('books', {
        books,
      });
    })
    .catch((err) => {
      next(err);
    });
});

// GET request for individual book with author info
router.get('/books/:id', (_req, res, next) => {
  const id = Number.parseInt(_req.params.id);

  getBookWithAuthors(id)

    .then((books) => {
      res.render('books_profiles', {
        books: books
      });
    })

    .catch((err) => {
      next(err);
    });
});

// GET request to populate book edit page using book id/info
router.get('/books/:id/edit', (_req, res, next) => {
  const id = Number.parseInt(_req.params.id);

  getBookWithAuthors(id)

    .then((books) => {
      res.render('books_edit', {
        books,
      });
    })

    .catch((err) => {
      next(err);
    });
});


router.get('/books/add', (_req, res, next) => {
  res.render('books_add')
})




module.exports = router;
