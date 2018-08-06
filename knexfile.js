// Update with your config settings.

module.exports = {

  development: {
    client: 'PG',
    connection: process.env.DATABASE_URL || 'postgres://localhost/resolution',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/resolution',
    },
};
