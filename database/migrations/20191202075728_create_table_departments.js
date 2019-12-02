exports.up = function(knex, Promise) {
  return knex.schema.createTable("departments", t => {
    t.increments("id");
    t.string("name").notNullable();
    t.text("description");
    t.datetime("created_at").defaultTo(knex.fn.now());
    t.datetime("updated_at");
    t.datetime("deleted_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("departments");
};
