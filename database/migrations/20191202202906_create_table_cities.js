exports.up = function(knex, Promise) {
  return knex.schema.createTable("cities", t => {
    t.increments("id");
    t.integer("province_id")
      .unsigned()
      .notNullable();
    t.string("name").notNullable();
    t.boolean("status").defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cities");
};
