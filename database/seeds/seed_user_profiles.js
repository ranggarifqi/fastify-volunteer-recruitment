exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_profiles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_profiles").insert([
        { id: 1, user_id: 1, full_name: "Super Administrator" },
        { id: 2, user_id: 2, full_name: "Administrator" }
      ]);
    });
};
