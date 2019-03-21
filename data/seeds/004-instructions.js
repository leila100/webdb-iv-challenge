exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { description: "Mix all" },
        { description: "Cook Ground Beef" },
        { description: "Add salt" },
        { description: "Add pepper" },
        { description: "Heat oil in pan" },
        { description: "Cook rice" },
        { description: "Cook spaghetti" },
        { description: "Mix the cheeses with eggs" },
        { description: "Cook Chicken" },
        { description: "Make meat balls" },
        { description: "Add tomato sauce" },
        { description: "Cook Chicken" },
        { description: "Layer lasagna pasta with meat then cheese mixture" },
        { description: "Cook in oven" }
      ])
    })
}
