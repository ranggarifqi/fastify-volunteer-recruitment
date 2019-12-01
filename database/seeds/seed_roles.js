exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        {
          id: 1,
          name: "Super Administrator",
          description: "Top Level Administrator"
        },
        { id: 2, name: "Administrator", description: "Ordinary Administrator" }
      ]);
    });
};
