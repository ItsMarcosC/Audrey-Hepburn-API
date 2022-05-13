exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', table => {
    table.varchar('id');
    table.varchar('title');
    table.integer('year');
    table.varchar('character');
    table.text('cover');
    table.varchar('genre');
    table.text('summary');
    table.text('fact');
    table.varchar('media');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie')
};
