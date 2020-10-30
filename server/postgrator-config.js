const { DATABASE_URL, TEST_DATABASE_URL } = require('./config');

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  connectionString:
    process.env.NODE_ENV === 'test' ? TEST_DATABASE_URL : DATABASE_URL
};
