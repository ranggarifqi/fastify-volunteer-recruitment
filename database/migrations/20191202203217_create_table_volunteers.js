exports.up = function(knex, Promise) {
  return knex.schema.createTable("volunteers", t => {
    t.increments('id');
    t.integer('recruitment_id').unsigned().notNullable();
    t.integer('position_id').unsigned().notNullable();
    t.boolean('is_accepted');
    t.datetime('processed_at');
    t.datetime('created_at').defaultTo(knex.fn.now());
    t.datetime('deleted_at');
    t.string('full_name').notNullable();
    t.integer('province_id').unsigned().notNullable();
    t.integer('city_id').unsigned().notNullable();
    t.string('last_education').notNullable();
    t.enu('gender', ['M', 'F']).notNullable();
    t.string('wa').notNullable();
    t.string('email').notNullable();
    t.string('cv_file_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("volunteers");
};
