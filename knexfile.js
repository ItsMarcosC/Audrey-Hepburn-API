module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/audrey_hepburn_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
