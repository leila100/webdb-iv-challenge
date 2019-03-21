exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Ground Beef" },
        { ingredient_name: "Chicken" },
        { ingredient_name: "Salt" },
        { ingredient_name: "Pepper" },
        { ingredient_name: "Olive Oil" },
        { ingredient_name: "Saffron" },
        { ingredient_name: "Lasagna pasta" },
        { ingredient_name: "Rice" },
        { ingredient_name: "Onion" },
        { ingredient_name: "Tomato sauce" },
        { ingredient_name: "Egg" },
        { ingredient_name: "Ricotta Cheese" },
        { ingredient_name: "Parmesan Cheese" },
        { ingredient_name: "Spaghetti" },
        { ingredient_name: "saffron" }
      ])
    })
}
