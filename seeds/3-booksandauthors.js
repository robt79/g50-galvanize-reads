exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('booksandauthors').del()
    .then(function() {
      // Inserts seed entries
      return knex('booksandauthors').insert([{
          "book_id": 1,
          "auth_id": 1
        },
        {
          "book_id": 1,
          "auth_id": 2
        },
        {
          "book_id": 1,
          "auth_id": 3
        },
        {
          "book_id": 2,
          "auth_id": 4
        },
        {
          "book_id": 3,
          "auth_id": 5
        },
        {
          "book_id": 4,
          "auth_id": 6
        },
        {
          "book_id": 5,
          "auth_id": 6
        },
        {
          "book_id": 6,
          "auth_id": 6
        }
      ]);
    });
};
