exports.up = function(knex, Promise) {
  return knex.schema.createTable('readlist', table => {
    table.varchar('id');
    table.varchar('title');
    table.varchar('author');
    table.integer('releaseYear');
    table.integer('pages');
    table.text('cover');
    table.text('summary');
    table.text('link');
    table.varchar('ISBN')
    table.varchar('media');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('readlist')
};
