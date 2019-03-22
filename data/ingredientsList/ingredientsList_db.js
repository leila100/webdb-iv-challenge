const knex = require("knex")
const knexConfig = require("../../knexfile.js")
const db = knex(knexConfig.development)

module.exports = {
  addIngredient
  // update,
  // remove
}

function addIngredient(recipe_id, ingredient_id, qtyValue, qtyUnit) {
  return db("ingredientsList")
    .insert({ recipe_id, ingredient_id, qtyValue, qtyUnit })
    .then(ids => ({ id: ids[0] }))
}
