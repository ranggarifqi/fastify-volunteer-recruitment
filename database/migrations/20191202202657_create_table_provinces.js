exports.up = function(knex, Promise) {
  return knex.schema.createTable("provinces", t => {
    t.increments("id");
    t.string("name").notNullable();
    t.boolean("status").defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("provinces");
};
