exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { title: "Mima", dish_id: 1 },
        { title: "From Lasagna Box", dish_id: 2 },
        { title: "Classic", dish_id: 3 },
        { title: "Spanish Rice", dish_id: 1 }
      ])
    })
}
