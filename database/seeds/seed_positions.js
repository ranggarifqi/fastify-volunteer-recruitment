exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("positions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("positions").insert([
        { id: 1, department_id: 1, name: "Asisten Ustadz" },
        { id: 2, department_id: 1, name: "Admin Group Whatsapp" },
        { id: 3, department_id: 2, name: "Backend Developer" },
        { id: 4, department_id: 2, name: "Frontend Developer" },
        { id: 5, department_id: 2, name: "DevOps" }
      ]);
    });
};
