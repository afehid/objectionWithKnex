// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const dotenv = require('dotenv');
const knexSnakeCaseMappers = require('objection');

dotenv.config();

module.exports = {


  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      database: 'objection_tutorial',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
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
