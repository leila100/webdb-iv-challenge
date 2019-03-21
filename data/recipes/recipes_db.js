const knex = require("knex")
const knexConfig = require("../../knexfile.js")
const db = knex(knexConfig.development)

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe
}

function getRecipes() {
  return db
    .select("recipes.id", "recipes.title", "dishes.dish_name")
    .from("recipes")
    .innerJoin("dishes", "dishes.id", "recipes.dish_id")
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }))
}

function getRecipe(id) {
  return db
    .select(
      "recipes.id",
      "dishes.dish_name",
      "recipes.title",
      "recipes.instructions"
    )
    .from("dishes")
    .innerJoin("recipes", "dishes.id", "recipes.dish_id")
    .where({ "recipes.id": Number(id) })
    .first()
    .then(recipe => {
      return db
        .select(
          "ingredients.ingredient_name",
          "ingredientsList.qtyValue",
          "ingredientsList.qtyUnit"
        )
        .from("ingredientsList")
        .innerJoin(
          "ingredients",
          "ingredients.id",
          "ingredientsList.ingredient_id"
        )
        .where({ "ingredientsList.recipe_id": Number(recipe.id) })
        .then(ingredients => ({ recipe: recipe, ingredients: ingredients }))
    })
}
