exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_profiles", t => {
    t.increments("id");
    t.integer("user_id").unsigned().notNullable();
    t.string("full_name").notNullable();
    t.string("mobile");
    t.string("gender", 1);
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user_profiles");
};
