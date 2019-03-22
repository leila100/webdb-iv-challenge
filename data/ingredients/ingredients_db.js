const knex = require("knex")
const knexConfig = require("../../knexfile.js")
const db = knex(knexConfig.development)

module.exports = {
  getIngredients,
  addIngredient,
  getIngredient,
  remove,
  update
}

function getIngredients() {
  return db("ingredients")
}

function addIngredient(ingredient) {
  return db("ingredients")
    .insert(ingredient)
    .then(ids => ({ id: ids[0] }))
}

function getIngredient(id) {
  return db("ingredients")
    .where({ "ingredients.id": Number(id) })
    .first()
}

function remove(id) {
  return db("ingredients")
    .where({ id: Number(id) })
    .del()
}

function update(id, ingredient) {
  return db("ingredients")
    .where({ id: Number(id) })
    .update(ingredient)
}
