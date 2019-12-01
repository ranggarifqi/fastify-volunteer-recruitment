const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          role_id: 1,
          email: "superadmin@ranggarifqi.com",
          password: bcrypt.hashSync("superadmin123", salt)
        },
        {
          id: 2,
          role_id: 2,
          email: "admin@ranggarifqi.com",
          password: bcrypt.hashSync("admin123", salt)
        }
      ]);
    });
};
