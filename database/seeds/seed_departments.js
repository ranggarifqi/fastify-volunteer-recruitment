exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("departments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("departments").insert([
        { id: 1, name: "Direktorat Bidang Akademik" },
        {
          id: 2,
          name: "Direktorat Bidang Riset, Inovasi, dan Platform Pembelajaran"
        }
      ]);
    });
};
