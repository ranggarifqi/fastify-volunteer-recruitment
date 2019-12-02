exports.up = function(knex, Promise) {
  return knex.schema.createTable("recruitments", t => {
    t.increments('id');
    t.string('title').notNullable();
    t.string('sub_title').notNullable();
    t.text('description').notNullable();
    t.text('submit_description').notNullable();
    t.datetime('created_at').defaultTo(knex.fn.now());
    t.datetime('start_date').notNullable();
    t.datetime('end_date').notNullable();
    t.boolean('is_active').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recruitments");
};
