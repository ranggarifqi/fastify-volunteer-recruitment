exports.up = function(knex, Promise) {
  return knex.schema.table('roles', t => {
    t.datetime('deleted_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('roles', t => {
    t.dropColumn('deleted_at');
  });
};
