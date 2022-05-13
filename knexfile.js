// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'catherinev',
    password : '414202312',
    database : 'audrey_hepburn_db'
    } 
  },

  production: {
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'catherinev',
    password : '414202312',
    database : 'audrey_hepburn_db'
    } 
  }

};
