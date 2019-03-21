exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredientsList")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredientsList").insert([
        { ingredient_id: 2, recipe_id: 1, qtyValue: 1, qtyUnit: "pound" },
        { ingredient_id: 3, recipe_id: 1, qtyValue: 1, qtyUnit: "teaspoon" },
        { ingredient_id: 4, recipe_id: 1, qtyValue: 0.5, qtyUnit: "teaspoon" },
        { ingredient_id: 5, recipe_id: 1, qtyValue: 1, qtyUnit: "tablespoon" },
        { ingredient_id: 6, recipe_id: 1, qtyValue: 1.5, qtyUnit: "teaspoon" },
        { ingredient_id: 8, recipe_id: 1, qtyValue: 2, qtyUnit: "cup" },
        { ingredient_id: 1, recipe_id: 2, qtyValue: 1, qtyUnit: "pound" },
        { ingredient_id: 3, recipe_id: 2, qtyValue: 1, qtyUnit: "teaspoon" },
        { ingredient_id: 4, recipe_id: 2, qtyValue: 0.5, qtyUnit: "teaspoon" },
        { ingredient_id: 5, recipe_id: 2, qtyValue: 1, qtyUnit: "tablespoon" },
        { ingredient_id: 7, recipe_id: 2, qtyValue: 1, qtyUnit: "box" },
        { ingredient_id: 10, recipe_id: 2, qtyValue: 1, qtyUnit: "jar" },
        { ingredient_id: 11, recipe_id: 2, qtyValue: 1, qtyUnit: "unit" },
        { ingredient_id: 12, recipe_id: 2, qtyValue: 1, qtyUnit: "cup" },
        { ingredient_id: 13, recipe_id: 2, qtyValue: 2, qtyUnit: "tablespoon" },
        { ingredient_id: 14, recipe_id: 3, qtyValue: 1, qtyUnit: "box" },
        { ingredient_id: 1, recipe_id: 3, qtyValue: 1, qtyUnit: "pound" },
        { ingredient_id: 3, recipe_id: 3, qtyValue: 1, qtyUnit: "teaspoon" },
        { ingredient_id: 4, recipe_id: 3, qtyValue: 0.5, qtyUnit: "teaspoon" },
        { ingredient_id: 5, recipe_id: 3, qtyValue: 1, qtyUnit: "tablespoon" },
        { ingredient_id: 10, recipe_id: 3, qtyValue: 1, qtyUnit: "jar" }
      ])
    })
}
