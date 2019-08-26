exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',
    function(t) {
      t.string('username').notNull();
      t.string('password').notNull();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
