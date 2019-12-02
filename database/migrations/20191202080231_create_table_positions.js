exports.up = function(knex, Promise) {
  return knex.schema.createTable("positions", t => {
    t.increments("id");
    t.integer("department_id").unsigned().notNullable();
    t.string("name").notNullable();
    t.text("description");
    t.datetime("created_at").defaultTo(knex.fn.now());
    t.datetime("updated_at");
    t.datetime("deleted_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("positions");
};
