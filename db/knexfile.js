// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexSnakeCaseMappers = require('objection');
const dotenv = require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'objection_tutorial',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },

    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },
};
