const knex = require("knex")
const knexConfig = require("../../knexfile.js")
const db = knex(knexConfig.development)

module.exports = {
  getDishes,
  addDish,
  getDish,
  remove,
  update
}

function getDishes() {
  return db("dishes")
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }))
}

function getDish(id) {
  return db("dishes") //Check to be sure the dish exist
    .where({ "dishes.id": Number(id) })
    .first()
    .then(dish => {
      // Get the list of recipes for the dish - would return the dish even if no recipes
      return db
        .select("recipes.title")
        .from("recipes")
        .where({ dish_id: dish.id })
        .then(recipes => ({ dish: dish, recipes: recipes }))
    })
}

function remove(id) {
  return db("dishes")
    .where({ id: Number(id) })
    .del()
}

function update(id, dish) {
  return db("dishes")
    .where({ id: Number(id) })
    .update(dish)
}
