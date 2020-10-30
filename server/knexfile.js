const { DATABASE_URL, TEST_DATABASE_URL } = require('./config');

module.exports = {
  test: {
    client: 'pg',
    connection: TEST_DATABASE_URL,
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: DATABASE_URL,
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
};
