// Update with your config settings.

const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'twitter_clone',
      user: 'postgres',
      password: 'lmnopqrst'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: '../db/seeds'
    },
    ...knexSnakeCaseMappers
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    ...knexSnakeCaseMappers
  },
};
