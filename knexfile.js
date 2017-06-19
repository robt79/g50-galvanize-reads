'use strict';


module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_reads'

  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_reads_test'
  },

  production: {


  },
};





// module.exports = {
//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/galvanize_reads'
//   }
// };

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/galvanize_reads',
//   },
//   test: {
//     client: 'pg',
//     connection: 'postgres://localhost/reads_test',
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL || 'postgres://localhost/reads_prod',
//   },
// };
