const express = require('express');
const ejs = require('ejs');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');

const app = express();

app.set('view engine', 'ejs');


router.get('/routes', (_req, res, next) => {
  knex('index')
    .then((index) => {
      res.render('index', {
        index,
      });
    })
    .catch((err) => {
      next(err);
    });
});






// GET request for all books from our database
router.get('/', (_req, res, next) => res.render('index'));

module.exports = router;
