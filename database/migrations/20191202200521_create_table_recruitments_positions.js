exports.up = function(knex, Promise) {
  return knex.schema.createTable("recruitments_positions", t => {
    t.increments("id");
    t.integer("recruitment_id")
      .unsigned()
      .notNullable();
    t.integer("department_id")
      .unsigned()
      .notNullable();
    t.integer("position_id")
      .unsigned()
      .notNullable();
    t.datetime("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recruitments_positions");
};
