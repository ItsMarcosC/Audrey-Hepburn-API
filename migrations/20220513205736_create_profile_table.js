exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', table => {
    table.increments('id');
    table.varchar('stageName');
    table.varchar('birthName');
    table.varchar('birthPlace');
    table.varchar('birthDate');
    table.varchar('dDate');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('profile')
};
