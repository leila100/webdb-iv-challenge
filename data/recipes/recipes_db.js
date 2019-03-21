const knex = require("knex")
const knexConfig = require("../../knexfile.js")
const db = knex(knexConfig.development)

module.exports = {
  getRecipes
}

function getRecipes() {
  return db
    .select("recipes.id", "recipes.title", "dishes.dish_name")
    .from("recipes")
    .innerJoin("dishes", "dishes.id", "recipes.dish_id")
}
