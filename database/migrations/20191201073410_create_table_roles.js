exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", table => {
    table.increments("id");
    table.string("name");
    table.string("description");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("roles");
};
