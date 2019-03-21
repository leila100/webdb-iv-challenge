exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { dish_name: "Saffron Rice" },
        { dish_name: "Lasagna" },
        { dish_name: "Spaghetti and Meatballs" }
      ])
    })
}
