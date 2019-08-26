
exports.up = function(knex, Promise) {
  return knex.schema.createTable('api_list',
    function(t) {
      t.increments('id').notNull()
      t.string('category').notNull();
      t.string('name').notNull();
      t.string('description').notNull();
      t.string('link').notNull();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('api_list')
};
